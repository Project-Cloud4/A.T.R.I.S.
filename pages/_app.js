import "../styles/globals.css";
import { configureAbly } from "@ably-labs/react-hooks";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    configureAbly({ key: process.env.NEXT_PUBLIC_ABLY_API_KEY });
    setConnected(true);
  }, []);

  return <>{connected ? <Component {...pageProps} /> : "connecting...."}</>;
}

export default MyApp;
