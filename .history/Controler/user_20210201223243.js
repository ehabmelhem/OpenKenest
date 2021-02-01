const express = require("express");
const app = express();
const takanon = {
  h5: `
    מתוך דף הפייסבוק של האקדמיה ללשון העברית: "המילה סְתָם מוכרת לנו כבר
    מן המשנה, למשל: "אם של עבודה זרה נָדַר – מותר, ואם סְתָם – אסור" מתוך
    דף הפייסבוק של האקדמיה ללשון העברית: "המילה סְתָם מוכרת לנו כבר מן
    המשנה, למשל: "אם של עבודה זרה נָדַר – מותר, ואם סְתָם – אסור"`,
  type: "(א)",
  number: ".51",
  artcil: "נאומים בני דקה (תיקון מס' 112)",
};
const naom = {
  info: `נאום של }/חבר כנסת}, בכל נושא ו באורך של בדקה (תלוי בטוב לבו של }/יו"ר הכנסת} או }/סגן יור הכנסת} המנהלים את הישיבה בפועל`,
};
let timeHistoryData = [
  { date: "17.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
  { date: "12.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
  { date: "08.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
];
let timeFutreData = [
  { date: "22.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
];
const HK = [
  { name: "גפני משה" },
  { name: "גרמל יעל" },
  { name: "דיין עוזי" },
  { name: "דיכנטר אבי" },
];
exports.getHK = (req, res) => {
  res.send({ timeHistoryData, timeFutreData });
};
exports.getTime = (req, res) => {
  res.send({ timeHistoryData, timeFutreData });
};
exports.getNaom = (req, res) => {
  res.send(naom);
};
exports.getTakanon = (req, res) => {
  res.send(takanon);
};
