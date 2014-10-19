#!/bin/bash
forever stop ./web/app.js
git pull
forevert start ./web/bin/www
