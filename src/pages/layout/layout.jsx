import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

import './layout.scss';

export default function layout() {
  return (
    <section className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>

    </section>
  )
}
