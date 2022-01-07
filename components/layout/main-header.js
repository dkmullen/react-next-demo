import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function MainHeader() {
  const router = useRouter();

  function handleItemClick(e, { name }) {
    router.push(name);
  }

  return (
    <Menu>
      <Menu.Item name="/" onClick={handleItemClick}>
        Home
      </Menu.Item>

      <Menu.Item name="/other" onClick={handleItemClick}>
        Other Data
      </Menu.Item>

      <Menu.Item name="/events" onClick={handleItemClick}>
        Upcoming Events
      </Menu.Item>
    </Menu>
  );
}
