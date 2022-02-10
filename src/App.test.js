import { render, screen } from '@testing-library/react';
import App from './App';
import CreatePage from './CreatePage';

test('renders learn react link', async () => {
  render(<CreatePage />);
  const linkElement = await screen.findByText(/board/i);
  expect(linkElement).toBeInTheDocument();
});
