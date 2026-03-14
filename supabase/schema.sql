-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to update updated_at
CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON menu_items
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to menu items
CREATE POLICY "Allow public read access to menu items"
  ON menu_items
  FOR SELECT
  USING (true);

-- Policy: Allow authenticated users to insert menu items (admin only)
CREATE POLICY "Allow authenticated users to insert menu items"
  ON menu_items
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Allow authenticated users to update menu items (admin only)
CREATE POLICY "Allow authenticated users to update menu items"
  ON menu_items
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Allow authenticated users to delete menu items (admin only)
CREATE POLICY "Allow authenticated users to delete menu items"
  ON menu_items
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);
CREATE INDEX IF NOT EXISTS idx_menu_items_is_available ON menu_items(is_available);

-- Note: Storage bucket 'menu-images' needs to be created in Supabase Dashboard
-- Go to Storage > Create Bucket > Name: menu-images > Public: Yes