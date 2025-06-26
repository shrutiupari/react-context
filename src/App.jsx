// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import BlobPage from "./components/BlobPage";
import ContentComponent from "./components/ContentComponent";
import PostComponent from "./components/PostComponent";
import { ThemeProvider } from "./context/ThemeProvider";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import MessageContext from "./context/MessageContext";
// import { useContext } from "react";
// import UserInfoContext from "./context/userInfoContext";

export default function App() {
    // const message = "Hello World";
    // const userInfo = { username: "Admin", isAdmin: true };
    return (
        <>
            {/* <MessageContext.Provider value={message}>
                <ComponentA />
            </MessageContext.Provider> */}
            {/* <UserInfoContext.Provider value={userInfo}>
                <BlobPage />
            </UserInfoContext.Provider> */}
            {/* <ThemeProvider>
                <ContentComponent></ContentComponent>
            </ThemeProvider> */}
            <PostComponent></PostComponent>
        </>
    );
}

// function ComponentA() {
//     return <ComponentB />;
// }

// function ComponentB() {
//     const message = useContext(MessageContext);
//     return <div> Message: {message}</div>;
// }
