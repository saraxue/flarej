import { registerComponent } from 'nornj';
import Switch from 'element-react/dist/npm/es5/src/switch';
import 'element-theme-default/lib/icon.css';
import 'element-theme-default/lib/switch.css';

registerComponent({
  'el-Switch': Switch
});

export {
  Switch
};

export default Switch;