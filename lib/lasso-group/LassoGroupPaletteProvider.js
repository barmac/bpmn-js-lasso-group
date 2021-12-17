/**
 * A palette provider the lasso group.
 */
export class LassoGroupPaletteProvider {
  static $inject = [
    'palette',
    'translate',
    'lassoGroup'
  ]

  constructor(palette, translate, lassoTool) {
    this._palette = palette;
    this._translate = translate;
    this._lassoTool = lassoTool;

    palette.registerProvider(this);
  }

  getPaletteEntries() {
    const lassoTool = this._lassoTool,
          translate = this._translate;

    return function(entries) {
      delete entries['create.group'];

      return Object.assign(entries, {
        'lasso-group': {
          group: 'artifact',
          className: 'bpmn-icon-group',
          title: translate('Create Group'),
          action: {
            click: function() {
              lassoTool.toggle();
            }
          }
        }
      });
    };
  }
}
