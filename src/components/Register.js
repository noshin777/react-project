// import React, { useEffect, useState } from "react";

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [address, setAddress] = useState("");
//     const [users, setUsers] = useState([]);

//     const registerUser = async(e) => {
//         e.preventDefault();
//         let result = await fetch("http://localhost:7000/api/auth/signup", {
//             method: "post",
//             body: JSON.stringify({ name, email, password, address }),
//             headers: {
//                 "Content-Type": "Application/json",
//             },
//         });
//         result = await result.json();
//         console.log(result);
//     };

//     const getUsersList = async() => {
//         let result = await fetch("http://localhost:7000/api/auth/list");
//         result = await result.json();
//         console.log(result);
//         setUsers(result);
//     };

//     useEffect(() => {
//         getUsersList();
//     }, []);

//     return ( <
//             div >
//             <
//             h1 > Register User < /h1>{" "} <
//             form >
//             Name: { " " } <
//             input name = "name"
//             onChange = {
//                 (e) => {
//                     setName(e.target.value);
//                 }
//             }
//             type = "text"
//             placeholder = "user name" /
//             >
//             { " " } <
//             br / >
//             Email: { " " } <
//             input name = "email"
//             onChange = {
//                 (e) => {
//                     setEmail(e.target.value);
//                 }
//             }
//             type = "email"
//             placeholder = "user email" /
//             >
//             { " " } <
//             br / >
//             Password: { " " } <
//             input name = "password"
//             onChange = {
//                 (e) => {
//                     setPassword(e.target.value);
//                 }
//             }
//             type = "password"
//             placeholder = "user password" /
//             >
//             { " " } <
//             br / >
//             Address: { " " } <
//             input name = "address"
//             onChange = {
//                 (e) => {
//                     setAddress(e.target.value);
//                 }
//             }
//             type = "text"
//             placeholder = "user address" /
//             >
//             { " " } <
//             br / >
//             <
//             button onClick = { registerUser } > Register < /button>{" "} < /
//             form > { " " } <
//             hr / > { " " } {
//                 /* <h1>Name: {name}</h1>
//                                                     <h1>Email: {email}</h1>
//                                                     <h1>Password: {password}</h1>
//                                                     <h1>Address: {address}</h1> */
//             } { " " } <
//             h1 > List of Users < /h1>{" "} <
//             table align = "center"
//             width = { "70%" }
//             cellSpacing = { 10 }
//             cellPadding = { 10 } >
//             <
//             tr style = {
//                 { backgroundColor: "blue", color: "white" }
//             } >
//             <
//             td > Sr.No. < /td> <td> Name </td > < td > Email < /td> <td> Password </td > { " " } <
//             td > Address < /td> <td> Operations </td > { " " } <
//             /tr>{" "} {
//             users.map((user, index) => {
//                 return ( <
//                     >
//                     <
//                     tr style = {
//                         { backgroundColor: "lightblue" }
//                     } >
//                     <
//                     td > { index + 1 } < /td> <td> {user.name} </td > { " " } <
//                     td > { user.email } < /td> <td> {user.password} </td > { " " } <
//                     td > { user.address } < /td>{" "} <
//                     td >
//                     <
//                     button style = {
//                         {
//                             backgroundColor: "green",
//                             marginRight: "10px",
//                             padding: "5px 10px",
//                             borderRadius: "5px",
//                             border: "none",
//                             color: "white",
//                         }
//                     } > { " " }
//                     Edit { " " } <
//                     /button>{" "} <
//                     button style = {
//                         {
//                             backgroundColor: "red",
//                             padding: "5px 10px",
//                             borderRadius: "5px",
//                             border: "none",
//                             color: "white",
//                         }
//                     } > { " " }
//                     Delete { " " } <
//                     /button>{" "} < /
//                     td > { " " } <
//                     /tr>{" "} < /
//                     >
//                 );
//             })
//         } { " " } <
//         /table>{" "} < /
//         div >
// );
// };

// export default Register;