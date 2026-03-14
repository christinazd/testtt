# Deployment Guide

This guide walks you through deploying your website to Vercel and setting it up for client use.

## Pre-Deployment Checklist

- [ ] All environment variables are configured
- [ ] Supabase database schema is set up
- [ ] Storage bucket `menu-images` is created and set to public
- [ ] Admin user is created in Supabase Authentication
- [ ] Code is tested locally and working
- [ ] All dependencies are installed (`npm install`)

## Step-by-Step Deployment

### 1. Prepare Your Code

Make sure your code is ready:
```bash
# Test the build locally
npm run build

# If build succeeds, you're ready to deploy
```

### 2. Deploy to Vercel

#### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click **"New Project"**
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables**:
   - In Vercel project settings, go to **Environment Variables**
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
   - Click **Save**

4. **Deploy**:
   - Click **Deploy**
   - Wait for deployment to complete (usually 1-2 minutes)

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked about environment variables, add them:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

### 3. Configure Custom Domain (Optional)

If the client has a custom domain:

1. In Vercel project settings, go to **Domains**
2. Add the domain name
3. Follow Vercel's DNS configuration instructions
4. Update DNS records at your domain registrar
5. Wait for DNS propagation (can take up to 48 hours)

### 4. Post-Deployment Setup

#### Verify Deployment

1. Visit your deployed URL: `https://your-project.vercel.app`
2. Test the public website:
   - Hero section loads
   - Menu section displays (may be empty initially)
   - Contact form works
   - All sections are visible

3. Test admin panel:
   - Visit `https://your-project.vercel.app/admin/login`
   - Log in with admin credentials
   - Add a test menu item
   - Verify it appears on the public site

#### Set Up Admin User (if not done)

1. Go to Supabase Dashboard > Authentication > Users
2. Click **Add user** > **Create new user**
3. Enter:
   - Email: client's email
   - Password: strong password
4. Save credentials securely

## Client Handoff

### Information to Provide

1. **Public Website URL**:
   ```
   https://your-project.vercel.app
   ```
   Or custom domain if configured

2. **Admin Panel URL**:
   ```
   https://your-project.vercel.app/admin/login
   ```

3. **Admin Credentials**:
   - Email: [admin email]
   - Password: [admin password]
   - **Important**: Instruct client to change password after first login

### Security Best Practices

- Share credentials via secure method (password manager, encrypted email)
- Advise client to change password immediately
- Consider using a password manager like 1Password or Bitwarden for sharing
- Never share credentials via unencrypted email or messaging

### Client Training

Provide the client with:
1. Link to README.md (admin panel usage section)
2. Quick start guide:
   - How to log in
   - How to add menu items
   - How to edit/delete items
   - How to upload images

## Troubleshooting Deployment Issues

### Build Fails

**Error**: Module not found
- **Solution**: Ensure all dependencies are in `package.json` and run `npm install` locally first

**Error**: Environment variables missing
- **Solution**: Add all required environment variables in Vercel project settings

### Images Not Loading

**Issue**: Images show broken links
- **Solution**: 
  - Verify `menu-images` bucket is public in Supabase
  - Check `next.config.js` has correct Supabase domain pattern
  - Verify image URLs in database

### Authentication Not Working

**Issue**: Can't log in to admin panel
- **Solution**:
  - Verify environment variables are set correctly in Vercel
  - Check that user exists in Supabase Authentication
  - Verify RLS policies are set up correctly

### Database Connection Issues

**Issue**: Menu items not loading
- **Solution**:
  - Verify Supabase project is active (not paused)
  - Check environment variables in Vercel
  - Verify database schema is set up correctly

## Updating the Website

### Making Changes

1. Make changes locally
2. Test locally: `npm run dev`
3. Commit changes: `git commit -m "Description"`
4. Push to GitHub: `git push`
5. Vercel will automatically redeploy

### Manual Redeploy

1. Go to Vercel dashboard
2. Select your project
3. Click **Redeploy** > **Redeploy**

## Monitoring & Analytics

### Vercel Analytics

- Vercel provides built-in analytics
- View in Vercel dashboard > Analytics
- Track page views, performance, etc.

### Adding Google Analytics (Optional)

1. Get Google Analytics tracking ID
2. Add to `app/layout.tsx`:
   ```tsx
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
     strategy="afterInteractive"
   />
   ```

## Cost Considerations

### Free Tier Limits

**Vercel Free Tier**:
- 100GB bandwidth/month
- Unlimited requests
- Automatic SSL
- Custom domains

**Supabase Free Tier**:
- 500MB database
- 1GB file storage
- 50K monthly active users
- 2GB bandwidth

### When to Upgrade

Consider upgrading if:
- Website gets >100K visitors/month
- Database exceeds 500MB
- Storage exceeds 1GB
- Need more features (backups, support, etc.)

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Your website is now live and ready for clients! 🚀**
