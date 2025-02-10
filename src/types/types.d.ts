// Type for the response structure
export interface ApiResponse {
    error: boolean;
    message: string;
    data: ApiData;
  }
  
  // Type for the "data" object within the response
  export interface ApiData {
    user: User;
    totalDeposit: number;
    totalInvestments: number;
    totalWithdrawals: number;
  }
  
  // Type for the user object within the "data"
  export interface User {
    id: number;
    name: string;
    email: string;
    country_code: string;
    phone: string;
    email_verified_at: string | null; // Dates can be strings or null if not present
    verification_code: string | null;
    phone_verified: number; // Can be 0 or 1, representing false/true
    password: string; // You might want to ignore or exclude sensitive data
    two_factor_secret: string | null;
    two_factor_recovery_codes: string | null;
    address: string;
    referral_code: string;
    is_admin: number; // Can be 0 or 1, representing false/true
    active: number; // Can be 0 or 1, representing false/true
    remember_token: string;
    current_team_id: number | null;
    profile_photo_path: string | null;
    created_at: string;
    updated_at: string;
    upline: string;
  }
  
  