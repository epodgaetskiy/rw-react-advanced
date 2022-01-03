import { Routes, Route } from 'react-router-dom';
import Start01 from './start/01/01.js';
import Start03 from './start/03/03.js';
import Start04 from './start/04/04.js';

const Root = () => {
  return (
    <Routes>
      <Route path="/start/01.js" element={<Start01 />} />
      <Route path="/start/03.js" element={<Start03 />} />
      <Route path="/start/04.js" element={<Start04 />} />
    </Routes>
  );
}

export default Root;
