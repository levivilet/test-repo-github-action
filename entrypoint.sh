#!/bin/sh
set -eo pipefail

# -------- environments check  ------------ #

PARAM_CUSTOM_TEXT=${1:?"Missing CUSTOM_TEXT"}

# -------- functions ------------ #

start() {

    echo "Your custom text: ${PARAM_CUSTOM_TEXT}"
}


# -------- Main  ------------ #
start

echo "[-] End - Hello World!"