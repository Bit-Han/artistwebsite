import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
	public: {
		Tables: {
			profiles: {
				Row: {
					id: string;
					email: string;
					full_name: string | null;
					phone: string | null;
					avatar_url: string | null;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id: string;
					email: string;
					full_name?: string | null;
					phone?: string | null;
					avatar_url?: string | null;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					email?: string;
					full_name?: string | null;
					phone?: string | null;
					avatar_url?: string | null;
					updated_at?: string;
				};
			};
			bookings: {
				Row: {
					id: string;
					user_id: string;
					service_name: string;
					service_price: string | null;
					appointment_date: string;
					appointment_time: string;
					tattoo_description: string;
					tattoo_size: string | null;
					tattoo_placement: string | null;
					status: "pending" | "confirmed" | "completed" | "cancelled";
					notes: string | null;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					service_name: string;
					service_price?: string | null;
					appointment_date: string;
					appointment_time: string;
					tattoo_description: string;
					tattoo_size?: string | null;
					tattoo_placement?: string | null;
					status?: "pending" | "confirmed" | "completed" | "cancelled";
					notes?: string | null;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					status?: "pending" | "confirmed" | "completed" | "cancelled";
					notes?: string | null;
					updated_at?: string;
				};
			};
			reviews: {
				Row: {
					id: string;
					user_id: string;
					booking_id: string;
					rating: number;
					comment: string | null;
					is_public: boolean;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					booking_id: string;
					rating: number;
					comment?: string | null;
					is_public?: boolean;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					rating?: number;
					comment?: string | null;
					is_public?: boolean;
					updated_at?: string;
				};
			};
			gallery: {
				Row: {
					id: string;
					title: string;
					description: string | null;
					image_url: string;
					category: string;
					is_featured: boolean;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					title: string;
					description?: string | null;
					image_url: string;
					category?: string;
					is_featured?: boolean;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					title?: string;
					description?: string | null;
					image_url?: string;
					category?: string;
					is_featured?: boolean;
					updated_at?: string;
				};
			};
		};
	};
};
