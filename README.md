# express-hello-world

This is a very simple hello world nodejs app that can be used in a openshift cluster's `developer` perspective to run an express server to display _Hello World!_ when the url for the app is used.

In the `Developer`'s perspective press `Add` and use `From Dockerfile`.

For the `Git Repo URL` use this repos url, i.e. `https://github.com/mjdavisibm/express-hello-world`.

Make sure the `Container Port` is set to `3000` and press `Create`

In the `Topology` view wait for the app to build and start running.

Then use select the `open URL` icon for the app to display _Hello World_
