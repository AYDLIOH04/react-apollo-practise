import { ModeToggle } from '@/components';
import { headerLinks } from '@/constants/header-links';
import { cn } from '@/lib/utils';
import { HeaderLinkType } from '@/types';
import { NavLink } from 'react-router-dom';

const HeaderLink = (link: HeaderLinkType) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          cn(
            'relative after:absolute after:h-0.5 after:rounded-md after:w-full after:-bottom-1 after:left-0 hover:after:bg-primary after:duration-300 duration-300',
            { 'text-rose-500 hover:after:bg-rose-500': isActive }
          )
        }
      >
        {link.label}
      </NavLink>
    </li>
  );
};

export const Header = () => {
  return (
    <header className="h-20 bg-secondary">
      <div className="flex flex-row justify-between items-center h-full md:mx-6 mx-4">
        <nav>
          <ul className="flex flex-row gap-4">
            {headerLinks.map((link) => (
              <HeaderLink key={link.path} {...link} />
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};
