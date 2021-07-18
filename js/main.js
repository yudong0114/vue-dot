(function() {
  // 厳密なエラーチェック
  'use strict';
  // Vue -> 双方向バインディング
  // v-●● -> ディレクティブ


  let vm = new Vue({
    el: '#app',
    data: {
      todos: [
        'task1',
        'task2',
        'task3'
      ]
    }
  })
})();