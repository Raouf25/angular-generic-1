# `angular-generic-1` 


## Getting Started

To get you started you can simply clone the `angular-generic-1` repository and install the dependencies:

### Prerequisites

You need git to clone the `angular-generic-1` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize `angular-generic-1`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `angular-generic-1`

Clone the `angular-generic-1` repository using git:

```
git clone https://github.com/Raouf25/angular-generic-1
cd angular-generic-1
```

If you just want to start a new project without the `angular-generic-1` commit history then you can do:

```
git clone --depth=1 https://github.com/Raouf25/angular-generic-1 <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We get the dependencies in this project we depend upon via `npm`, the [Node package manager][npm].



We have preconfigured `npm` so we can simply do:

```
npm install
```

After that, you should find out that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/src/#!/`][local-app-url].


## Updating Angular

Since the Angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools to easily update the dependencies. Simply run the preconfigured
script:

```
npm run update-deps
```

This will call `npm update` and `bower update`, which in turn will find and install the latest
versions that match the version ranges specified in the `package.json` and `bower.json` files
respectively.

## Serving the Application Files

While Angular is client-side-only technology and it is possible to create Angular web apps that
do not require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, XHR,
etc to function properly when an HTML page is opened via the `file://` scheme instead of `http://`.

### Running the App during Development

The `angular-generic-1` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`:

```
sudo npm install -g http-server
```








[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[local-app-url]: http://localhost:8000/src/#!/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
