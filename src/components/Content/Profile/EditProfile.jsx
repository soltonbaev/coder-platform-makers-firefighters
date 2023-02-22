import React, {useContext, useEffect, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {useNavigate, useParams} from 'react-router-dom';
import {updateUser} from '../../../helpers/update';

const EditProfile = () => {
   const {user, setToast, checkAuth} = useGlobalContext();
   const inpData = useRef(user);
   inpData.current.user_photo = '';
   const handleChange = e => {
      if (e.target.name === 'user_photo') {
         console.log(e.target.files[0]);
         inpData.current = {
            ...inpData.current,
            [e.target.name]: e.target.files[0],
         };
      } else {
         inpData.current = {
            ...inpData.current,
            [e.target.name]: e.target.value,
         };
         console.log(inpData.current);
      }
   };
   const navigate = useNavigate();

   const handleSubmit = async () => {
      console.log('userPhoto', inpData.current.user_photo);
      // inpData.current.user_photo = 'inpData.current.user_photo';
      let formData = new FormData();
      formData.append('name', inpData.current.name);
      formData.append('last_name', inpData.current.last_name);
      formData.append('username', inpData.current.username);
      formData.append('github_account', inpData.current.github_account);
      formData.append('telegram_account', inpData.current.telegram_account);
      formData.append('web_site', inpData.current.web_site);
      formData.append('about_me', inpData.current.about_me);
      formData.append('user_photo', inpData.current.user_photo);
      // console.log(formData);

      let updateRes = await updateUser(user.id, formData);
      if (updateRes.name === 'AxiosError') {
         setToast(true, 'error', updateRes.message);
         return;
      }
      await checkAuth();
      setToast(true, 'success', 'Данные успешно сохранены');
      navigate('/my-profile');
   };

   return (
      <>
         {user && (
            <div>
               <Box
                  sx={{
                     margin: '20px',
                  }}
               >
                  <center>
                     <h1>Редактирование профиля</h1>
                  </center>
                  <Box style={{display: 'block'}}>
                     <center>
                        <input
                           style={{
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                           }}
                           className="inp-place"
                           defaultValue={inpData.current.name}
                           type="text"
                           name="name"
                           placeholder="Введите свое имя"
                           onChange={handleChange}
                        />
                     </center>
                     <center>
                        <input
                           className="inp-place"
                           defaultValue={inpData.current.last_name}
                           type="text"
                           onChange={handleChange}
                           name="last_name"
                           placeholder="Введите свою фамилию"
                           style={{
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                           }}
                        />
                     </center>
                     <center>
                        <input
                           className="inp-place"
                           defaultValue={inpData.current.username}
                           type="text"
                           onChange={handleChange}
                           name="username"
                           placeholder="Введите желаемый username"
                           style={{
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                           }}
                        />
                     </center>
                     <center>
                        <input
                           defaultValue={inpData.current.github_account}
                           style={{
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                           }}
                           className="inp-place"
                           type="text"
                           name="github_account"
                           placeholder="Введите ссылку на свой github"
                           onChange={handleChange}
                        />
                     </center>
                     <center>
                        <input
                           className="inp-place"
                           type="text"
                           name="telegram_account"
                           defaultValue={inpData.current.telegram_account}
                           placeholder="Введите свой телеграм"
                           style={{
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                           }}
                           onChange={handleChange}
                        />
                     </center>

                     <center>
                        <input
                           className="inp-place"
                           type="text"
                           name="web_site"
                           defaultValue={inpData.current.web_site}
                           placeholder="Введите адрес своего сайта"
                           style={{
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                           }}
                           onChange={handleChange}
                        />
                     </center>
                     <center>
                        <textarea
                           className="inp-place"
                           type="text"
                           name="about_me"
                           defaultValue={inpData.current.about_me}
                           placeholder="Введите информацию о себе"
                           style={{
                              resize: 'none',
                              minHeight: '5rem',
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                           }}
                           onChange={handleChange}
                        />
                     </center>

                     <center>
                        <input
                           className="inp-place"
                           type="file"
                           name="user_photo"
                           // defaultValue={inpData.current.user_photo}
                           placeholder="imag"
                           style={{
                              backgroundColor: '#AA6800',
                              color: 'white',
                              paddingLeft: '20px',
                              borderStyle: 'none',
                              borderRadius: '7px',
                              alignContent: 'center',
                           }}
                           onChange={handleChange}
                        />
                     </center>
                     <center>
                        <Button
                           onClick={handleSubmit}
                           style={{
                              marginTop: '10px',
                              backgroundColor: '#474747',
                              borderStyle: 'none',
                              borderRadius: '7px',
                              width: '275px',
                              height: '35px',
                              color: '#fffdfd',
                           }}
                        >
                           Cохранить
                        </Button>
                     </center>
                  </Box>
               </Box>
            </div>
         )}
      </>
   );
};

export default EditProfile;
