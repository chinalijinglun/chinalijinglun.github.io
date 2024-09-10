---
title: 修复action自动部署hexo报错的问题
date: 2024-09-10 17:11:58
cover: 2018/04/27/登录/cover.jpg
categories: 随笔
tags:
  - 教程
  - 随笔
  - bug修复
author:
    nike: lijinglun
---

###  起因
因为这个hexo的静态blog，之前一直是使用github action自动部署的，但是一段时间发现无法自动部署了，也没有管他，就手动部署blog，但是长久下来还是比较麻烦，所以还是需要解决下。
具体的报错信息是：

这是我本身的action.yml文件，并没有什么特殊内容，就是code分支有代码提交等变动时，执行**solybum/hexo-deploy@master**这个action，然后把.public文件夹部署到仓库的master分支。
```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Hexo

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["code"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  blog-jinglun:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'

      - name: Build and Deploy
        uses: solybum/hexo-deploy@master
        env:
          PERSONAL_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: master  # The branch the action should deploy to.
          PUBLISH_DIR: ./public # The folder the action should deploy.
```

查看action.yml执行过程中，发现是**solybum/hexo-deploy@master**这个action无法找到，所以报错了。

报错信息如下：

```yml
Error: Unable to resolve action solybum/hexo-deploy, repository not found
```

通过这个错误信息，可以知道是**solybum/hexo-deploy**这个action找不到，所以报错了，然后按照格式来说，solybum/hexo-deploy应该是一个用户下的仓库地址或者npm包地址，@master应该是主分支，然后在搜索引擎搜索 **solybum/hexo-deploy@master** 关键字，发现确实应该有这个地址，然后也找到了这个项目仓库地址 
https://github.com/Solybum/hexo-deploy/
但是打开就显示 404 ，我想这个仓库要么被删除了，要么被设为私密，那么没办法，只能换一个action了。


### 过程
* 首先，我先在hexo官网找到的GitHub Pages，https://hexo.io/docs/github-pages.html ，看上去肯定是可以用的，就是略显冗余，太多的steps

* 然后在到github的marketplace里面找到action模块，搜索hexo相关的内容，发现里面内容还是很多的，最终选择了 **renzhaosy/hexo-deploy-action@master** 这个action，总体来说，变化不多，可以正常使用。
![action](1.png)

修改的代码：
```yml
    - name: Build and Deploy
      uses: renzhaosy/hexo-deploy-action@master
      env:
        PERSONAL_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: master  # The branch the action should deploy to.
        PUBLISH_DIR: ./public # The folder the action should deploy.
```

### 结尾
记录一下自己的思考及解决问题的过程，同时在使用第三方插件、仓库一类时，要考虑可用性和维护性，如果你的action也有类似问题，可以参考下。