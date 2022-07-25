import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { IconContext } from "react-icons";
import { globalStyles } from "../styles/globalStyles.tsx";


const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <IconContext.Provider value={{ style: {verticalAlign: "middle"}}}>
      {globalStyles}
      <Component {...pageProps} />
    </IconContext.Provider>
  </CacheProvider>
);

export default App;
