import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectPPM from './Personal_Projects/ProjectPPM';
import NavBar from './NavBar';
import Projects from './ProjectsPage';
import Home from './Home';
import UnfinishedPage from './Personal_Projects/UnfinishedPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/Projects/ProjectPPM' element={<ProjectPPM /> } />
        <Route path='/Projects/unfinishedPage' element={<UnfinishedPage /> } />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/AboutMe' element={ <Home section='AboutMe' /> }/>
        <Route path='/ContactMe' element={ <Home section='ContactMe' /> }/>
        <Route path='/' element={ <Home section='Title'/> } />
      </Routes>
    </Router>
  )
}

/**  TODO 
 * - Project dropdown on hover and go to project page on click
 * - page for projects (maybe make template and add info to project object, pictures may be an issue)
 * - off canvas nav for mobile?
 * - dark mode? use filter in css and apply invert to imgs, lower brightness of paint pots, change body background to dark colour
*/

export default App;
