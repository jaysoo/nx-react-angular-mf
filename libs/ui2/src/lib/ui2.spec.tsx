import { render } from '@testing-library/react';

import Ui2 from './ui2';

describe('Ui2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui2 />);
    expect(baseElement).toBeTruthy();
  });
});
