# Environment Variables Setup

## Resend Configuration

To set up email functionality for the inquiry form, you need to configure Resend:

### 1. Get a Resend API Key
1. Go to [https://resend.com](https://resend.com) and sign up for an account
2. Navigate to API Keys section in your dashboard
3. Create a new API key
4. Copy the API key (it will start with `re_`)

### 2. Set up Environment Variables

#### For Local Development (.env.local):
Create a `.env.local` file in your project root with:
```
RESEND_API_KEY=your_actual_api_key_here
```

#### For Vercel Production:
1. Go to your Vercel dashboard: [https://vercel.com/elliots-projects-0a7be7b5/~/activity](https://vercel.com/elliots-projects-0a7be7b5/~/activity)
2. Navigate to your project settings
3. Go to Environment Variables section
4. Add a new environment variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
   - Environment: Production

### 3. Verify Your Domain in Resend
1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., `carlygagephotography.com`)
3. Follow the DNS verification steps provided by Resend
4. Once verified, update the `from` email in `src/app/actions/sendInquiry.ts` to use your verified domain

### 4. Test the Form
After deployment, test the inquiry form to ensure emails are being sent correctly.
