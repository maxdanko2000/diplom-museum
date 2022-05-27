export const usersList = [
  {
    id: 0,
    username: "admin",
    password: "admin",
    email: "",
    phone: "",
    isAdmin: true,
  },
  {
    id: 1,
    username: "maxmax",
    password: "Maxim123",
    email: "m@m.ru",
    phone: "375331111111",
    isAdmin: false,
  },
  {
    id: 2,
    username: "vladislav",
    password: "Vladsensei2022",
    email: "v@m.ru",
    phone: "375332222222",
    isAdmin: false,
  },
];

export const ticketsList = [
  {
    id: 1,
    type: "Temporary exhibition",
    age: "basic",
    date: "2022-01-01",
    time: "12:12",
    amount: 12,
  },
  {
    id: 2,
    type: "Permanent exhibition",
    age: "senior",
    date: "2022-02-02",
    time: "13:13",
    amount: 4,
  },
  {
    id: 3,
    type: "Combined Admission",
    age: "basic",
    date: "2022-03-03",
    time: "14:14",
    amount: 8,
  },
];

export const dateList = ["2022-01-01", "2022-02-02", "2022-03-03", "2022-04-04", "2022-05-05"];
export const timeList = ["12:12", "13:13", "14:14", "15:15", "16:16"];
export const priceList = {
  basic: 20,
  senior: 10,
};

localStorage.setItem("usersList", JSON.stringify(usersList));
localStorage.setItem("ticketsList", JSON.stringify(ticketsList));
localStorage.setItem("dateList", JSON.stringify(dateList));
localStorage.setItem("timeList", JSON.stringify(timeList));
localStorage.setItem("priceList", JSON.stringify(priceList));
