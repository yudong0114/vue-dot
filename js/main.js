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
        {
          title: 'task1',
          isDone: false
        },
        {
          title: 'task2',
          isDone: false
        },
        {
          title: 'task3',
          isDone: true
        }
      ]
    },
    methods: {
      addItem: function() {
        let item = {
          title: this.newItem,
          isDone: false
        }
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
    },
    computed: {
      remaining: function() {
        let items = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
        return items.length;
      }
    }
  })
})();