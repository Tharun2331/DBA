var config = require('./dbConfig');
const sql = require('mysql');
const {Query} = require('./queryInstance');


async function getOrders() {
    try {
        let pool = await Query("SELECT * from orders");
        console.log(pool);
        return pool;
    }
    catch (error) {
        console.log(error);
    }
}




module.exports = {
    getOrders

}