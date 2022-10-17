import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Calendar } from "./pages/Calendar/Calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;

// import firebase from "./firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
// import { auth } from "./firebase";

// function App() {
//   const [userData, setUserData] = useState(null);

//   function handleGoogleLogin() {
//     const provider = new GoogleAuthProvider(); // provider를 구글로 설정
//     signInWithPopup(auth, provider) // popup을 이용한 signup
//       .then((data) => {
//         setUserData(data.user); // user data 설정
//         console.log(data); // console로 들어온 데이터 표시
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   return (
//     <div>
//       <button onClick={handleGoogleLogin}>Login</button>
//       {userData ? userData.displayName : null}
//     </div>
//   );
// }

// export default App;
