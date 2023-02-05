import { Link } from 'react-router-dom';

import items from '../constants/items';

export function Home() {
  return (
    <main style={{
      width: '90%',
      maxWidth: 1150,
      margin: '0 auto',
    }}>
      <h1>Locations</h1>
      {items.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <div
            data-flip-id={`item-${item.id}`}
            style={{
              background: `url(${item.image}) no-repeat center center / cover`,
              width: 300,
              height: '100px',
              color: '#fff',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '10px 20px',
              borderRadius: '10px',
              margin: '10px',
            }}
          >
            <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default Home;
