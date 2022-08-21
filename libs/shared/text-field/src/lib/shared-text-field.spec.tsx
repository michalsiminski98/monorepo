import { render } from '@testing-library/react';

import SharedTextField from './shared-text-field';

describe('SharedTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedTextField />);
    expect(baseElement).toBeTruthy();
  });
});
