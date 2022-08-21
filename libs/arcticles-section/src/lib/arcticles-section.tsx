import { IArticleCard } from '@./slices/main-content';
import { FC } from 'react';

export interface IArticlesSectionProps {
  cards: IArticleCard[];
}

export const ArticlesSection: FC<IArticlesSectionProps> = ({ cards }) => {
  const createProducts = () => {
    return cards.map(({ name, text }) => {
      return (
        <article>
          <h3>{name}</h3>
          <p>{text}</p>
        </article>
      );
    });
  };

  return <div>{createProducts()}</div>;
};
