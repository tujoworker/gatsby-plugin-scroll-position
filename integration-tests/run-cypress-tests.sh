#!/bin/bash

# Test example-basic
echo 'Testing example-basic with cypress ...'
start-server-and-test 'yarn workspace example-basic gatsby build && yarn workspace example-basic gatsby serve --port=8090' http://localhost:8090 'cypress run'

