# CMSdash

This project is in the process of building a content/product management system.
There are plans to integrate many different tools to optimize efficiency and productivity. There
will be more information available after more functionality has been built in.

## Stack

Current plans are to do a serverless build with microservices.

- Next.js with app router
- shadcn/ui
- SQL database (MySQL with PlanetScale)

## Outline

A general plan of features that will be included.

### Phase 1

##### User Management & Authentication

- Admin users
- Regular users
- Add, edit, and remove users
- Login via other accounts (e.g. Google, LinkedIn, etc.)
- Login via AD (probably need to push to later phase but is possible)

##### Content/Product Management Dashboard

- Add, edit, remove, and archive _'clients'_
- Add, edit, remove, and archive content/products from inventory system
  - Rack space
  - Network
  - Power
  - VMs

##### Access List

- Fix user managment issues with logging in
- Connect to ticketing system
  - Render client & contact info correctly
  - Render billing status
- Access List logging and recent visitors
- Check-in & check-out
- Search

### Phase 2

##### Monitoring & Analytics

The managment dashboard will have additional functionality regarding content/product
metrics.

- Live feeds of power circuits & environmental sensors
- Data analysis for managing content/products

### Phase 3 & Beyond

Who knows??? Let's Go!!!
