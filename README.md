# 🏠 Real Estate Property Management Platform

A frontend-based web platform designed to make **property discovery and property management** simple, organised, and user-friendly.

## 📌 Project Overview

The **Real Estate Property Management Platform** provides separate interfaces for users, property owners, and administrators.

The project is a static frontend built with **HTML, CSS, and vanilla JavaScript**. Its sample accounts, listings, dashboards, and form submissions are demo interactions; it does not currently connect to a backend or store user data.

## 🎯 Objectives

- Provide an easy-to-use property browsing interface
- Display property information in an organised manner
- Provide user registration and login interfaces
- Allow users to submit property inquiries
- Provide property management interfaces for owners
- Provide administrative interfaces for managing users and properties
- Maintain a structured and collaborative development workflow using GitHub

## 👥 Team Modules

| Module | Team Member | Responsibilities |
| --- | --- | --- |
| 👤 User/Public | **Nancy Paul** | Homepage, Login, Registration, Inquiry |
| 🏠 Property | **Naitik** | Property Listing, Property Details |
| 👨‍💼 Owner | **Mrityunjay** | Owner Dashboard, Add/Edit/Manage Properties |
| ⚙️ Admin | **Muskan** | Admin Dashboard, Users, Properties, Bookings |

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **Git**
- **GitHub**
- **VS Code**

## 📂 Project Structure

```text
Real-estate-Property-management-platform/
│
├── index.html
├── login.html
├── register.html
├── properties.html
├── property-details.html
├── inquiry.html
│
├── css/
│   └── style.css
├── js/
│   ├── inquiry.js
│   ├── properties.js
│   ├── property-details.js
│   └── register.js
│
├── user/
│   └── dashboard.html
│
├── owner/
│   ├── dashboard.html
│   ├── add-property.html
│   ├── edit-property.html
│   └── my-properties.html
│
└── admin/
    ├── dashboard.html
    ├── users.html
    ├── properties.html
    └── bookings.html
```

## Run locally

Open `REAL ESTATE PROPERTY MANAGEMENT PLATFORM/index.html` in a browser, or serve the project with a local static server such as the VS Code Live Server extension. No package installation or build step is required.

## Demo behavior

- Property search, filters, and sorting run in the browser against the sample listings.
- The property detail page includes a selectable photo gallery.
- Registration checks the password fields and routes to a role dashboard. Login routes to a selected dashboard.
- Inquiry and account forms do not transmit or save personal information. A backend is needed for real accounts and submissions.
