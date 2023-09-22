# Covid Dashboard

The Covid Dashboard is a web application designed to visualize COVID-19 data fetched from a remote API. Built with the Next.js framework and ant.d for the UI, it uses g2.antv to render charts that offer insights into the pandemic's progression and trends.

[DEMO](https://covid-dashboard-qkq35phap-princam.vercel.app/)

## 🌟 Features

- **Data Visualization**: Render data from the remote [COVID-19 UK Data API](https://coronavirus.data.gov.uk/details/developers-guide/main-api) in interactive charts.
- **Modern Tech Stack**: Built with TypeScript, Next.js, ant.d, and g2.antv.

## 📂 Project Structure

- **Page Header**: Contains only the application's title.
- **Content Area**:
    - **Utility Panel**: Contains the page title and dummy buttons.
    - **Charts**: Two cards, each with a chart (type is up to your selection), a dummy avatar, and a dummy button. Optionally, a heart icon can be added to allow marking as favorite.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm (or yarn)
- Familiarity with TypeScript, Next.js, and ant.d

### Local development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
