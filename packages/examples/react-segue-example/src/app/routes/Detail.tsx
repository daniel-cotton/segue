import { useParams } from 'react-router-dom';

import items from '../constants/items';

export function Detail() {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return null;
  }
  return (
    <div
      data-flip-id={`item-${item.id}`}
      style={{
        background: `url(${item.image}) no-repeat center center / cover`,
        width: '95%',
        height: '300px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        margin: '10px auto',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: '10px 30px'
      }}
    >
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default Detail;
