import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ToggleButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
        <ToggleButton
            style={{border:"none", borderRadius:"1.25rem"}}
            value="check"
            onChange={() => {
                toggleTheme();
            }}
        >
            {theme === 'light' ? <LightModeIcon style={{color:"black"}} /> : <NightlightIcon  style={{color: "white"}}/>}
        </ToggleButton>
    </>
  );
};

export default ThemeToggleButton;