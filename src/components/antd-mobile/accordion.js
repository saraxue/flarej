import { registerComponent } from 'nornj';
import Accordion from 'antd-mobile/lib/accordion/index';
import 'antd-mobile/lib/accordion/style/index';

registerComponent({
  'antm-Accordion': Accordion,
  'antm-AccordionPanel': Accordion.Panel
});

export default Accordion;