import mongoose from 'mongoose'

async function connect(){
    try{

        await mongoose.connect('Your_mongo_db_url')
        console.log('connected to database');

    }catch(e){
        console.error(e)
    }
}


const urlSchema = new mongoose.Schema({
    url : { type:String , required: true },
    shortUrl : { type:String , required: true },
    date : { type:Date , default: Date.now }
})

const urlModel = mongoose.model('url', urlSchema);

export { connect, urlModel }