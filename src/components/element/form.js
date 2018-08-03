import { registerComponent } from 'nornj';
import Form from 'element-react/dist/npm/es5/src/form';
import 'element-theme-default/lib/icon.css';
import 'element-theme-default/lib/form.css';
import 'element-theme-default/lib/form-item.css';

registerComponent({
  'el-Form': Form
});

export {
  Form
};

export default Form;