import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Link } from "react-router-dom";
import React from "react";
import { logout } from '../../app/store.js';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/');
};
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Pangea</span>
        </Link>
      </div>
        <button onClick={logoutAndRedirectHome}> Logout </button>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">USERS</p>
          <Link to="/tenants" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/property" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Properties</span>
            </li>
          </Link>
          <Link to="/workorders" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Maintenance Requests</span>
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <Link to="/profile-page" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/signup-landlord" style={{ textDecoration: "none" }}>
            <li>
              <AdminPanelSettingsOutlinedIcon className="icon" />
              <span>Update Account</span>
            </li>
          </Link>
          <Link to="/add-property" style={{ textDecoration: "none" }}>
          <li>
            <AddHomeWorkOutlinedIcon className="icon" />
            <span>Add Properties</span>
          </li>
          </Link>
          <Link to="/add-unit" style={{ textDecoration: "none" }}>
          <li>
            <AddHomeOutlinedIcon className="icon" />
            <span>Add Unit</span>
          </li>
          </Link>
          <Link to="/add-tenant-unit" style={{ textDecoration: "none" }}>
          <li>
            <CoPresentIcon className="icon" />
            <span>Add Tenant to Unit</span>
          </li>
          </Link>
          <Link to="/addRent" style={{ textDecoration: "none" }}>
          <li>
            <AccountBalanceWalletIcon className="icon" />
            <span>Manage Payments</span>
          </li>
          </Link>
          <Link to="/remove" style={{ textDecoration: "none" }}>
          <li>
            <GroupRemoveIcon className="icon" />
            <span>Remove</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
