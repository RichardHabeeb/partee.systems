import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ddjwumfecildyyfacelj.supabase.co";
const SUPABASE_ANON_KEY ="sb_publishable_qhWTx08H1H_7GAS_RnPxMQ_wZsxy_Gp";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

