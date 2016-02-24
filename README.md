# npm install -g jasmine // do only once on the machine

## git init // so that it's versions can be tracked

### jasmine init // gives you the spec folder/ support folder/ jasmine.json

#### create a README.md file

V mkdir lib

VI create two files for testing
  a) in lib: (fileName.js) // write in it module.exports = {}
  b) in spec: (fileName_spec.js) // var miles = require ('../lib/miles')

VII
Describe test in _spec.js (Test Suite)

describe('Miles', function () {
  it('our plan here', function () {  // anonymous callback function
    expect(someFunction()).toEqual("running stuff fo'real")
  });
})

//run test in terminal using jasmine
