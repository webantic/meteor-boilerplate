#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/"
FILE_NAME=`basename "$0"`
ABS_PATH="$DIR$FILE_NAME"

cd "$DIR../imports"

if [[ -z "${1// }" ]];
then
	truncate startup/server/register-api.js -s 0
	echo '// AUTOGENERATED - DO NOT EDIT THIS FILE' > startup/server/register-api.js

	# Methods
	find api -name "methods.js" | xargs -n1 "$ABS_PATH"

	# Publications
	find api -name "publications.js" | xargs -n1 "$ABS_PATH"

	# Security
	find api -name "security.js" | xargs -n1 "$ABS_PATH"

	echo "done"
else
	echo "import '../../$1';" >> startup/server/register-api.js
fi
