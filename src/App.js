import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import appstore from "./Components/utils/appstore";

function App() {
  return (
    <Provider store={appstore}>
      <div>
        <Header />

        <Body />
      </div>
    </Provider>
  );
}

export default App;
