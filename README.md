# Stock Prediction API Client (Node.js)

This Node.js project serves as a middle layer between the front-end and a Flask-based backend for stock predictions. It receives stock ticker symbols from the front-end, communicates with the Flask API to get predictions and other data, and sends the results back to the front-end.

## Features

- **Stock Price Prediction:** Forwards stock ticker symbols to the Flask API and retrieves stock price predictions (Open, High, Low, Close).
- **Company Information:** Fetches company data like name, CEO, headquarters, etc.
- **Analyst Recommendations:** Retrieves analyst price targets and ratings (buy, hold, sell).
- **Insider Trading Data:** Displays insider trading information.
- **Latest News:** Fetches the latest stock-related news articles.

## Tech Stack

- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web framework for handling API requests.
- **Axios:** HTTP client for making requests to the Flask API.
- **dotenv:** Environment variables management.

## Setup and Installation

### Prerequisites

- Node.js installed on your system (v12+)
- NPM (comes with Node.js) or Yarn (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OldAlexhub/stocks-be.git
   cd stock-prediction-client
   ```
