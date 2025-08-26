#!/bin/bash

# Install Netlify CLI if not already installed
if ! command -v netlify &> /dev/null; then
    echo "Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Deploy to Netlify Drop
echo "Deploying to Netlify Drop..."
netlify deploy --dir=. --prod

echo "Website deployed! Check the URL above for your live preview."