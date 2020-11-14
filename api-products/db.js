const mongoose = require('mongoose')

const url = 'mongodb://db:27017/api-products'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}

mongoose.connect(url, options).then( function() {
    console.log('MongoDB-PRODUCTS is connected');
  })
    .catch( function(err) {
    console.log(err);
  });
