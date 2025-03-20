# CarbonTrackr Frontend

This is the frontend for **CarbonTrackr**, a minimal proof-of-concept web application to help users track and offset their carbon footprint using AI recommendations.

## Project Structure
```
carbonfootprint-frontend/
├── README.md
├── main.jsx
├── App.jsx
├── styles/
│   └── global.css
└── package.json
```

## Tech Stack
- **React** (with Vite)
- **Zustand** for state management
- **Shadcn** (optional for styling)

## Features
- Calculate carbon footprint based on travel distance.
- Receive AI-generated recommendations for reducing carbon emissions.
- Persist results and recommendations using Zustand and local storage.

## Installation
1. Clone the repository:
```bash
git clone https://github.com/Rahulkannoujia123/carbonfootprint-frontend.git
cd carbonfootprint-frontend
```
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Usage
1. Enter the travel distance (in kilometers) in the input field.
2. Click the "Calculate" button to get the carbon footprint and AI recommendations.

## API Endpoint
The frontend interacts with a backend API at:
```
POST https://carbon-footprint-cyan.vercel.app/calculate
```
Expected request body:
```json
{
  "distance": 100
}
```
Expected response:
```json
{
  "footprint": 25.5,
  "recommendations": [
    "Use public transport",
    "Carpool with others"
  ]
}
```

## Deployment
- Frontend can be hosted on Vercel/Netlify with a simple push to the repository.
- Ensure the backend is deployed and update the API endpoint in `App.jsx`.

## Author
- **Rahul Kannoujia**

## License
This project is licensed under the MIT License.

