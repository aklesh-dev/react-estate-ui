import { Link } from 'react-router-dom';
import './card.scss';

export default function Card({ item }) {
  return (
    <section className="card">
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer"></div>
    </section>
  )
}
