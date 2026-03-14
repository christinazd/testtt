# How to Find Your Supabase Project URL

## Quick Answer

The Project URL is usually found in one of these places:

### Option 1: On the API Settings Page (Where You Are Now)
1. **Scroll to the top** of the API Keys page
2. Look for a section labeled **"Project URL"** or **"Config"**
3. It should be displayed near the top, before the API keys section

### Option 2: In General Settings
1. In the left sidebar, click **"General"** (under Settings)
2. Look for **"Reference ID"** or **"Project URL"** section
3. The URL will be displayed there

### Option 3: Check the Page Header
- Sometimes the Project URL is shown in the page header near your project name
- Look at the top of the page where it shows "testtt" project

## What the Project URL Looks Like

It will be a URL like:
```
https://abcdefghijklmnopqrstuvwxyz.supabase.co
```

Or it might be shorter:
```
https://xxxxx.supabase.co
```

## If You Still Can't Find It

### Alternative Method:
1. Go to **Settings** > **General**
2. Look for **"Reference ID"** - this is your project reference
3. The Project URL is: `https://[YOUR_REFERENCE_ID].supabase.co`

### Or Check Your Project Dashboard:
1. Go back to your project dashboard (click "testtt" or the home icon)
2. The Project URL might be displayed in the project overview

## Quick Visual Guide

On the API page, the layout typically looks like:

```
┌─────────────────────────────────────┐
│ API Keys                            │
│                                     │
│ [Project URL section here]          │ ← Look here first!
│ https://xxxxx.supabase.co           │
│                                     │
│ ─────────────────────────────────── │
│                                     │
│ Publishable and secret API keys     │
│                                     │
│ Publishable key                     │
│ [Your publishable key here]          │
│                                     │
│ Secret keys                         │
│ [Secret keys here]                  │
└─────────────────────────────────────┘
```

## Still Having Trouble?

If you can't find it anywhere:
1. The Project URL is the same as: `https://[your-project-ref].supabase.co`
2. You can find your project reference ID in **Settings** > **General**
3. Or check your Supabase project creation email - it usually contains the URL

## What You Need for .env.local

Once you find it, your `.env.local` file should look like:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_7sf7vFeHvPUiA_QICX087w_rPj3p...
```

Replace with your actual values!
