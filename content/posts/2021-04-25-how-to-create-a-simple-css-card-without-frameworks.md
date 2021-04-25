---
layout: blog
title: How To Create a Simple CSS Card Without Frameworks
date: 2021-04-25T08:58:02.734Z
thumbnail: /images/uploads/component.png
tags:
  - CSS
---
In this tutorial, we are going to create a simple card with CSS. We will not use any frameworks or libraries and while they may be useful, there are times when you'll want to pick up vanilla CSS and try to keep things as simple as possible and that's exactly what this article is made for.

With no further ado, let's go!

## Step 1: The HTML

We will first begin by creating a `div` named **card** that will act like a real card. Then we will make another `div` called **header** and we'll wrap it around the text "The Header". As the name implies, it will be a header.

Next, we'll create `div` and name it **container** and that's where we will insert our contents. For this tutorial, we'll use some texts.

```html
<div class="card">
		<div class="header">
			<p>The Header</p>
		</div>
			<div class="container">
			<p>Some random texts</p>
			<p>Yet another texts</p>
			<p>Even more texts</p>
			<p>I should probably make programming puns</p>
		</div>
	</div>
```

That's all we need for the HTML and now it's time to style it with CSS.

## Step 2: The CSS

In the  **card**  class, we'll set the width of the card to 30% and we use the percentage '%' to make the card mobile responsive. Then, we'll use the flexbox to rearrange the header and the container and we're doing this so that the header will fit nicely to the card. 

To use flexbox, set the display to flex which will stack the header and the container into a row by default and to fix that, we'll set the direction of the flex to a column.

After that, we'll make the border visible by adding 1px to a border and set to solid and then add the red colour.

**header** 

```css
.card {
	width: 30%;
	display: flex;
	flex-direction: column;
	border: 1px red solid;
}
```

> **Tips!** Check out this [tutorial ](https://www.w3schools.com/css/css3_flexbox.asp)if you want to learn how Flexbox works.

Next, we'll style the **header**. We'll set the height of the header to 30% and add the background colour to red and change the colour of the text to white.

```css
.header {
	height: 30%;
	background: red;
	color: white;
	text-align: center;
}
```

Finally, we will add the padding 2px 16px shorthand (Which is the equivalent of `padding-top: 2`and `padding-right: 16`) to the **container** class so that there will be some spaces between the contents and the card, and it'll make the look of the card more decent.

```css
.container {
	padding: 2px 16px;
}
```

And there you go! We've made a card and we did that without relying on any frameworks!

Here's how the card would look like in the final result:


See results on [CodePen](https://codepen.io/mohammedasker/pen/KKdWmwm).



With this one, you can use the card on your website's sidebars, blog posts, etc. I hope you enjoyed this tutorial and thank you for reading.

Happy coding!