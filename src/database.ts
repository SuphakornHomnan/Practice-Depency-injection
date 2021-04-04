import * as mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()
const { MONGO_USER, MONGO_PASS, MONGO_DB } = process.env
const uri  = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@first-cluster.nvg6s.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
  
export const connectt = () => {
  return new Promise(function (fulfill, reject){
    return mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        poolSize: 10,
        useFindAndModify: true
      },
      (err: any) => {
        if (err) {
          reject(err)
        } else {
          console.log("Successfully Connected!");
          fulfill()
        }
      }
    );
  })
}

export const disconnect = ()  => {
  console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV.toString() == "test"){
      return mongoose.connection.db.dropDatabase().then(() => {
        return mongoose.disconnect()
      
      })
    }
  else{
    return mongoose.disconnect()
  }
}

export default mongoose;
