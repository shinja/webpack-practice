## Using `css-loader` To Process .css Files.

## Using `style-loader` To Inject Style Rules in HTML <style>.

## The sequence of Loaders is Backward.

```js
	use: [
		'style-loader', // second
		'css-loader' // first
	]
```

## Process `.scss` Files.

### Install `sass` and `sass-loader`
```bash
pnpm install -D sass sass-loader
```

### Running via command
```bash
npx sass src/css/style.scss > output.scss

```