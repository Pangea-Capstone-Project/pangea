import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMaintenanceRequestsAsync,
  selectMaintenanceRequests,
  deleteMaintenanceRequestAsync
} from "./allMaintenanceRequestSlice";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {FaHome} from "react-icons/fa";


const WorkOrdersContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const WorkOrderItems = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-size: 9rem;
`;

const WorkOrderFont = styled.p`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
  color: black;
`;

const WorkOrder = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #eee;
  box-shadow: 4px 4px 20px rgba(1, 2, 3, 0.2);
  &.medium-severity {
    background-color: #f9a51a;
  }
  &.high-severity {
    background-color: #f92a2a;
  }
`;

const WorkOrdersSection = styled.section`
  background: linear-gradient(
    90deg,
    rgba(246, 246, 246, 1) 0%,
    rgba(214, 228, 240, 1) 44%,
    rgba(30, 86, 160, 1) 79%,
    rgba(22, 49, 114, 1) 99%
  );
  background-color: #fff;
  flex: 7;
  width: 50%;
  padding: 20px;
  box-shadow: 4px 4px 20px rgba(1, 2, 3, 0.2);

  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
`;

const MaintenanceRequest = () => {

  const maintenanceRequests = useSelector(selectMaintenanceRequests);
  const dispatch = useDispatch();

  // filter for workorders 
  const [holdRequest, setHoldRequest] = useState([])
  const urlParams = useParams()
  

  useEffect(() => {
    dispatch(fetchMaintenanceRequestsAsync());

  }, [dispatch]);

  const handleDelete = async (maintenanceRequestId) =>{
    await dispatch(deleteMaintenanceRequestAsync(maintenanceRequestId));
    dispatch(fetchMaintenanceRequestsAsync());
  }
  // checking url for unit id and filter workorders by unit id
  useEffect(() => {
  if('id' in urlParams){
    setHoldRequest(maintenanceRequests.filter((request) => {
      return request.unit && (request.unit.id === urlParams.id)
    }))
  } else{
    setHoldRequest(maintenanceRequests)
  }
},[maintenanceRequests])


  return (
    <WorkOrdersContainer>
      <Sidebar />
      <WorkOrdersSection>
        {maintenanceRequests.map((maintenanceRequest) => (
          <WorkOrder
          className={`
          ${
            maintenanceRequest.severity.toLowerCase().charAt(0) === "l"
            ? ""
            : maintenanceRequest.severity.toLowerCase().charAt(0) === "m"
            ? "medium-severity"
            : "high-severity"
          }
          `} 
          >
            <WorkOrderItems>
          <FaHome /># {maintenanceRequest.unitId}
            <Link to={`/workorders/${maintenanceRequest.id}`}>
            <WorkOrderFont>Priority: {maintenanceRequest.severity}</WorkOrderFont>
            <WorkOrderFont>Type: {maintenanceRequest.type}</WorkOrderFont>
            </Link>
            <button onClick={() => handleDelete(maintenanceRequest.id)}>Delete</button>
        </WorkOrderItems>
          </WorkOrder>
        ))}
      </WorkOrdersSection>
    </WorkOrdersContainer>
  );
};

export default MaintenanceRequest;