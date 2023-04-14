import { render, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import MyProfile from '../components/MyProfile';

afterEach(cleanup);
const mockStore = configureMockStore();
const store = mockStore({
  rockets: {
    rockets: [
      {
        id: '1',
        image: 'https://i.imgur.com/DaCfMsj.jpg',
        name: 'Falcon 1',
        description: 'The first rocket',
        reserved: false,
      },
      {
        id: '2',
        image: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        name: 'Falcon 9',
        description: 'The second rocket',
        reserved: false,
      },
    ],
  },
  missions: {
    missions: [
      {
        mission_id: '1',
        mission_name: 'Thaicom',
        description: 'The first mission',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Telstar',
        description: 'The second mission',
        reserved: false,
      },
    ],
    isFetched: false,
  },
});
describe('MyProfile component test', () => {
  it('It renders', () => {
    const { container } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
