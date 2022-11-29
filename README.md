## 注意

若要測試，請於\_app.tsx 更換自己的測試 apiKey

## Getting Started

### Frontend

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Smart contract

Remember to add environment variables in .env file

```bash
npx hardhat run scripts/deploy.js --network goerli
npx hardhat verify 0x121B2f8FDE6fBF96426e4B92f31faaF4A897FC6F --network goerli ""
```
