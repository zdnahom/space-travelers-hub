import React from 'react';
import { useSelector } from 'react-redux';
import { selectReservedRockets } from '../redux/features/rockets/rocketsSlice';

const MyProfile = () => {
  const reservedRockets = useSelector(selectReservedRockets);
  return (
    <section>
      <h2>My Rockets</h2>
      {reservedRockets.length > 0 ? (
        <div>
          {reservedRockets.map((rocket) => (
            <div key={rocket.id}>
              <p>{rocket.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No Rockets reserved</div>
      )}
    </section>
  );
};

export default MyProfile;
