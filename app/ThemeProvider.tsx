'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { setTheme } from './features/uiSlice';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize theme on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';
    
    // Apply theme class to document immediately
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
    
    if (initialTheme !== theme) {
      dispatch(setTheme(initialTheme));
    }
  }, [dispatch, theme]);

  useEffect(() => {
    if (mounted) {
      // Update document class when theme changes
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

