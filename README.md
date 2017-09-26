# TODO_LIST_DEMO
Simple TODO list web app, using PHP5, CakePHP frmwr with WS and AngularJS ver.1

# HOW-TO Set up application
PHP Composer is installed that can be accessed globaly (from command line):
1. composer self-update && composer create-project --prefer-dist cakephp/app Ime_Spletne_app
2. www\TODO_LIST_TEST\config\app.default.php in app.php
3. bin\cake tasks all

Editing this Page on cakephp
To change the content of this page, edit: src/Template/Pages/home.ctp.
You can also add some CSS styles for your pages at: webroot/css/.

DB: table Tasks
Id | TaskDesc | Completed | Deleted | EntryTime

CREATE TABLE `tasks` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TaskDesc` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Completed` tinyint(1) DEFAULT '0' COMMENT 'Is Completed?',
  `Deleted` tinyint(1) DEFAULT '0',
  `EntryTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO pg_todo_list_app.tasks
(TaskDesc, Completed, Deleted, EntryTime)
VALUES ('TaskDesc', Completed, Deleted, 'EntryTime');

DROP TABLE `pg_todo_list_app`.`tasks`;

# How to access application

http://<your webserver address>:<webserver port>/TODO_LIST_TEST/Tasks
http://<your webserver address>:<webserver port>/TODO_LIST_TEST/TaskList.html

If you didn't specifly other wise, default webserver port is 80 and you don't have to add line ":80" in URL

# CakePHP Application Skeleton

[![Build Status](https://img.shields.io/travis/cakephp/app/master.svg?style=flat-square)](https://travis-ci.org/cakephp/app)
[![License](https://img.shields.io/packagist/l/cakephp/app.svg?style=flat-square)](https://packagist.org/packages/cakephp/app)

A skeleton for creating applications with [CakePHP](http://cakephp.org) 3.x.

The framework source code can be found here: [cakephp/cakephp](https://github.com/cakephp/cakephp).

## Installation

1. Download [Composer](http://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
2. Run `php composer.phar create-project --prefer-dist cakephp/app [app_name]`.

If Composer is installed globally, run

```bash
composer create-project --prefer-dist cakephp/app
```

In case you want to use a custom app dir name (e.g. `/myapp/`):

```bash
composer create-project --prefer-dist cakephp/app myapp
```

You should now be able to visit the path to where you installed the app and see the default home page.

### Installation of 3.next

In case you want to try the unstable branch:

```bash
composer create-project --prefer-dist cakephp/app=dev-3.next app
```

You may then install specific RC, for example:

```bash
cd app;
composer require cakephp/cakephp:3.4.0-RC3
```

## Update

Since this skeleton is a starting point for your application and various files would have been modified as per your needs, there isn't a way to provide automated upgrades, so you have to do any updates manually.

## Configuration

Read and edit `config/app.php` and setup the `'Datasources'` and any other
configuration relevant for your application.

## Layout
The app skeleton uses a subset of [Foundation](http://foundation.zurb.com/) CSS framework by default. You can, however, replace it with any other library or custom styles.
