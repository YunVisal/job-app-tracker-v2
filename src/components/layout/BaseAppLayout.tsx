import { Fragment } from "react/jsx-runtime"
import { Box } from "@mui/material"
import { Outlet } from "react-router"
import CustomAppBar from "./CustomAppBar"

const BaseAppLayout = () => {
    return <Fragment>
        <CustomAppBar />
        <Box
            component={'main'}
            sx={{ flex: 1, padding: '18px 6px', display: 'flex' }}>
            <Outlet />
        </Box>
    </Fragment>
}

export default BaseAppLayout;