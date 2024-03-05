import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';
import Logo from './assets/logo.png'
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';




import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.06),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.12),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: alpha(theme.palette.common.black, 0.5)
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.primary,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  


export default function Navbar() {
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src={Logo} alt="logo" style={{ height: "60px" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Button sx={{ fontWeight: 'bold', color: 'black' , ml: 3}}>HOME</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>FEED</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>PANTIP PICK</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>PANTIP HITZ</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>EXPLORE</Button>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button variant="outlined">LOGIN / REGISTER</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}