// const mongoose=require('mongoose');
const mongoURI="mongodb+srv://gofood:Z1WjwWSUTxwcyL6R@cluster0.ihsokra.mongodb.net/gofoodmern?retryWrites=true&w=majority"

// getting-started.js
const mongoose = require('mongoose');

const mongoDB =async () => {
        try {
            await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('Connected to the database');

            const FoodItem = mongoose.model('FoodItem', new mongoose.Schema({}), 'food_items');
            const FoodCategory = mongoose.model('FoodCategory', new mongoose.Schema({}), 'food_category');

            const data_item = await FoodItem.find({}).exec();
            global.food_items=data_item

            const data_category=await FoodCategory.find({}).exec();
            global.food_category=data_category
    
         
        } catch (error) {
            console.error('Error connecting to the database:', error);
        }
}



module.exports =mongoDB;
