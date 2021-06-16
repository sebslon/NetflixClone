import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Player } from '../../components';

describe('<Player />', () => {
  it('Renders the <Player /> with an example video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    );

    expect(queryByTestId('player')).toBeFalsy();
    userEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    userEvent.click(queryByTestId('player'));

    expect(queryByTestId('player')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
})