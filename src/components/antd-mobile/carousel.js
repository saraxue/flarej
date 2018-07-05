import { registerComponent } from 'nornj';
import Carousel from 'antd-mobile/lib/carousel/index';
import 'antd-mobile/lib/carousel/style/index';

registerComponent({
  'antm-Carousel': Carousel
});

export default Carousel;