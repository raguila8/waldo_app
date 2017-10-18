# Waldo App

This is an implementation of the children's game, Where's Waldo that uses a Rails back end.

The app contains a collection of large images where the user is meant to find several characters such as Waldo and Odlaw. Once the user finds all the characters, they can add their name to the highscores list if they managed to find the characters in time (top 5 scores).


![Waldo App](/images/waldo-app.png)

[View Project](https://fierce-thicket-84989.herokuapp.com/)

* Ruby version - 2.3.3

* Rails version - 5.1.4

## Running Locally

* Configuration - run `bundle install` to install and include the gems specified in the `Gemfile`, while skipping the installation gems using the option `--without production`:

```linux
$ bundle install --without production
```

This arranges to skip the pg gem for PostgreSQL in development and use SQLite for development and testing. In case you've previously installed a version of a gem (such as Rails) other than the one specified by the Gemfile, it's a good idea to update the gems with `bundle install` to make sure the versions match:

```linux
$ bundle update
```

### Database

There are a total of 3 tables that store all the data. The `images` table stores the images and their dimensions. The `characters` table stores the characters to find and their coordinates (x, y) within the image. The `highscores` table stores all the highscores for each image. To seed the database I use the standard ruby file `db/seeds.rb`.

```linux
$ rails db:seed
```

## Acknowledgments

* This was part of The Odin Project curriculum.
