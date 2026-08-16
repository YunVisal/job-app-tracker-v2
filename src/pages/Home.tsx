import { Box, CircularProgress } from '@mui/material';
import { useJobApplication } from "../hooks/UseJobApplication";
import { Fragment } from 'react';
import JobApplicationTable from '../components/JobApplicationTable';

const HomePage = () => {
    const { data: jobApplication, isLoading, isError } = useJobApplication();

    return <Fragment>
        {isLoading && <Loading />}
        {!isLoading && <JobApplicationTable jobApplications={jobApplication ?? []} />}
    </Fragment>
}

const Loading = () => {
    return <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress aria-label="Loading…" />
    </Box>
}

export default HomePage;