import React from "react";
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

let HomePage = lazy(() => import ('../components/HomePage'));
let ErrorPage = lazy(() => import ('../components/ErrorPage'));
let Presh = lazy(() => import('../components/Presh'));

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="presh" element={<Presh />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;
