import { render } from '@testing-library/react';

import { Loading } from '../../components';

describe('<Loading />', () => {
  it('Renders the <Loading /> component', () => {
    const { container, getByTestId } = render(<Loading src="/images/xxx.png" data-testid="loading" />);

    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});