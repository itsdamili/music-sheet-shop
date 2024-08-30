import React from 'react';
import { render } from '@testing-library/react';
import { Global } from '@emotion/react';
import { globalStyles } from './globalStyles';

describe('Global Styles', () => {
  it('should apply global styles correctly', () => {
    const { container } = render(<Global styles={globalStyles} />);
    expect(container).toMatchSnapshot();
  });
});