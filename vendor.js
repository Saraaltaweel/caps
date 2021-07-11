'use strict';

require('dotenv').config();

const storeName=process.env.STORE_NAME;
const events=require('./events');
const fake=require('faker');

function orders(){
    const payload={
        storeName:process.env.STORE_NAME||storeName,
        orderId:fake.rendom.uuid(),
        customerName:fake.name.findName(),
        address:fake.address.city(),

    };
    return payload;
}

function thankYou(payload){
    payload.events='delivered';
    console.log(`VENDOR: Thank you for delivering ${payload.payload.orderId}`);
    console.log('event',payload);
}
module.exports={
    orders,thankYou
};