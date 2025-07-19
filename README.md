# 🧠 Next.js 14 Project Management Tool

A fully functional Project Management Tool built using **Next.js 14 App Router**, designed for scalability, performance, and real-world use cases.

---

## 🚀 Features

- ✅ **Authentication** with [Clerk](https://clerk.dev)
- 🌐 **App Router** and layout system (Next.js 14)
- 🎨 **TailwindCSS** + **ShadCN UI** for modern styling
- 📊 **Recharts** for beautiful analytics graphs
- 🧠 **Zod** for schema validation
- 🔗 **PostgreSQL** + **Prisma** for data handling
- ☁️ **UploadThing** + **Cloudinary** for file/image uploads

---

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: TailwindCSS, ShadCN, Lucide Icons
- **Auth**: Clerk
- **Database**: PostgreSQL (via Prisma ORM)
- **File Upload**: UploadThing + Cloudinary
- **Validation**: Zod
- **Charts**: Recharts

---

## 📁 Folder Structure

/app
/dashboard
/api
/components
/lib
/actions
/validators

## 🧑‍💻 Getting Started

![alt text](/screenshots/image-2.png)

![alt text](/screenshots/image.png)

![alt text](/screenshots/image-1.png)

### 1. Clone the Repo

clone this repo

### 2. Install Dependencies

npm install

### 3. set up environment variable

DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<your-db>
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_id
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### 4. npx prisma generate

npx prisma migrate dev --name init

### 5. Run the Dev Server

npm run dev

✅ Available Pages
Route Description
/ Landing / Overview Page
/dashboard Protected Admin Dashboard
/sign-in Login with Clerk
/settings User or App settings

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Built with ❤️ following RoadSide Coder
