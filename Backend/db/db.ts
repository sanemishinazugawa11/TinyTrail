import mongoose from 'mongoose'

async function connect(){
    try{

        await mongoose.connect('mongodb+srv://ksbhuvi2004:0HWE4DwK4HxrXi5K@cluster0.rfv5q.mongodb.net/TinyTrail')
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