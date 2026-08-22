// VORY V — Configuration Database
window.VORY_SUPABASE_URL = 'https://lkprrffyitfdwreadmpu.supabase.co';
window.VORY_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrcHJyZmZ5aXRmZHdyZWFkbXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDcxMzksImV4cCI6MjEwMjk4MzEzOX0.2qPDG8y1zuPZzCKnzLqrGPcXxwglT87yNjJa-J65VuE';

window.vorySupabaseConfigured = function () {
  return !window.VORY_SUPABASE_URL.includes('TON-PROJET') &&
         !window.VORY_SUPABASE_KEY.includes('TA_CLE');
};
