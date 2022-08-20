import { MainContent } from '@./main-content';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const MainContentRouting: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </main>
  );
};
