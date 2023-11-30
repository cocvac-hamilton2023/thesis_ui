This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About the Project

This repository is a part of a larger senior seminar/ thesis project at Hamilton College. We are collaborating with the [Central Oneida County Volunteer Ambulance Corps](https://www.cocvac.org/) to scrape 911 call data, analyse it, and display reports in a UI in order to understand where future EMS resources should be devoted.

## Project Steps

1. Create a script that runs daily to:

- Scrape [911 call data](https://ocgov.net/departments/emergency-services/911-summary-report/)
- Convert PDFs into tabular form. See code in [this](https://github.com/sydneyetran/COCVAC_code) repository

2. Create a power query and personal gateway in Power BI to automatically upload daily excel file to report

3. Create maps and charts in Power BI to analyze data

4. Embed Power BI report into a user interface and add additional info to the UI (ex. documentation, project info, etc.)

## Getting Started

### To view the published site:

Open [https://cocvac-hamilton2023.github.io/thesis_ui/](https://cocvac-hamilton2023.github.io/thesis_ui/) with your browser to see the finished product.

### Documentation

To see more documentation, please navigate to our [documentation](https://github.com/cocvac-hamilton2023/thesis_ui/tree/main/documentation) folder

### To develop:

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

