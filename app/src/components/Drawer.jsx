import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import LeftBar from '../pages/LeftBar';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 230, height: "100%", overflow: "hidden" }} role="presentation" >
      < LeftBar width = {230} />
    </Box>
  );

  return (
    <div>
      <Button style={{color: "white"}} onClick={toggleDrawer(true)}><MenuIcon style={{fontSize: "2rem"}} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}