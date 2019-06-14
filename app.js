const awsXRay = require('aws-xray-sdk');
const AWS = awsXRay.captureAWS(require('aws-sdk'));

AWS.config.update({
    region: process.env.region
});

const dynamo = new AWS.DynamoDB.DocumentClient();
const prop = require('./properties');

exports.handler = (event, context, callback) => {

    //console.log("pro_dealer List: " + JSON.stringify(event));
    var params_query = {

        TableName: prop.table_proDealer,
        KeyConditionExpression: "#test_id = :Id",
        FilterExpression: "#test_role = :Role AND #stat <> :stat1",

        ExpressionAttributeNames: {
            "#test_id": "id",
            "#test_role": "role",
            "#stat": "status",
        },

        ExpressionAttributeValues: {
            ":Id": event.body.pro_dealerid,
            ":Role": "Employee",
            ":stat1": "deactive"
        }
    };
    //callback(null, 5);
    //console.log("pro_dealer List: " + JSON.stringify(params_query));
    /*
        dynamo.query(params_query, (err, data) => {

            if (err) {
                console.log(JSON.stringify(err));
            } else {
                console.log(JSON.stringify(data.Items));
                callback(null, data);
            }
        })
    */
};