# Steps to clone template

1. Create folder for your project and cd into it

2. Perform the following commands in the command line
```bash
git clone https://github.com/SEB-13-Bahrain/auth-template.git .
rm -rf .git
rm README.md
```

3. Create a .env file with the following 2 values of your database connection:
```
MONGODB_URI=your-mongo-db-connection-string
SESSION_SECRET=your-sectret-key
PORT=3000
```


4. run:
```bash
npm i
```




