#!/bin/bash
echo "Building the application..."
npm run build

# GitHub Pages usually hosts at username.github.io/repo-name/
# This often breaks absolute paths like /assets/ or /src/
# We will create a deployment directory and adjust paths to be relative

mkdir -p gh-deploy
cp -r dist/public/* gh-deploy/

# Convert absolute paths to relative in the built index.html
# This handles the common issue where GH Pages projects show a blank page
sed -i 's|href="/|href="./|g' gh-deploy/index.html
sed -i 's|src="/|src="./|g' gh-deploy/index.html

# Handle 404s for client-side routing
cp gh-deploy/index.html gh-deploy/404.html

echo "---"
echo "Deployment files prepared in the 'gh-deploy' folder."
echo "To finish deployment:"
echo "1. Initialize a git repo in 'gh-deploy'"
echo "2. Push to your 'gh-pages' branch"
