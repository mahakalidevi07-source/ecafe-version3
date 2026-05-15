# E-CAFE & CAR WASH — Cloud Management SaaS

## 1. Project Description
A premium enterprise-grade cloud-based management platform for E-Cafe & Car Wash, located in Kathmandu, Nepal. The platform serves as an all-in-one SaaS solution covering restaurant/café operations, car & bike wash, EV charging, POS billing, kitchen management, inventory, and employee management. Inspired by the depth and workflow of RestroX, Toast POS, and Square POS — but fully custom-built.

**Target Users:** Business owners, managers, cashiers, kitchen staff, car wash staff, EV charging operators.

## 2. Page Structure
- `/` — Dashboard (live analytics, activity feed, KPIs)
- `/pos` — POS Billing (touch POS, cart, billing, VAT, print)
- `/kitchen` — Kitchen Display System (realtime orders, timers, status)
- `/car-wash` — Car Wash Management (queue, vehicle tracking, staff)
- `/ev-charging` — EV Charging (timer, unit calc, billing)
- `/settings` — Admin Settings (staff, roles, menu, inventory, system)

## 3. Core Features
- [x] Sidebar navigation with role-aware menu
- [x] Dashboard with live KPIs, revenue charts, activity feed
- [x] POS Billing: touch menu, cart, VAT (Nepal), split bill, print
- [x] Kitchen Display: realtime order queue, timers, status updates
- [x] Car Wash: queue management, vehicle tracking, staff assignment
- [x] EV Charging: session timer, unit calculation, billing
- [x] Admin Settings: staff management, roles, menu config, inventory
- [ ] Authentication (JWT, role-based) — Phase 2
- [ ] Real WebSocket backend — Phase 2
- [ ] Inventory deduction engine — Phase 3
- [ ] Customer loyalty system — Phase 3
- [ ] Multi-branch support — Phase 4

## 4. Data Model Design
(Frontend mock data for Phase 1; Supabase integration in Phase 2)

### Orders
| Field | Type | Description |
|-------|------|-------------|
| id | string | Order ID |
| type | enum | cafe / carwash / ev |
| items | array | Line items |
| status | enum | pending / preparing / ready / done |
| total | number | Total amount (NPR) |
| createdAt | datetime | Order timestamp |

### Staff
| Field | Type | Description |
|-------|------|-------------|
| id | string | Staff ID |
| name | string | Full name |
| phone | string | Phone number |
| role | enum | super_admin / manager / cashier / kitchen / coffee / carwash |
| active | boolean | Active status |

### Menu Items
| Field | Type | Description |
|-------|------|-------------|
| id | string | Item ID |
| name | string | Item name |
| category | string | Category |
| price | number | Price (NPR) |
| available | boolean | Availability |

## 5. Backend / Third-party Integration Plan
- Supabase: Phase 2 — Auth, database, realtime subscriptions
- Stripe: Not needed (Nepal QR/cash payments)
- Shopify: Not needed
- WebSocket: Phase 2 — realtime order sync across devices

## 6. Development Phase Plan

### Phase 1: Core UI Shell + All 6 Pages (Current)
- Goal: Build the complete frontend with mock data, all 6 pages, premium dark UI
- Deliverable: Fully navigable app with realistic mock data on all pages

### Phase 2: Authentication + Supabase Backend
- Goal: JWT login, role-based access, Supabase DB + realtime
- Deliverable: Working login system, data persisted in Supabase

### Phase 3: Advanced Features
- Goal: Inventory deduction, customer loyalty, reporting exports
- Deliverable: Full inventory workflow, PDF reports, customer profiles

### Phase 4: Multi-branch + SaaS Expansion
- Goal: Branch management, subscription tiers, white-label
- Deliverable: Multi-tenant architecture