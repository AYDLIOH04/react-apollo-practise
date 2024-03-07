import { PageProvider, ThemeProvider } from '@/components/providers';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <PageProvider>{children}</PageProvider>
    </ThemeProvider>
  );
};
