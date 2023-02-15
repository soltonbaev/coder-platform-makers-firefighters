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
            borderColor: '#1e1e1e50',
         }}
      >
         <Container
            maxWidth="lg"
            sx={{
               backgroundColor: 'white',
               //  height: '10vh',
               //  width: '100%',
               boxShadow: 'none',

               // position: 'fixed',
            }}
         >
            <Box sx={{display: 'flex', alignItems: 'center'}}>
               <Logo />
               <SearchBox />
               <RightSideIcons />
            </Box>
         </Container>
      </Box>
   );
};

export default NavBar;
