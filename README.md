# Spotify Account Authentication Testing

This project contains a basic demo utilizing OAuth 2.0 flow for [authenticating against the Spotify Web API](https://developer.spotify.com/web-api/authorization-guide/) using authorization code flow

### Using your own credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, we registered these Redirect URIs:

* http://localhost:8888 (needed for the implicit grant flow)
* http://localhost:8888/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in the example with the ones you get from My Applications.

## Running the examples
In order to run the project do

    $ cd authorization_code
    $ node app.js

Then, open `http://localhost:8888` in a browser.
