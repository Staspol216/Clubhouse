import { IconContext } from "react-icons";
import { globalStyles } from "styles/global";

const App = ({ Component, pageProps }) => (
  <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
    {globalStyles}
    <Component {...pageProps} />
  </IconContext.Provider>
);

export default App;
