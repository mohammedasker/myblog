---
layout: blog
title: Explaining How Git Rebase Works in Layman's Terms 🍕🥑🍖
date: 2020-11-19T14:21:27.315Z
thumbnail: /images/uploads/component-6-.png
tags:
  - Git
---
## What is git rebase?

Git rebase is a git command that merges one branch with another branch. We use that command whenever we want to combine the changes made by a team member into our branch. Git rebase is very useful when we want to catch up on our branch with the latest changes in a remote repository.

## How git rebase works?

To better understand how git rebase works, allow me to explain this concept with an imaginary company and foods.

Let's imagine you are working in a company with your teammates, Peter and Jessica. Your manager has assigned you to build a pizza feature while Jessica takes care of avocado feature and Peter will work on a meat feature. You all then started working on your respective features.

Here's what your workflow will probably look like:

You begin by opening the terminal and in the main branch, you'll create a new feature branch named `add_pizza`

```
git checkout -b add_pizza
```

`git checkout -b` is the equivalent of:

```
git branch branch_name
git checkout branch_name
```

The reason why you did this is that you don't want to make changes to the main branch directly. Changing the main branch directly will disrupt your team's work and you don't want that to happen. You also want to keep track of what things have changed in the repository.

After you created a new branch and you switched to your branch, this is the point where you can start writing codes.

Later on, both Peter and Jessica have finished their work and pushed the feature branches to the remote repository. Now, you want to access their feature branches, but how are you going to do that?

First, you'll go back to the main branch:

```
git checkout main
```

Then, you run `git pull` to pull the latest changes made in the remote repository:

```
git pull
```

When the pulling process is complete and you see that you received the changes from the remote repository, you return to your branch by running `git checkout` and the name of your branch:

```
git checkout add_pizza
```

Okay, here's the thing: you can't access their feature branches yet. You did pull something from the remote repository, but you can't see their codes yet. This is where git rebase comes into the play. Git rebase lets you to merge your branch with the branches you pulled from the remote repository. In other words, you can access their features and make changes into their codes.

Here's my illustration to give you an idea of how to rebase works conceptually:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/39ytviqwo3xi4zddh4qb.png)

To use git rebase, you run `git rebase` with the name of your branch:

```
git rebase add_pizza
```

And now, you shall see the changes from your colleagues! Now, you can finish off your work and push your changes to the remote repository containing your colleagues' codes! You complete today work's tasks!

## When to use git rebase?

You probably don't need to use rebase if you are working on your project. but when you are collaborating with a team in a company or open resource project, then knowing how to use rebase is very important because, without it, you won't be able to access an updated repository.

## Conclusion

In a nutshell, `git rebase` is what allows you to combine someone's branch into your branch so that you can access their codes. And remember: to get their codes from the remote repository, go to the main branch and run `git pull` and to combine their codes into your codes, run `git rebase 'your_branch'`.

Hopefully, this article has helped you to understand git rebase a little better than before and know how to use it in a collaborative project.