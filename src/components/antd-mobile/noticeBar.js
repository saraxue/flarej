import { registerComponent } from 'nornj';
import NoticeBar from 'antd-mobile/lib/notice-bar/index';
import 'antd-mobile/lib/notice-bar/style/index';

registerComponent({
  'antm-NoticeBar': NoticeBar
});

export default NoticeBar;