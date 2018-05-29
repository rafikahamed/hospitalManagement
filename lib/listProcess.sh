#!/usr/bin/env bash

ps -aef | grep `whoami` | egrep -v "grep | vi | tail | sshd: |bash|ps -aef|systemd|sd-pam|awk |sftp-server"
