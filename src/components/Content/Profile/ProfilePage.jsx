import {Avatar, Box, Button, Grid, Typography} from '@mui/material';
import {Container} from '@mui/system';
import React, {useState} from 'react';

import {Link, useNavigate} from 'react-router-dom';
import Tg from '../Profile/tg.svg';
import Git from '../Profile/git.svg';
import ImgLink from '../Profile/imgLink.svg';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import Activity from './Activity';
import Statistics from './Statistics';
import Saved from './Saved';
const ProfilePage = () => {
   const [profileSection, setProfileSection] = useState('statistics');

   const {user} = useGlobalContext();
   const navigate = useNavigate();
   return (
      <>
         {user && (
            <Container
               maxWidth="lg"
               sx={{marginTop: '2rem', minHeight: '60vh'}}
            >
               <Grid
                  className="userProfile_container"
                  container
                  spacing={3}
                  // sx={{gap: '2rem'}}
               >
                  <Grid
                     className="left-sidebar"
                     item
                     sm={3}
                     md={3}
                     lg={3}
                     sx={{
                        backgroundColor: 'rgb(217 217 217)',
                        borderRadius: '0.3rem',
                        paddingBottom: '2rem',
                        paddingRight: '2rem',
                        maxHeight: '300px',
                     }}
                  >
                     {/* <Grid item> */}
                     <h3> Уголок Пользователя</h3>

                     {/* <Grid
                           sx={{
                              display: 'flex',
                              // textAlign: "center",
                              flexDirection: 'column',
                              // rowGap: '15px',
                              color: '#b0761b',
                           }}
                        > */}
                     <Link
                        onClick={() => {
                           setProfileSection('statistics');
                        }}
                     >
                        <Typography
                           sx={{
                              color: '#b0761b',
                           }}
                        >
                           Профиль
                        </Typography>
                     </Link>
                     <Link
                        onClick={() => {
                           setProfileSection('activity');
                        }}
                     >
                        <Typography
                           sx={{
                              color: '#b0761b',
                           }}
                        >
                           Активность
                        </Typography>
                     </Link>
                     <Link
                        onClick={() => {
                           setProfileSection('saved');
                        }}
                     >
                        <Typography
                           sx={{
                              color: '#b0761b',
                           }}
                        >
                           Избранное
                        </Typography>
                     </Link>
                     <Link to="/editProfile">
                        <Typography
                           sx={{
                              color: '#b0761b',
                           }}
                        >
                           Настройки
                        </Typography>
                     </Link>
                     {/* </Grid> */}
                  </Grid>
                  {/* <Grid item sx={{}}>
                        <h3> Мои Группы</h3>
                        <Link>
                           <Typography
                              sx={{
                                 color: '#b0761b',
                              }}
                           >
                              Линуксоиды
                           </Typography>
                        </Link>
                        <Link>
                           <Typography
                              sx={{
                                 color: '#b0761b',
                              }}
                           >
                              JS28
                           </Typography>
                           <Link>
                              <Typography
                                 sx={{
                                    color: '#b0761b',
                                 }}
                              >
                                 Py24
                              </Typography>
                           </Link>
                        </Link>
                        <Link>
                           <Typography
                              sx={{
                                 color: '#b0761b',
                              }}
                           >
                              Hackers
                           </Typography>
                        </Link>
                        <Link>
                           <Typography
                              sx={{
                                 color: '#b0761b',
                              }}
                           >
                              MAckers Mentors
                           </Typography>
                        </Link>
                        <Link>
                           <Typography
                              sx={{
                                 color: '#b0761b',
                              }}
                           >
                              Programmers
                           </Typography>
                        </Link>
                        <Link>
                           <Typography
                              sx={{
                                 color: '#b0761b',
                              }}
                           >
                              Git Rockstars
                           </Typography>
                        </Link>
                        <Link>
                           <Typography
                              sx={{
                                 color: '#474747',
                                 // marginTop: '2rem',
                              }}
                           >
                              Показать все группы...
                           </Typography>
                        </Link>
                     </Grid> */}
                  {/* </Grid> */}
                  <Grid
                     className="right-column"
                     item
                     sm={9}
                     md={9}
                     lg={9}
                     sx={
                        {
                           // marginTop: '1.5rem',
                        }
                     }
                  >
                     <Grid
                        item
                        sx={{
                           display: 'flex',
                           gap: '2rem',
                           alignItems: 'center',
                        }}
                     >
                        <Grid item>
                           <Avatar
                              sx={{width: '10rem', height: '10rem'}}
                              alt={user.username}
                              src={user.user_photo}
                           />
                        </Grid>
                        <Grid item>
                           <Grid item>
                              <Grid
                                 item
                                 sx={{
                                    display: 'flex',
                                    gap: '2rem',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                 }}
                              >
                                 <h1 style={{padding: '0', margin: '0'}}>
                                    {user.name} {user.last_name}
                                 </h1>

                                 <Button
                                    onClick={() => navigate('/editProfile')}
                                    sx={{
                                       height: '2rem',
                                       color: '#474747',
                                       border: '1px solid #474747',
                                       borderRadius: '5px',
                                       alignSelf: 'flex-end',
                                    }}
                                 >
                                    Редактировать профиль
                                 </Button>
                              </Grid>
                              <Typography>@{user.username}</Typography>
                           </Grid>

                           <Typography
                              sx={{
                                 color: '#AA6800',
                              }}
                           >
                              Участник c {user.date_joined} года
                           </Typography>

                           <Box
                              sx={{
                                 display: 'flex',
                              }}
                           >
                              <Typography>Статус:</Typography>
                              <Typography sx={{color: '#004605'}}>
                                 {user.is_fireman && 'пожарный'}{' '}
                                 {user.is_mentor && 'ментор'}
                              </Typography>
                           </Box>
                           <Box
                              sx={
                                 {
                                    //  marginTop: '0.5rem',
                                 }
                              }
                           >
                              <Link to={`/${user.telegram_account}`}>
                                 <img src={Tg} />
                              </Link>
                              <Link to={`/${user.github_account}`}>
                                 <img
                                    src={Git}
                                    style={{marginLeft: '0.5rem'}}
                                 />
                              </Link>
                              <Link to={`/${user.web_site}`}>
                                 <img
                                    src={ImgLink}
                                    style={{marginLeft: '0.5rem'}}
                                 />
                                 {user.web_site}
                              </Link>
                           </Box>
                        </Grid>
                     </Grid>
                     <Grid item>
                        {profileSection === 'statistics' && (
                           <Statistics aboutMe={user.about_me} />
                        )}
                        {profileSection === 'activity' && <Activity userId />}
                        {profileSection === 'saved' && <Saved />}
                     </Grid>
                  </Grid>
               </Grid>
            </Container>
         )}
      </>
   );
};

export default ProfilePage;
