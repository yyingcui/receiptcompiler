# Navigate to your project folder
cd path/to/your/receipt-compiler

# Copy the updated files (I provided them above in the artifact)
# Then stage the changes
git add src/components/EmailConnect.tsx src/App.tsx index.html

# Commit the changes
git commit -m "Add OAuth debugging and fix implicit flow"

# Push to GitHub
git push origin main
