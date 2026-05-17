import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

if (typeof WebSocket === "undefined") {
  global.WebSocket = ws;
}
const supabaseUrl = "https://xidwgprhuhfbsswzqtfz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpZHdncHJodWhmYnNzd3pxdGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MjIzNjEsImV4cCI6MjA5Mzk5ODM2MX0.udFQQR0TZg3WuIYGkHCCuig1A3MCNs86JgymUAK3L7Q";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
    // Recommended for server-side environments
  }
});

export { supabase as s };
