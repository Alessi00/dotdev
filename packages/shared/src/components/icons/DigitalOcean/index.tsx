import React, { ReactElement } from 'react';
import Icon, { IconProps } from '../../Icon';
import WhiteIcon from './white.svg';

const DigitalOceanIcon = (props: IconProps): ReactElement => (
  <Icon {...props} IconPrimary={WhiteIcon} IconSecondary={WhiteIcon} />
);

export default DigitalOceanIcon;
