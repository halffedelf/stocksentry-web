import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

// Essential for Node.js < 22: Polyfill WebSocket BEFORE any Supabase logic runs
if (typeof WebSocket === 'undefined') {
  (global as any).WebSocket = ws;
}

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false // Recommended for server-side environments
  }
});
