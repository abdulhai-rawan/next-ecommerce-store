# eCommerce Store (Frontend)  

This is the **frontend/website side** of a full-stack eCommerce project, offering a modern, responsive user interface for customers to browse and purchase products. Built with **Next.js 15**, it features powerful integrations with **NextAuth** and **Clerk Auth** for authentication.  

The backend side of this project handles the CMS/admin dashboard, built with Prisma, MySQL, and a RESTful API. You can find the backend repository here:  

**Backend Repository:** [View Here](Backend Repo URL)  

## [Demo](https://next-ecommerce-store-delta.vercel.app/)  

## Screenshots
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-store/refs/heads/master/public/screenshots/1.png)
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-store/refs/heads/master/public/screenshots/2.png)
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-store/refs/heads/master/public/screenshots/3.png)
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-store/refs/heads/master/public/screenshots/4.png)
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-store/refs/heads/master/public/screenshots/5.png)

---

## Features  

- **Frontend for eCommerce**: User-facing website for browsing and purchasing products.  
- **Authentication**: Supports user authentication with NextAuth and Clerk Auth.  
- **Dynamic Content**: Fetches product details and categories dynamically.  
- **Optimized Performance**: Built with Next.js for seamless navigation and speed.  
- **Integration with Backend**: Relies on a robust backend API for data and admin functionality.  

---

## Prerequisites  

- **Next.js version 15.x or above**  
- **npm** or **yarn** installed  

---

## Getting Started  

### Cloning the Repository  

```bash
git clone https://github.com/abdulhai-rawan/next-ecommerce-store.git
```

### Navigate to the Project Directory  

```bash
cd next-ecommerce-store
```

### Install Dependencies  

```bash
npm install
```

### Setup Environment Variables  

Create an `.env.local` file in the root directory and populate it with the following variables:  

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api/[storeId]
DEFAULT_BILLBOARD_ID=[billboardId]
```

Replace `[storeId]` and `[billboardId]` with appropriate values based on your backend configuration.  

---

## Running the Application  

Start the development server:  

```bash
npm run dev
```

Build the project for production:  

```bash
npm run build
```

Serve the production build:  

```bash
npm run start
```

---

## Available Commands  

| Command          | Description                              |  
| ----------------- | ---------------------------------------- |  
| `npm run dev`     | Starts the development server           |  
| `npm run build`   | Builds the application for production   |  
| `npm run start`   | Starts the production server            |  

---

## Project Structure  

```plaintext
next-ecommerce-store/
├── public/          # Static assets like images and fonts
├── styles/          # Global and TailwindCSS configurations
├── pages/           # Application pages (Next.js routing)
├── components/      # Reusable UI components
├── utils/           # Utility functions and helpers
├── package.json     # Project dependencies and scripts
├── env.example      # Example environment configuration
└── README.md        # Project documentation
```

---

## Deployment  

This project is deployed on **Vercel**. For custom deployment, follow these steps:  

1. Build the application:  
   ```bash
   npm run build
   ```
2. Deploy the `.next` folder to your hosting provider.  

---

## Contributing  

Contributions are welcome! If you have any suggestions or improvements, please:  

1. Fork the repository.  
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```  
3. Commit your changes and push the branch.  
4. Create a pull request.  

---

## License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## Credits  
Special thanks to [CodeWithAntonio](https://github.com/AntonioErdeljac) for this project ⭐
