import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const { missions } = useSelector((store) => store.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <section>
     <div>
        <h2 className="profile-headline-text">My Missions</h2>
        {joinedMissions.length > 0 ? (
          <ul className="reserved-items-container">
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id} className="reserved-item">
                <span className="reserved-item-name">{mission.mission_name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-reserved">You haven&apos;t joined any missions yet.</div>
        )}
      </div>
      <div>
        <h2 className="profile-headline-text">My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <ul className="reserved-items-container">
            {reservedRockets.map((rocket) => (
              <li key={rocket.id} className="reserved-item">
                <span className="reserved-item-name">{rocket.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-reserved">You haven&apos;t reserved any rockets yet.</div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
