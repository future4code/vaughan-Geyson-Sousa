import React from "react";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import HomePage from "./pages/HomePage/HomePage";
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage";
import ListTripPage from "./pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage";
import { BrowserRouter , Route, Routes } from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>
    <Routes>
        <Route
            path={"/"}
            element={<HomePage />} />
        <Route
            path={"/trips/list"}
            element={<ListTripPage />} />
        <Route
            path={"/trips/application"}
            element={<ApplicationFormPage />} />
        <Route
            path={"/login"}
            element={<LoginPage />} />
        <Route
            path={"/admin/trips/list"}
            element={<AdminHomePage />} />
        <Route
            path={"/admin/trips/:id"}
            element={<TripDetailsPage />} />
        <Route
            path={"/admin/trips/create"}
            element={<CreateTripPage />} />
    </Routes>
</BrowserRouter>
);
}

export default App;
