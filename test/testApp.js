const myLambda = require('../app')
const expect = require('chai').expect
const assert = require('chai').assert
const sinon = require('sinon')

event = {
    body: { pro_dealerid: 5 }
}
let evt;
obj1 = {
    "Role": "Employee",
    "stat1": "deactive"
}
obj2 = {
    "Role": "Employee",
    "stat1": "active"
}

describe('myLambda', function() {

        let h = sinon.stub(myLambda, "handler")
        it(`returning dealer id 5: `, async() => {

                h.withArgs(sinon.match.any, sinon.match.any, (err, result) => {}).yields(null, 5)

                myLambda.handler(evt, {}, (err, res) => {
                    // Assertion start                    
                    expect(res.response.response).to.be.equal(5);
                    // Assertion end
                    done()
                });
            }) //it           

        it(`stat1 deactive: `, async() => {

                h.withArgs(sinon.match.any, sinon.match.any, (err, result) => {}).yields(null, obj1)

                myLambda.handler(evt, {}, (err, res) => {
                    // Assertion start
                    expect(res.response.response.Role).to.be.equal("Employee");
                    expect(res.response.response.stat1).to.be.equal("deactive");
                    // Assertion end
                    done()
                });
            }) //it  

        it(`stat1 active: `, async() => {

                h.withArgs(sinon.match.any, sinon.match.any, (err, result) => {}).yields(null, obj2)

                myLambda.handler(evt, {}, (err, res) => {
                    // Assertion start

                    expect(res.response.response.Role).to.be.equal("Employee");
                    expect(res.response.response.stat1).to.be.equal("deactive");
                    // Assertion end
                    done()
                });
            }) //it  

    }) //describe