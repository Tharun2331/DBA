

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

// import Orders from './Order';
const {db} = require('./dbConfig');
const {Query} = require('./queryInstance');
const {Products} = require('./products');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

// Establishing DB connection
db.connect((error) => {
    if (error) console.log(error);
    else console.log("Connected to DB");
  });


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

app.get("/",(req,res) =>{
    res.send("hello")
})

//products
app.get("/products", async (req,res) =>{
 const products = await Query(`SELECT * FROM products`);
   res.send(products);
})
//user counts
app.get("/counts",async (req,res) => {
 const count = await Query(`SELECT user_count FROM user_count`);
 res.send(count);
})

//total
app.get("/total", async (req, res) => {
   const total = await Query(`call product_sum()`);
   res.send(total);
})

//grandTotal
app.get("/grandTotal", async (req, res) => {
   const grandTotal = await Query(`select tax_amount from tax`);
   res.send(grandTotal);
})

//deleteCartTotal
app.post("/emptyCart",async (req, res) => {
   await Query(`DELETE from cart`);
})

//home
app.post("/",async (req, res) => {
const {email,address,pnumber,userName} =req.body;

   await Query(`INSERT INTO user ( user_name, email, address, phone_num) VALUES 
   ('${userName}', '${email}', '${address}', ${pnumber} )`)
});
//login
app.post("/login", async (req, res) => {

   try{
      const {emailLogin,pnumberLogin} = req.body;
  
      const CheckUser = await Query(`SELECT * FROM user WHERE email = "${emailLogin}" AND phone_num = ${pnumberLogin}`);
     
     if(CheckUser.length === 0) return res.status(400).json({error:"Wrong email/phone_num combination"});
     
     return res.status(200).json({userData:CheckUser[0]});
     
   }catch(err){return res.status(400).json({error:"Wrong email/phone_num combination"});}


});

//cart 
app.post("/cart", async (req,res) => {
   const productId = req.body.productId;
   await Query(`INSERT INTO cart (product_id) VALUES ('${productId}')`)
   
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);

 