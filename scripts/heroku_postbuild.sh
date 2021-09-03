#!/bin/bash

set -o errexit

(
  PROJECT_ROOT="$(cd $(dirname $0)/..; pwd)"

  cd $PROJECT_ROOT

  if [ "$POSTBUILD_PACKAGE" = "@coexist/hapi-proxy" ]; then
    yarn workspace @coexist/hapi-proxy build
  else
    echo "No valid POSTBUILD_PACKAGE set, skipping..."
  fi
)
