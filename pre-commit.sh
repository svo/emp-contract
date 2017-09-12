#!/bin/bash

source bash/common.sh

npm install

gulp test
unit=$?
echo_result "Unit Tests" $unit
