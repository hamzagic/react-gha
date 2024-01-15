import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('renders the logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByText(/techfran/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders the links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const contactLink = screen.getByText(/contact/i);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});