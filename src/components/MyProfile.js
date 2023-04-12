import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <section className="profile">
      <div>
        <h2 className="profile-headline-text">My Missions</h2>
        {joinedMissions.length > 0 ? (
          <ul className="reserved-items-container">
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id} className="reserved-item">
                <span>{mission.mission_name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div>No Rockets reserved</div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
