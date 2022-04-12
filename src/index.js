require("dotenv").config();
const cors = require("cors");
const express = require("express")
const connect = require("./configs/db")
const { register, login } = require("./controllers/authcontroller");
const userController = require("./controllers/userController");
const productController   =require("./controllers/productController")

const app = express();
app.use(express.json());
app.use(cors())

// /register
app.post("/register", register);
// .login
app.post("/login", login);

app.use("/users", userController);
app.use("/products", productController);

app.listen(process.env.PORT || 1212, async()=>{
    try {
         await connect()
        console.log("listeninng to port 1212")

    } catch (err) {

        console.log("error", err);
        
    }
})