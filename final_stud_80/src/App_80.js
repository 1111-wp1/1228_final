import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_80 from './pages/HomePage_80';
import ErrorPage_80 from './pages/ErrorPage_80';
import SharedLayout_80 from './pages/SharedLayout_80';

import P1Page_80 from './pages/midterm_80/P1Page_80';
import P2Page_80 from './pages/midterm_80/P2Page_80';
import P3Page_80 from './pages/midterm_80/P3Page_80';
import P4Page_80 from './pages/midterm_80/P4Page_80';
import P5Page_80 from './pages/midterm_80/P5Page_80';
import P6Page_80 from './pages/midterm_80/P6Page_80';

import F1Page_80 from './pages/midterm_80/F1Page_80';
import F2Page_80 from './pages/midterm_80/F2Page_80';
import F3Page_80 from './pages/midterm_80/F3Page_80';
import F4Page_80 from './pages/midterm_80/F4Page_80';
import F5Page_80 from './pages/midterm_80/F5Page_80';
import BlogsPage_80 from './pages/BlogsPage_80';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_80 />}>
          <Route index element={<HomePage_80 />} />
          <Route path='f1_80' element={<F1Page_80 />} />
          <Route path='f2_80' element={<F2Page_80 />} />
          <Route path='f3_80' element={<F3Page_80 />} />
          <Route path='f4_80' element={<F4Page_80 />} />
          <Route path='f5_80' element={<F5Page_80 />} />
          <Route path='blogs_80' element={<BlogsPage_80 />} />
          <Route path='p1_80' element={<P1Page_80 />} />
          <Route path='p2_80' element={<P2Page_80 />} />
          <Route path='p3_80' element={<P3Page_80 />} />
          <Route path='p4_80' element={<P4Page_80 />} />
          <Route path='p5_80' element={<P5Page_80 />} />
          <Route path='p6_80' element={<P6Page_80 />} />
          <Route path='*' element={<ErrorPage_80 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
