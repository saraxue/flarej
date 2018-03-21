import { registerExtension } from 'nornj';
import extensionConfigs from '../extensionConfigs';
import { capitalize } from '../../utils/common';

registerExtension('mobx-model', options => {
  const valueName = options.result();
  switch (options.parentType.toLowerCase()) {
    case 'input':
    case 'select':
    case 'ant-input':
    case 'textarea':
    case 'ant-textarea':
    case 'ant-input.textarea':
      {
        options.exProps.value = options.context.getData('$mobxStore')[valueName];
        options.exProps.onChange = e => {
          options.context.getData('$mobxStore')[valueName] = e.target.value;
        };
        break;
      }
    case 'ant-select':
      {
        options.exProps.value = options.context.getData('$mobxStore')[valueName];
        options.exProps.onChange = v => {
          options.context.getData('$mobxStore')[valueName] = v;
        };
        break;
      }
  }
}, extensionConfigs['mobx-model']);

registerExtension('mst-model', options => {
  const valueName = options.result();
  switch (options.parentType.toLowerCase()) {
    case 'input':
    case 'select':
    case 'ant-input':
    case 'textarea':
    case 'ant-textarea':
    case 'ant-input.textarea':
      {
        options.exProps.value = options.context.getData('$mstStore')[valueName];
        options.exProps.onChange = e => {
          options.context.getData('$mstStore')[`set${capitalize(valueName)}`](e.target.value);
        };
        break;
      }
    case 'ant-select':
      {
        options.exProps.value = options.context.getData('$mstStore')[valueName];
        options.exProps.onChange = v => {
          options.context.getData('$mstStore')[`set${capitalize(valueName)}`](v);
        };
        break;
      }
  }
}, extensionConfigs['mst-model']);