import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import crypto from 'crypto';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const data = await request.json();
    const { path, referrer, type, viewId } = data;
    
    const userAgent = request.headers.get('user-agent') || '';
    const ip = clientAddress || request.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0';
    
    // Privacy-safe Daily Hash
    const salt = new Date().toISOString().split('T')[0] + (process.env.TRACKER_SECRET || 'default_secret');
    const dailyHash = crypto.createHash('sha256').update(ip + userAgent + salt).digest('hex');

    if (type === 'pageview') {
      let country = 'Unknown';
      let city = 'Unknown';
      
      // Basic Geo Lookup (In production, use a more robust/paid service)
      try {
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city`);
        const geoData = await geoResponse.json();
        if (geoData.status === 'success') {
          country = geoData.country;
          city = geoData.city;
        }
      } catch (e) {
        console.error('Geo lookup failed', e);
      }

      const { error } = await supabase
        .from('page_views')
        .insert({
          id: viewId,
          daily_hash: dailyHash,
          path,
          referrer: referrer || 'Direct',
          country,
          city,
          duration_seconds: 0,
          last_active_at: new Date().toISOString()
        });
        
      if (error) throw error;
    } else if (type === 'heartbeat') {
      const { error } = await supabase
        .from('page_views')
        .update({ 
          duration_seconds: data.duration,
          last_active_at: new Date().toISOString()
        })
        .eq('id', viewId);

      if (error) throw error;
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
