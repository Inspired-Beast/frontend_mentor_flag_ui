import './index.css';
import Flag from './components/Flag';
import Head from './components/Head';
import {Route, Routes} from 'react-router-dom';
import SingleFlag from './components/SingleFlag';

function App() {
  return (
    <>
    <div className="app">
      <Head />
      <Routes>
      <Route exact path='/' element={<Flag />} />
      <Route path='/country/:name' element={<SingleFlag />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
