import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import { Toaster } from "react-hot-toast";
import { userAuthstore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";

function App() {
    const { user, isCheckingAuth, checkAuth } = userAuthstore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (isCheckingAuth) {
        return (
            <div className='h-screen'>
                <div className='flex justify-center items-center bg-black h-full'>
                    <Loader className='animate-spin text-red-600 size-10' />
                </div>
            </div>
        );
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
                    <Route path='/signup' element={!user ? <SignupPage /> : <Navigate to={"/"} />} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </>
    );
}

export default App; 