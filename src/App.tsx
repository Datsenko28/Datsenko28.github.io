import "./normalize.scss";
import "./common/users/UsersPage"
import './App.scss';
// import { Footer } from './common/UserSlider';
import { UsersPage } from "./common/users/UsersPage";

function App() {
  return (
    <div className="App">
      <UsersPage/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
