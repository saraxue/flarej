import { registerComponent } from 'nornj';
import Stepper from 'antd-mobile/lib/stepper/index';
import 'antd-mobile/lib/stepper/style/index';

registerComponent({
  'antm-Stepper': Stepper
});

export default Stepper;