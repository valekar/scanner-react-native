import { User } from "../models/User";
import Item from "../models/MyItem";
export const users = [
  new User(1, "UserName", "test@test.com"),
  new User(2, "Name 2", "2Test@test.com")
];

export const myItems = [
  new Item(
    1,
    "Item Name",
    "https://images.pexels.com/photos/786773/pexels-photo-786773.jpeg"
  ),
  new Item(
    2,
    "Name 2",
    "https://images.pexels.com/photos/786773/pexels-photo-786773.jpeg"
  )
];
