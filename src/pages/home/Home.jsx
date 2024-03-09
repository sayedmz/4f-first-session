import React, { useState } from "react";
import Footer from "../../layout/footer/Footer";
import Card from "../../components/card/Card";
import Header from "../../layout/header/Header";

const Home = () => {
  const [persons, setPersons] = useState(
    [
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
    ] //array
  );
  return (
    <>
      <main className="app-main">
        {persons.map((person) => (
          <>
            <Card
              id={person?.id}
              firstName={person?.name}
              lastName={person?.lastName}
              age={person?.age}
              color={person?.cloths?.jacket}
              likeSports
              onClick={() => alert(person?.id)}
            />
          </>
        ))}
        <Card
          id={4}
          firstName={"John"}
          lastName={"Doe"}
          age={"90"}
          color={"gray"}
          likeSports
          onClick={() => alert("4")}
        />
      </main>
    </>
  );
};

export default Home;

// map مثلا على  const numb = [5 , 10 , 20 , 40];  const doubleNum =
// numb.map((numb) => numb * 2);  console.log('doubleNum' , doubleNum)
// ==========================================================
//  2eme methode //{" "}
// <div key={person.id}>
//    <h1>{person.id}</h1>
//    <br />

//   <div className="app-container">
//      hello world my name is {`${person.name}  ${person.lastName}`},
//     <div> I am {person.age} years old</div>

//     <div style={{ color: person?.cloths?.jacket }}>
//        I wear a {person?.cloths?.jacket} jacket
//     </div>

//   </div>

// </div>
// // {/* ? علامات الاستفهام اذا لم تجد المطلوب اكمل عملك */}
// {/* لكتابة الرابط بشكل تلقائي */}
// {/* //ctrl + space + tbae */}
