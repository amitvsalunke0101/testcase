const myLambda = require('../app')
var expect = require('chai').expect;

describe('myLambda', function() {
        /*
                        [
                            { Id: 5, Role: 'Employee', stat1: 'deactive' },
                            //{ Id: 6, Role: 'Employee', stat1: 'deactive' },
                            //{ Id: 7, Role: 'Employee', stat1: 'deactive' }
                        ].forEach(function(obj) {
                */
        it(`successful invocation: `, function(done) {

                myLambda.handler({ body: { pro_dealerid: 5 } }, { /* context */ }, (err, result) => {

                    try {
                        //expect(err).to.not.exist;
                        //expect(result).to.exist;

                        done();
                    } catch (error) {
                        done(error);
                    }
                })
            }) //it
            //  }) //forEach
    }) //describe