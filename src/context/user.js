import React, { useState } from "react";

const UserContext= React.createContext()

function UserProvider({children}){
    const [user, setUser]=useState(null)

    // const currentUser = {
    //     name: "Mulindi",
    //     interests: ["Coding", "Biking", "Words ending in 'ing'"],}
   // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}