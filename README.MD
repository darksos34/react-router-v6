# Admin Control Panel Frontend 
- ReactJs v6
- React Router

##Client
- Updated **Client** on 23-11-2021
- Created **Client** on 21-11-2021

[Source react router]( https://reactrouter.com/docs/en/v6/getting-started/tutorial)

For react-router-dom v5
https://v5.reactrouter.com/web/api/Redirect

import { Redirect } from 'react-router-dom';

<Redirect to="/somewhere/else" />

<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>

For react-router-dom v6, simply replace Redirect with Navigate

https://reactrouter.com/docs/en/v6/getting-started/overview
import { Navigate } from 'react-router-dom';

{ component: () => <Navigate to="/404" /> }

import {
    Routes,
    Route ,
    Navigate
  } from "react-router-dom";

return (
            <Routes>
                <Route path='/products/:id' element={<Store/>} />

                 //replace Redirect with Navigate
                <Route path="*" element={<Navigate to ="/products" />}/>
            </Routes>

    );