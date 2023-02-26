
import './App.css';
import Navbar from "./project/Navbar/Navbar";
import Profile from "./project/Profile/Profile";
import Header from "./project/Header/Header";
import Dialogs from "./project/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";




function App(p) {

  return (
    <div className='CreateApp'>
      <Header/>
      <Navbar/>
        <div className='CreateApp-content'>
        <Routes>
      <Route path='/profile' element={<Profile state={p.state.ProfilePage}/>}/>
      <Route path='/dialogs' element={<Dialogs state={p.state.DialogsPage}/>}/>
        </Routes>
        </div>
    </div>

  );
};

export default App;
