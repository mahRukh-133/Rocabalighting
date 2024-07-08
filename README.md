# Cypress Test Suite for Rocaba Lighting

This repository contains automated tests for Rocaba Lighting's tissue paper application using Cypress.

## Setup

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>

2. Install dependencies:
npm install

Configuration
Base URLs

The base URLs for different environments are configured in cypress.json. By default, it uses the production URL. You can override it using environment variables as follows:

    Staging: npx cypress run --env baseUrl=https://staging.rocabalighting.co.uk/tissue-paper
    Production: npx cypress run (uses default production URL)

Running Tests

Run Cypress tests using the following command:

bash

npx cypress open

This will open the Cypress Test Runner, where you can select and run tests interactively.

To run tests in headless mode (for CI/CD):

bash

npx cypress run