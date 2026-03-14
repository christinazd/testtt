# Quick Start Guide

Get your website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Supabase

1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Wait 2 minutes for project to be ready

### Set Up Database

1. Go to **SQL Editor** in Supabase Dashboard
2. Copy contents of `supabase/schema.sql`
3. Paste and click **Run**

### Set Up Storage

1. Go to **Storage** in Supabase Dashboard
2. Click **New Bucket**
3. Name: `menu-images`
4. Make it **Public** ✅
5. Click **Create**

### Create Admin User

1. Go to **Authentication** > **Users**
2. Click **Add user** > **Create new user**
3. Enter email and password
4. **Save these credentials!**

## Step 3: Configure Environment

### Finding Your Supabase Credentials

1. **Go to your Supabase Dashboard**: [app.supabase.com](https://app.supabase.com)
2. **Select your project** (click on it from the project list)
3. **Click on "Settings"** in the left sidebar (gear icon at the bottom)
4. **Click on "API"** in the Settings menu
5. You'll see two important values:
   - **Project URL**: Found under "Project URL" section (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public key**: Found under "Project API keys" section, labeled as **"anon" "public"** (it's a long string starting with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

   **Important**: Use the **"anon" "public"** key (NOT the "service_role" key which is secret!)

### Create Environment File

1. Create `.env.local` file in the root of your project (same folder as `package.json`)
2. Add your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_key_here
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 5: Test Admin Panel

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Log in with your admin credentials
3. Add a menu item to test

## You're Done! 🎉

Your website is now running locally. See `DEPLOYMENT.md` for deploying to production.

## Next Steps

- Customize the content in `app/components/`
- Change colors in Tailwind classes
- Add your business information
- Deploy to Vercel (see `DEPLOYMENT.md`)
