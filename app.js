const express = require('express')
const ejs = require('ejs')
const app = express()
const basicAuth = require('basic-auth-connect')
const request = require('request')

// ======================
// Basic Auth user
const baUser = 'hoge'
// Basic Auth password
const baPass = 'foo'
// ======================

// postを使用するための設定
app.use(express.json());
app.use(express.urlencoded());

// Basic認証の設定
// userIdとpasswordは適当に設定する
// ハードコーディングバンザイ
app.all('/*',basicAuth(function(user,password){
  return user === baUser && password === baPass;
}))

// 第1引数: レンダリング対象の拡張子
// 第2引数: レンダリング用の関数
app.engine('ejs', ejs.renderFile)

// axios を require してインスタンスを生成する
const axios = require('axios');

// Authorization は ユーザ名:パスワード をBase64でエンコードし、
// 頭に Basic△（△は半角空白）を付けたものにする必要がある。
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// OracleCloud にログインする時のIDとパスワード
let user = 'XXXXX'
let pass = 'XXXXX'
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
var buf = new Buffer(user+':'+pass)
var auth = buf.toString('base64')
const bauth = 'Basic ' + auth
var headers = {
    'Content-type': 'application/json',
    'Authorization': bauth
};

var dataString1 = '{"channel":"alpha001","chaincode":"obcs_cc_sample","method":"initLedger","args":["human001"],"chaincodeVer":"v1"}';
var dataString2 = '{"channel":"alpha001","chaincode":"obcs_cc_sample","method":"queryAllHuman","args":["human001"],"chaincodeVer":"v1"}';

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const BASE_URL = 'https://XXXXX.blockchain.ocp.oraclecloud.com:443'
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const INVOKE_URL = '/restproxy1/bcsgw/rest/v1/transaction/invocation'
const QUERY_URL = '/restproxy1/bcsgw/rest/v1/transaction/query'

let options1 = {
  url: INVOKE_URL,
  method: 'post',
  baseURL: BASE_URL,
  headers: headers,
  responseType: 'json',
  data: dataString1
};

let options2 = {
  url: QUERY_URL,
  method: 'post',
  baseURL: BASE_URL,
  headers: headers,
  responseType: 'json',
  data: dataString2
};

app.get('/queryAllHuman', (req, res) => {
  axios.request(options2)
  .then(function(response){
    var payload = response.data.result.payload
    res.render('index.ejs', {
       title: 'Express + EJS',
       info: JSON.parse(payload)
   })
  }).catch(function(error) {
    console.log('ERROR!! occurred in Backend.')
    // console.log(error);
  });
})

var obj = { "key" : "value" }
app.get('/', (req, res) => {
    res.render('index.ejs', {
       title: 'Express + EJS',
       info: obj
   });
})

app.listen(3000)
