import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

if (typeof WebSocket === "undefined") {
  global.WebSocket = ws;
}
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
    // Recommended for server-side environments
  }
});

export { supabase as s };
