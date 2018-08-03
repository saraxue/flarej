import { registerComponent } from 'nornj';
import ImagePicker from 'antd-mobile/lib/image-picker/index';
import 'antd-mobile/lib/image-picker/style/index';

registerComponent({
  'antm-ImagePicker': ImagePicker
});

export default ImagePicker;