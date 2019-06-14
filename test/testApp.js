const myLambda = require('../app')
const expect = require('chai').expect
const assert = require('chai').assert
const sinon = require('sinon')


describe('myLambda', function() {

        it(`successful invocation: `, function(done) {
                sinon.stub(myLambda, 'handler')
                myLambda.handler({ body: { pro_dealerid: 5 } }, { /* context */ }, (err, result) => {
                    console.log('function called');
                    expect(myLambda.handler.calledOnce).to.be.true
                    sinon.restore()
                    done()
                })
            }) //it            
    }) //describe