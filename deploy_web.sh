#!/bin/bash
# 部署文件
if [ ! $1 ]; then
    echo "请输入部署目录"
    exit 1
fi
dateBackupDir=$(date "+%Y%m%d-%H%M%S")
backupDir=backup
dir=$1
if [ ! -d www ]; then
    mkdir www
fi
cd www
if [ ! -d $backupDir ]; then
    mkdir $backupDir
fi
if [ ! -d $backupDir/$dir ]; then
    mkdir $backupDir/$dir
fi
if [ ! -d $dir ]; then
    mkdir $dir
fi
mkdir $backupDir/$dir/$dateBackupDir
mv $dir/* $backupDir/$dir/$dateBackupDir
cd $dir
rm -rf *
unzip ~/dist.zip
mv dist/* ./
rm -rf dist
rm ~/dist.zip
