(function() {
  // 厳密なエラーチェック
  'use strict';

  // 複数の要素を含める場合、親要素で囲う
  let likeComponent = Vue.extend({
    template: '<button>Like</button>'
  })

  let vm = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    }   
  })
})();