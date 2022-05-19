const app = require("./app");
const port = process.env.PORT || 4000;
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.o5hoh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = await client.db("it-host");

    const bestHostingCollection = await database.collection("bestHosting");
    const bestServiceCollection = await database.collection("bestService");
    const bestFooterCollection = await database.collection("footerData");

    //get best hosting collection

    app.get("/bestHostingData", async (req, res) => {
      const result = await bestHostingCollection.find({}).toArray();

      res.send(result);
    });
    //get best service collection

    app.get("/bestService", async (req, res) => {
      const result = await bestServiceCollection.find({}).toArray();

      res.send(result);
    });

    //get best service collection

    app.get("/footer", async (req, res) => {
      const result = await bestFooterCollection.find({}).toArray();

      res.send(result);
    });

    console.log("Database Connect");
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("Server Running Port" + port);
});
