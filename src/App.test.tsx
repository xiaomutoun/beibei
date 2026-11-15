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
  expect(container.querySelector('.learn-coding-quiz-codeblock')).toHaveTextContent('<填空1>');
  expect(screen.getAllByText(/print/).length).toBeGreaterThan(0);
  expect(container.querySelectorAll('.learn-coding-example')).toHaveLength(5);
  expect(container.querySelector('.learn-coding-codeblock code')).toHaveClass('language-python');
  expect(screen.getByRole('textbox', { name: /填空 1/i })).toBeInTheDocument();
  expect(screen.getAllByRole('textbox')).toHaveLength(5);
});

test('requires all five answers and reports whether they are correct', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /学编程/i }));
  fireEvent.click(screen.getByRole('button', { name: /检查答案/i }));
  expect(screen.getByText(/请填写全部 5 个空/i)).toBeInTheDocument();

  const inputs = screen.getAllByRole('textbox');
  ['2020', 'EDG', '2022', 'BLG', 'wrong'].forEach((answer, index) => {
    fireEvent.change(inputs[index], { target: { value: answer } });
  });
  fireEvent.click(screen.getByRole('button', { name: /检查答案/i }));
  expect(screen.getByText('Think again!')).toBeInTheDocument();

  fireEvent.change(inputs[4], { target: { value: 'T1' } });
  fireEvent.click(screen.getByRole('button', { name: /检查答案/i }));
  expect(screen.getByText('Congratulations! All answers are correct!')).toBeInTheDocument();
});
