const mongoose = require('mongoose'),

const connectDB = async (db) => {
    try {
      await mongoose.connect(db, {
          useNewUrlParser:true,
          useUnifiedTopology: true,
          useCreateIndex:true,
          useFindAndModify:false
      });
      console.log('MongoDB is connected')
    } catch(err) {
        console.error(err.message);
        process.exit(1)        
    }
}

module.exports = connectDB;