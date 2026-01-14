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
4. Add these environment variables:
   - Name: `RESEND_API_KEY`, Value: Your Resend API key
   - Name: `RESEND_AUDIENCE_ID`, Value: Your Resend Audience ID (see below)
   - Environment: Production

### 3. Set up Resend Audience (for storing contacts)
1. In your Resend dashboard, go to **Audiences**.
2. Create a new audience (e.g., "Main Website List").
3. Once created, click on the audience and go to **Settings**.
4. Copy the **Audience ID** and add it to your Vercel environment variables as `RESEND_AUDIENCE_ID`.
   * **Your Current ID**: `0850988a-a3b1-484b-8a71-0d1aae3f53b9`
5. Now, every form submission will automatically be added to this list for your future email blasts.

### 4. Verify Your Domain in Resend
1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., `carlygagephotography.com`)
3. Follow the DNS verification steps provided by Resend
4. Once verified, update the `from` email in `src/app/actions/sendInquiry.ts` to use your verified domain

### 4. Test the Form
After deployment, test the inquiry form to ensure emails are being sent correctly.
