export const devs = [
  { name: "Steave", role: "frontend", age: 24 },
  { name: "Andrew", role: "backend", age: 28 },
  { name: "James", role: "backend", age: 17 },
];
export const devsArrayofString = ["Steave", "Andrew", "James", "Bashir"];
export const ArrayOfRandomNumbers = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);
export const ArrayOfNumbers = [22, -6, 1, 99, 97, 50, 15, 3, 18, 6, 80];

const People = [
  {
    id: 1,
    name: "Jane",
    lastName: "Doe",
    age: 36,
  },
  {
    id: 2,
    name: "John",
    lastName: "DoeDoe",
    age: 44,
    cloths: { jacket: "purple" },
  },
  {
    id: 3,
    name: "Joe",
    lastName: "ThirdLastName",
    age: 60,
    cloths: { jacket: "red" },
  },
]; //array

// const devsWithId = devs.map((element, index) => {
//   return { ...element, id: index + 1 };
// });
// const filterYoungDevs = devs.filter((element) => {
//   return element.age < 34;
// }); //array
// const findSpecificDevInfo = devs.find((element) => {
//   return element.age === 43;
// }); //element
// const findSpecificDevIndex = devs.findIndex((element) => {
//   return element.name === "James";
// });
// const isManager = devs.some((element) => {
//   return element.role === "manager";
// });
// const isAnyFrontend = devs.some((element) => {
//   return element.role.toLowerCase() === "frontend";
// });
// const isPositive = ArrayOfNumbers.every((element) => {
//   return element > 0;
// });
// console.log("isPositive :>> ", isPositive);
