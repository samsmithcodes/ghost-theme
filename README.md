# Journal (Blog Edition)

A Ghost blog theme based of the Journal theme.

## Instructions

1. [Download this theme](https://github.com/TryGhost/Journal/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

## Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/) and [Gulp](https://gulpjs.com) installed.

I'm going to use Docker to run a Node container with all the tools required.

```plaintext
docker run --rm -it \
  -v ${PWD}:/app \
  --workdir /app \
  node:lts bash 
```

After that, from the theme's root directory (`/app`):

```bash
# Install
npm install

# Run build & watch for changes
npm run dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/journal.zip`, which you can then upload to your site.

```bash
npm run zip
```

## Local Ghost Environment

To test this locally before uploading to a live site, you should run Ghost locally and check it all looks good, again you can use Docker for this, run the following command and then head to <http://localhost:2368>.

```plaintext
docker run -d --name ghost -p 2368:2368 -e NODE_ENV=development ghost
```

## Copyright & License

Copyright (c) 2025 Sam Smith

Original work by  
Copyright (c) 2013-2025 Ghost Foundation

Released under the [MIT license](LICENSE)
