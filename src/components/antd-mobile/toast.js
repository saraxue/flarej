import { registerComponent } from 'nornj';
import Toast from 'antd-mobile/lib/toast/index';
import 'antd-mobile/lib/toast/style/index';

registerComponent({
  'antm-Toast': Toast
});

export default Toast;