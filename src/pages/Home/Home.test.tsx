import { render } from '@testing-library/react';
import App from '..';

test('renders the main page correctly', () => {
  const rendered = render(<App />);
  expect(rendered.baseElement).toBeInTheDocument();
});
