import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ToggleButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ToggleButton
        style={{ border: "none", borderRadius: "1.25rem" }}
        value="check"
        onChange={() => {
          toggleTheme();
        }}
        aria-label="toggle theme"
      >
        {theme === 'light' ? <LightModeIcon style={{ color: "black" }} /> : <NightlightIcon style={{ color: "white" }} />}
      </ToggleButton>
    </>
  );
};

export default ThemeToggleButton;