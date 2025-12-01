import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import LayOuts from "../layout/LayOuts";
import Dashboard from "../pages/dashboard/Dashboard";
import TurfManagement from "../pages/turfmanagement/TurfManagement";
import ClassesManagement from "../pages/classesmanagement/ClassesManagement";
import CoachesManagement from "../pages/coachesmanagement/CoachesManagement";
import BookingManagement from "../pages/bookingmanagement/BookingManagement";
import SportsCategory from "../pages/sportscategory/SportsCategory";
import Transaction from "../pages/transactions/Transaction";
import WalletandRewards from "../pages/walletandrewards/WalletandRewards";
import OffersManagement from "../pages/offermanagement/OffersManagement";
import Reports from "../pages/reports/Reports";
import { User } from "lucide-react";
import Roles from "../pages/settings/roles/Roles";
import Users from "../pages/settings/user/Users";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import EditUser from "../pages/settings/user/EditUser";
import EditRoles from "../pages/settings/roles/EditRoles";
import Profile from "../pages/dashboard/profile/Profile";
import ViewTransaction from "../pages/transactions/ViewTransaction";
import ViewTurf from "../pages/turfmanagement/ViewTurf";
import ViewBookingManagement from "../pages/bookingmanagement/ViewBookingManagement";
import ViewCoaches from "../pages/coachesmanagement/ViewCoaches";
import ViewClasses from "../pages/classesmanagement/ViewClasses";

const Approutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<LayOuts />}>
            <Route path="/dashboard">
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/turfmanagement">
              <Route index element={<TurfManagement />} />
              <Route path="viewturf" element={<ViewTurf />} />
            </Route>
            <Route path="/classesmanagement">
              <Route index element={<ClassesManagement />} />
              <Route path="viewclassesmanagement" element={<ViewClasses />} />
            </Route>
             <Route path="/coachesmanagement">
              <Route index element={<CoachesManagement />} />
              <Route path="viewcoachesmanagement" element={<ViewCoaches />} />
            </Route>
            <Route path="/bookingmanagement">
              <Route index element={<BookingManagement />} />
              <Route
                path="viewbookingmanagement"
                element={<ViewBookingManagement />}
              />
            </Route>
            <Route
              path="/sportscategorymanagement"
              element={<SportsCategory />}
            />
            <Route path="/transactions">
              <Route index element={<Transaction />} />
              <Route path="viewtransactions" element={<ViewTransaction />} />
            </Route>
            <Route path="/walletandrewards" element={<WalletandRewards />} />
            <Route path="/offersmanagement" element={<OffersManagement />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings">
              <Route path="users">
                <Route index element={<Users />} />
                <Route path="edituser" element={<EditUser />} />
              </Route>
              <Route path="roles">
                <Route index element={<Roles />} />
                <Route path="editroles" element={<EditRoles />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approutes;
