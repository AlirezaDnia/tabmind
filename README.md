# TabMind

AI-powered browser memory workspace built with Next.js, Supabase, and Chrome Extensions.

## Overview

TabMind lets users save and organize important content from across the web using a browser extension and a modern dashboard interface.

Inspired by tools like Notion Web Clipper, Readwise, and AI-first productivity apps.

---

## Features

* Chrome extension for saving highlighted web content
* Secure token-based extension authentication
* User authentication with Supabase Auth
* Protected dashboard with private memories
* Real-time memory search
* Modern SaaS-style UI
* Row Level Security (RLS)
* Modular scalable frontend architecture

---

## Tech Stack

### Frontend

* Next.js 15
* TypeScript
* TailwindCSS
* shadcn/ui

### Backend

* Supabase
* PostgreSQL
* Row Level Security

### Browser Extension

* Chrome Extension APIs
* Context Menus
* Local Storage

---

## Architecture

```txt
Chrome Extension
        ↓
Token Auth API
        ↓
Next.js Route Handlers
        ↓
Supabase Database
        ↓
Dashboard UI
```

---

## Screenshots

### Dashboard

(Add screenshot)

### Extension Popup

(Add screenshot)

### Token Generation

(Add screenshot)

---

## Local Setup

### 1. Clone repository

```bash
git clone https://github.com/your-username/tabmind.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

### 4. Run development server

```bash
npm run dev
```

---

## Roadmap

* AI semantic search
* OpenAI embeddings
* Memory summarization
* Collections and tags
* Cross-device sync
* AI recommendations

---

## Status

Currently under active development.
