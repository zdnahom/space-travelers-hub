import { useDispatch, useSelector } from 'react-redux';
import { changeMissionStatus } from '../redux/features/missions/missionsSlice';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  if(error){
    return <div className='error'>Failed to fetch</div>
  }
  return (
    <section className="missions-container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <table className="missions">
            <thead className="mission-table-row">
              <th className="mission-table-header">Mission</th>
              <th className="mission-table-header">Description</th>
              <th className="mission-table-header">Status</th>
              <th className="mission-table-header">{' '}</th>
            </thead>
            {missions.map((mission) => (
              <tbody key={mission.mission_id} className="mission-table-row">
                <td className="mission-table-data">{mission.mission_name}</td>
                <td className="mission-table-data">{mission.description}</td>
                <td className="mission-table-data">
                  <span className={mission.reserved ? 'member' : 'non-member'}>
                    {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
                  </span>
                </td>
                <td className="mission-table-data">
                  <button type="button" className={mission.reserved ? 'leave-button' : 'join-button'} onClick={() => dispatch(changeMissionStatus(mission.mission_id))}>{mission.reserved ? 'Leave Mission' : 'Join Mission'}</button>
                </td>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </section>
  );
};
export default Missions;
