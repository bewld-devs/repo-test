#!/bin/bash

echo "Creating a copy of repo..."

echo "$1/archive/master.zip" 
curl -Lk "$1/archive/master.zip" > copy/master.zip


unzip ./copy/master.zip

echo "Done!"

echo "Running tests"

cd "$2-master"

echo "Install packages"
npm install

npm test

echo "Running Cleanup..."

cd ..

rm -rf ./copy/master.zip

rm -rf "$2-master"

rm -rf node_modules

echo "Done!"