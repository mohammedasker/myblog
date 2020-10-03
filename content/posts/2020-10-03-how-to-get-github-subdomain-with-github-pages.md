---
layout: blog
title: How to Get GitHub Subdomain with GitHub Pages
date: 2020-10-10T14:12:00.177Z
thumbnail: /images/uploads/component-2-.png
tags:
  - Web development
---
Have you noticed on the internet where some website's URL has a GitHub domain like this one [reactstrap.github.io](https://reactstrap.github.io/) and wondered how you can get it? Well, it turns out this can be done with [GitHub Pages](https://pages.github.com/). 

GitHub Pages is a static site hosting service where you can host your repository for free and comes with SSL (Secure Sockets Layer) too.

Creating the GitHub page is pretty straightforward and you can set it up and running in 5 minutes or less. Let's go make the website!

## 1. Create a Repository

Go to GitHub and create a new repository called `username.github.io` where the *username* can be your username. Make sure the first part of the repository name matches with your account or else it won't work.

## 2. Clone the Repository

In your computer, go to the folder where you want to store your project and clone the repository there.

``` 
$ git clone https://github.com/username/username.github.io 
```

## 3. Create a File

Next, we will create a simple file and add a little content "Hello World" into the file.

```git
$ cd username.github.io

$ echo "Hello World" > index.html
```
## 4. Push it to Repository

We're almost there. Add the changes you made, then make a commit, and finally push the changes to the repository.

```
$ git add --all

$ git commit -m "Initial commit"

$ git push -u origin master

```

And there you go! Your website is now ready and you can view it by opening the browser and head to ` https://username.github.io`. The URL is short and nice, and it's much better than if you were to do with the old way. Something like that: `https://username.github.io/projectname/`

Hopefully, you find this little guide useful and maybe save a few bucks along the way.

Enjoy!

*Photo by DESIGNECOLOGIST on Unsplash*