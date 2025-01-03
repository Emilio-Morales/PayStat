# PayStat - Simplify Invoice Management and Track Revenue

**Manage and Track Customer Invoices with Ease**  
PayStat empowers you to effortlessly manage customer invoices and gain valuable insights into your revenue trends.

## Features

- **Dynamic Rendering**: Utilize streaming dynamic rendering for fast, efficient performance.
- **Authentication**: Secure login and user management functionality.
- **Pagination**: Streamlined navigation for large datasets.
- **CRUD Operations**: Comprehensive support for creating, reading, updating, and deleting invoices.
- **Responsive Design**: Built with TailwindCSS to ensure a seamless experience across all devices.
- **Data Validation**: Integrated with Zod for robust client-side and server-side data validation.
- **Database Integration**: Leverages PostgreSQL for reliable and scalable data handling.

## Technology Stack

### Frontend
- **TypeScript**: Adds static typing to JavaScript for improved code quality.
- **React.js**: Framework for building user interfaces.
- **Next.js**: Framework for server-rendered and statically-generated React applications.
- **TailwindCSS**: Utility-first CSS framework for responsive, modern designs.

### Backend
- **PostgreSQL**: Robust relational database for efficient data storage and querying.
- **Zod**: Schema-based data validation library.

## Demo Credentials

Experience the application [https://nextjs-dashboard-nu-green-70.vercel.app/](live) using the following credentials:

```bash
Username: test@demo.com
Password: 123456
```

## Installation & Setup

Follow these steps to set up the project locally:

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **PostgreSQL**: Set up a PostgreSQL database and configure access credentials.

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Emilio-Morales/PayStat.git
   cd paystat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory. If deploying with Vercel, most variables can be configured through their dashboard, which also provides managed PostgreSQL instances. Ensure your `.env` file includes the following variables:
   ```env
   POSTGRES_URL=
   POSTGRES_PRISMA_URL=
   POSTGRES_URL_NON_POOLING=
   POSTGRES_USER=""
   POSTGRES_HOST=
   POSTGRES_PASSWORD=""
   POSTGRES_DATABASE=""
   AUTH_SECRET=""   
   ```

4. **Initialize the database**
   Create the required tables and schemas in your PostgreSQL database manually or using an SQL script included in the repository.

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
   
## Contact

For any inquiries or support, reach out to [emiliomoralesdev@gmail.com](mailto:emiliomoralesdev@gmail.com).
