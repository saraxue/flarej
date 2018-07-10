import { registerComponent } from 'nornj';
import PullToRefresh from 'antd-mobile/lib/pull-to-refresh/index';
import 'antd-mobile/lib/pull-to-refresh/style/index';

registerComponent({
  'antm-PullToRefresh': PullToRefresh
});

export default PullToRefresh;