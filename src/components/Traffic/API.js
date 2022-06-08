import axios from "axios";
const KEY = "a48d26b3-9d1c-4a84-978c-ca603260bd01";

export const getData = async () => {
  try {
    return await axios.get(
      `https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${KEY}`
    );
  } catch (error) {
    console.log(error);
  }
};