import React from 'react';
import { render } from '@testing-library/react';
import SuanchikApp from './SuanchikApp';

test('renders learn react link', () => {
  const { getByText } = render(<SuanchikApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
