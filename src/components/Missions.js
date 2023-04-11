import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/features/missions/missionsSlice';

const Missions = () => {
  const missions = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <section>
      missions
    </section>
  );
};
export default Missions;
