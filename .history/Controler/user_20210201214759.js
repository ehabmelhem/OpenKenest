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
  artcil:""
};
exports.stam = (req, res) => {
  res.send({ OK: true });
};
