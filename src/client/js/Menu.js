var Menu = {
    controller: function(){

        this.sessionsClass = "";
        this.howClass = "";
        this.aboutClass = "";
        if(m.route()==="/sessions"){
            this.sessionsClass="current";
        }

        if(m.route()==="/how"){
            this.howClass="current";
        }

        if(m.route()==="/about"){
            this.aboutClass="current";
        }

        this.sessions = function(){
            m.route("/sessions");
        };
        this.how = function(){
            m.route("/how");
        };
        this.about = function(){
            m.route("/about");
        };
    },
    view: function(ctrl){
        return m("div", [
            m("div", {id:"title"}, "imagininary institute"),
            m("div", {id:"links"}, [
                m("a", {onclick: ctrl.sessions.bind(ctrl), class: ctrl.sessionsClass}, "sessions"),
                m("a", {onclick: ctrl.how.bind(ctrl), class: ctrl.howClass}, "how does it work?"),
                m("a", {onclick: ctrl.about.bind(ctrl), class: ctrl.aboutClass }, "about")
            ])
        ]);
    }
};
