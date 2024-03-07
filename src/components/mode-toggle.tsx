import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks';
import { Button } from './ui';

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const ThemeIcon = theme === 'dark' ? Sun : Moon;
  const onThemeButtonClick = () => setTheme(theme === 'dark'? 'light' : 'dark');


  return (
    <div>
      <Button size="icon" onClick={onThemeButtonClick}>
        <ThemeIcon />
      </Button>
    </div>
  );
};
