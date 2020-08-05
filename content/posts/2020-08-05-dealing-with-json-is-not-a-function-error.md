---
layout: blog
title: Dealing with ".json() is not a function" Error
date: 2020-08-05T07:59:37.960Z
tags:
  - JavaScript
---
You finished a tutorial about REST API, Ajax, or Fetch and now you're ready to build a new project using API. Cool! You opened a new file in text editor and start typing away until you encounter a problem. When you write <code>.json()</code>, you will get the ".json() is not a function" error.

You could get around by changing it to <code>.text()</code>, however doing this will make it hard to retrieve data you want from API even though it's technically responding. What should you do?

The solution? Use <code>items</code>.

Let me give you a quick example where I used it in my book finder project.

I created a function where it will fetch a data from Google Books API and display the search results in HTML. I simplified the codes just to demonstrated the point.

```javascript
function searchBook() {
  const query = document.querySelector('#search-input').value;
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2>Search results</h2>';
        data.forEach(book => {
        // Display search results
      })
  }
```
This code will not work because there is something missing and prevents the data parameters from being accessed . However, if I add <code>items</code> between <code>data</code> and <code>forEach()</code>, it will work:

```javascript
function searchBook() {
  const query = document.querySelector('#search-input').value;
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2>Search results</h2>';
        data.items.forEach(book => {
        // Display search results
      })
  }
```

Why this happens? To be honest, I still don't fully understand why it works this way either, so I'd be happy if any of you provide a better explanation in the comments below. For the time being, here's my thoughts:

Firstly, It could be the API itself - Not all APIs will work immediately if you simply put <code>.json()</code> and hoped for the best. Some APIs like [JSONPlaceholder](https://jsonplaceholder.typicode.com/) will work just fine without including <code>items</code>, while others like [Google Books API](https://developers.google.com/books) will require to include it to make it work.

Secondly, the API data will be returned in JSON format and since the objects are wrapped inside the array, you will need to get into the array first before you can access the JSON data from which you can then change it into object using the <code>.json()</code>.

So there you go! Next time when that error appears again, you know what you're gonna do.