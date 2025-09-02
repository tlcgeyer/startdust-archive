import "./fonts.css"
import { useState } from "react";

const Navbar = () => {

  const [open, setOpened] = useState(false)
  const handleOnClick = () => {
    setOpened(!open)
  }
  return (
    <nav className="menu">
      <span onClick={handleOnClick}>Love Interest </span>
      {open && (
        <ul>
          <li>Xavier</li>
          <li>Zayne</li>
          <li>Rafayel</li>
          <li>Sylus</li>
          <li>Caleb</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
