// VORY V — Configuration Supabase
// Remplace uniquement ces deux valeurs après avoir créé ton projet Supabase.
window.VORY_SUPABASE_URL = 'https://TON-PROJET.supabase.co';
window.VORY_SUPABASE_KEY = 'TA_CLE_PUBLISHABLE_OU_ANON';

window.vorySupabaseConfigured = function () {
  return !window.VORY_SUPABASE_URL.includes('TON-PROJET') &&
         !window.VORY_SUPABASE_KEY.includes('TA_CLE');
};
