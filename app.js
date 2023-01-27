const {MongoClient} =require("mongodb");
require('dotenv').config()
const uri=require("./atlas_url")
const client=new MongoClient(uri)
const dbname="bank"
console.log(process.env.mongoUrl)

const connectToDatabase = async () => {
    try {
        await client.connect()
        console.log(`connected to ${dbname} database`)
    } catch (error) {
        console.log(`error while connecting database: ${error}`)
    }
}

const main =async () =>{
    try {
        await connectToDatabase()
    } catch (error) {
        console.log(`error connecting to the db :${error}`)
    }
}
// Run main function
main()