import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import LeftBar from '../pages/LeftBar';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = useCallback(
    (newOpen) => () => setOpen(newOpen),
    []
  );

  const drawerContent = (
    <Box sx={{ width: 300, height: '100%', overflow: 'hidden' }} role="presentation">
      <LeftBar width={300} />
    </Box>
  );

  return (
    <>
      <Button
        color="inherit"
        onClick={toggleDrawer(true)}
        aria-label="Open menu drawer"
        sx={{ minWidth: 'auto', padding: 0 }}
      >
        <MenuIcon sx={{ fontSize: 32 }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}
