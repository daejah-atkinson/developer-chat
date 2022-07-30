import React, { useEffect } from 'react';
import { useAuth, useLoginWithRedirect } from '@frontegg/react';


function Auth(){
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

//   useEffect(() => {
//     if (!isAuthenticated) {
//   loginWithRedirect();
//     }
//   }, [isAuthenticated, loginWithRedirect]);

//   const logout = () => {
//     const baseUrl = ContextHolder.getContext().baseUrl;
//     window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
//   };
 return (
     <div>
 { isAuthenticated ? (
     <div>
     <div>
       <img src={user?.profilePictureUrl} alt={user?.name}/>
     </div>
     <div>
       <span>Logged in as: {user?.name}</span>
     </div>
     <div>
       {/* <button onClick={() => logout()}>Click to logout</button> */}
     </div>
   </div>
 ) : (
     <div>
     <button onClick={() => loginWithRedirect()}>Click me to login</button>
   </div>
 )}
</div>
 )
}

export default Auth;