#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../" && pwd )"
IN="$(cat ${DIR}/VERSION)"
OUT=""
echo $IN

versions=$(echo $IN | tr "." "\n")

COUNT=0
for ver in $versions
do
  let "COUNT += 1"
  if [ "$COUNT" -eq "3" ]
    then
      let "ver += 1"
  fi
  if [ "$COUNT" -eq "1" ]
    then
      OUT="$ver"
    else
      OUT="$OUT.$ver"
  fi
done

echo "$OUT" > "$DIR/VERSION"
sed -i "s#$IN#$OUT#g" "$DIR/imports/startup/constants.js"
