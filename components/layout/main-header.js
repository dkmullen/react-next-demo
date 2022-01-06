import { Menu } from 'semantic-ui-react';

import classes from './main-header.module.css';

// Needs to work with Link or useRouter
const items = [
  { key: 'home', active: true, name: 'Home', href: '/' },
  { key: 'other-data', name: 'Other Data', href: '/other' },
  { key: 'events', name: 'Upcoming Events', href: '/events' },
];

const MenuExampleProps = () => <Menu items={items} />;

export default function MainHeader() {
  return (
    <div>
      <div>{MenuExampleProps()}</div>
    </div>
  );
}
