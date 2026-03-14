# Dynamic Restaurant Website with Admin Panel

A complete Category 2 website template - a beautiful one-page showcase site with a fully functional admin panel for managing menu items dynamically. Built with Next.js 14, Supabase, and Tailwind CSS.

## Features

### Public Website
- **Hero Section**: Eye-catching landing section with call-to-action buttons
- **About Section**: Business information and features showcase
- **Dynamic Menu**: Real-time menu items fetched from Supabase database
- **Category Filtering**: Filter menu items by category
- **Contact Form**: Contact section with form submission
- **Responsive Design**: Fully responsive, mobile-first design
- **Modern Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Built with Next.js App Router for optimal SEO

### Admin Panel
- **Secure Authentication**: Email/password login with Supabase Auth
- **Menu Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Image Upload**: Upload and manage menu item images via Supabase Storage
- **Real-time Updates**: Changes reflect immediately on the public site
- **User-friendly Interface**: Clean, intuitive admin dashboard
- **Protected Routes**: Admin routes are protected and require authentication

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend/Database**: Supabase (PostgreSQL, Auth, Storage)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works perfectly)
- Git (for version control)

## Setup Instructions

### 1. Clone or Download the Project

```bash
cd your-project-directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Go to [Supabase](https://supabase.com) and create a free account
2. Create a new project
3. Wait for the project to be fully provisioned

#### Create Database Schema

1. In Supabase Dashboard, go to **SQL Editor**
2. Copy and paste the contents of `supabase/schema.sql`
3. Click **Run** to execute the SQL

#### Create Storage Bucket

1. Go to **Storage** in the Supabase Dashboard
2. Click **New Bucket**
3. Name it: `menu-images`
4. Make it **Public** (toggle ON)
5. Click **Create bucket**

#### Set Up Authentication

1. Go to **Authentication** > **Users** in Supabase Dashboard
2. Click **Add user** > **Create new user**
3. Enter the admin email and password
4. Save the credentials securely (you'll need to share these with the client)

### 4. Configure Environment Variables

1. In Supabase Dashboard, go to **Settings** > **API**
2. Copy your **Project URL** and **anon/public key**

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Example:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Access Admin Panel

Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and sign in with the credentials you created in Supabase.

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in
3. Click **New Project**
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click **Deploy**

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Add environment variables when prompted

### After Deployment

- **Public URL**: Your site will be available at `https://your-project.vercel.app`
- **Admin URL**: `https://your-project.vercel.app/admin/login`

## Customization Guide

### Changing Business Information

1. **Hero Section**: Edit `app/components/Hero.tsx`
2. **About Section**: Edit `app/components/About.tsx`
3. **Contact Information**: Edit `app/components/Contact.tsx`
4. **Footer**: Edit `app/components/Footer.tsx`
5. **Site Metadata**: Edit `app/layout.tsx` (title, description)

### Styling & Colors

The site uses Tailwind CSS with an amber/orange color scheme. To change colors:

1. Search and replace color classes in components:
   - `amber-600` → your primary color
   - `amber-100`, `amber-50` → lighter shades
   - `amber-700` → darker shade

2. Or modify `tailwind.config.ts` to add custom colors

### Adding More Sections

1. Create a new component in `app/components/`
2. Import and add it to `app/page.tsx`
3. Style with Tailwind CSS

## Admin Panel Usage

### Adding Menu Items

1. Log in to the admin panel
2. Click **Add Menu Item**
3. Fill in the form:
   - **Name**: Item name (required)
   - **Description**: Item description (optional)
   - **Price**: Item price (required)
   - **Category**: Item category (required, e.g., "Appetizers", "Main Course", "Desserts")
   - **Image**: Upload an image (optional)
   - **Available**: Toggle to show/hide item
4. Click **Add Item**

### Editing Menu Items

1. Find the item in the dashboard
2. Click the **Edit** icon (pencil)
3. Modify the fields
4. Click **Update Item**

### Deleting Menu Items

1. Find the item in the dashboard
2. Click the **Delete** icon (trash)
3. Confirm deletion

## Client Handoff

When delivering the website to a client, provide:

1. **Public Website URL**: `https://your-project.vercel.app`
2. **Admin Panel URL**: `https://your-project.vercel.app/admin/login`
3. **Admin Credentials**:
   - Email: [admin email]
   - Password: [admin password]
   - **Important**: Instruct them to change the password after first login

### Security Best Practices

- Use a strong, unique password for the admin account
- Consider using a password manager to share credentials securely
- Advise the client to change the password immediately
- For production, consider implementing additional security measures

## Project Structure

```
├── app/
│   ├── admin/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Admin dashboard
│   │   ├── login/
│   │   │   └── page.tsx          # Admin login page
│   │   └── layout.tsx            # Admin layout (protected)
│   ├── components/
│   │   ├── admin/
│   │   │   ├── AdminHeader.tsx   # Admin header with logout
│   │   │   └── MenuItemsManager.tsx # CRUD operations component
│   │   ├── About.tsx             # About section
│   │   ├── Contact.tsx            # Contact section
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Hero.tsx               # Hero section
│   │   └── Menu.tsx               # Dynamic menu display
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Main page
│   └── globals.css                # Global styles
├── lib/
│   ├── supabase/
│   │   ├── client.ts              # Browser Supabase client
│   │   └── server.ts              # Server Supabase client
│   └── utils.ts                   # Utility functions
├── supabase/
│   └── schema.sql                 # Database schema
├── types/
│   └── database.ts                # TypeScript types
├── middleware.ts                  # Auth middleware
├── next.config.js                 # Next.js config
├── tailwind.config.ts             # Tailwind config
└── package.json                   # Dependencies
```

## Troubleshooting

### Images Not Loading

- Ensure the `menu-images` bucket is set to **Public** in Supabase
- Check that `next.config.js` has the correct Supabase domain pattern
- Verify image URLs in the database are correct

### Authentication Issues

- Verify environment variables are set correctly
- Check that the user exists in Supabase Authentication
- Ensure RLS policies are correctly set up

### Database Connection Issues

- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- Check Supabase project is active (not paused)
- Verify network connectivity

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## License

This template is provided as-is for building client websites. Customize as needed for each project.

---

**Built with ❤️ for businesses who need beautiful, manageable websites**
