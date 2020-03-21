# ESlint configuration

This configuration includes rules from aibnb-eslint [more info](https://github.com/airbnb/javascript).

## Install

```bash=
npm install --save-dev eslint-config-sensei
``` 

## Setup
In your project create .eslintrc.json file and add this line

```
"extends": "eslint-config-sensei"
```

## Contribute

### Publish to Github Package 

Follow this tutorial [publish](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)

- Create Github token with write package
- Create npmrc file with token and user/registry
- change repository field in packagejson (.git)


