import { Header } from '@/components';

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};
