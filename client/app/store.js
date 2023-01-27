import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import maintenanceRequestsReducer from '../features/maintenanceRequest/allMaintenanceRequestSlice';
import maintenanceRequestReducer from '../features/maintenanceRequest/singleMaintenanceRequestSlice';
import tenantsReducer from '../features/allTenants/allTenantsSlice';
const store = configureStore({
  reducer: { 
    auth: authReducer,
    // all maintenanceRequests
    maintenanceRequests: maintenanceRequestsReducer,
    // One maintenanceRequest
    maintenanceRequest: maintenanceRequestReducer,
    // all tenants
    tenants: tenantsReducer,
  
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
