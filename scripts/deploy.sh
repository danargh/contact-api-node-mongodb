#!/bin/sh
set -e
echo "Deploying application ..."

echo "Update codebase..."
cd ~/app/contact-api-node-mongodb
git fetch origin main
git reset --hard origin/main

echo "========================= BACK END ========================="

echo "Go to backend folder..."
cd ~/app/contact-api-node-mongodb

echo "Installing dependencies 🛠"
npm install

echo "Restart pm2 service 🔥"
pm2 restart deploy.json

echo "Deploying Backend Application Successfully Yeayyyy ......."