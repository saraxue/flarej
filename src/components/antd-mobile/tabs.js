import { registerComponent } from 'nornj';
import Tabs from 'antd-mobile/lib/tabs/index';
import 'antd-mobile/lib/tabs/style/index';

registerComponent({
  'antm-Tabs': Tabs,
  'antm-TabsPane': Tabs.TabPane
});

export default Tabs;