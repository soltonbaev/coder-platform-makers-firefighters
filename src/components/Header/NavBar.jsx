import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Header/Logo';
import RightSideIcons from './RightSideIcons';
import SearchBox from './SearchBox';
import {Container} from '@mui/system';

const NavBar = () => {
   return (
      <Box
         sx={{
            borderStyle: 'solid',
            borderWidth: '0 0 1px 0 ',
            borderColor: '#D9D9D9',
         }}
      >
         <Container
            maxWidth="lg"
            sx={{
               padding: '0.3rem',
               backgroundColor: 'white',
               //  height: '10vh',
               //  width: '100%',
               boxShadow: 'none',

               // position: 'fixed',
            }}
         >
            <Box sx={{display: 'flex', alignItems: 'center'}}>
               <Logo />
               <SearchBox
                  style={{
                     height: '4vh',
                     width: '30vw',
                     borderColor: 'darkgray',
                     backgroundColor: '#D9D9D9',
                     borderRadius: '0.3rem',
                     paddingLeft: '10%',
                     borderStyle: 'none',
                  }}
                  placeholder="искать вопросы"
               />
               <RightSideIcons />
            </Box>
         </Container>
      </Box>
   );
};

export default NavBar;
