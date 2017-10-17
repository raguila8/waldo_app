# Waldo App

This is an implementation of the children's game, Where's Waldo that uses a Rails back end.

The app contains a collection of large images where the user is meant to find several characters such as Waldo and Odlaw. Once the user finds all the characters, they can add their name to the highscores list if they managed to find the characters in time (top 5 scores).


![Waldo App](/images/waldo-app.png)

[View Project](https://fierce-thicket-84989.herokuapp.com/)

* Ruby version - 2.3.3

* Rails version - 5.1.4

* Configuration - run `bundle install` to install and include the gems specified in the `Gemfile`, while skipping the installation gems using the option `--without production`:

```linux
$ bundle install --without production
```

This arranges to skip the pg gem for PostgreSQL in development and use SQLite for development and testing. In case you've previously installed a version of a gem (such as Rails) other than the one specified by the Gemfile, it's a good idea to update the fems with `bundle install` to make sure the versions match:

```linux
$ bundle update
```


* Database creation - run `rails db:migrate` to migrate your database and then populate the database with `rails db:seed` using the `seeds.rb` file.

```linux
$ rails db:migrate
```

```linux
$ rails db:seed
```

## Acknowledgments

* This was part of The Odin Project curriculum.
