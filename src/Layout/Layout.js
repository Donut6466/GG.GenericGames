import '../App.css';
import OffcanvasExample from '../propsbt/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return (<div className="App">
    <OffcanvasExample/>
    <Outlet/>
  </div>)
}