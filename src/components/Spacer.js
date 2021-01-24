import styled from 'styled-components';

import theme from '../config/theme';

const Spacer = styled.div`
  width: ${({width}) => theme.spacing[width]};
  height: ${({height}) => theme.spacing[height]};
`;

Spacer.defaultProps = {
  height: 'x2',
  width: 'x2',
};

export default Spacer;
