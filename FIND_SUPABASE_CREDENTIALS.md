# How to Find Your Supabase Project URL and Anon Key

## Step-by-Step Visual Guide

### Step 1: Open Supabase Dashboard
1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign in to your account

### Step 2: Select Your Project
- Click on your project name from the list of projects
- If you haven't created a project yet, click "New Project" first

### Step 3: Navigate to Settings
- Look at the **left sidebar**
- Scroll down to find the **"Settings"** option (it has a gear icon ⚙️)
- Click on **"Settings"**

### Step 4: Go to API Settings
- In the Settings menu, you'll see several options:
  - General
  - **API** ← Click this one!
  - Database
  - Auth
  - Storage
  - etc.

### Step 5: Find Your Credentials

Once you're on the API page, you'll see:

#### Project URL
**Location Options:**
1. **At the top of the API page** - Look for a section labeled **"Project URL"** or **"Config"** near the top
2. **In General Settings** - If not on API page, go to **Settings** > **General** and look for "Reference ID" or "Project URL"
3. **In the page header** - Sometimes shown near your project name at the top

The URL looks like:
  ```
  https://abcdefghijklmnop.supabase.co
  ```
- **Copy this entire URL** (including the `https://`)

**If you can't find it on the API page:**
- Go to **Settings** > **General** (in the left sidebar)
- Look for **"Reference ID"** or **"Project URL"** section
- It should be displayed there

#### Anon Public Key (Publishable Key)
You're already on the right page! In the **"Publishable key"** section:
- You'll see a key listed (starts with `sb_publishable_...` or similar)
- Click the **copy icon** 📋 next to the key to copy it
- This is your **anon public key** - use this one!

**Important:** 
- Use the **"Publishable key"** (the one you see in the table)
- Do NOT use any "Secret keys" - those are for backend only

## What It Looks Like

The API page will show something like:

```
┌─────────────────────────────────────┐
│ Project URL                         │
│ https://xxxxx.supabase.co           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Project API keys                    │
├─────────────────────────────────────┤
│ anon         public    [👁️ Reveal] │ ← Copy this one
│ service_role  secret    [👁️ Reveal] │ ← Don't use this
└─────────────────────────────────────┘
```

## Quick Alternative Method

If you can't find Settings:
1. Look at the **top right** of your Supabase dashboard
2. You might see your project name with a dropdown
3. Click on it and look for **"Project Settings"** or **"API Settings"**

## Still Can't Find It?

If you're still having trouble:
1. Make sure you've **created a project** first (it takes 2-3 minutes to set up)
2. Make sure you're **signed in** to the correct Supabase account
3. Try refreshing the page
4. The Settings icon is usually at the **very bottom** of the left sidebar

## Once You Have Both Values

Create a file named `.env.local` in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXItcmVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.your-long-key-here
```

Replace the values with your actual Project URL and anon key!
