import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  // console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Users!");
  }
};
