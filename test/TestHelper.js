export * from 'bpmn-js/test/helper';

import {
  insertCSS
} from 'bpmn-js/test/helper';

import diagramCSS from 'bpmn-js/dist/assets/diagram-js.css';
import bpmnEmbeddedCSS from 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

insertCSS('diagram-js.css', diagramCSS);
insertCSS('bpmn-embedded.css', bpmnEmbeddedCSS);

insertCSS('diagram-js-testing.css',
  `
    .test-container {
      display: flex;
      flex-direction: column;

      height: 900px !important;
    }

    .test-container-content {
      flex: 1;
    }
  `
);