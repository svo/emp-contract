#!/bin/bash

source bash/common.sh

sudo npm install -g gulp-cli@1.2.2
npm install

gulp test
unit=$?
echo_result "Unit Tests" $unit
