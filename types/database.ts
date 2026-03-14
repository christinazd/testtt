export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image_url: string | null;
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export type MenuItemInsert = Omit<MenuItem, 'id' | 'created_at' | 'updated_at'>;
export type MenuItemUpdate = Partial<Omit<MenuItem, 'id' | 'created_at' | 'updated_at'>>;
