##  💅 Style Guide 💅

### Colors 🎨

- **Primary** → `#bde6fb`
- **Secondary** → `#1e2529`
- **Accent** → `#2a3439`


<hr>
<hr>


```html
<!--  Layout.astro  -->

<style is:global>
  :root{
    --primary:   #bde6fb;
    --secondary: #1e2529;
    --accent:    #2a3439;
  }
</style>
```

```javascript
// tailwind.config.mjs

export default {
	// ...
	theme: {
		extend: {
			colors: {
				primary:   "#bde6fb",
				secondary: "#1e2529",
				accent:    "#2a3439",
			},
		},
	},
  // ...
};
```