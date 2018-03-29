import { registerComponent } from 'nornj';
import Radio from 'element-react/dist/npm/es5/src/radio';
import 'element-theme-default/lib/icon.css';
import 'element-theme-default/lib/radio.css';

registerComponent({
  'el-Radio': Radio
});

export {
  Radio
};

export default Radio;