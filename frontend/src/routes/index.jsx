import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AddPassword from '../components/AddPassword';
import DeletePassword from '../components/DeletePassword';
import EditPassword from '../components/EditPassword';
import ListPassword from '../components/ListPasswords';
import SideBar from '../components/SideBar';
import HomePage from '../Pages/HomePage';
import { DashBoardStyle, Page } from './styles';

const RoutesApp = () => { 
  return (
    <BrowserRouter>
     <DashBoardStyle>
        <SideBar />
        <Page>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/list-password" element={<ListPassword />} />
            <Route path="/edit-password" element={<EditPassword />} />
            <Route path="/delete-password" element={<DeletePassword />} />
            <Route path="/add-password" element={<AddPassword />} />
            <Route
              path="*"
              element={<Navigate to="/home" replace />}
            />
          </Routes>  
        </Page>
      </DashBoardStyle>  
    </BrowserRouter>

  )
}

export default RoutesApp;
