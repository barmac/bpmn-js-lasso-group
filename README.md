# bpmn-js-lasso-group

Create `bpmn:Group` in [bpmn-js](https://github.com/bpmn-io/bpmn-js) with a lasso-like tool.

## Usage

Pass the exported module to `additionalModules` when you create a Modeler instance.

```javascript
import Modeler from 'bpmn-js/lib/Modeler';
import LassoGroupModule from 'bpmn-js-lasso-group';

const modeler = new Modeler({
  container: '#bpmn-js-container',
  additionalModules: [ LassoGroupModule ],
});

modeler.importXML('...');
```

## Building

One time installation of all dependencies via [npm](https://npmjs.org):

```
npm install
```

## Development

Execute the test suite to spin up the example in your browser:

```
npm run dev
```

Go to [localhost:9876/debug.html](http://localhost:9876/debug.html) to inspect the example in your Browser.


## License

MIT
