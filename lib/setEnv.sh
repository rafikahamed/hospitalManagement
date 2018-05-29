#!/usr/bin/env bash

export APP_HOME=/Data && alias  ahome="cd $APP_HOME"
export APP_BIN=$APP_HOME/bin && alias abin="cd $APP_BIN"
export APP_LIB=$APP_HOME/lib && alias alib="cd $APP_LIB"
export APP_LOGS=$APP_HOME/logs && alias alogs="cd $APP_LOGS"
export APP_SRC_SERVER=$APP_HOME/src/server && alias asrcserver="cd $APP_SRC_SERVER"
export APP_SRC_WEB=$APP_HOME/src/web && alias asrcweb="cd $APP_SRC_WEB"
export PATH="$APP_BIN:$PATH"

[[ $JAVA_HOME == "" ]] && export JAVA_HOME="/opt/jdk1.8.0_151" && export PATH=$PATH:$JAVA_HOME/bin
[[ $ELASTIC_HOME == "" ]] && export ELASTIC_HOME="/opt/elasticsearch-6.1.0" && export PATH=$PATH:$ELASTIC_HOME/bin
[[ $NODE_HOME == "" ]] && export NODE_HOME="/opt/node-v8.9.0-linux-x64" && export PATH=$PATH:$NODE_HOME/bin
[[ $KIBANA_HOME == "" ]] && export KIBANA_HOME="/opt/kibana-6.1.0-linux-x86_64" && export PATH=$PATH:$KIBANA_HOME/bin
