EMP API Contracts
==

This repository contains the [RAML](http://raml.org/) contracts for the EMP API.

Starts server on `:8080` if using [Vagrant](https://www.vagrantup.com/): http://vagrant-emp-contracts.local:8080/api.html

Setup
--

```
vagrant ssh
cd /vagrant
npm install
```

Developing
--

This project has a [Vagrant](https://www.vagrantup.com/) setup if you want to use it for working on the contracts. It has a [RAML](http://raml.org/) plugin installed for [VIM](http://www.vim.org/) and [Node.js](https://nodejs.org/) setup for running the Testing and Documentation processes outlined below. The recommended start process is:

```
vagrant ssh
cd /vagrant
gulp
```

Testing
--

```
vagrant ssh
cd /vagrant
gulp test
```

The following will start watching for file changes and test and build when changes are made.

```
vagrant ssh
cd /vagrant
gulp test
```

Documentation
--

```
vagrant ssh
cd /vagrant
gulp build
```

Creates a `api.html` file in the current directory.
