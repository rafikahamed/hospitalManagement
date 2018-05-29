#!/usr/bin/env bash

if [[ $2 == "" ]]
then
	FILE=app
else
	FILE=$2
fi
if readlink /proc/$$/fd/0 | grep -q "^pipe:"; then
	while read line
	do
		echo "$(date "+%m/%d/%Y %H:%M:S %Z")|${HOSTNAME}|${USER}|$line" >> ${APP_LOGS}/${FILE}.$(date +%m%d%Y).log
	done
else
	echo "$(date "+%m/%d/%Y %H:%M:S %Z")|${HOSTNAME}|${USER}|$1" >> ${APP_LOGS}/${FILE}.$(date +%m%d%Y).log
fi
