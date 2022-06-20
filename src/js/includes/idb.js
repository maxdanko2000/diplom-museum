export function getDb(dbName, dbVersion) {
  return (request = indexedDB.open(dbName, dbVersion));
}

let request = indexedDB.open("museumDB", 1);

request.onupgradeneeded = function (e) {
  let db = e.target.result;

  const IDBUsersList = db.createObjectStore("usersList", { keyPath: "username" });
  IDBUsersList.createIndex("username", "username", { unique: true });
  IDBUsersList.createIndex("password", "password", { unique: false });
  IDBUsersList.createIndex("email", "email", { unique: false });
  IDBUsersList.createIndex("phone", "phone", { unique: false });
  IDBUsersList.createIndex("isAdmin", "IsAdmin", { unique: false });

  const IDBTicketsList = db.createObjectStore("ticketsList", { keyPath: "id" });
  IDBTicketsList.createIndex("id", "id", { unique: true });
  IDBTicketsList.createIndex("type", "type", { unique: false });
  IDBTicketsList.createIndex("age", "age", { unique: false });
  IDBTicketsList.createIndex("date", "date", { unique: false });
  IDBTicketsList.createIndex("time", "time", { unique: false });
  IDBTicketsList.createIndex("amount", "amount", { unique: false });

  const IDBReturnedTicketsList = db.createObjectStore("returnedList", { keyPath: "id" });
  IDBReturnedTicketsList.createIndex("id", "id", { unique: true });
  IDBReturnedTicketsList.createIndex("type", "type", { unique: false });
  IDBReturnedTicketsList.createIndex("age", "age", { unique: false });
  IDBReturnedTicketsList.createIndex("date", "date", { unique: false });
  IDBReturnedTicketsList.createIndex("time", "time", { unique: false });
  IDBReturnedTicketsList.createIndex("amount", "amount", { unique: false });

  for (let i in usersList) {
    IDBUsersList.add(usersList[i]);
  }

  for (let i in ticketsList) {
    IDBTicketsList.add(ticketsList[i]);
  }

  for (let i in returnedTickets) {
    IDBReturnedTicketsList.add(returnedTickets[i]);
  }
};
