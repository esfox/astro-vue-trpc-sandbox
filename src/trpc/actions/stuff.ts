import { db } from "../../database/connection";
import { trpcInstance } from "../instance";

export const fetchStuff = trpcInstance.procedure.query(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

export const getUsers = trpcInstance.procedure.query(async () => {
  const users = await db.query.users.findMany();
  return users;
});
