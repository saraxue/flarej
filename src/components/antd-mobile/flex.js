﻿import { registerComponent } from 'nornj';
import Flex from 'antd-mobile/lib/flex/index';
import 'antd-mobile/lib/flex/style/index';

registerComponent({
  'antm-Flex': Flex,
  'antm-FlexItem': Flex.Item
});

export default Flex;