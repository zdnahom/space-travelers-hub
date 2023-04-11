import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissions } from "../redux/features/missions/missionsSlice";

const Missions = () => {
  const { missions, isLoading } = useSelector((store) => store.missions);
  console.log(missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
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
              <th></th>
            </tr>
            {missions.map((mission) => (
              <tr>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>Not a member</td>
                <td> <button type="button">Join Mission</button></td>
              </tr>
            ))}
            </table>
        </div>
      )}
    </section>
  );
};
export default Missions;
