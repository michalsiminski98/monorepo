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

  const createProducts = () => {
    return articleCards.map(({ name, text }) => {
      return (
        <article>
          <h3>{name}</h3>
          <p>{text}</p>
        </article>
      );
    });
  };

  useEffect(() => {
    dispatch(mainContentActions.setArticleCards());
  }, [dispatch]);

  return <StyledContent>{createProducts()}</StyledContent>;
};

export default MainContent;
