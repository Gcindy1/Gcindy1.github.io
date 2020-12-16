CHUCKNORRIS.IO
chucknorris.io is a free JSON API for hand curated Chuck Norris facts.

Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris that have become an Internet phenomenon and as a result have become widespread in popular culture. The 'facts' are normally absurd hyperbolic claims about Norris' toughness, attitude, virility, sophistication, and masculinity.

Chuck Norris facts have spread around the world, leading not only to translated versions, but also spawning localized versions mentioning country-specific advertisements and other Internet phenomena. Allusions are also sometimes made to his use of roundhouse kicks to perform seemingly any task, his large amount of body hair with specific regard to his beard, and his role in the action television series Walker, Texas Ranger.

Usage
# Retrieve a random chuck joke
$ curl --request GET \
       --url 'https://api.chucknorris.io/jokes/random' \
       --header 'accept: application/json'

# Retrieve a random chuck joke by one or more categories
$ curl --request GET \
       --url 'https://api.chucknorris.io/jokes/random?category=dev,explicit' \
       --header 'accept: application/json'

# Retrieve a random personalized chuck joke
$ curl --request GET \
       --url 'https://api.chucknorris.io/jokes/random?name=Bob' \
       --header 'accept: application/json'

# Retrieve a random personalized chuck joke by one or more categories
$ curl --request GET \
       --url 'https://api.chucknorris.io/jokes/random?name=Bob&category=dev,explicit' \
       --header 'accept: application/json'

# Retrieve a list of available categories
$ curl --request GET \
       --url 'https://api.chucknorris.io/jokes/categories' \
       --header 'accept: application/json'

# Free text search
$ curl --request GET \
       --url 'https://api.chucknorris.io/jokes/search?query={query}' \
       --header 'accept: application/json'
Example response:

{
  "categories": ["dev"],
  "created_at": "2019-06-02 08:47:39.43184",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "bwoz2uwsqnwmyawyxdvo1w",
  "updated_at": "2019-06-02 08:47:39.43184",
  "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
  "value": "Chuck Norris finished World of Warcraft."
}
