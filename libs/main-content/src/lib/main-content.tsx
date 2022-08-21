import { ArticlesSection } from '@./arcticles-section';
import {
  mainContentActions,
  mainContentDataSelector,
} from '@./slices/main-content';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledContent } from './main-content-styles';

export const MainContent: FC = () => {
  const { articleCards } = useSelector(mainContentDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainContentActions.setArticleCards());
  }, [dispatch]);

  return (
    <StyledContent>
      <ArticlesSection cards={articleCards} />
    </StyledContent>
  );
};
