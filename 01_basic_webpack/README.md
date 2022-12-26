
## Running by Global Commands

```bash
npm install -g webpack webpack-cli
webpack --version
webpack # running global webpack-cli command
```

## Running by Local `node_modules` Packages

```bash
pnpm install -D webpack webpack-cli
npx webpack # running local webpack-cli in node_modules

# or add scripts in package.json
npm run build
```