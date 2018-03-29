import { registerComponent } from 'nornj';
import Checkbox from 'element-react/dist/npm/es5/src/checkbox';
import 'element-theme-default/lib/icon.css';
import 'element-theme-default/lib/checkbox.css';

registerComponent({
  'el-Checkbox': Checkbox
});

export {
  Checkbox
};

export default Checkbox;