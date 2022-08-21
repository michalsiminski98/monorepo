import { render } from '@testing-library/react';

import ArticlesFormButtons from './articles-form-buttons';

describe('ArticlesFormButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticlesFormButtons />);
    expect(baseElement).toBeTruthy();
  });
});
