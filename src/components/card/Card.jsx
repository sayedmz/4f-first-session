import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const Card = (props) => {
  const { id, firstName, lastName, age, color, likeSports, onClick } = props;

  return (
    <div className="appCard">
      <h1> {id}</h1>
      <div className="app-container">
        Hello My name is {firstName} {lastName} ,
        <p>
          I am <strong>{age}</strong> years old
        </p>
        <p style={{ color: color }}>I wear a {color} jacket</p>
        <div>
          {likeSports ? "I do like playing sports" : "I prefer to stay home"}
        </div>
      </div>
      <Button variant="outlined" onClick={onClick}>
        Click Me
      </Button>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  age: PropTypes.string,
  color: PropTypes.string,
  likeSports: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Card;
// هنا هي قائمة بأنواع PropTypes المتاحة في مكتبة PropTypes الخاصة بـ React:

//     PropTypes.array: تستخدم للتأكد من أن القيمة الممررة هي مصفوفة.

//     PropTypes.bool: تستخدم للتأكد من أن القيمة الممررة هي من نوع boolean (true أو false).

//     PropTypes.func: تستخدم للتأكد من أن القيمة الممررة هي دالة (function).

//     PropTypes.number: تستخدم للتأكد من أن القيمة الممررة هي رقم.

//     PropTypes.object: تستخدم للتأكد من أن القيمة الممررة هي كائن (object).

//     PropTypes.string: تستخدم للتأكد من أن القيمة الممررة هي نص (string).

//     PropTypes.symbol: تستخدم للتأكد من أن القيمة الممررة هي من نوع symbol.

//     PropTypes.node: تستخدم للتأكد من أن القيمة الممررة يمكن أن تكون تعبيرًا JSX، نصًا أو عنصرًا React.

//     PropTypes.element: تستخدم للتأكد من أن القيمة الممررة هي عنصر React ويجب أن يحتوي على واحد فقط.

//     PropTypes.instanceOf(Constructor): تستخدم للتأكد من أن القيمة الممررة هي من نوع معين (مثل Date أو CustomClass).

//     PropTypes.oneOf(array): تستخدم للتأكد من أن القيمة الممررة هي واحدة من قيم محددة في مصفوفة معينة.

//     PropTypes.oneOfType(array): تستخدم للتأكد من أن القيمة الممررة تتطابق مع أي من أنواع البيانات الموضحة في مصفوفة.

//     PropTypes.arrayOf(type): تستخدم للتأكد من أن كل عنصر في المصفوفة هو من نوع معين.

//     PropTypes.objectOf(type): تستخدم للتأكد من أن كل قيمة في كائن معين هي من نوع معين.

//     PropTypes.shape(object): تستخدم للتأكد من أن القيمة الممررة تطابق شكل معين من الخصائص (properties) المحددة.

//     PropTypes.exact(object): تستخدم للتأكد من أن القيمة الممررة تطابق بدقة الشكل المحدد ولا تحتوي على خصائص إضافية غير محددة.

//     PropTypes.any: تستخدم للسماح بأي نوع من الأنواع السابقة.

// هذه هي الأنواع الرئيسية المتاحة في PropTypes في React. كل نوع يُستخدم للتحقق من نوع معين من البيانات الممررة إلى الـ props في components React لضمان صحتها وتجنب الأخطاء أثناء التطوير.

//============================================================
// 1ere methode

// const Card = (props) => {
//   return (
//     <div className="appCard">
//       <h1>{props.id}</h1>
//       <br />
//       <div className="app-container1">
//         Hello my mane is {props.firstName} name {props.lastName} name ,
//         <div>I am {props.age} years old</div>
//         <div style={{ color: props.color }}>I wear {props.color} jacket</div>
//         <div>
//           {props.likeSports === true
//             ? "i like playnig sports"
//             : "i prefer to stay"}
//         </div>
//       </div>
//       <Button variant="outlined" onClick={btn1}>
//         Clik me
//       </Button>
//     </div>
//   );
// };
