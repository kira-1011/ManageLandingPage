# Tailwindcss and Typescript Manage Landing Page

![Alt text](/images/Screen.png?raw=true)

# Usage

Install dependencies (Tailwind and Typescript)

```
npm install
```

Run the Tailwind CLI to compile the **input.css** during development. The output file is **css/main.css**

```
npm run tailwindcss-watch
```
Run the Typescript CLI to compile the **js/main.ts** during development. The output file is **js/main.js**

```
npm run typescript-watch
```


To build once run the commands below ...

```
npm run tailwindcss-build
```
```
npm run typescript-build
```

You can edit the scripts in package.json and the tailwind.config.js file to change input/output locations