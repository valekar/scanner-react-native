import * as SQLite from "expo-sqlite";
import { User } from "../models/User";

const db = SQLite.openDatabase("app.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users " +
          "(id INTEGER PRIMARY KEY NOT NULL, " +
          "first_name TEXT NOT NULL, " +
          "last_name TEXT NOT NULL, " +
          "password TEXT NOT NULL, " +
          "email TEXT NULL )",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });

  return promise;
};

export const registerUser = (user: User) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO users(first_name,last_name,password,email) VALUES(?,?,?,?)",
        [user.first_name, user.last_name, user.password, user.email],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });

  return promise;
};

export const fetchUser = (user: User) => {
  const promise = new Promise((resolve, reject) => {
    db.readTransaction(tx => {
      tx.executeSql(
        "SELECT * FROM users WHERE email=? and password=?",
        [user.email, user.password],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
  return promise;
};
