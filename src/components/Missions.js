import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/features/missions/missionsSlice';

const Missions = () => {
  const { missions, isLoading } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  return (
    <section>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <table>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{' '}</th>
            </tr>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>{mission.isMember ? 'Active Member' : 'Not A Member'}</td>
                <td>
                  <button type="button" onClick={() => dispatch(joinMission(mission.mission_id))}>{mission.isMember ? 'Leave Mission' : 'Join Mission'}</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </section>
  );
};
export default Missions;
