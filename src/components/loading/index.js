import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading";
import { publicURL } from "../../constants";

export default function Loading({ src, ...otherProps }) {
  return (
    <Spinner {...otherProps}>
      <LockBody />
      <Picture src={`${publicURL}/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
