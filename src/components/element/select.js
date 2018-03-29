import { registerComponent } from 'nornj';
import Select from 'element-react/dist/npm/es5/src/select';
import 'element-theme-default/lib/icon.css';
import 'element-theme-default/lib/select.css';

registerComponent({
  'el-Select': Select
});

export {
  Select
};

export default Select;