import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import i18n from 'i18next';
import '../i18n';
import { useTranslation } from 'react-i18next';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  
  const {t} = useTranslation();

  return (
    <StyledApp>
      
      <div>
        {t('is it works')}
      </div>
    </StyledApp>
  );
}

export default App;
