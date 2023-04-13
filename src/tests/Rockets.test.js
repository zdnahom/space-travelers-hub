import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom';
import Rockets from '../components/Rockets';

afterEach(cleanup);

describe('Rockets component test', () => {
  it('It renders', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
