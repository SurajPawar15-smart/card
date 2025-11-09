## 1️⃣ Initialize and push code to GitHub
git init

git add .

git commit -m "Initial commit"

git branch -M main

git remote add origin https://github.com/SurajPawar15-smart/card.git

git push -u origin main

## 2️⃣ Install the GitHub Pages deploy package

npm install -g angular-cli-ghpages

## 3️⃣ Build your Angular app for production

Replace <project-name> with your actual Angular app folder inside dist/.

Example (if your Angular app name is card):

ng build --base-href "https://SurajPawar15-smart.github.io/card/"

## 4️⃣ Deploy to GitHub Pages

npx angular-cli-ghpages --dir=dist/card/browser


## ✅ 5️⃣ Done!
Your Angular business card app will be live at:

👉 https://SurajPawar15-smart.github.io/card/

## In short

## Step-01
PS F:\Angular\card> ng add angular-cli-ghpages

Skipping installation: Package already installed
Cannot read the output path (architect.build.options.outputPath) of the Angular project "card" in angular.json

PS F:\Angular\card> ng build --base-href "https://SurajPawar15-smart.github.io/card/"

Initial chunk files   | Names         |  Raw size | Estimated transfer size
styles-TZGDDOEH.css   | styles        | 231.42 kB |                22.76 kB
main-TMWMXOUI.js      | main          | 199.14 kB |                54.58 kB
polyfills-5CFQRCPP.js | polyfills     |  34.59 kB |                11.33 kB

                      | Initial total | 465.14 kB |                88.67 kB

Application bundle generation complete. [9.064 seconds] - 2025-11-09T19:06:46.378Z

Output location: F:\Angular\card\dist\card

## Step-02 Build your Angular app for production

ng build --base-href "https://SurajPawar15-smart.github.io/card/"

## Step-03 Open to the repository setting => in pages => select main => then again but the below command

PS F:\Angular\card> npx angular-cli-ghpages --dir=dist/card/browser

## Step-04 On to the repository setting => in pages => select gh-pages => then again but the below command

PS F:\Angular\card> npx angular-cli-ghpages --dir=dist/card/browser
Successfully published via angular-cli-ghpages! Have a nice day!

## Step-05 See the output

https://SurajPawar15-smart.github.io/card/

