class Orders{
    constructor(Id, order_amount, cart_id, user_id ){
        this.Id = Id;  
        this.order_amount = order_amount;
        this.user_id = user_id; 
        this.cart_id = cart_id;
    }
  }
  
  module.exports = Orders;
  