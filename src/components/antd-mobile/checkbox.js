import { registerComponent } from 'nornj';
import Checkbox from 'antd-mobile/lib/checkbox/index';
import 'antd-mobile/lib/checkbox/style/index';

registerComponent({
  'antm-Checkbox': Checkbox,
  'antm-CheckboxItem': Checkbox.CheckboxItem,
  'antm-CheckboxAgreeItem': Checkbox.AgreeItem
});

export default Checkbox;