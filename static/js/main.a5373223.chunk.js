(this.webpackJsonpmktube=this.webpackJsonpmktube||[]).push([[0],{13:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(3),r=a(5),i=a(4),l=a(6),s=a(0),o=a.n(s),d=a(10),m=a.n(d),u=a(11),v=a.n(u),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={term:""},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-bar"},o.a.createElement("input",{value:this.state.term,placeholder:" Search",onChange:function(t){return e.onInputChange(t.target.value)}}))}},{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onSearchTermChange(e)}}]),t}(s.Component),p=function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet.thumbnails.default.url;return console.log(t),o.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item"},o.a.createElement("div",{className:"video-list media"},o.a.createElement("div",{className:"media-left"},o.a.createElement("img",{className:"media-object",src:n})),o.a.createElement("div",{className:"media-body"},o.a.createElement("div",{className:"media-heading"},t.snippet.title))))},b=function(e){var t=e.videos.map((function(t){return o.a.createElement(p,{onVideoSelect:e.onVideoSelected,key:t.etag,video:t})}));return o.a.createElement("ul",{className:"col-md-4 list-group"},t)},f=function(e){var t=e.video;if(!t)return o.a.createElement("div",null,"Loading......");var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return o.a.createElement("div",{className:" video-details col-md-8"},o.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},o.a.createElement("iframe",{class:"embed-responsive-item",src:n,allowFullScreen:!0})),o.a.createElement("div",{className:"details"},o.a.createElement("b",null,o.a.createElement("div",null,o.a.createElement("font",{size:"5",color:"Black"},t.snippet.title))),o.a.createElement("div",null,o.a.createElement("font",{size:"3",color:"Grey"},t.snippet.description))))},E=a(12),S=a.n(E),g=(a(31),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={videos:[],selectedVideo:null},a.videoSearch("T-series"),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"videoSearch",value:function(e){var t=this;v()({key:"AIzaSyBTgxZujoZnlUXBd8CgfpSfh9yzSTXdS5I",term:e},(function(e){t.setState({videos:e,selectedVideo:e[0]})}))}},{key:"render",value:function(){var e=this,t=S.a.debounce((function(t){e.videoSearch(t)}),600);return o.a.createElement("div",null,o.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css"}),o.a.createElement(h,{onSearchTermChange:t}),o.a.createElement(f,{video:this.state.selectedVideo}),o.a.createElement(b,{onVideoSelected:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(s.Component));m.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a5373223.chunk.js.map