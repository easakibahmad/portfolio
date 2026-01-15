import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  activeSection: string;
  theme: 'light' | 'dark';
}

const initialState: UiState = {
  activeSection: 'home',
  theme: 'dark',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.theme);
        document.documentElement.classList.toggle('light', state.theme === 'light');
        document.documentElement.classList.toggle('dark', state.theme === 'dark');
      }
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
        document.documentElement.classList.toggle('light', action.payload === 'light');
        document.documentElement.classList.toggle('dark', action.payload === 'dark');
      }
    },
  },
});

export const { setActiveSection, toggleTheme, setTheme } = uiSlice.actions;
export default uiSlice.reducer;


