const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();


const url = process.env.MONGODB_URL;
const client = new MongoClient(url);


console.log(url)

// Database Name
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());