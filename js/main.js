(function() {
  // 厳密なエラーチェック
  'use strict';
  // Vue -> 双方向バインディング
  // v-●● -> ディレクティブ


  let vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'task1',
        'task2',
        'task3'
      ]
    },
    methods: {
      addItem: function() {
        this.todos.push(this.newItem);
        this.newItem = '';
      }
    }
  })
})();