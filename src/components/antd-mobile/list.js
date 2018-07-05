import { registerComponent } from 'nornj';
import List from 'antd-mobile/lib/list/index';
import 'antd-mobile/lib/list/style/index';

registerComponent({
  'antm-List': List,
  'antm-ListItem': List.Item
});

export default List;