var should = require('chai').should(),
    urlgenerator = require('../index'),
    createURLwithParameters = urlgenerator.createURLwithParameters,
    chaiHttp = require('chai-http');
var chai = require('chai');


chai.use(chaiHttp);

describe('Blobs', function() {
  it('converts base url to complete;', function() {
    var baseURL = "www.google.com";
   var parameters = {};
   parameters.mobile = '7838185123';
   parameters.shit = 'xxx';
   var result = createURLwithParameters(baseURL,JSON.stringify(parameters));

    createURLwithParameters(baseURL,JSON.stringify(parameters)).should.equal('www.google.com?mobile=7838185123&shit=xxx');
  });
});

