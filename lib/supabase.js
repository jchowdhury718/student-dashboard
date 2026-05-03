import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
  if (typeof window === 'undefined') {
    // Prevent running on server during build
    return null
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    console.error('Missing Supabase env vars')
    return null
  }

  return createClient(url, key)
}
