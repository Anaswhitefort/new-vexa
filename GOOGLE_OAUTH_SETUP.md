# Google Workspace OAuth2 Setup Guide

## Step 1: Create OAuth2 Credentials in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Go to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Choose **Web application**
6. Add authorized redirect URIs:
   - `http://localhost:3000` (for development)
   - Your production URL (e.g., `https://yourdomain.com`)
7. Copy the **Client ID** and **Client Secret**

## Step 2: Generate Refresh Token

You need to generate a refresh token using Google's OAuth flow. Here's how:

### Option A: Using Google OAuth Playground (Easiest)

1. Go to [Google OAuth Playground](https://developers.google.com/oauthplayground)
2. Click the settings icon (⚙️) in the top right
3. Check "Use your own OAuth credentials"
4. Enter your **Client ID** and **Client Secret**
5. In the left sidebar, find **Gmail API v1** and expand it
6. Select `https://www.googleapis.com/auth/gmail.send`
7. Click **Authorize APIs**
8. Grant permission to your Google Workspace account
9. Click **Exchange authorization code for tokens**
10. Copy the **Refresh Token**

### Option B: Using a Node.js Script

Create a file called `get-refresh-token.js`:

```javascript
const { google } = require("googleapis");
const readline = require("readline");

const oauth2Client = new google.auth.OAuth2(
  "YOUR_CLIENT_ID",
  "YOUR_CLIENT_SECRET",
  "http://localhost:3000"
);

const scopes = ["https://www.googleapis.com/auth/gmail.send"];

const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
});

console.log("Visit this URL:", url);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the auth code: ", async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  console.log("\nRefresh Token:", tokens.refresh_token);
  rl.close();
});
```

Run it:
```bash
node get-refresh-token.js
```

## Step 3: Update .env.local

Add the credentials to your `.env.local` file:

```
GOOGLE_USER=anas@vexa.ae
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URL=http://localhost:3000
GOOGLE_REFRESH_TOKEN=your_refresh_token
```

## Step 4: Enable Gmail API

1. In Google Cloud Console, go to **APIs & Services** → **Enabled APIs & services**
2. Click **Enable APIs and Services**
3. Search for **Gmail API**
4. Click it and press **Enable**

## Done!

Your contact form should now send emails through Google Workspace!
