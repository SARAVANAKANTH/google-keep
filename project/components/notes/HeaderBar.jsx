import React from 'react'
import { AppBar, Toolbar, Typography, IconButton,SearchOutlined as Search } from '@mui/material';
import { Menu} from '@mui/icons-material';
import { styled,alpha} from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SearchAppBar from '../HeaderBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`


const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`

const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>Keep</Heading>
          <AddIcon className="plus_sign"/>
      </Toolbar>
    </Header>
  )
}
export default HeaderBar;