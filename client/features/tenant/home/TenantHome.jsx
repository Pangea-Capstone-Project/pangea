import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { logout, me } from "../../../app/store";
import { selectMe } from "../../auth/authSlice";
import {
  fetchTenantAsync,
  selectTenant,
} from "../../allTenants/singleTenantSlice";
import Sidebar from "../tenantSidebar/Sidebar.jsx";
const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
`;
const Title = styled.h1`
  color: #163172;
  margin-bottom: -0.4rem;
`;

const RentBox = styled.div`
  border: 3px solid #1e56a0;
  color: #1e56a0;
  border-radius: 20px;
  width: 45vw;
  height: 15vh;
  margin: 2rem;
  display: flex;
`;
const Section = styled.section`
  flex: 6;
  width: 50rem;
  height: 100%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;

const MonthlyRentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-right: 2px solid #1e56a0;
`;
const DueRentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const MonthlyAmount = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;
const DueAmount = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;
const AllButtons = styled.button`
  background-color: #1e56a0;
  color: white;
  border: none;
  border-radius: 20px;
  width: 30vw;
  height: 5vh;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

//dummy daters
const tenantName = "Pepe Silvia";
const tenantUnit = "202";

const TenantHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rentDue, setRentDue] = useState(0);
  const [rent, setRent] = useState(100);
  const thisUser = useSelector(selectMe);
  const thisTenant = useSelector(selectTenant);
  console.log(`thisUser`, thisUser);
  console.log(`thisTenant`, thisTenant);
  console.log(thisTenant);
  useEffect(() => {
    dispatch(fetchTenantAsync(thisUser.id));
  }, []);

  // function increaseRentDueClicked() {
  //     setRentDue(rentDue + 1000)
  // }
  // function increaseRentClicked() {
  //     setRent(rent + 1000)
  // }

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };
  //rentDue turns green if the tenant is caught up on rent, aka. $0.

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <Background>
      <Sidebar />
      <Section>
        <Title>
          {greeting}, {thisTenant.name}
        </Title>
        <Title>Unit #{thisTenant.unitIdToAssociateTenant}</Title>
        <RentBox>
          <MonthlyRentBox>
            <h2>Monthly Rent</h2>
            <MonthlyAmount>${thisTenant.rentAmount}</MonthlyAmount>
          </MonthlyRentBox>
          <DueRentBox>
            <h2>Rent Due</h2>
            <DueAmount
              style={{
                color: rentDue === 0 ? "green" : "red",
              }}
            >
              ${rentDue}
            </DueAmount>
          </DueRentBox>
        </RentBox>
        <Link to={"/makeapayment"}>
          <AllButtons>Make A Payment</AllButtons>
        </Link>
        <Link to={"/pastpayments"}>
          <AllButtons>Past Payments</AllButtons>
        </Link>
        <Link to={"/maintenancereq"}>
          <AllButtons>Submit Maintenance Request</AllButtons>
        </Link>
        <AllButtons onClick={logoutAndRedirectHome}>Log Out</AllButtons>

        {/* <h2 onClick={increaseRentClicked}>Increase Rent Test</h2>
            <h2 onClick={increaseRentDueClicked}>Increase Rent Due Test</h2> */}
      </Section>
    </Background>
  );
};

export default TenantHome;
