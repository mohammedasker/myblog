---
layout: blog
title: How to process submitted forms in your website
date: 2020-09-09T08:33:21.423Z
thumbnail: /images/uploads/jason-leung-mznrsye9qi4-unsplash.jpg
tags:
  - Web development
---
Let's say you created a contact form and you want the message to be sent to your inbox email but you don't want to write backend codes to handle the process or use form builders. Is this even possible?

Well, yes. It is possible.

I use a third-party tool called [Formspree](https://formspree.io/) which allows you to process a form submission easily without touching backend servers. It is ideal for static sites where you want to keep your website's functionality as simple as you can.

The best part about Formspree is it really is just a URL and not a form builder. In other words, you can use your own HTML, CSS, and JavaScript codes to build any kind of forms you want.

The steps to add Formspree to your website is pretty straightforward. Let's go add them!

### 1. Create an account

The first thing to do is to sign up the platform. Use the email address that you want to receive the submitted messages. 

### 2. Copy the URL endpoint.

After you finished signing up and have verified your email, you'll be taken to the integration page where you can see your URL endpoint. Copy the code and we'll use it in your form.

### 3. Add the URL to your form

Place the URL you just copied in the action attribute of your form. Make sure that your form uses method="POST" and also each input has a name attribute so it will work properly.

Here's a code example:

```
<form action="https://formspree.io/randomletters" method="POST">
  <input type="text" name="name">
  <input type="email" name="_replyto">
  <input type="submit" value="Send">
</form>
```

### Bonus - Protect your form from spams

One cool feature about Formspree is it also comes with reCaptcha which will help to protect your form from unwanted spams. To activate reCaptcha, go to the settings and toggle the reCAPTCHA button. When the user submits the form, they will be prompt to complete the reCaptcha process and once they do, they will be able to submit the message successfully.

### Conclusion

And that's pretty much of it! You can now receive submitted messages to your email inbox and no need to write backend server codes. Enjoy!