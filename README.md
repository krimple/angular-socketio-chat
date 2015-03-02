# Angular-Flavored Chat

Sample AngularJS + NodeJS/Express application demonstrating the use of
Socket.IO.  I am using:

* [AngularJS](http://angularjs.org)
* [NodeJS](http://nodejs.org)
* [Express](http://expressjs.com) - NOTE I'm using 3.5
* [Socket.IO and Socket.IO Client](http://socket.io) for web socket
  support
* [Brian Ford's Angular Socket IO
  client](https://github.com/btford/angular-socket-io)
* [Twitter Bootstrap](http://getbootstrap.com) and both the
  [Express](https://www.npmjs.org/package/generator-express) and
  [AngularJS](https://www.npmjs.org/package/generator-angular) [Yeoman](http://yeoman.io) generators.

This project was a simple test of sockets as a traditional (some might
say 'ye olde') chat program. I wanted to write it as angularly as
possible (is that really a word?) and use the traditional Grunt-based
workflow of Yeoman where possible.

At some point I need to take a day and convert this over to a more
comprehensive script with gulp.  Ah, todo todo...

I am not using Node at this point for anything more than a chat
websocket server, however now you're nicely set up for an /api (see the
/route directory and js file for a stupid JSON example). 

## Runtime instructions

I have the root `app.js` node script pointing to serve / as the content
in /angular-frontend/app/ - you can construct and build and minify with
`grunt --force` in the `angular-frontend` directory. This will set the
content in `/public` to the minified version of the application and you
can serve that by editing `app.js`.

To launch the app and run in development mode: 

```bash
node app.js
```

Once you're ready to test a final build (minified, two javascript files), do this:

1.  Edit the `app.js` file and swap the commented and uncommented lines that
serve the static content.


2.  Run the build:

```bash
cd angular-frontend
grunt --force
cd ..
node app.js
```

3. Browse to `http://localhost:3000` and you should see the chat
client using minified scripts.
