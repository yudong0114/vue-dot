(function() {
  // 厳密なエラーチェック
  'use strict';

  // 複数の要素を含める場合、親要素で囲う
  let likeComponent = Vue.extend({
    template: '<button @click="countUp">Like {{ count }}</button>',
    // コンポーネントのdataは関数で返す必要がある
    data: function() {
      return {
        count: 0
      }
    },
    methods: {
      countUp: function() {
        this.count++;
      }
    }
  })

  let vm = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    }
  })
})();