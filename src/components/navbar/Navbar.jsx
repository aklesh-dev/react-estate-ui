import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <section className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Izumi Estate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>

      </section>

      <section className="right">
        <a href="">Sign In</a>
        <a href="" className="register">Sign Up</a>

        <div className="menuIcon">
          <img src="/menu.png" alt="hamburgerIcon" onClick={() => setOpenMenu((prev) => !prev)} />
        </div>

        <div className={openMenu ? 'menu active' : 'menu'}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
        </div>
      </section>
    </nav>
  )
};
