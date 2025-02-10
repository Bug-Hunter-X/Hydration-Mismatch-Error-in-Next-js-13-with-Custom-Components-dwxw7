```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent(){
  return (
    <div>
      <p>This is my component.</p>
    </div>
  );
}
```