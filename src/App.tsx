import "./normalize.scss";
import "./common/users/UsersPage"
import './App.scss';
// import { Footer } from './common/UserSlider';
import { Header } from './common/header/';
import { UsersPage } from "./common/users/UsersPage";

function App() {
  return (
    <div className="App">
      <Header title="Users" />
      <UsersPage/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
