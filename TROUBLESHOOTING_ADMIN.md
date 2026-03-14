# Admin Panel Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: Can't Log In / "Invalid login credentials"

**Possible Causes:**
1. Admin user not created in Supabase
2. Wrong email/password
3. User account not activated

**Solution:**
1. Go to Supabase Dashboard > **Authentication** > **Users**
2. Check if a user exists
3. If no user exists:
   - Click **"Add user"** > **"Create new user"**
   - Enter email and password
   - **Save these credentials!**
4. If user exists but can't log in:
   - Try resetting the password in Supabase
   - Or create a new user

### Issue 2: Login Page Shows Error

**Check:**
1. Open browser console (F12) and look for errors
2. Check if environment variables are set correctly
3. Verify Supabase URL and key are correct

**Solution:**
1. Run: `node check-env.js` to verify environment variables
2. Make sure `.env.local` file exists and has correct values
3. Restart the dev server after changing `.env.local`

### Issue 3: "Redirect Loop" or Keeps Redirecting to Login

**Possible Causes:**
1. Session not being saved properly
2. Middleware issue
3. Cookie issues

**Solution:**
1. Clear browser cookies for localhost
2. Try in incognito/private mode
3. Check browser console for errors

### Issue 4: Dashboard Shows "Unauthorized" or Blank

**Possible Causes:**
1. Database schema not set up
2. RLS policies not configured
3. Storage bucket not created

**Solution:**
1. Go to Supabase > **SQL Editor**
2. Run the `supabase/schema.sql` file
3. Go to **Storage** and create `menu-images` bucket (public)

### Issue 5: "Cannot read property" or JavaScript Errors

**Possible Causes:**
1. Missing dependencies
2. Build errors
3. TypeScript errors

**Solution:**
1. Run: `npm install`
2. Check for errors: `npm run build`
3. Clear `.next` folder and rebuild

## Step-by-Step Verification

### 1. Verify Environment Variables
```bash
node check-env.js
```

### 2. Verify Supabase Connection
1. Go to Supabase Dashboard
2. Check project is active (not paused)
3. Verify API keys are correct

### 3. Verify Admin User Exists
1. Supabase Dashboard > Authentication > Users
2. Should see at least one user
3. Note the email address

### 4. Verify Database Schema
1. Supabase Dashboard > SQL Editor
2. Run: `SELECT * FROM menu_items LIMIT 1;`
3. Should not error (table should exist)

### 5. Verify Storage Bucket
1. Supabase Dashboard > Storage
2. Should see `menu-images` bucket
3. Should be marked as "Public"

## Testing the Admin Panel

### Test 1: Login Page Loads
1. Go to: http://localhost:3000/admin/login
2. Should see login form
3. No errors in console

### Test 2: Login Works
1. Enter admin email and password
2. Click "Sign In"
3. Should redirect to `/admin/dashboard`
4. Should see dashboard (not redirect back to login)

### Test 3: Dashboard Loads
1. After login, should see:
   - Header with "Admin Panel"
   - "Menu Items" section
   - "Add Menu Item" button

### Test 4: Can Add Menu Item
1. Click "Add Menu Item"
2. Fill in form
3. Submit
4. Item should appear in list

## Quick Fixes

### Fix 1: Reset Everything
```bash
# Stop dev server (Ctrl+C)
# Clear Next.js cache
rm -rf .next
# Reinstall dependencies
npm install
# Restart dev server
npm run dev
```

### Fix 2: Recreate Admin User
1. Supabase > Authentication > Users
2. Delete existing admin user (if any)
3. Create new user with email/password
4. Try logging in again

### Fix 3: Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red errors
4. Share error messages for help

## Still Not Working?

If none of these solutions work:
1. Check the browser console for specific error messages
2. Check the terminal where `npm run dev` is running for errors
3. Verify all steps in `QUICK_START.md` were completed
4. Make sure Supabase project is not paused
