const { MongoClient } = require("mongodb");

module.exports = {
  db: null,
  async connect() {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://sanjeevi:san9014@cluster-1.wd2yz.mongodb.net?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      this.db = client.db("hall-booking");
      console.log("---MongoDB Connected---");
    } catch (err) {
      console.log("err", err);
    }
  },
};
