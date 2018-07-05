import { registerComponent } from 'nornj';
import Radio from 'antd-mobile/lib/radio/index';
import 'antd-mobile/lib/radio/style/index';

registerComponent({
  'antm-Radio': Radio,
  'antm-RadioItem': Radio.RadioItem
});

export default Radio;