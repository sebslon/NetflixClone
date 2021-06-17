import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import { SignUp } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('signed up')) } })
    ),
  })),
};

describe('<SignUp />', () => {
  it('Renders the sign up page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'Test' } });
      await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@gmail.com' } });
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
      fireEvent.click(getByTestId('sign-up'));

      expect(getByPlaceholderText('Email address').value).toBe('test@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});