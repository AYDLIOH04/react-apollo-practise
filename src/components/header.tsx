import { ModeToggle } from '@/components';
// import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="h-20 bg-secondary">
      <div className='flex flex-row justify-between items-center h-full md:mx-6 mx-4'>
        <nav>
          <ul className="flex flex-row gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {/* <NavLink to={'/'}>Home</NavLink> */}
            {/* <NavLink to={'/about'}>About</NavLink> */}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};
