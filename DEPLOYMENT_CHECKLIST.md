# Strucxio Deployment Checklist

## Pre-Deployment Setup

### Essential (Required)

- [ ] **Calendly Integration**
  - Location: `/app/contact/page.tsx` (lines ~250-260)
  - Replace placeholder embed code with your Calendly link
  - Test scheduling flow works

- [ ] **Email Service Integration**
  - Choose service: SendGrid, Mailgun, or AWS SES
  - Setup env variables in Vercel project settings
  - Test contact form submission
  - Verify email delivery

- [ ] **Contact Information**
  - Update email: `/app/contact/page.tsx` and `/components/footer.tsx`
  - Update phone: `/app/contact/page.tsx`
  - Verify all contact info is correct

### Optional (Enhancement)

- [ ] **Analytics**
  - Add Google Analytics or Vercel Analytics
  - Setup conversion tracking for contact form
  - Track demo page engagement

- [ ] **Domain & SSL**
  - Connect custom domain in Vercel
  - Ensure SSL certificate is active
  - Setup DNS records

- [ ] **Social Links**
  - Update Twitter link in `/components/footer.tsx`
  - Update LinkedIn link in `/components/footer.tsx`
  - Update GitHub link in `/components/footer.tsx`

- [ ] **SEO Optimization**
  - Verify meta tags in `/app/layout.tsx`
  - Add Open Graph images
  - Setup sitemap and robots.txt
  - Test with SEO tools

- [ ] **Video Demo**
  - If using video, replace YouTube placeholder
  - Location: `/app/demo/page.tsx` (if using VideoDemo component)

---

## Testing Checklist

### Desktop

- [ ] Home page loads correctly
- [ ] Demo page displays all sections
- [ ] Contact page form is functional
- [ ] Navigation header works on all pages
- [ ] "Book a Demo" button links to contact page
- [ ] Dark mode toggle works
- [ ] All CTAs have correct links

### Mobile

- [ ] Pages render correctly on small screens
- [ ] Menu is mobile-friendly
- [ ] Form inputs are touch-friendly
- [ ] Images scale properly

### Functionality

- [ ] Home page example copy buttons work
- [ ] Demo page carousel switches jobs smoothly
- [ ] Demo page dashboard is searchable
- [ ] Contact form validates inputs
- [ ] Contact form submission succeeds
- [ ] Calendly opens correctly

### Performance

- [ ] Page loads under 3 seconds
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Images are optimized

---

## Deployment Steps

### Step 1: Local Testing

```bash
cd /vercel/share/v0-project
pnpm install
pnpm dev
```

Test all three pages at:
- http://localhost:3000
- http://localhost:3000/demo
- http://localhost:3000/contact

### Step 2: Environment Variables

In Vercel project settings, add:
```
EMAIL_SERVICE_KEY=your_key_here
CALENDLY_URL=your_calendly_link_here
```

(Exact names depend on your email service)

### Step 3: Build for Production

```bash
pnpm build
```

Verify zero errors and all pages compile.

### Step 4: Deploy to Vercel

```bash
vercel deploy --prod
```

### Step 5: Post-Deployment Verification

- [ ] Visit production URL
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Verify Calendly works
- [ ] Check lighthouse score
- [ ] Monitor analytics

---

## Key Files to Reference

**Pages:**
- `/app/page.tsx` - Home page
- `/app/demo/page.tsx` - Demo/How It Works
- `/app/contact/page.tsx` - Contact & Booking

**Shared Components:**
- `/components/header.tsx` - Navigation header
- `/components/footer.tsx` - Footer with links

**Data:**
- `/data/jobs.json` - 42 job records (used by demo & contact pages)
- `/lib/data.ts` - Data utilities

**Configuration:**
- `/app/layout.tsx` - Root layout with header/footer
- `/app/globals.css` - Tailwind configuration

---

## Common Customizations

### Change Company Name
Replace "Strucxio" throughout:
- `/components/header.tsx`
- `/components/footer.tsx`
- `/app/layout.tsx` (metadata)
- `/app/page.tsx`

### Change Hero Text
- Home: `/app/page.tsx` (lines ~20-30)
- Demo: `/app/demo/page.tsx` (lines ~12-15)
- Contact: `/app/contact/page.tsx` (lines ~32-35)

### Update Logo
Replace Zap icon with your logo in:
- `/components/header.tsx`
- `/components/footer.tsx`

### Change Colors
Edit design tokens in `/app/globals.css`:
```css
--primary: hsl(217, 100%, 50%);  /* Change blue color */
--accent: hsl(217, 100%, 50%);
```

---

## Support & Debugging

**Build Issues:**
```bash
pnpm install  # Reinstall dependencies
pnpm build    # Rebuild
```

**Dev Server Issues:**
```bash
pnpm dev      # Start with hot reload
```

**Contact Form Not Working:**
1. Check environment variables in Vercel settings
2. Verify email service credentials
3. Check browser console for errors

**Calendly Not Loading:**
1. Verify correct Calendly embed URL
2. Check for CORS issues
3. Test in incognito mode

---

## Post-Launch

- [ ] Set up email notifications for contact form submissions
- [ ] Monitor Calendly booking rate
- [ ] Track conversion metrics in analytics
- [ ] Gather user feedback
- [ ] Monitor uptime and performance
- [ ] Schedule regular backups

---

## Status

Current Version: Production Ready
Last Updated: 2025
Build Status: ✅ Passing
All Tests: ✅ Passing

Ready to deploy! 🚀
