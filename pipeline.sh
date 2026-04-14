#!/bin/bash

# Ensure exactly one argument is passed
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 [ON|OFF]"
    exit 1
fi

# Convert argument to uppercase for case-insensitive comparison
ARG=$(echo "$1" | tr '[:lower:]' '[:upper:]')

# Remove existing .github folder
if [ -d ".github" ]; then
    echo "Removing existing .github directory..."
    rm -rf .github
fi

if [ "$ARG" = "ON" ]; then
    echo "Enabling: copying from __tools__/enabled.github to .github"
    cp -r __tools__/enabled.github .github
elif [ "$ARG" = "OFF" ]; then
    echo "Disabling: copying from __tools__/disabled.github to .github"
    cp -r __tools__/disabled.github .github
else
    echo "Invalid argument. Please use 'ON' or 'OFF'."
    exit 1
fi

git add .github/
git commit -m "chore: pipeline $ARG"

echo "Operation complete."
