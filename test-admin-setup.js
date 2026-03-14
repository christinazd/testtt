// Test script to verify admin panel setup
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Testing Admin Panel Setup...\n');

// Check environment variables
console.log('1. Checking environment variables...');
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables!');
  console.log('   Make sure .env.local exists with:');
  console.log('   NEXT_PUBLIC_SUPABASE_URL=...');
  console.log('   NEXT_PUBLIC_SUPABASE_ANON_KEY=...');
  process.exit(1);
}

console.log('✅ Environment variables found');
console.log(`   URL: ${supabaseUrl.substring(0, 30)}...`);
console.log(`   Key: ${supabaseKey.substring(0, 30)}...\n`);

// Test Supabase connection
console.log('2. Testing Supabase connection...');
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
  try {
    // Test 1: Check if we can connect
    const { data: healthCheck, error: healthError } = await supabase
      .from('menu_items')
      .select('count')
      .limit(1);

    if (healthError && healthError.code === 'PGRST116') {
      console.log('⚠️  Table "menu_items" does not exist');
      console.log('   Solution: Run supabase/schema.sql in Supabase SQL Editor\n');
    } else if (healthError) {
      console.error('❌ Database connection error:', healthError.message);
      console.log('   Check your Supabase project is active\n');
    } else {
      console.log('✅ Database connection successful\n');
    }

    // Test 2: Check authentication
    console.log('3. Testing authentication...');
    console.log('   Note: This requires an admin user to be created in Supabase\n');

    // Test 3: Check storage
    console.log('4. Checking storage bucket...');
    const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
    
    if (bucketError) {
      console.error('❌ Storage error:', bucketError.message);
    } else {
      const menuImagesBucket = buckets.find(b => b.name === 'menu-images');
      if (menuImagesBucket) {
        console.log('✅ Storage bucket "menu-images" exists');
        if (menuImagesBucket.public) {
          console.log('✅ Bucket is public (correct)');
        } else {
          console.log('⚠️  Bucket is not public - make it public in Supabase Dashboard');
        }
      } else {
        console.log('⚠️  Storage bucket "menu-images" not found');
        console.log('   Solution: Create it in Supabase Dashboard > Storage\n');
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('\n📋 Setup Checklist:');
    console.log('   [ ] Environment variables set (.env.local)');
    console.log('   [ ] Database schema created (run supabase/schema.sql)');
    console.log('   [ ] Storage bucket "menu-images" created (public)');
    console.log('   [ ] Admin user created in Supabase Authentication');
    console.log('\n💡 Next Steps:');
    console.log('   1. Go to Supabase Dashboard > Authentication > Users');
    console.log('   2. Create a new user (email + password)');
    console.log('   3. Use those credentials to log in to /admin/login');
    console.log('\n');

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
})();
