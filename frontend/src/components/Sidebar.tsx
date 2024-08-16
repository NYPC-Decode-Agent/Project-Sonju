import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}          // Sidebar 열림/닫힘 상태 제어
      onClose={closeSidebar} // Sidebar 외부 클릭 시 닫기
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        {[{ title: 'Home', path: '/home' }, { title: 'About', path: '/about' }].map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={closeSidebar}  // 클릭 시 Sidebar 닫기
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
