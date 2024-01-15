import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

describe('<Footer />', () => {
  test('renders the text', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footerText = screen.getByText(/hello/i);
    expect(footerText).toBeInTheDocument();
  });
});