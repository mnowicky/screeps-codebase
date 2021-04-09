Game.market.createOrder({
    type: ORDER_BUY,
    resourceType: RESOURCE_ENERGY,
    price: .40,
    totalAmount: 500000,
    roomName: "W6S18"   
});

Game.market.createOrder({
    type: ORDER_BUY,
    resourceType: RESOURCE_LEMERGIUM_ACID,
    price: 7.00,
    totalAmount: 5000,
    roomName: "W6S18"   
});



Game.market.createOrder({
    type: ORDER_SELL,
    resourceType: RESOURCE_TUBE,
    price: 9999.00,
    totalAmount: 90,
    roomName: "W6S18"   
});