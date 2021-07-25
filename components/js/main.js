(function() {
  // 厳密なエラーチェック
  'use strict';

  // 複数の要素を含める場合、親要素で囲う
  let likeComponent = Vue.extend({
    props: ['message'],
    props: {
      // propsの型やデフォルト値の指定
      message: {
        type: String,
        default: 'Like'
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    // コンポーネントのdataは関数で返す必要がある
    data: function() {
      return {
        count: 0
      }
    },
    methods: {
      countUp: function() {
        this.count++;
        // コンポーネントから親要素にデータを渡す
        this.$emit('increment');
      }
    }
  })

  let vm = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  })
})();