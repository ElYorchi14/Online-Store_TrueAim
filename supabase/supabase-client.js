import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Reemplaza con tu URL y clave pública de tu proyecto Supabase
const supabaseUrl = "https://TU_URL_DE_SUPABASE.supabase.co";
const supabaseKey = "TU_CLAVE_PUBLICA_ANON";

export const supabase = createClient(supabaseUrl, supabaseKey);
