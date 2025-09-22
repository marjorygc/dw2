import { createClient } from "@supabase/supabase-js"

const URL = VITE_SUPABASE_URL
const KEY = VITE_SUPABASE_KEY

export const supabase = createClient(URL, KEY)