import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/auth/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
