import { registerComponent } from 'nornj';
import DatePickerView from 'antd-mobile/lib/date-picker-view/index';
import 'antd-mobile/lib/date-picker-view/style/index';

registerComponent({
  'antm-DatePickerView': DatePickerView
});

export default DatePickerView;