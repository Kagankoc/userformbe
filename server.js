require('dotenv').config();
const express= require('express');
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const app = express();

app.use(express.json());

app.use('/',authRoutes);
app.use('/',userRoutes);
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
app.route('/').get(function(req,res){
    res.sendFile(process.cwd() + '/index.html');
});
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ,
  {  useUnifiedTopology: true, 
    useNewUrlParser: true 
  },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    },
    
)