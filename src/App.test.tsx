import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the guessing game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/看图猜英雄/i);
  expect(titleElement).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /玩游戏/i })).toHaveAttribute('aria-current', 'page');
});

test('opens the coding tutorials from the navigation', () => {
  const { container } = render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /学编程/i }));

  expect(screen.getByRole('heading', { name: /人生苦短 我用Python/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /一分钟入门编程/i })).toBeInTheDocument();
  expect(screen.getAllByText(/print/).length).toBeGreaterThan(0);
  expect(container.querySelectorAll('.learn-coding-example')).toHaveLength(5);
  expect(container.querySelector('.learn-coding-codeblock code')).toHaveClass('language-python');
});
