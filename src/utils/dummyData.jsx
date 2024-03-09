import React from "react";

const DummyData = () => {
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
  //fill  تقوم بالتغيير على الشكل الاساسي لذلك استعملنا هذة الطريقة
  const ArrayOfNumbers1 = [100, -6, 1, 99, 97, 50, 15, 3, 18, 6, 80];
  const fillWithOnes = [...ArrayOfNumbers1];
  fillWithOnes.fill(1, 5); //(formmm,index)
  console.log("fillWithOnes", fillWithOnes);
  //===========================================================================
  const isPositive = ArrayOfNumbers.every((element) => {
    return element > 0;
  });
  console.log("isPositive :>> ", isPositive);
  //==========================================================
  // exercice
  //1
  const x1 = devs.filter((devs) => {
    return devs.role.toLocaleLowerCase() === "frontend" && devs.age > 30;
  });
  //2
  const y1 = ArrayOfNumbers.filter((num) => {
    return num > 0;
  }).map((num) => num * 3);

  //3
  const z1 = devsArrayofString.filter((name) => name.length >= 6);
  //==========================================================

  return (
    <>
      <main>
        <div>devsArrayofString is : {JSON.stringify(devsArrayofString)}</div>
        <div> {JSON.stringify("frontend".toLowerCase())}</div>
        <div>
          filterYoungDevs <br />
          is : {JSON.stringify(filterYoungDevs)}
        </div>
        <div>
          1- return all the devs (dummy data) who have the role of Frontend and
          there age are more than 30 y/o <br /> x is : {JSON.stringify(x1)}
          <br />
          2- in ArrayOfNumbers (dummy data): return only positive numbers and
          then return a new array who has there elements multiplied by 3. <br />
          y1 is : {JSON.stringify(y1)}
          <br />
          3- in devsArrayofString (dummy data): return only the names who have 6
          characters and more <br />
          z1 is : {JSON.stringify(z1)}
          <br />
        </div>
      </main>
    </>
  );
};
export default DummyData;

// const blogData = [
//   {
//     id: 1,
//     title: 'Getting Started with Web Development',
//     author: 'John Doe',
//     date: '2024-03-07',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
//   },
//   {
//     id: 2,
//     title: 'Cooking Tips for Beginners',
//     author: 'Jane Smith',
//     date: '2024-03-08',
//     content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
//     tags: ['Cooking', 'Recipes', 'Food'],
//   },
//   {
//     id: 3,
//     title: 'Exploring Nature: Hiking Essentials',
//     author: 'Chris Johnson',
//     date: '2024-03-09',
//     content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...',
//     tags: ['Hiking', 'Nature', 'Outdoors'],
//   },
//   {
//     id: 4,
//     title: 'Introduction to Machine Learning',
//     author: 'Alice Rogers',
//     date: '2024-03-10',
//     content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
//     tags: ['Machine Learning', 'AI', 'Data Science'],
//   },
//   {
//     id: 5,
//     title: '10 Tips for Productive Remote Work',
//     author: 'David Williams',
//     date: '2024-03-11',
//     content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...',
//     tags: ['Remote Work', 'Productivity'],
//   },
//   {
//     id: 6,
//     title: 'Traveling on a Budget: Tips and Tricks',
//     author: 'Emily Davis',
//     date: '2024-03-12',
//     content: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
//     tags: ['Travel', 'Budget Travel', 'Tips'],
//   },
//   {
//     id: 7,
//     title: 'The Art of Photography: Capturing Moments',
//     author: 'Michael Lee',
//     date: '2024-03-13',
//     content: 'Culpa qui officia deserunt mollit anim id est laborum...',
//     tags: ['Photography', 'Art', 'Creativity'],
//   },
//   {
//     id: 8,
//     title: 'Fitness Journey: From Couch Potato to Gym Enthusiast',
//     author: 'Sarah Miller',
//     date: '2024-03-14',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     tags: ['Fitness', 'Exercise', 'Health'],
//   },
//   {
//     id: 9,
//     title: 'DIY Home Decor Projects',
//     author: 'Robert Turner',
//     date: '2024-03-15',
//     content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...',
//     tags: ['DIY', 'Home Decor', 'Crafts'],
//   },
//   {
//     id: 10,
//     title: 'Exploring the World of Science Fiction Literature',
//     author: 'Karen Brown',
//     date: '2024-03-16',
//     content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
//     tags: ['Science Fiction', 'Books', 'Literature'],
//   },
// ];

// // Example usage:
// console.log(blogData[0].title); // Output: Getting Started with Web Development

//=======================================================================================
// import React from "react";
// import "./BlogCard.scss";
// const BlogCard = (props) => {
//   const { title, content } = props;
//   //   id: 1,
//   // title: "Getting Started with Web Development",
//   // author: "John Doe",
//   // date: "2024-03-07",
//   // content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   // tags: ["Web Development", "HTML", "CSS", "JavaScript"],
//   return (
//     <div className="blogCard">
//       <h2>{title}</h2>
//       <p>{content}</p>
//     </div>
//   );
// };
// export default BlogCard;
// .blogCard {
//   text-align: center;
//   width: 300px;
//   background-color: beige;
//   border-radius: 10px;
//   h2 {
//     background-color: #00883355;
//   }
