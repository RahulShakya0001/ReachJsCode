import React from "react";

const UserContext = React.createContext(); // Context gives u provider 


export default UserContext;
// After wrapping the data into the UserContext, it becomes a Providers.
// {/* <UserContext>
//     <Login />
//     <Card><Card/>
// </UserContext > */}