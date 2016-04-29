//=require Menu.js

var How = {
    controller: function(){

    },
    view: function(ctrl){
        return m("div", [
            m.component(Menu),
            m("div", {class: "textblock"}, "The Imaginary Institute is an open space for conversation and collaboration. The idea is simple:"),
            m("div", {class: "textblock"}, [
                m("span", {class: "number"}, "1"),
                m("span", "Meet at a certain place on a regular basis")
            ]),
            m("div", {class: "textblock"}, [
                m("span", {class: "number"}, "2"),
                m("span", "Send out an open invitation, anyone can join.")
            ]),
            m("div", {class: "textblock"}, [
                m("span", {class: "number"}, "3"),
                m("span", "People can post ideas, questions and themes to the open bulletin board.")
            ]),
            m("div", {class: "textblock"}, [
                m("span", {class: "number"}, "4"),
                m("span", "Self-organize sessions around these themes.")
            ]),
            m("div", {class: "textblock"}, [
                m("span", {class: "number"}, "5"),
                m("span", "Join the session you find most interesting, and see what happens...")
            ]),
            m("div", {class: "textblock"}, "We're currently at stage 1, trying to find a good place"),
            m("div", {class: "bottom"}, [])
        ]);
    }
};
