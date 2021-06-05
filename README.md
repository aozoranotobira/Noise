
# ノイズ再生 for ミソフォニア


## ノイズ再生
---
ホワイトノイズ・ピンクノイズ・ブラウンノイズを再生できます。


## ミソフォニア
---
ミソフォニアについての情報を紹介します。


## 対応ブラウザ
---
開発および動作確認はChromeで実施しています。

ブラウザ互換性（MDN Web Docsを参照）を以下に示しますが、動作確認は未実施です。

対応ブラウザ
- Chrome
- Edge
- Firefox
- Opera
- WebView Android
- Chrome Android
- Firefox for Android
- Opera Android
- Samsung Internet

非対応ブラウザ
- Internet Explorer
- Safari
- Safari on iOS


## ローカルでの確認方法
---
1. SSL化（http→https）のため、OpenSSLをインストールして、自己証明書を作成
```
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout vscode_live_server.key.pem -out vscode_live_server.cert.pem  -subj "//CN=example.com" -days 3650
```
2. VSCode 拡張機能 Live Server の https 設定に、1.で作成した pem を追加
3. 自己証明書で Service Worker を動かすため、Chrome の起動オプションを追加して起動
```
C:\Program Files\Google\Chrome\Application\chrome.exe" ^
     --user-data-dir=C:\Users\ty331831\Documents\src\ChromeUserData ^
     --unsafely-treat-insecure-origin-as-secure=https://localhost ^
     --allow-insecure-localhost ^
     --ignore-certificate-errors
```
4. index.html を Live Server で起動し、https://127.0.0.1:5500/index.html にアクセス


## 参考文献
---
ノイズ生成
- https://noisehack.com/generate-noise-web-audio-api/
- https://codepen.io/2kool2/pen/xrLeMq
- https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API

AudioWorklet：https or localhost
- https://qiita.com/ryoyakawai/items/1160586653330ccbf4a4
- https://www.g200kg.com/archives/2019/01/webaudio-api-au.html

PWA：https
- https://pantograph.co.jp/blog/production/pwa.html
- https://pisuke-code.com/web-way-to-convert-site-to-pwa/
- https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps/Offline_Service_workers

Google フォーム
- https://nansystem.com/create-a-contact-form-with-google-form-and-auto-reply/
