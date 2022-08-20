import { render } from '@testing-library/react';

import MainContentRouting from './main-content-routing';

describe('MainContentRouting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainContentRouting />);
    expect(baseElement).toBeTruthy();
  });
});
