#!/bin/bash

GIT_USER=${GIT_USER} CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages
