# obpcs_sample_system

## 前提
[この記事](https://qiita.com/nobkovskii/items/401b9d45d27bb9004e8f)を参考に、チェーンコードの作成が行われていること。

## How to use?
適当なディレクトリでクローンします。  
`git clone https://github.com/nobkovskii/obpcs_sample_system.git`  

ディレクトリ移動します。  
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

必要なモジュールをインストールします。  
`npm init -y`  
`npm install express ejs basic-auth-connect request axios --save`  

起動します。  
`node app.js`

ブラウザにアクセスします。  
http://localhost:3000

挙動の確認  
![obpcs_sample](https://user-images.githubusercontent.com/43230951/56416128-e0721700-62ca-11e9-89e1-ca6e5ba6fdc3.gif)

