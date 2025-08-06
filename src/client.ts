import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl: string = 'https://nowhixmybdqrbhqnnhtx.supabase.co';
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vd2hpeG15YmRxcmJocW5uaHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODg4MDgsImV4cCI6MjA2ODc2NDgwOH0.J67MejsWn335i9Icr8PysRUyWlSBBR4f4GtOOx7QAr8';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
