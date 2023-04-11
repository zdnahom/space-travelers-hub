import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserveRocket } from '../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'success' && (
      <>
        {rockets.map((rocket) => (
          <div key={rocket.id}>
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            {rocket.flickr_images.length > 0 && (
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
            )}
            <button type="button" onClick={() => handleReserveRocket(rocket.id)}>Reserve Rocket</button>
          </div>
        ))}
      </>
      )}
      {status === 'rejected' && <div>Failed to load rockets data</div>}
    </div>
  );
};

export default Rockets;
