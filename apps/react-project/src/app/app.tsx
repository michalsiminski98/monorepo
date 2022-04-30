import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { globalDataSelector } from '@./slices/global';
import '../i18n';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from 'i18next';
import { useEffect } from 'react';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { t } = useTranslation();
  const { value } = useSelector(globalDataSelector);

  return (
    <StyledApp>
      <div>{t('shared.isItWorks')}</div>
      <div>{value}</div>
    </StyledApp>
  );
}

export default App;
