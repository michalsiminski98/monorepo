import { render } from '@testing-library/react';

import ArcticlesSection from './arcticles-section';

describe('ArcticlesSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArcticlesSection />);
    expect(baseElement).toBeTruthy();
  });
});
