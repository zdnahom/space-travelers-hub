import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section>
      {reservedRockets.length > 0 ? (
        <div>
          <h2>My Rockets:</h2>
          <ul>
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You haven&apos;t reserved any rockets yet.</p>
      )}
    </section>
  );
};

export default MyProfile;
