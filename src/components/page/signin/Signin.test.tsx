import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signin from './Signin';

describe('Sign in page :', () => {
  test('sign in title should be rendered', () => {
    render(<Signin />);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Sign in');
  });
  test('sign in subtitle should be rendered', () => {
    render(<Signin />);
    expect(screen.getByText('Stay updated on your professional world')).toBeInTheDocument();
  });
  test('email label should be rendered', () => {
    render(<Signin />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
  test('password label should be rendered', () => {
    render(<Signin />);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
  test('email input should be rendered', () => {
    render(<Signin />);
    expect(screen.getByTestId('email')).toBeInTheDocument();
  });
  test('password input should be rendered', () => {
    render(<Signin />);
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });
  test('button submit should be rendered', () => {
    render(<Signin />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Sign In');
  });
});
