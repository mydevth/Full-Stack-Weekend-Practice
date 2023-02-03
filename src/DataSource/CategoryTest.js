// import { useEffect, useState } from "react";
// import supabase from "../supabase";

// function CategoryTest() {
//   const [cats, setCats] = useState([]);
//   useEffect(function () {
//     async function loadCats() {
//       const { data: CATEGORIES, error } = await supabase
//         .from("CATEGORIES")
//         .select("*");

//       setCats(cats);

//       console.log(CATEGORIES);
//     }
//     loadCats();
//   }, []);

//   return <div>CategoryTest</div>;
// }
// export default CategoryTest;
