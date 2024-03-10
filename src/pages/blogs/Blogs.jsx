import React from "react";
import "./Blogs.scss";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
const Blogs = () => {
  let navigate = useNavigate();
  const persons = [
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
      lastName: "joo",
      age: 60,
      cloths: { jacket: "red" },
    },
  ]; //array
  return (
    <div className="blogs">
      {persons.map((person) => (
        <>
          <Card
            id={person?.id}
            firstName={person?.name}
            lastName={person?.lastName}
            age={person?.age}
            color={person?.cloths?.jacket}
            likeSports
            onClick={() => navigate("/Blog-details/" + person?.id)}
          />
        </>
      ))}
    </div>
  );
};

export default Blogs;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { People } from "../../../utils/dummyData";
// import Card from "../../../components/card/Card";
// const BlogDetails = () => {
//   const params = useParams();
//   const { blog_id } = params;
//   const filteredUser = People.filter((el) => el.id === +blog_id);
//   return (
//     <div>
//       {filteredUser.length ? (
//         filteredUser.map((person) => (
//           <>
//             <Card
//               id={person?.id}
//               firstName={person?.name}
//               lastName={person?.lastName}
//               age={person?.age}
//               color={person?.cloths?.jacket}
//               likeSports
//             />
//           </>
//         ))
//       ) : (
//         <h1>No User Found, Try different param </h1>
//       )}
//     </div>
//   );
// };
// export default BlogDetails;
//====================================================================
// import React from "react";
// import { People } from "../../utils/dummyData";
// import Card from "../../components/card/Card";
// import "./Blogs.scss";
// import { useNavigate } from "react-router";
// const Blogs = () => {
//   let navigate = useNavigate();
//   return (
//     <div className="blogs">
//       {People.map((person) => (
//         <>
//           <Card
//             id={person?.id}
//             firstName={person?.name}
//             lastName={person?.lastName}
//             age={person?.age}
//             color={person?.cloths?.jacket}
//             likeSports
//             onClick={() => navigate("/blog-details/" + person?.id)}
//           />
//         </>
//       ))}
//     </div>
//   );
// };
// export default Blogs;
