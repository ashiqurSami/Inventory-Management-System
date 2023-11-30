const express=require("express");
const router=express.Router();
const productController=require("../controller/productController");

//create
router.post("/products",productController.createProduct);

//read
router.get("/products/:id",productController.getOneProduct);
router.get("/products",productController.getAllProduct);

//update
router.put("/products/:id",productController.updateProduct);

//delete
router.delete("/products/:id",productController.deleteProduct);

module.exports=router