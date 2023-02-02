import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nvelchatjncgupbwezot.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZWxjaGF0am5jZ3VwYndlem90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzNTU3MTUsImV4cCI6MTk4OTkzMTcxNX0.SqM_t2WJAEw9Vy0CQOrvdm42l9KbiNduA9QfYVEjN7o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
