// const { dateRefractor } = require("../lib/dateRefractor");
import { dateRefractor } from "../lib/dateRefractor";

const URLSchema = (longURL, shortURL, email, name) => {
  let obj = {
    linkId: ownedBy,
    longURL: longURL,
    shortURL: shortURL,
    ownerEmail: email,
    ownerName: name,
    time: dateRefractor(new Date()),
  };
  return obj;
};

const userSchema = (name, email, password) => {
  let obj = {
    name: name,
    email: email,
    password: password,
  };
  return obj;
};
export { URLSchema, userSchema };
// module.exports = { URLSchema, userSchema };
