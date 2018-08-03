import { registerComponent } from 'nornj';
import Input from 'element-react/dist/npm/es5/src/input';
import 'element-theme-default/lib/icon.css';
import 'element-theme-default/lib/input.css';

registerComponent({
  'el-Input': Input
});

export {
  Input
};

export default Input;