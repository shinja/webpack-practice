# Using @babel/cli.

```bash

pnpm i -D @babel/cli @babel/core

npx babel src/js/es6.js --out-dir ./build # without any transform.

npx babel src/js/es6.js --out-dir ./build --plugins=@babel/plugin-transform-arrow-functions # transform with plugin.

npx babel src/js/es6.js --out-dir ./build --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping #transform with multiple plugins.

```

