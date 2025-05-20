import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Reemplaza con tu URL y clave pública de tu proyecto Supabase
const supabaseUrl = "https://lqnimhwbcfplyfnfmbzr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxbmltaHdiY2ZwbHlmbmZtYnpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NjA0NzUsImV4cCI6MjA2MTUzNjQ3NX0.4kUfbTEDWCnS5mdyD8Lsv8Ker8FuuWeWirA3x22hGuA";

export const supabase = createClient(supabaseUrl, supabaseKey);
