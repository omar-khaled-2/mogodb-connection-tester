const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const fs = require('fs/promises');
dotenv.config();


const url = process.env.MONGODB_URL;
const client = new MongoClient(url);


console.log(url)

// Database Name
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully');

  const db = client.db("arabi-learn");




    // const skills = JSON.parse(await fs.readFile("skills.json"))

    // for(const skill of skills) {
    //     skill["_id"] = skill["_id"]["$oid"]
    //     skill["_id"] = new ObjectId(skill["_id"])
    // }

    // await db.collection("skills").insertMany(skills)


    // const questions = JSON.parse(await fs.readFile("questions.json"))

    // for(const question of questions) {
    //     question["_id"] = question["_id"]["$oid"]
    //     question["_id"] = new ObjectId(question["_id"])
    //     if(question["options"]) {
    //         for(const option of question["options"]) {
    //             option["_id"] = option["_id"]["$oid"]
    //             option["_id"] = new ObjectId(option["_id"])
    //         }
    //     }
    // }

    // await db.collection("questions").insertMany(questions)
//   data = await fs.readFile("skills.json") 
//   const skills = JSON.parse(data)
//   await db.collection("skills").insertMany(skills)

  

  


  
console.log("migrated")

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());