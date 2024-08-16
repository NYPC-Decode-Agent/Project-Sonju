import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <AppBar sx={{ zIndex: 9999 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'} className="no-underline">Decode Agent</Link>
        </Typography>
        <Button color="inherit">
          <Link className="no-underline" to={'/login'}>Login</Link>
        </Button>
        <Button color="inherit">
          <Link className="no-underline" to={'/signup'}>Join</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
