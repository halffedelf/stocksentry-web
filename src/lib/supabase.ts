import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
  global: {
    fetch: (...args) => fetch(...args),
  },
});

// Since Supabase might try to use WebSockets in Node.js 20, we ensure a global WebSocket exists
if (typeof WebSocket === 'undefined') {
  (global as any).WebSocket = ws;
}
