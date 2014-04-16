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

I am not using Node at this point for anything more than a chat
websocket server, however now you're nicely set up for an /api (see the
/route directory and js file for a stupid JSON example). 

## Build instructions

First, please feel free to symbolicly link the angular web application
into /public for testing purposes or modify the node config to add that
directory to serve. That makes it possible to do continuous building
(and I may fix this project to do that in the very near future).

If you're linking the source into the ./public directory just run node
and hit the web browser at your new link directory:

```bash
node app.js
```

Once you're ready to test a final build (minified, two javascript files), do this:

```bash
cd angular-frontend
grunt --force
cd ..
node app.js
```

Then browse to `http://localhost:3000` and you should see the chat
client.



