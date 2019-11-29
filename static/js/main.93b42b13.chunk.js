(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__1E2JI",button:"SearchForm_button__3aO5l"}},22:function(e,t,a){e.exports={gallery:"Gallery_gallery__3yize"}},24:function(e,t,a){e.exports={modalImage:"FullSizeModal_modalImage__2bd8X"}},25:function(e,t,a){e.exports={app:"ImageFinder_app__2lXSL"}},27:function(e,t,a){e.exports={button:"LoadBtn_button__3MKwM"}},31:function(e,t,a){e.exports=a(81)},4:function(e,t,a){e.exports={photoCard:"PhotoCard_photoCard__3tTQU",photoCardImage:"PhotoCard_photoCardImage__19VDL",stats:"PhotoCard_stats__1oHe5",statsItem:"PhotoCard_statsItem__111kc",fullscreenButton:"PhotoCard_fullscreenButton__oeJH9"}},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),l=a.n(r),c=a(5),s=a(6),i=a(8),u=a(7),m=a(9),p=a(11),d=a.n(p),h=function(e){var t=e.onSearch;return o.a.createElement("form",{className:d.a.searchForm,onSubmit:t},o.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images..."}),o.a.createElement("button",{type:"submit",className:d.a.button},"Search"))},f=a(22),g=a.n(f),y=a(4),b=a.n(y),v=a(23),E=a.n(v),_=a(24),O=a.n(_),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.backDropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.close()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return o.a.createElement(E.a,{visible:this.props.visible,effect:"fadeInDown",onClickAway:this.props.close},o.a.createElement("div",null,o.a.createElement("img",{className:O.a.modalImage,src:this.props.fullImage,alt:"#"})))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isOpen:!1},a.openModal=function(){a.setState({isOpen:!0})},a.closeModal=function(){a.setState({isOpen:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.isOpen,t=this.props,a=t.webformatURL,n=t.likes,r=t.views,l=t.comments,c=t.downloads,s=t.largeImageURL;return o.a.createElement("div",{className:b.a.photoCard},o.a.createElement("img",{src:a,alt:"#",className:b.a.photoCardImage}),o.a.createElement("div",{className:b.a.stats},o.a.createElement("p",{className:b.a.statsItem},o.a.createElement("i",{className:"material-icons"},"thumb_up"),n),o.a.createElement("p",{className:b.a.statsItem},o.a.createElement("i",{className:"material-icons"},"visibility"),r),o.a.createElement("p",{className:b.a.statsItem},o.a.createElement("i",{className:"material-icons"},"comment"),l),o.a.createElement("p",{className:b.a.statsItem},o.a.createElement("i",{className:"material-icons"},"cloud_download"),c)),o.a.createElement("button",{type:"button",className:b.a.fullscreenButton,onClick:this.openModal},o.a.createElement("i",{className:"material-icons"},"zoom_out_map")),e&&o.a.createElement(k,{close:this.closeModal,visible:e,fullImage:s}))}}]),t}(n.Component),C=function(e){var t=e.gallery;return o.a.createElement("ul",{className:g.a.gallery},t.map((function(e){return o.a.createElement(w,Object.assign({key:e.id},e))})))},N=a(25),S=a.n(N),j=function(e){var t=e.text;return o.a.createElement("h1",null,"Error: ",t)},I=a(26),L=a.n(I),x="4326956-16126e11086c4c1737aa4aad3",M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return L.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=1&per_page=").concat(t,"&key=").concat(x))},F=a(27),P=a.n(F),z=function(e){var t=e.onLoadClick;return o.a.createElement("button",{type:"button",className:P.a.button,onClick:t},"Load More")},D=a(28),q=a(1),B=a(30);function U(){var e=Object(D.a)(["\n  display: block;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px;\n  position: fixed;\n  z-index: 999;\n"]);return U=function(){return e},e}var G=Object(q.css)(U()),A=function(){return o.a.createElement("div",{className:"sweet-loading"},o.a.createElement(B.BounceLoader,{css:G,sizeUnit:"px",size:200,color:"#3884ff",loading:!0}))},J=12,K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={gallery:[],isLoading:!1,error:null,query:"",pages:12},a.getGallery=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.setState({isLoading:!0}),M(a.state.query,a.state.pages).then((function(t){var n=t.data;a.setState({gallery:n.hits}),e&&window.scrollTo({top:document.body.scrollHeight,left:0,behavior:"smooth"})})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({isLoading:!1})}))},a.handleSearch=function(e){e.preventDefault(),a.setState({pages:J}),a.setState({query:e.target.firstChild.value})},a.handleOnLoadClick=function(){a.setState((function(e){return{pages:e.pages+J}}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getGallery()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,o=a.pages;t.query!==n&&this.getGallery(),t.pages!==o&&this.getGallery(!0)}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=e.error;return o.a.createElement("section",{className:S.a.app},o.a.createElement(h,{onSearch:this.handleSearch}),n&&o.a.createElement(j,{text:n.message}),a&&o.a.createElement(A,null),t.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{gallery:t}),o.a.createElement(z,{onLoadClick:this.handleOnLoadClick})):o.a.createElement("p",null,"Nothing found !!"))}}]),t}(n.Component),R=(a(80),function(){return o.a.createElement(K,null)});l.a.render(o.a.createElement(R,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.93b42b13.chunk.js.map