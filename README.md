# HallymDevops
Hallym Univ Devops


# Setup
Name | Version
------------ | -------------
NodeJS | v12.16.1
npm | 6.13.4
yarn | 1.22.4
OS | Windows 10 v1909 (build 18363.720)

# Installation
## install yarn
``` 
npm install -g yarn 
```
## check version
```
node -v     # node version (12.1x.x)
npm -v      # npm version  (6.1x.x)
yarn -v     # yarn version(1.2x.x) if installed
```
## run server
### default web port (http://localhost/ | http://ip-address/)
```
cd HallymDevops     # Change Directory
yarn                # install dependencies with package.json
yarn run build      # build nextjs
yarn run start80    # run next server on :80
```
### custom ports (:3000, :8080, etc)
```
cd HallymDevops     # Change Directory
yarn                # install dependencies with package.json
yarn run build      # build nextjs

# listen :3000
yarn run start

# listen :8080
yarn run start8080

# listen :custom
yarn run start -p port

# run developer mode :3000 compile for each connections
yarn run dev
