import SearchBar from '../../components/searchBar/SearchBar';
import './Home.scss';

export default function Home() {
  return (
    <section className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Home </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil fugiat! Facere nesciunt, hic non rerum quia aperiam omnis, eaque veritatis in praesentium at cum maiores repellendus debitis ullam ex.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="background image" />
      </div>
    </section>
  )
};

