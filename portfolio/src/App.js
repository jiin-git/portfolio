import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import ThanksFor from './pages/thanksfor';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/thanksfor" element={<ThanksFor/>}/>
    </Routes>
  );
}

export default App;
