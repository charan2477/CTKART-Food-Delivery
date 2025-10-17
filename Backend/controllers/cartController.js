import userModel from '../models/userModel.js';

// Add item to user cart
const addTOCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId );

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error adding item to cart" });
  }
};

const removeFromCart = async (req, res) => {
  try{
    let userData = await userModel.findById(req.body.userId );
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId]>0) {
      cartData[req.body.itemId]-=1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({ success: true, message: "Item removed from cart" });
  }catch(error){

    console.log(error);
    res.json({ success: false, message: "Error removing item from cart" });

  }
};

const getCart = async (req, res) => {
  try{
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, message: "Cart retrieved", cartData });

  }catch(error){
    console.log(error);
    res.json({ success: false, message: "Error retrieving cart" });

  }
};

export { addTOCart, removeFromCart, getCart };