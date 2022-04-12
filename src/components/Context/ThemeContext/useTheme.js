import { useContext } from 'react';
import { ThemeContext } from './ThemePrivider';

const useTheme = () => {
    return useContext(ThemeContext)
};

export default useTheme;