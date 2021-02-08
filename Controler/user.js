const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/open_kenest",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});
// const takanon = {
// h5: `
//   מתוך דף הפייסבוק של האקדמיה ללשון העברית: "המילה סְתָם מוכרת לנו כבר
//   מן המשנה, למשל: "אם של עבודה זרה נָדַר – מותר, ואם סְתָם – אסור" מתוך
//   דף הפייסבוק של האקדמיה ללשון העברית: "המילה סְתָם מוכרת לנו כבר מן
//   המשנה, למשל: "אם של עבודה זרה נָדַר – מותר, ואם סְתָם – אסור"`,
// type: "(א)",
// number: ".51",
// artcil: "נאומים בני דקה (תיקון מס' 112)",
// };
// const naom = {
// };

const HK = new mongoose.Schema({
  haver: [{ name: String }],
});
const time = new mongoose.Schema({
  timeHistoryData: [{ date: String, first: String, second: String }],
  timeFutreData: [{ date: String, first: String, second: String }],
});
const naom = new mongoose.Schema({
  info: String,
});
const takanon = new mongoose.Schema({
  h5: String,
  type: String,
  number: String,
  artcil: String,
});

const takanonCollection = mongoose.model("takanonCollection", takanon);
const naomCollection = mongoose.model("naomCollection", naom);
const timeCollection = mongoose.model("timeCollection", time);
const HKCollection = mongoose.model("HKCollection", HK);

exports.getHK = (req, res) => {
  HKCollection.find({}).then((docs) => {
    res.send(docs[0].haver);
  });
  // res.send(HK);
};
exports.getTime = (req, res) => {
  timeCollection.find({}).then((docs) => {
    res.send({
      timeHistoryData: docs[0].timeHistoryData,
      timeFutreData: docs[0].timeFutreData,
    });
  });
};
exports.getNaom = (req, res) => {
  naomCollection.find({}).then((docs) => {
    res.send(docs[0]);
  });
};
exports.getTakanon = (req, res) => {
  takanonCollection.find({}).then((docs) => {
    res.send(docs[0]);
  });
};
