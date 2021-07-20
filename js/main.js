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
    // 配列の変化を検知(配列の値までチェックの場合、deep watcherを使う)
    watch: {
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
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
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  })
})();