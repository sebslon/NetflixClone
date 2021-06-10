import { useContext, useEffect, useState } from "react";

import { Header, Loading } from "../components";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header>
        <p>Hello</p>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
