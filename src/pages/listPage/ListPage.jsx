import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import { listData } from '../../lib/dummyData';
import './ListPage.scss';

export default function ListPage() {
  const data = listData;
  return (
    <section className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {
            data.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </section>    
  )
};
