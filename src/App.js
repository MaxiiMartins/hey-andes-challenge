import { Route,Navigate, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import TableDetail from './components/Table/TableDetail';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/empresas' element={<Home/>} />
      <Route path='/empresas/:nombre_empresa'element={ <TableDetail/> }/>
      <Route path='*' element={<Navigate to="/empresas" />}/>
    </Routes>
    </>
  );
}

export default App;
