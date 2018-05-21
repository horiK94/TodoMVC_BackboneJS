const ParentView = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        console.log("hgehoeg")
        const input = new InputView()
        const allButton = new AllButtonView()
    }
})

const InputView = Backbone.View.extend({
    el: '#todo-post',
    events: {
      'change': 'changeInput'
    },
    changeInput: (e) => {
      console.log($(e.target).val());
    }
})

const AllButtonVIew = Backbone.View.extend({
    el: '#all[name=all]',
    // 各要素に対し、どのようなタイミングでどんな関数呼ぶか定義する
    //'<イベント> <セレクター>': '<コールバック関数名>'。
    events: {
        'click': 'changeAllTask'
    },

    changeAllTask: (e) => {
        $(e.target).prop('checked')
    }
})

// const TodoListsView = Backbone.View.extend({
//   el: `#todo-list`,
//   events: {
//
//   }
// })
