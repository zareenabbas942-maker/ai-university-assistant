# AI University Assistant

An AI-powered university information assistant developed for Lahore College for Women University (LCWU).

## Project Overview

The AI University Assistant is a web-based chatbot designed to help students find university-related information quickly.

The chatbot uses Retrieval-Augmented Generation (RAG) to retrieve relevant information from the LCWU knowledge base before generating an AI response.

## Main Features

* LCWU university information
* Admission information
* Undergraduate programs
* Faculties and departments
* Admission process
* Admission office information
* Scholarships and financial aid
* Hostel information
* Admission quota information
* University location and contact information
* Source information for retrieved answers
* Out-of-scope question protection
* Safe fallback when information is unavailable
* Suggested questions
* Chat reset functionality
* Copy response functionality
* Typing indicator
* Error handling

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React

### Backend

* Python
* FastAPI
* Uvicorn
* Pydantic

### AI and RAG

* Google Gemini
* LangChain
* Retrieval-Augmented Generation (RAG)
* FAISS / Vector Search
* LCWU Knowledge Base

## System Architecture

```text
Student
   ↓
React Frontend
   ↓
FastAPI Backend
   ↓
RAG Retrieval
   ↓
LCWU Knowledge Base
   ↓
Relevant Context
   ↓
Google Gemini
   ↓
AI Response
   ↓
Sources
   ↓
Student
```

## Knowledge Base

The chatbot currently contains information about:

* University information
* Admissions
* Undergraduate programs
* Faculties and departments
* Admission process
* Admission office
* Hostel
* Scholarships and financial aid
* Quota

## Safety and Reliability

The chatbot is designed to answer questions using the available LCWU knowledge base.

It does not intentionally invent information.

If the requested information is not available in the current knowledge base, the chatbot provides a safe fallback response and advises the student to check the official LCWU website for the latest information.

The university information may change over time, so official LCWU sources should be checked for the latest admission dates, fees, eligibility criteria, programs and other details.

## Running the Backend

Open the backend folder:

```text
ai-university-chatbot-backend
```

Activate the virtual environment and run:

```bash
uvicorn main:app --reload --port 8002
```

Backend URL:

```text
http://127.0.0.1:8002
```

The Vite development server proxies frontend `/api` requests to this backend,
so the browser does not need to connect directly to the backend port. When
using port forwarding, forward the frontend port (`3000`); keep the backend
running on port `8002` on the same machine as the Vite server.

Health Check:

```text
http://127.0.0.1:8002/api/health
```

## Running the Frontend

Open the frontend folder:

```text
ai-university-assistant
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

The production files are generated inside the `dist` folder.

## Deploying the Frontend to Vercel

The Vite proxy configured for `/api` only runs during local development. It does
not forward requests from a deployed Vercel site to the FastAPI backend. Deploy
the backend separately, then add the following environment variable in the
Vercel project settings:

```text
VITE_API_BASE_URL=https://your-backend-host.example/api
```

Use the public HTTPS URL of your backend and include `/api` at the end (without
a trailing slash). Allow your Vercel site's origin in the backend's CORS
configuration, then redeploy the frontend so Vite can include the variable in
the production build. For local development, leave this variable unset; the
frontend continues to use `/api` through the Vite proxy to
`http://127.0.0.1:8002`.

## Testing

The chatbot has been tested with questions related to:

* Admission process
* Undergraduate programs
* Scholarships
* Hostel facilities
* Admission quota
* Faculties and departments
* University information

The system also handles:

* Questions outside the LCWU scope
* Questions for which information is not available in the current knowledge base
* Backend/API errors
* Empty questions

## Project Status

Core frontend, backend, RAG retrieval, AI integration and chatbot functionality have been implemented and tested.

The frontend production build has also been successfully generated.

The project is ready for demonstration and further deployment.
