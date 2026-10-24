// 絵文字で集合 — 設定ファイル
// このファイルだけ書き換えれば動きます。index.html は触らなくて大丈夫です。
window.SHUGO_CONFIG = {
  // Firebase コンソール → プロジェクトの設定 → マイアプリ（ウェブ）の firebaseConfig
  firebase: {
    apiKey: "AIzaSyDUOSMCHsszlHK8YE-2JNU2uYUt6__2Jus",
    authDomain: "emojideshugo-f0611.firebaseapp.com",
    projectId: "emojideshugo-f0611",
    storageBucket: "emojideshugo-f0611.firebasestorage.app",
    messagingSenderId: "81473941104",
    appId: "1:81473941104:web:ce0c6aa3d4575894c3ceb5"
  },
  // Cloudflare Worker の URL（例: "https://shugo-ai.<あなたのサブドメイン>.workers.dev"）
  // 空文字 "" のままだと AI 機能（AIストーリー・AI実況）は非表示になり、ゲーム本体だけ動きます
  aiEndpoint: "https://shugo-ai.nakaharashogo.workers.dev",
  // Firebase JS SDK のバージョン（通常は変更不要）
  firebaseVersion: "11.6.0"
};
