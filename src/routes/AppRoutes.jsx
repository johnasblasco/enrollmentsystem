import React from 'react'
import { useRoutes } from 'react-router-dom'
import AdmissionHome from '../pages/admission/admissionHome'
import PersonalInformation from '../pages/admission/pages/PersonalInformation'
import Home from '../pages/Home'
const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/admission',
            element: <AdmissionHome />
        },
        {
            path: '/admission/personal-information',
            element: <PersonalInformation />
        }
    ])
    return routes;
}

export default AppRoutes
