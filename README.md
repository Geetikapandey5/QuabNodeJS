# HodlInfo Replica

This project replicates the HodlInfo webpage, fetching the top 10 results from the WazirX API and displaying them in a styled table.

## Features

- **Data Fetching**: Retrieves top 10 tickers from the [WazirX API](https://api.wazirx.com/api/v2/tickers).
- **Database Storage**: Stores data in a PostgreSQL database.
- **Express Server**: Serves the data with an Express server.
- **Styled Frontend**: Mimics the original [HodlInfo webpage](https://hodlinfo.com/).

## Prerequisites

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Included with Node.js
- **PostgreSQL**: [Download PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/hodlinfo-replica.git
    cd hodlinfo-replica
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Set up PostgreSQL**:

    - Install PostgreSQL from the official website.
    - Create a database named `hodlinfo` and a user with password `12345`.

4. **Create the `tickers` table**:

    Open the PostgreSQL Query Tool and run:

    ```sql
    CREATE TABLE tickers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        last DECIMAL,
        buy DECIMAL,
        sell DECIMAL,
        volume DECIMAL,
        base_unit VARCHAR(255)
    );
    ```

5. **Download CSS files**:

    Place the following CSS files in the `public/css` directory:

    - [main.a829415c.chunk.css](https://hodlinfo.com/static/css/main.a829415c.chunk.css)
    - [styles.css](https://hodlinfo.com/static/css/styles.css)
    - [index.css](https://hodlinfo.com/static/css/index.css)
    - [bootstrap.css](https://hodlinfo.com/static/css/bootstrap.css)
    - [2.320202e0.chunk.css](https://hodlinfo.com/static/css/2.320202e0.chunk.css)

## Usage

1. **Start the server**:

    ```sh
    node index.js
    ```

2. **Open your browser and visit**:

    ```plaintext
    http://localhost:3000
    ```

## File Structure

```plaintext
hodlinfo-replica/
│
├── public/
│   └── css/
│       ├── main.a829415c.chunk.css
│       ├── styles.css
│       ├── index.css
│       ├── bootstrap.css
│       └── 2.320202e0.chunk.css
│
├── src/
│   ├── index.js
│   ├── routes/
│   ├── models/
│   └── controllers/
│
├── package.json
└── README.md
