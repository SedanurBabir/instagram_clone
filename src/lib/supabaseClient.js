import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lhnaporjxnihtxruqhih.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobmFwb3JqeG5paHR4cnVxaGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTM4MzAsImV4cCI6MjA1MzEyOTgzMH0.3Yq_1q_aLHPEfOBVp2FN27YQqzQwtSrMImlV4i_zZak'

export const supabase = createClient(supabaseUrl, supabaseKey)