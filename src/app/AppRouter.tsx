import { createHashRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Root from '../pages/Root'

const AppRouter = () => {
    const router = createHashRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} />
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter