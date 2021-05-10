import React from "react";
import { Menu } from "semantic-ui-react";

const NavigationBar = () => {
  return (
    <Menu pointing secondary>
      <Menu.Item icon="home" name="home" href="/somelink" />
      <Menu.Item icon="shopping bag" name="shopping list" href="/somelink" />
      <Menu.Item icon="address book" name="contact" href="/somelink" />
    </Menu>
  );
};

export default NavigationBar;
