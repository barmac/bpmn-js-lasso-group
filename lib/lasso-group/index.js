import { LassoGroup } from './LassoGroup';
import { LassoGroupPaletteProvider } from './LassoGroupPaletteProvider';

export default {
  __init__: [
    'lassoGroup',
    'lassoGroupPaletteProvider'
  ],
  'lassoGroupPaletteProvider': [ 'type', LassoGroupPaletteProvider ],
  'lassoGroup': [ 'type', LassoGroup ]
};
