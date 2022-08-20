import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { globalDataSelector } from '@./slices/global';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../i18n';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from 'i18next';
import { RouteExample } from '@./route-example';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { t } = useTranslation();
  const { value } = useSelector(globalDataSelector);

  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route path="/asd" element={<RouteExample />}>
            asd
          </Route>
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
