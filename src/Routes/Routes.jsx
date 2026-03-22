import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Loading from '../utilities/Loading/Loading';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch('/data/AppData.json');
          if (!res.ok) throw new Error("Failed to fetch data");
          return res.json();
        },
        path: "/",
        Component: Home,
        HydrateFallback: ()=> <div><Loading></Loading></div>

      },
      {
        path: "apps",
        loader: ()=> fetch('/data/AppData.json'),
        Component: Apps,
      },
      {
        path: "apps/:appId",
        loader:()=>fetch('/data/AppData.json'),
        Component: AppDetails,
        HydrateFallback: ()=> <div><Loading></Loading></div>
      }
    ]
  },
]);   