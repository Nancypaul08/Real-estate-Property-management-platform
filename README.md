# Real-estate-Property-management-platform

## Team structure

| Member | Role | Module | Branch | Main pages | Responsibilities |
| --- | --- | --- | --- | --- | --- |
| Nancy | Team Leader | User / Public | `feature/user` | `index.html`, `login.html`, `register.html`, `properties.html`, `property-details.html`, `inquiry.html` | Home page, navbar, footer, login, registration, property search UI, property details, inquiry/booking UI, and final integration. |
| Naitik | Developer | Property Listing | `feature/property` | `properties.html`, `property-details.html` | Property cards, property images, price, location, search UI, filter UI, and property categories. |
| Mrityunjay | Developer | Owner Module | `feature/owner` | `owner/dashboard.html`, `add-property.html`, `my-properties.html`, `edit-property.html` | Owner dashboard, add-property form, my properties, edit/delete UI, and property status. |
| Muskan | Developer | Admin Module | `feature/admin` | `admin/dashboard.html`, `users.html`, `properties.html`, `bookings.html` | Admin dashboard, manage users, manage properties, manage bookings, tables, and status/action buttons. |

## Branch workflow

- Nancy works in the existing `feature/user` branch.
- Each remaining team member creates and works in their own assigned branch before opening a pull request to `dev`.
- The team leader reviews and merges completed work into `dev`, then merges `dev` into `main` for the final integration.
