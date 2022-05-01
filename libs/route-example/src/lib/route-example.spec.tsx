import { render } from '@testing-library/react';

import RouteExample from './route-example';

describe('RouteExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouteExample />);
    expect(baseElement).toBeTruthy();
  });
});
