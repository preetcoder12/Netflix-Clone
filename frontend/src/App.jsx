import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/loginPage";
import SignupPage from "./Pages/signupPage";
import { Toaster } from "react-hot-toast";
import { userAuthstore } from "./Store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import WatchPage from "./Pages/WatchPage";
import SearchPage from "./Components/SearchPage";
import History from "./Components/History";
import NotFoundPage from "./Pages/notFound";
import HomePage from "./pages/home/homePage";
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
                    <Route path='/watch/:id' element={!user ? <Navigate to={"/login"} /> : <WatchPage />} />
                    <Route path='/search' element={!user ? <Navigate to={"/login"} /> : <SearchPage />} />
                    <Route path='/history' element={!user ? <Navigate to={"/login"} /> : <History />} />
                    <Route path='/*' element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </>
    );
}

export default App; 