# CT-Kart Deployment Guide - STEP BY STEP

This guide covers how to host the CT-Kart project with Frontend, Backend, and MongoDB.

---

## STEP 1: Prepare Your GitHub Repository

Make sure your code is pushed to GitHub with these folders:
```
CT-Kart/
├── frontend/       # React + Vite
├── admin/          # React + Vite  
├── Backend/        # Express.js
```

---

## STEP 2: Deploy Backend on Render.com (FREE)

### 2.1 Create Account
1. Go to [Render.com](https://render.com)
2. Sign up with your GitHub account

### 2.2 Deploy Backend
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `ctkart-backend`
   - **Root Directory**: `Backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Click **"Create Web Service"**

### 2.3 Add Environment Variables
After creating, go to **"Environment"** tab and add:
```
MONGODB_URI = mongodb+srv://khiladi0024:Charanwebdev11@cluster0.zmiu52n.mongodb.net/Delivery_food
JWT_SECRET = any_random_string_here
STRIPE_SECRET_KEY = your_stripe_key
```
5. Click **"Deploy"**

### 2.4 Get Backend URL
Once deployed, you'll get a URL like: `https://ctkart-backend.onrender.com`
**COPY THIS URL**

---

## STEP 3: Deploy Frontend on Render.com (FREE)

### 3.1 Deploy as Static Site
1. Go to [Render.com](https://render.com)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `ctkart-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Create Static Site"**

### 3.2 Add Environment Variable
Go to **"Environment"** tab and add:
```
VITE_API_URL = https://ctkart-backend.onrender.com
```
**Replace with YOUR backend URL from STEP 2.4**

6. Click **"Deploy"**

---

## STEP 4: Deploy Admin Panel

### 4.1 Deploy as Static Site
1. Click **"New +"** → **"Static Site"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `ctkart-admin`
   - **Root Directory**: `admin`
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Create Static Site"**

### 4.2 Add Environment Variable
Go to **"Environment"** tab and add:
```
VITE_API_URL = https://ctkart-backend.onrender.com
```
**Replace with YOUR backend URL from STEP 2.4**

5. Click **"Deploy"**

---

## STEP 5: Verify Deployment

After all deployments complete, check:
- **Frontend**: `https://ctkart-frontend.onrender.com`
- **Admin**: `https://ctkart-admin.onrender.com`
- **Backend API**: `https://ctkart-backend.onrender.com`

---

## QUICK SUMMARY

| Service | URL Format | Where to Deploy |
|---------|------------|-----------------|
| Backend | ctkart-backend.onrender.com | Render Web Service |
| Frontend | ctkart-frontend.onrender.com | Render Static Site |
| Admin | ctkart-admin.onrender.com | Render Static Site |

---

## IMPORTANT: After First Deploy

1. Rebuild frontend and admin after adding VITE_API_URL:
   - In Render, go to your static site
   - Click **"Manual Deploy"** → **"Deploy latest commit"**

2. For image uploads to work, you may need to use a cloud storage service like Cloudinary instead of local uploads. This requires additional code changes.

---

## Troubleshooting 404 Error

If you see 404 error:
1. Make sure you rebuilt the frontend after adding VITE_API_URL
2. Check browser console (F12) for errors
3. Make sure backend is running and accessible
4. Contact me with the error message if still issues
