import Modeler from 'bpmn-js/lib/Modeler';
import MochaTestContainer from 'mocha-test-container-support';

import LassoGroupModule from '../..';

import '../TestHelper';


import diagramXML from './diagram.bpmn';

describe('example', function() {

  it('should start', function() {

    // given
    const container = MochaTestContainer.get(this);
    const modeler = new Modeler({
      container,
      additionalModules: [ LassoGroupModule ],
      keyboard: {
        bindTo: document
      }
    });

    // then
    return modeler.importXML(diagramXML);
  });
});
