import React from "react";

export const Destructuring = () => {
  // arry Destructuring
  const friuts = ["apple", "banana", "kiwi", "orange"];
  const [x, , z, k] = friuts;
  console.log("x", x);
  //object Destructuring
  const person = {
    name: "mouhamad",
    lastName: "zak",
    age: "26",
    country: "lebanon",
    gender: "male",
  };
  const { name, lastName, age, country, gender } = person;
  // spread opeartor /.../=js
  const friut1 = ["apple", "banana", "kiwi", "orange"];
  const friut2 = ["watermalon", "pineapple"];
  const Allfruit = [friut1, friut2];
  const Allfruit1 = [...friut1, ...friut2];
  console.log(Allfruit);
  console.log("Allfruit1", Allfruit1);
  //==========================================
  const [FirstFr, SecondeFr, ...others] = ["apple", "banana", "kiwi", "orange"];
  console.log("others", others);
  //FirstFr =apple , SecondeFr =  banana ,
  // others = [ "kiwi", "orange" ]

  //==========================================

  return (
    <>
      <div>=============================</div>
      <div>arry Destructuring</div>
      <div>fell free to name any variable </div>
      <div>respect the position </div>
      <div>=============================</div>
      <div> x is {JSON.stringify(x)}</div>
      <div> z is {JSON.stringify(z)}</div>
      <div> k is {JSON.stringify(k)}</div>
      <div>=============================</div>
      <div>object Destructuring</div>
      <div>respect the naming convention </div>
      <div>no problem with the position </div>
      <div>=============================</div>
      <div>name is {JSON.stringify(name)}</div>
      <div>lastName is {JSON.stringify(lastName)}</div>
      <div>age is {JSON.stringify(age)}</div>
      <div>country is {JSON.stringify(country)}</div>
      <div>gender is {JSON.stringify(gender)}</div>
    </>
  );
};
export default Destructuring;
