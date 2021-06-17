import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import { FirebaseContext } from '../../context/firebase';
import { SignIn } from '../../pages';

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve('Signed in'))
  }))
}

describe('<SignIn />', () => {
  it('Renders the sign in page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@gmail.com' } });
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email address').value).toBe('test@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});