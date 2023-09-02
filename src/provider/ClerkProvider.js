import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/home/Home";
import ProtectedPage from "../ProtectedPage";
import Layout from "../pages/Layout";



export default function ClerkProviderWithRoutes() {

     
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
   
   const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
   
    const navigate = useNavigate();
   
    return (
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
</Route>
          <Route

            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />

          <Route
            path="/protected"
            element={
            <>
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
               <SignedOut>
                <RedirectToSignIn />
             </SignedOut>
            </>
            }
          />
        </Routes>
      </ClerkProvider>
    );
  }