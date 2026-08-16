import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import { getAllJobApplication } from '../queries/JobApplication'

const useJobApplication = () => {
    return useQuery(getAllJobApplication())
}

export {
    useJobApplication
}