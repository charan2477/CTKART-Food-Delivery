# CT-Kart Vercel Deployment Guide

This guide covers how to deploy CT-Kart to Vercel.

---

## Architecture Options

### Option A: Frontend + Admin on Vercel, Backend on Render (RECOMMENDED)
- Frontend → Vercel (Free)
- Admin Panel → Vercel (Free)  
- Backend → Render.com (Free) or Railway

### Option B: All on Vercel (Serverless Functions)
- Convert backend to Vercel API routes

---

## STEP 1: Prepare Your GitHub Repository

Ensure your repository has this structure:
```
CT-Kart/
├── frontend/       # React + Vite
├── admin/          # React + Vite  
├── Backend/        # Express.js
```

Push all code to GitHub.

---

## STEP 2: Deploy Backend to Render.com (Free)

### 2.1 Create Account
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub

### 2.2 Deploy Backend
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `ctkart-backend`
   - **Root Directory**: `Backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Click **"Create Web Service"

### 2.3 Add Environment Variables
Go to **"Environment"** tab and add:
```
MONGODB_URI = mongodb+srv://khiladi0024:Charanwebdev11@cluster0.zmiu52n.mongodb.net/Delivery_food
JWT_SECRET = your_secure_random_string
STRIPE_SECRET_KEY = your_stripe_key
PORT = 1000
```

### 2.4 Get Backend URL
After deployment, you'll get: `https://ctkart-backend.onrender.com`
**COPY THIS URL**

---

## STEP 3: Deploy Frontend to Vercel

### 3.1 Deploy Frontend
1. Go to [Vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**

### 3.2 Add Environment Variable
After deployment:
1. Go to **"Settings"** → **"Environment Variables"**
2. Add:
   ```
   VITE_API_URL = https://ctkart-backend.onrender.com
   ```
3. Click **"Deployments"** → **"Redeploy"** latest commit

### 3.3 Get Frontend URL
You'll get: `https://ctkart-frontend.vercel.app`

---

## STEP 4: Deploy Admin Panel to Vercel

### 4.1 Deploy Admin
1. Click **"Add New..."** → **"Project"**
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `admin`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **"Deploy"**

### 4.2 Add Environment Variable
After deployment:
1. Go to **"Settings"** → **"Environment Variables"**
2. Add:
   ```
   VITE_API_URL = https://ctkart-backend.onrender.com
   ```
3. Click **"Deployments"** → **"Redeploy"** latest commit

### 4.3 Get Admin URL
You'll get: `https://ctkart-admin.vercel.app`

---

## STEP 5: Update CORS in Backend

After getting all URLs, update your Backend CORS to allow your Vercel domains:

1. Go to Render.com → Your Backend → **"Environment"**
2. Update/add:
   ```
   CORS_ORIGIN = https://ctkart-frontend.vercel.app,https://ctkart-admin.vercel.app
   ```

3. Update `server.js`:
```javascript
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || true,
    credentials: true
}))
```

---

## STEP 6: Verify Deployment

Check these URLs:
- **Frontend**: `https://ctkart-frontend.vercel.app`
- **Admin**: `https://ctkart-admin.vercel.app`  
- **Backend API**: `https://ctkart-backend.onrender.com`

---

## Quick Summary

| Service | Deploy To | URL Example |
|---------|-----------|-------------|
| Frontend | Vercel | ctkart-frontend.vercel.app |
| Admin | Vercel | ctkart-admin.vercel.app |
| Backend | Render | ctkart-backend.onrender.com |

---

## Troubleshooting

### 404 Error on Vercel
Create `vercel.json` in frontend/admin root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Images Not Loading
- Backend uploads folder doesn't persist on Render
- Use Cloudinary for image storage (requires code changes)

### API Errors
- Check browser console (F12) for specific errors
- Verify VITE_API_URL is set correctly
- Ensure backend is running and accessible

