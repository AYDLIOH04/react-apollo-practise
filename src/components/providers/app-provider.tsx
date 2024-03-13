import { client } from '@/apollo';
import { PageProvider, ThemeProvider } from '@/components/providers';
import { ApolloProvider } from '@apollo/client';

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <PageProvider>{children}</PageProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};
