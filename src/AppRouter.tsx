import { Routes, Route } from "react-router"
import BaseAppLayout from "./components/layout/BaseAppLayout";
import HomePage from "./pages/Home";
import ApplicationDetialPage from "./pages/ApplicationDetail";

const AppRouter = () => {
    return <Routes>
        <Route element={<BaseAppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/application/:id" element={<ApplicationDetialPage />} />
        </Route>
    </Routes>
}

export default AppRouter;