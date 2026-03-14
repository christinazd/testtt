// Script to validate .env.local file
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env.local');

console.log('Checking .env.local file...\n');

if (!fs.existsSync(envPath)) {
  console.error('❌ .env.local file not found!');
  console.log('\nPlease create .env.local file with:');
  console.log('NEXT_PUBLIC_SUPABASE_URL=your_url_here');
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here');
  process.exit(1);
}

// Read the file
const envContent = fs.readFileSync(envPath, 'utf8');
const lines = envContent.split('\n').filter(line => line.trim() && !line.trim().startsWith('#'));

const envVars = {};
lines.forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length > 0) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

// Check required variables
const required = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];

let hasErrors = false;
let hasWarnings = false;

console.log('Checking required environment variables:\n');

required.forEach(varName => {
  if (!envVars[varName]) {
    console.error(`❌ Missing: ${varName}`);
    hasErrors = true;
  } else {
    const value = envVars[varName];
    
    // Validate format
    if (varName === 'NEXT_PUBLIC_SUPABASE_URL') {
      if (!value.startsWith('https://') || !value.includes('.supabase.co')) {
        console.warn(`⚠️  ${varName} format might be incorrect`);
        console.warn(`   Expected: https://xxxxx.supabase.co`);
        console.warn(`   Got: ${value.substring(0, 50)}...`);
        hasWarnings = true;
      } else {
        console.log(`✅ ${varName} - Format looks correct`);
        console.log(`   Value: ${value.substring(0, 40)}...`);
      }
    } else if (varName === 'NEXT_PUBLIC_SUPABASE_ANON_KEY') {
      if (value.length < 20) {
        console.warn(`⚠️  ${varName} seems too short`);
        hasWarnings = true;
      } else if (value.startsWith('sb_publishable_') || value.startsWith('eyJ')) {
        console.log(`✅ ${varName} - Format looks correct`);
        console.log(`   Value: ${value.substring(0, 30)}...`);
      } else {
        console.warn(`⚠️  ${varName} format might be incorrect`);
        console.warn(`   Expected: starts with 'sb_publishable_' or 'eyJ'`);
        console.warn(`   Got: ${value.substring(0, 30)}...`);
        hasWarnings = true;
      }
    }
  }
});

console.log('\n' + '='.repeat(50));

if (hasErrors) {
  console.error('\n❌ ERRORS FOUND - Please fix the issues above');
  process.exit(1);
} else if (hasWarnings) {
  console.warn('\n⚠️  WARNINGS - Please review the issues above');
  process.exit(0);
} else {
  console.log('\n✅ All environment variables are correctly configured!');
  console.log('\nYour .env.local file is ready to use.');
  process.exit(0);
}
