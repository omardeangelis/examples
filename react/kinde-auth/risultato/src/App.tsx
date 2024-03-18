import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { InnerApp } from "./InnerApp";

function App() {
  return (
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
      redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
    >
      <InnerApp />
    </KindeProvider>
  );
}

export default App;
