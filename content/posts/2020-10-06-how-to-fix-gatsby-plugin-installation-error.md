---
layout: blog
title: How to fix Gatsby plugin Installation Error
date: 2020-10-06T13:50:38.084Z
thumbnail: /images/uploads/component-3-.png
tags:
  - Gatsby
---
When I tried to install the `Gatsby plugin for Netlify CMS` to one of my Gatsby projects, the installation has failed and generated error messages in my terminal log.

Here's the error log I got from the terminal:

```
npm ERR! code EPERM
npm ERR! syscall unlink
npm ERR! path C:\Users\User\Desktop\Mohd Projects\blogger\node_modules\@emotion\weak-memoize\dist
npm ERR! errno -4048
npm ERR! Error: EPERM: operation not permitted, unlink 'C:\Users\User\Desktop\Mohd Projects\blogger\node_modules\@emotion\weak-memoize\dist'
npm ERR!  [OperationalError: EPERM: operation not permitted, unlink 'C:\Users\User\Desktop\Mohd Projects\blogger\node_modules\@emotion\weak-memoize\dist'] {
npm ERR!   cause: [Error: EPERM: operation not permitted, unlink 'C:\Users\User\Desktop\Mohd Projects\blogger\node_modules\@emotion\weak-memoize\dist'] {
npm ERR!     errno: -4048,
npm ERR!     code: 'EPERM',
npm ERR!     syscall: 'unlink',
npm ERR!     path: 'C:\\Users\\User\\Desktop\\Mohd Projects\\blogger\\node_modules\\@emotion\\weak-memoize\\dist'
npm ERR!   },
npm ERR!   stack: "Error: EPERM: operation not permitted, unlink 'C:\\Users\\User\\Desktop\\Mohd Projects\\blogger\\node_modules\\@emotion\\weak-memoize\\dist'",
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'unlink',
npm ERR!   path: 'C:\\Users\\User\\Desktop\\Mohd Projects\\blogger\\node_modules\\@emotion\\weak-memoize\\dist',
npm ERR!   parent: 'blogger'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.
```

After asking around on Stack Overflow, it turns out the problem is when running `gatsby develop` I am reading my node_modules folder since a lot of its functionalities is using it such as imports, live reload, and so on.

While a program is reading those files, the system is not able to overwrite or add new folders from other sources (which in my case is npm) and this is because my operating system is using them at a time.

The hint to the problem is reading from this particular log:

```
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
```

Therefore, to fix the error, all I had to do stop running Gatsby server and try to install the plugin again but this time without running `gatsby develop`. 

And it worked.

So yes, if you are unable to install a plugin for your Gatsby project, then installing the plugin first before running the server will probably solve the problem.