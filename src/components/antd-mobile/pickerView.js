import { registerComponent } from 'nornj';
import PickerView  from 'antd-mobile/lib/picker-view/index';
import 'antd-mobile/lib/picker-view/style/index';

registerComponent({
  'antm-PickerView': PickerView
});

export default PickerView;