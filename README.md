<<<<<<< HEAD
# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023

![Copy of Copy of Fullstack Twitter Clone (1)](https://github.com/AntonioErdeljac/next13-ecommerce-admin/assets/23248726/088760cb-837d-44b7-a959-63089385d0a0)


For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL

[VIDEO TUTORIAL](https://youtu.be/5miHyP6lExg)

Key Features:

- We will be using Shadcn UI for the Admin!
- Our admin dashboard is going to serve as both CMS, Admin and API!
- You will be able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- You will be able to create, update and delete categories!
- You will be able to create, update and delete products!
- You will be able to upload multiple images for products, and change them whenever you want!
- You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases!)
- You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
- You will be able to control which products are "featured" so they show on the homepage!
- You will be able to see your orders, sales, etc.
- You will be able to see graphs of your revenue etc.
- You will learn Clerk Authentication!
- Order creation
- Stripe checkout
- Stripe webhooks
- MySQL + Prisma + PlanetScale

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-ecommerce-admin.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
=======
# AMSdash: Next-Generation Asset Management System

AMSdash is built to redefine asset management in the physical and virtual data center. By leveraging cutting-edge technology and adhering to rigorous compliance standards, AMSdash aims to deliver efficiency, innovation, and scalability for today's dynamic business environment. With a focus on adaptability and a commitment to excellence, AMSdash is designed to seamlessly integrate with existing systems while providing a robust platform for future growth.

![Dashboard](./images/AMSdash.jpg)

## Core Stack

<div style="display: flex; flex-wrap: nowrap; align-items: center; background-color: #f0f0f0;">
  <img src="./images/nextjs-svgrepo-com.svg" alt="Next.js" width="65" style="box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/Typescript_logo_2020.svg" alt="TypeScript.js" width="65" style="padding: 15px; box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/React-icon.svg" alt="React.js" width="65" style="padding: 15px; box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/shadcnui.png" alt="shadcn/ui" width="125" style="box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/mysql-official.svg" alt="MySQL" width="100" style="box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/light-prisma-svgrepo-com-navy.svg" alt="Prisma.io" width="80" style="box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/Node.js_logo.svg" alt="Node.js" width="90" style="box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/docker-official.svg" alt="Docker" width="80" style="box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
  <img src="./images/ansible-svgrepo-com.svg" alt="Ansible" width="80" style="box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);" />
</div>

<br/>

- **Next.js, & TypeScript**: Server-side rendering with statically typed language support for powerful and efficient development
- **shadcn/ui**: Modern and responsive, React-based, modular UI
- **SQL Database**: MySQL and Prisma
- **Express**: Node.js server framework to communicate with external APIs
- **Docker Compose & Ansible**:Container orchestration for streamlined deployment and management
- **Github Actions**: Automated developer workflows

## Outline & Roadmap

### Phase 1: Core Functionality

#### Security & Compliance

- Compliance with legal and regulatory frameworks
- Robust security architecture, following industry best practices

#### User Management & Authentication

- Role-based access control
- OAuth integration for third-party authentication
- View current users logged in to amsdash

#### Access List

- Security access management with detailed logging
- Door access control API integration
- Compliance alignment with regulations
- Automatic incoming package scanning
- Expedited client check-in

#### Asset Management Dashboard

- Real-time inventory management
- Data analytics integration for actionable insights

### Phase 2: Advanced Features

#### AI-Driven Monitoring & Analytics

- Live monitoring of power, network, and systems
- Predictive analytics powered by machine learning libraries

  - TensorFlow
  - PyTorch
  - Scikit-learn

  ![TensorFlow](./images/tensorflow-ar21.svg)

#### Ticketing System Integration

- Seamless integration with in-house or third-party ticketing systems
- Automated ticket creation, tracking, and resolution

#### Self-Service Automation & Orchestration

- Intelligent automation for resource scaling
- API-driven management capabilities

### Phase 3: Premium Enhancements & Customer Interaction

#### Customer Purchase Platform

- End-to-end eCommerce solution
- Secure payment processing with Stripe integration

#### Sustainability & Energy Efficiency Reporting

- Energy consumption monitoring
- Recommendations for eco-friendly operations

### Phase 4 & Beyond: Future Opportunities

- Replacement for cloud orchestration solutions
- User Engagement & Personalized Experience
- Customizable White-Label Solutions
- Integrated Virtual Network Operations Center (NOC)
  - 3D visualization and AR support
  - Interactive asset management interface

This project will be updated regularly, any suggestions for improvements are more than welcome!
>>>>>>> origin/main
