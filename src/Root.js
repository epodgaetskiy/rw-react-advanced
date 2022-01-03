import { Routes, Route } from 'react-router-dom';
import Start01 from './start/01/01.js';
import Start03 from './start/03/03.js';
import Start04 from './start/04/04.js';
import Start05 from './start/05/05.js';
import Start06 from './start/06/06.js';
import Start07 from './start/07/07.js';

const Root = () => {
  return (
    <Routes>
      <Route path="/start/01.js" element={<Start01 />} />
      <Route path="/start/03.js" element={<Start03 />} />
      <Route path="/start/04.js" element={<Start04 />} />
      <Route path="/start/05.js" element={<Start05 />} />
      <Route path="/start/06.js" element={<Start06 />} />
      <Route path="/start/07.js" element={<Start07 />} />
    </Routes>
  );
}

export default Root;
