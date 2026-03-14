# Debugging Login Issues

## Steps to Debug

### 1. Check Browser Console
1. Open the login page: http://localhost:3000/login
2. Press F12 to open Developer Tools
3. Go to the **Console** tab
4. Try to log in
5. Look for any error messages (red text)

### 2. Check Network Tab
1. In Developer Tools, go to **Network** tab
2. Try to log in
3. Look for requests to Supabase
4. Check if they're successful (status 200) or failing

### 3. Verify Admin User Exists
1. Go to Supabase Dashboard: https://app.supabase.com
2. Navigate to **Authentication** > **Users**
3. Verify you have a user created
4. Check the email matches what you're using to log in

### 4. Test Credentials
Make sure:
- Email is exactly as it appears in Supabase (case-sensitive)
- Password is correct
- No extra spaces in email or password

### 5. Check Environment Variables
Run this command to verify:
```bash
node check-env.js
```

### 6. Common Issues

**Issue: "Invalid login credentials"**
- User doesn't exist in Supabase
- Wrong email or password
- User account is disabled

**Issue: "Configuration error"**
- Missing .env.local file
- Environment variables not loaded
- Restart dev server after creating .env.local

**Issue: Nothing happens when clicking login**
- Check browser console for JavaScript errors
- Check if form is submitting (button should show "Signing in...")
- Verify Supabase URL and key are correct

## Quick Test

Try this in the browser console on the login page:
```javascript
// Check if Supabase is configured
console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing');
```

If both show values, Supabase is configured correctly.
