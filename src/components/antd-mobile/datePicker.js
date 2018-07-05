import { registerComponent } from 'nornj';
import DatePicker from 'antd-mobile/lib/date-picker/index';
import 'antd-mobile/lib/date-picker/style/index';

registerComponent({
  'antm-DatePicker': DatePicker
});

export default DatePicker;