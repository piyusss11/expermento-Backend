const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://piyush:v4siujYTtg5MHArt@cluster0.tnbafga.mongodb.net/";

const clinet = new MongoClient(url);

const dbName = "UserKaDb";

const data = {
  name: "dumdum",
  city: "delhi",
};
async function main() {
  await clinet.connect();
  console.log("Connection Succesfully to the Server");
  const db = clinet.db(dbName);
  const collection = db.collection("User");

  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  const updateResult = await collection.updateOne(
    { name: "mogambo" },
    { $set: { name: "John Cena" } }
  );
  // console.log("Updated documents =>", updateResult);

  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  const findResult = await collection.find({name:"John Cena"}).count();
  console.log("Found documents =>", findResult);


  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => clinet.close());
