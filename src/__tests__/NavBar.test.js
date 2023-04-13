import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';

afterEach(cleanup);
describe('Navbar component test', () => {
  it('It renders', () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
