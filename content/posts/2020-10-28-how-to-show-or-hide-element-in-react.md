---
layout: blog
title: How to show or hide element in React
date: 2020-10-28T14:40:08.330Z
thumbnail: /images/uploads/component-4-.png
tags:
  - React
---
To show to hide elements in React, we are going to use React Hooks which is a simpler way of creating a state using functional components.

We will first begin by importing `useState` function from React library so that we can use the React hooks features:

```js
import React, { useState } from "react";
```

Then, inside the functional component — we will write `const` variable and add square brackets. Inside the square brackets, we will name it `showText` and `setShowText` in where `showText` is going to be the value of a text and `setShowText`  will be a function used to change the value.

**Note**: You can replace the word "ShowText" with whatever you want. I'm only using these words as an example.

After that, we will write useState and inside the bracket we will set it to `false`, so it will be hidden by default:

```js
const [showText, setShowText] = useState(false);
```

Next, we will create another `const` variable and it will contain an `onClick` arrow function. From here, we will use `setShowText` function setter from which we created earlier and add `true` inside the bracket.

What this function will do is when the button is clicked, it will change the state to `true` , thus revealing the hidden element:

```js
const onClick = () => setShowText(true);
```

With this, we are all set to use them inside the functional component.

Inside the main component `App`, we will add the `button` element and write the `onClick` attribute. Inside the attribute, add `onClick` props from which we wrote the function earlier.

```js
<button onClick={onClick}>Click me</button>
```

A prop is a way of passing data or functionality from one component to another.

You can think of props as a wire connecting from one device like a remote controller to another device like a receiver. So when you press a power button, it will switch on the receiver.

Next, we will write the element in question that will display the hidden text.

We will create a component and name it `Text`. Inside the component, we will write a simple text "You clicked the button!". Feel free to replace this sentence with any words to make this tutorial more amusing.

```js
const Text = () => <div>You clicked the button!</div>;
```

We are almost finished — we will head back to the `App` component and under the button, we'll add the following code:

```js
 {showText ? <Text /> : null}
```

We need to add curly braces because this will allow us to use JavaScript codes. Inside these curly braces, we will write a ternary operator which is a short form of if/else statement. 

What this code does is If `showText` is true, we'll show the `Text` component which contains hidden texts. Otherwise, it returns `null` and the component stays hidden.

And we are done! The code is ready to be tested and you can now click the button and it will display the text "You clicked the button"!

This is our final code:

```js
import React, { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);

  return (
    <div>
      <button onClick={onClick}>Click me</button>
      {showText ? <Text /> : null}
    </div>
  );
}

const Text = () => <div>You clicked the button!</div>;

export default App;

```

You can view the demo from [Codesandbox](https://codesandbox.io/s/show-and-hide-element-in-react-h1d0z?file=/src/App.js).

So here we are -- this is how you can hide and show element in React. Happy coding!

*If you enjoyed this post, please share it so more people will benefit from it. You can also follow me on [Twitter](https://twitter.com/mooasker).*