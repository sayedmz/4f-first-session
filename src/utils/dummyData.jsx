import React from "react";

const dummyData = () => {
  const devs = [
    { name: "Steave", role: "frontend", age: 24 },
    { name: "Andrew", role: "backend", age: 28 },
    { name: "hala", role: "backend", age: 22 },
    { name: "James", role: "backend", age: 17 },
    { name: "Jon", role: "frontend", age: 43 },
    { name: "Mark", role: "fullstack", age: 36 },
    { name: "jane", role: "fullstack", age: 38 },
  ];
  //===========================================================================

  const devsArrayofString = ["Steave", "Andrew", "James", "Bashir"];
  //===========================================================================

  const ArrayOfRandomNumbers = Array.from({ length: 40 }, () =>
    Math.floor(Math.random() * 40)
  );
  //===========================================================================

  const ArrayOfNumbers = [22, -6, 1, 99, 97, 50, 15, 3, 18, 6, 80];
  //===========================================================================

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
  //===========================================================================
  //===========================================================================
  const devsWithId = devs.map((element, index) => {
    return { ...element, id: index + 1 };
  });
  console.log("devsWithId", devsWithId);
  //===========================================================================

  const filterYoungDevs = devs.filter((element) => {
    return element.age < 34;
  }); //array
  console.log("filterYoungDevs", filterYoungDevs);
  //===========================================================================

  const findSpecificDevInfo = devs.find((element) => {
    return element.age === 43;
  }); //element
  console.log("findSpecificDevInfo", findSpecificDevInfo);
  //===========================================================================
  const findSpecificDevIndex = devs.findIndex((element) => {
    return element.name === "James";
  });
  console.log("findSpecificDevIndex", findSpecificDevIndex);
  //===========================================================================
  const isManager = devs.some((element) => {
    return element.role === "manager";
  });
  console.log("isManager", isManager);
  //===========================================================================
  const isAnyFrontend = devs.some((element) => {
    return element.role.toLowerCase() === "frontend";
  });
  console.log("isAnyFrontend", isAnyFrontend);
  //===========================================================================
  const fillWithOnes = ArrayOfNumbers.fill(1, 5); //(formmm,index)
  console.log("fillWithOnes", fillWithOnes);
  //===========================================================================
  const isPositive = ArrayOfNumbers.every((element) => {
    return element > 0;
  });
  console.log("isPositive :>> ", isPositive);
  //==========================================================

  return (
    <>
      <main>
        {JSON.stringify(devsArrayofString)}
        {JSON.stringify("frontend".toLowerCase())}
        <div>aaaaaaaaaaaaaaaaaaa</div>
      </main>
    </>
  );
};
export default dummyData;
