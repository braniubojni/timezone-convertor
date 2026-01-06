import type { FC } from 'react';
import { Wrapper } from './styles';
import { CardsHeader } from './CardsHeader';
import { Cards } from './Cards';

export const Main: FC = () => {
  return (
    <Wrapper>
      <CardsHeader />
      <Cards />
    </Wrapper>
  );
};
