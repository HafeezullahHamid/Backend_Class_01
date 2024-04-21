const express= require("express");
const app= express();
// const quotes = require("./quotes.json");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");

const mongoose = require("mongoose");
app.use("/users", userRouter);
app.use("/note" , noteRouter )


app.get("/", (req,res) =>{
    res.send("hello");

});
////---Create Mongoose Connection---////
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/myapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// })
// .then(() => {
//   console.log("Connected to MongoDB");
// })
// .catch((error) => {
//   console.error("Error connecting to MongoDB:", error);
// });

mongoose.connect("mongodb+srv://hafeezullahhamid32:wisdom@cluster0.qkpglat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(5000, () =>{
        console.log("server started on pot no. 5000 ");
    
    });   
})
.catch((error)=>{
    console.log(error);
})

// app.get("/quote", (req , res) =>{
//     // res.json(quotes);
//     // res.send("Quote");
//     res.status(200).json(quotes);
// });

// app.get("/random" , (req,res)=>{
//     let index= Math.floor(Math.random () * quotes.length);
//     let quote= quotes[index];
//     res.status(400).json(quote);
// });



  
