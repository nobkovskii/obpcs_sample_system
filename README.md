# obpcs_sample_system

## How to use?

`git clone https://github.com/nobkovskii/obpcs_sample_system.git`  
`cd obpcs_sample_system/`  

`vi app.js`  
XXXXXの箇所を、書き換えます。
具体的には下記の場所です。
``` app.js
35 // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
36 // OracleCloud にログインする時のIDとパスワード
37 let user = 'XXXXX'
38 let pass = 'XXXXX'
39 // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

50 // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
51 const BASE_URL = 'https://XXXXX.blockchain.ocp.oraclecloud.com:443'
52 // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
```

`npm init -y`  
`npm install express ejs basic-auth-connect request axios --save`  
`node app.js`

ブラウザにアクセスします。  
http://localhost:3000

挙動の確認  
![obpcs_sample](https://user-images.githubusercontent.com/43230951/56416128-e0721700-62ca-11e9-89e1-ca6e5ba6fdc3.gif)

