import { render } from '@testing-library/react';
import { Button } from '..';

describe('component/Button', () => {
  const props = {
    direction: 'top',
    onClick: () => 10,
  };

  test('should render the Button correctly', () => {
    const rendered = render(<Button {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
