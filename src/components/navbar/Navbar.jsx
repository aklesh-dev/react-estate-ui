import "./navbar.scss";

export default function Navbar() {
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
        </section>
    </nav>
  )
};
