// import "./App.css";

// import React,{ useEffect } from "react"; //*hooks
// import { useCookies } from "react-cookie"; // * cookies

// function App() {
//   const [cookies, setCookie] = useCookies(["user"]); // * cookies
//   useEffect(() => {
//     // ajax fetch
//     const fetchdata = async () => {
//       const res = await fetch("https://randomuser.me/api/");
//       const data = await res.json();
//       console.log(data);
//       const maindata = data.results;
//       console.log(maindata[0].email);
//       setCookie("Email", maindata[0].email, { path: "/" });
//     };
//     fetchdata();
//   }, []);
//   return (
//     <>
//       Hello World
//       {cookies.Email && <p>{cookies.Email}</p>}
//     </>
//   );
// }

// export default App;
import React, { useEffect } from 'react'; // hooks
import { useCookies } from "react-cookie"; 
import './App.css';

function App() {
  const [cookie, setCookie] = useCookies(['user']);


  useEffect(() => {
    // ajax fetch
    const fetchdata = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      // console.log(data);
      const maindata = data.results;
      console.log(maindata[0].email);
      // email of the user
      setCookie('Email',maindata[0].email,{path:'/'})
    }
    fetchdata()
  },[])
  return (
    <>
      Leanrning Cookie setup
      Cookie stored here is shown as :
      {
        cookie.Email && <p>{ cookie.Email}</p>
      }
    </>
  );
}

export default App;