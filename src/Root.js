import { Routes, Route } from 'react-router-dom';
import Start01 from './start/01/01.js';

const Root = () => {
  return (
    <Routes>
      <Route path="/start/01.js" element={<Start01 />} />
    </Routes>
  );
}

export default Root;
