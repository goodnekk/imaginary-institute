//=require Menu.js
var About = {
    controller: function(){

    },
    view: function(ctrl){
        return m("div", [
            m.component(Menu),
            m("div", {class: "textblock"}, "The Imaginary Institute is an ad-hoc community of open-minded individuals from all walks of life. We aim to create an open space for conversation and collaboration through which we can (re)imagine ourselves and our social whole."),
            m("div", {class: "textblock"}, "The Institute operates at the intersection of art, science, philosophy, technology, politics, mathematics, design and more. We do this because we believe the questions that lie beyond the boundaries of a single discipline are the ones that are important to ask. To do this we must be prepared to ask ourselves big questions, to be puzzled, amazed, and filled with wonder. We must be prepared to look beyond boundaries, to experiment and to play. Answers will come when we least expect them to."),
            m("div", {class: "noteblock"}, [
                m("span","The Imaginary Institute is a project by "),
                m("a",{href:"http://www.wolkenmachine.nl"},"wolkenmachine" )
            ]),
        ]);
    }
};
