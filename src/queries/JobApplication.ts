import { supabase } from "../utils/supabase"

const getAllJobApplication = () => {
    return supabase
        .schema('jat')
        .from('job_applications')
        .select('*', { count: 'exact' })
        .order('applied_at', { ascending: false })
}

export {
    getAllJobApplication
}