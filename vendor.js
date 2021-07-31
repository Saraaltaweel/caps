'use strict';

require('dotenv').config();

const storeName=process.env.STORE_NAME || 'deliverd';
const events=require('./events');
const fake=require('faker');


    let payload={
        storeName:process.env.STORE_NAME||storeName,
        orderId:fake.datatype.uuid(),
        customerName:fake.name.findName(),
        address:fake.address.city(),

    };
    function newCustomerOrde(){
    
        console.log('new order to deliver');
        events.emit('pickup',{
            event:'pickup',
            time: new Date().toDateString(),
            payload:payload
        })
    }
    function thanks(payload){
        payload.event='delivered';
        payload.time = new Date().toDateString();
        console.log(`Thank you for delivering ${payload.payload.orderId}`);
        console.log('EVENT',payload );
    }
    
    module.exports={
        newCustomerOrde:newCustomerOrde,
        thanks:thanks
    }