//=require Menu.js

var SessionsModel = (function(){
    var sessionlist = m.prop([]);

    function getSessions(){
        m.request({
            method: "GET",
            url: "/api/sessions"
        }).then(sessionlist);
        return sessionlist;
    }

    function addSession(value){
        m.request({
            method: "POST",
            url: "/api/sessions",
            data: {message: value}
        }).then(sessionlist);
    }

    return {
        getSessions: getSessions,
        addSession: addSession
    };
})();

var Sessions = {
    controller: function(){
        this.sessionlist = SessionsModel.getSessions();

        this.inputvalue = "";
        this.update = function(e){
            this.inputvalue = e.target.value;
        };
        this.post = function(){
            SessionsModel.addSession(this.inputvalue);
            this.inputvalue = "";
        };
    },
    view: function(ctrl){
        return m("div", [
            m.component(Menu),
            m("div", {class: "textblock"}, "Saturday 17th June, 19:00 / MONO Rotterdam, Zomerhofstraat 76"),
            m("div", {class: "noteblock"}, [
                m("a", {href:"https://www.facebook.com/events/1179677405429847/"},"fb event"),
                m("a", {href:"http://www.meetup.com/Imaginary-Institute-Meetup/events/231710758/"},"meetup event"),
            ]),
            m("div",{class: "sessionblock"}, [
                m("textarea", {
                    placeholder: "add an idea...", maxlength:"100",
                    value: ctrl.inputvalue, onchange: ctrl.update.bind(ctrl)
                }),
                m("div", {id:"add", onclick: ctrl.post.bind(ctrl)},"+")
            ]),
            ctrl.sessionlist().map(function(e){
                return m("div",{class: "sessionblock"} ,e);
            }),

            m("div", {class: "textblock"}, "Saturday 21st May, 19:30 / MONO Rotterdam, Zomerhofstraat 76"),
            m("div",{class: "sessionblock"} ,"Open Source Government")
        ]);
    }
};
