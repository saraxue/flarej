import { registerComponent } from 'nornj';
import Calendar from 'antd-mobile/lib/calendar/index';
import 'antd-mobile/lib/calendar/style/index';

registerComponent({
    'antm-Calendar': Calendar
});

export default Calendar;