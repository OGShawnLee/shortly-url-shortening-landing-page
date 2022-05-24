# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Shortly URL shortening API Challenge solution](#frontend-mentor---shortly-url-shortening-api-challenge-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![Desktop View](./screenshots/Screenshot%202022-05-24%20at%2014-59-26%20Frontend%20Mentor%20Shortly%20URL%20shortening%20API%20Challenge.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Deployed on Vercel](https://shortly-url-shortening-landing-page.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- WindiCSS + [Flexbox + Grid]
- Svelte + TypeScript
- Malachite UI
- Vite

### What I learned

Well, I learn about the Clipboard API. However I didn't know it would make my page crash on Firefox! I deployed it on Vercel and checked it out on Firefox and booom!. This is the fix I came up with. I don't think it is very good, but at least works.

```ts
export const copiedLink = writable<string | null>(null, (set) => {
  try {
    navigator.clipboard.readText().then(set);
  } catch (err) {
    console.error('Unable to Read Text from the Clipboard');
  }

  return useListener(document.body, 'copy', () => {
    const selection = document.getSelection()?.toString();
    if (isString(selection) && !isEmpty(selection)) set(selection);
  });
});
```

```ts
function copyShortLink() {
  navigator.clipboard.writeText(shortLink);
  $copiedLink = shortLink;
}
```

### Useful resources

- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) - MDN docs are always trusty, this time they helped me learn more about the Clipboard API.

## Author

- Frontend Mentor - [@Shawn Lee](https://www.frontendmentor.io/profile/OGShawnLee)
