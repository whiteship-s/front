# whiteship study blog collections



## front

- node : 14.0.0
- vue : 2.6.11


```bash
# project setting
$ npx @vue/cli create .



# project install   
$ npm install

# project run
$ npm run serve
$ npm run serve -- --mode=production
```


### 구조

```bash
├ @api
├ @core-constant
├ @core-plugins
├ @middleware             # router을 위한 미들웨어 (ex. 로그인 체크, 관리자 권한 체크)   
├ @router
├ @store
├ @utils                           
├ assets
├ components       
├ container                 
├ layout                           
└ views                         
```

**컴포넌트 단계**   
views > layout > container > components




[top](#)
