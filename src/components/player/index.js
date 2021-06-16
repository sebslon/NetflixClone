import ReactDOM from 'react-dom';

import { useState, useContext, createContext } from 'react';

import { Container, Button, Overlay, Inner } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...otherProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...otherProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...otherProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer ? ReactDOM.createPortal(
    <Overlay onClick={() => setShowPlayer(false)} {...otherProps} data-testid="player" >
      <Inner>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
      </Inner>
    </Overlay>,
    document.body
  ) : null;
};

Player.Button = function PlayerButton({ ...otherProps }) {
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...otherProps}>
      Play
    </Button>
  );
};