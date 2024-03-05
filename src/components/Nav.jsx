import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BootstrapIcon from '../assets/Bootstrap_logo.svg.png';
import { useNavigate } from 'react-router-dom';



export default function NavBar() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box
            component="img"
            sx={{
              height: 40,
              ml: 5,
              mr: 2,
            }}
            alt="Bootstrap icon"
            src={BootstrapIcon}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 800 }}>
            My CRM
          </Typography>
           {location.pathname === '/' && (
            <Button color="inherit" href="/resultreport">TABLE</Button>
          )}
           {location.pathname === '/resultreport' && (
            <Button color="inherit" href="/">REPORT</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
