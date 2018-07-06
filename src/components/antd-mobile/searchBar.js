import { registerComponent } from 'nornj';
import SearchBar from 'antd-mobile/lib/search-bar/index';
import 'antd-mobile/lib/search-bar/style/index';

registerComponent({
  'antm-SearchBar': SearchBar
});

export default SearchBar;