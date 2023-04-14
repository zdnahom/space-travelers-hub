import { useSelector, useDispatch } from 'react-redux';
import { rocketStatus } from '../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  return (
    <div className="rockets-container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {rockets.map((rocket) => (
            <div key={rocket.id} className="rockets">
              <img src={rocket.image} alt={rocket.name} />
              <div className="rockets-description">
                <h2>{rocket.name}</h2>
                <div className="reserved-para">
                  <span className={rocket.reserved ? 'reserved' : ''}>
                    {rocket.reserved ? 'Reserved' : ''}
                  </span>
                  <p className="rocket-para">{rocket.description}</p>
                </div>
                <button
                  type="button"
                  className={rocket.reserved ? 'cancel-reservation' : 'reserve-rocket'}
                  onClick={() => dispatch(rocketStatus(rocket.id))}
                >
                  {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rockets;
