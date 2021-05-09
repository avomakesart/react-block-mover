import { render } from '@testing-library/react';
import { Square } from '..';

describe('component/Square', () => {
  const props = {
    top: 100,
    left: 100,
  };

  test('should render the Square component correctly', () => {
    const rendered = render(<Square {...props} />);

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
