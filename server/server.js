require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db.js');
const connectCloudinary = require('./config/cloudinary.js');
const userRouter = require('./routes/userRoute.js');
const productRouter = require('./routes/productRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;
dbConnect();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

//Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) =>{
  res.send("API working");
})


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
