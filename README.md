# Next.js 13 Hydration Mismatch Error

This repository demonstrates a hydration mismatch error in Next.js 13 when using a custom component that does not export a default.  The issue is resolved by exporting a default from the custom component.

## Bug
The bug is caused by a mismatch between the server-rendered HTML and the client-side hydration. The server renders correctly, but the client-side hydration fails. The error message is similar to:

```
Hydration failed because the server-rendered HTML and the client-rendered HTML are different.
```

## Solution
The solution is simple; export a default from your custom component.

## Steps to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the hydration mismatch error.
5. Uncomment the `export default MyComponent` line in `components/MyComponent.js`.
6. Run `npm run dev` again.
7. Observe that the error has disappeared.
