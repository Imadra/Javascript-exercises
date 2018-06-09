module.exports = {

    // Свойство в котором хранятся все события.
    subscriptions: {},

    // Подписывает на событие. На любое событие подписчик может
    // подписаться неограниченное количество раз.
    on: function (event, subscriber, handler) {
        if (!this.subscriptions.hasOwnProperty(event)) {
            this.subscriptions[event] = [];
        }

        this.subscriptions[event].push({
          subscriber: subscriber,
          handler: handler.bind(subscriber) // handler will be called in the context of subscriber
        });

        return this;
    },

    // Отписывает от события подписчика. После отписки, при возникновении 
    // данного события, никаких обработчиков, связанных с этим подписчиком, 
    // не должно быть вызвано. Есть возможность повторно подписаться и снова 
    //получать события.
    off: function (event, subscriber) {
        if(this.subscriptions.hasOwnProperty(event)){
            subs = [];
            for (var i = 0; i < this.subscriptions[event].length; i++) {
                var cur = this.subscriptions[event][i].subscriber;
                if(cur != subscriber) {
                    subs.push(this.subscriptions[event][i]);
                }
            }
            this.subscriptions[event] = subs;
        }
        return this;
    },

    //Оповещение всех подписчиков (не отписавшихся). Вызывает все функции-
    //обработчики в порядке подписки.
    emit: function (event) {
        if(this.subscriptions.hasOwnProperty(event)){
            for (var i = 0; i < this.subscriptions[event].length; i++) {
                this.subscriptions[event][i].handler();
            }
        }
        return this;
    }
};