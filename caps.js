const events=require('./events');
const driver=require('./driver');
const vendor=require('./vendor');

setEvents(()=>{
    events.emit('pickup',{event:'pickup', time:`${new Date().toString()}`, payload: vendor.order()});

})

events.on('pickup',driver.pickup);
events.on('in-transit',driver.deliverd);
events.on('deliverd',vendor.thankYou);