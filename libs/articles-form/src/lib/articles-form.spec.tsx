import { render } from '@testing-library/react';

import ArticlesForm from './articles-form';

describe('ArticlesForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticlesForm />);
    expect(baseElement).toBeTruthy();
  });
});
