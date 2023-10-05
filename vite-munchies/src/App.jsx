import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>

    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <>
      {!isAuthenticated && (
        <button className="text-3xl font-bold underline" onClick={() => loginWithRedirect()}>Login</button>
      )}

      {isAuthenticated && (
        <>
          <button onClick={() => logoutWithRedirect()}>Logout</button>
        </>
      )}
    </>
  );
}

export default App;

 