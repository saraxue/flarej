import { registerComponent } from 'nornj';
import ActionSheet from 'antd-mobile/lib/action-sheet/index';
import 'antd-mobile/lib/action-sheet/style/index';

registerComponent({
  'antm-ActionSheet': ActionSheet
});

export default ActionSheet;