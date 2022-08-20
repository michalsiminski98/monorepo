import { MainContentRouting } from '@./main-content-routing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route path='/' element={<MainContentRouting/>}/>
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
