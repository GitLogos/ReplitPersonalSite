#!/bin/bash
npm run build
mkdir -p deploy
cp -r dist/public/* deploy/
cp dist/public/index.html deploy/404.html # For client-side routing
echo "Ready to deploy from 'deploy' folder. Push the contents of 'deploy' to your gh-pages branch."
