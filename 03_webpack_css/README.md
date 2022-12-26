## Using `css-loader` To Process .css Files.

## Using `style-loader` To Inject Style Rules in HTML <style>.

## The sequence of Loaders is Backward.

```js
	use: [
		'style-loader', // second
		'css-loader' // first
	]
```