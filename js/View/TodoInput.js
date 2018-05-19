// const EVENT_SUBMITTED = 'submitted'
// const EVENT_TASK_DELETED = 'deleted'

// // the Root View (controller view)
// const ParentView = Backbone.View.extend({
//   initialize: () => {
//     // create models and collections
//     this.taskCollection = new TaskCollection()

//     // create sub views
//     this.tasksView = new TasksView({ collection: this.taskCollection })
//     this.addTaskView = new AddTaskView()

//     // set event handlers
//     this.addTaskView.on(EVENT_SUBMITTED, (value) => {
//         // 実際にイベントをハンドルしているのはこちら
//       const model = new TaskModel({
//         title: value
//       })
//       this.taskCollection.add(model)
//     })
//   },
// })


// // this has input form (presentational view)
// const AddTaskView = Backbone.View.extend({
//   el: '.....',

//   events: {
        // submitはsubmitボタン(提出時のボタンのこと)
//     submit: 'onSubmitted'
//   },

//   onSubmitted: (e) => {
//       // model や　collectionに触ることはしていない
//     this.trigger(EVENT_SUBMITTED, $('#title').val())
//   },
// })


// // mixed presentational and controller
// const TasksView = Backbone.View.extend({
//   el: '.....',

//   // NOTE: this class does NOT have any "taskViewList" or something,
//   // because this class has collection, collection includes models,
//   // and the each model is attached to the view, so we can access all views
//   initialize: () => {
//     this.collection.on('add', (model) => {
//       const newView = new TaskView(model)

//       // set event handlers
//       newView.once(EVENT_TASK_DELETED, () => {
//         newView.remove()
//         this.collection.remove(model)
//       })

//       // render
//       this.$el.append(this.newView.$el);
//       newView.render()
//     })
//   },
// })


// // single task view (presentational view)
// const TaskView = Backbone.View.extend({
//   el: '.....',

//   events: {
//     'click .delete': 'onDeleteClicked'
//   },

//   onDeleteClicked: (e) => {
    //trigger はc#でいうAction()のこと
    //c#のActionはパラメーターを持たず、値を返さないメソッドをカプセル化したデリゲート
//     this.trigger(EVENT_TASK_DELETED)
//   },

//   render: () => { /*TODO*/ },
// })


// // collection and model

// tasksViewの中にaddTaskはなぜ入れない方が良いのか?
// viewよりもmodelの方が安定している
// 安定している方に依存する方が良い
// const TaskCollection = Backbone.Collection.extend({ model: TaskModel })
// const TaskModel = Backbone.Model.extend(/*TODO*/)


const ParentView = Backbone.View.extend({
    el:'#content',
    // 初期化
    initialize: () => {
        
    }
})

const AddTaskView = Backbone.View.extend({
    el: '#all',
    
    events: {
        'trigger #all': 'onChangedInputForm'
    },

    onSomethingChanged: (e) => {
        this.trigger()
    }
})

// https://app.codegrid.net/entry/backbonejs-intro#toc-3
//上のURLより、下のCollectionはModelである
//ここでやる内容を決め、親で内容を書く
const taskCollection = Backbone.Collection.extend({model: taskModel})
const taskModel = Backbone.Model.extend({
    defaults: 
    {
        'text': null,
        'isDone': false
    },
})