(this.webpackJsonprain_wall=this.webpackJsonprain_wall||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/clouds.4a119168.png"},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),l=a(12),i=a.n(l),c=(a(27),a(2)),s=a(3),u=a(4),d=a(6),m=a(5),p=a(7),f={BLOCK_SIZE:30,MAX_WALL_LENGTH:23,MIN_WALL_LENGTH:3,MAX_WALL_HEIGHT:14,Wall:{CREATE_WALL:"create:new:wall",ADD_WALL_BLOCKS:"add:wall:blocks",CALCULATE_VOLUME_WATER:"calculate:volume:water"},Grass:{ADD_GRASS_BLOCK:"add:grass:block"},Drag:{SET_DRAG_MODE:"set:drag:mode",UNSET_DRAG_MODE:"unset:drag:mode"},Rain:{START_RAIN:"start:rain",STOP_RAIN:"stop:rain",ADD_NEXT_LEVEL:"add:next:level"},Animation:{SET_NO_ANIMATION_MODE:"set:no:animation:mode",UNSET_NO_ANIMATION_MODE:"unset:no:animation:mode"}},v=(a(18),function(e){var t=e.grassStyle,a=e.index,n=e.onMouseDown;return o.a.createElement("div",{className:"grass-block",style:t,onMouseDown:function(e){n(e,a)}})}),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).grassRef=o.a.createRef(),a.getCenterOfGrass=function(){var e=a.grassRef.current.getBoundingClientRect();return e.left+e.width/2},a.onMouseDown=function(e,t){var n=a.props,r=n.setDragMode;if(!n.rainMode){e.preventDefault();var o={x:e.pageX,y:e.pageY};r(o,o.x>a.getCenterOfGrass()?1:-1,t)}},a.renderGrassBlock=function(e,t){var n=a.props.blockSize,r={width:n,height:n};return o.a.createElement(v,{key:t,index:t,grassStyle:r,onMouseDown:a.onMouseDown})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.grass,a=e.additionalBlocks,n=t+a,r=a>0?{cursor:"ew-resize"}:{};return o.a.createElement("div",{ref:this.grassRef,className:"grass-container",style:r},Array.from(Array(n)).map(this.renderGrassBlock))}}]),t}(r.PureComponent),b=function(e,t,a){return{type:f.Drag.SET_DRAG_MODE,coordinates:e,direction:t,columnIndex:a}},w=Object(c.b)((function(e){var t=e.wall,a=e.rain;return{grass:t.grass,blockSize:t.blockSize,rainMode:a.rainMode}}),{setDragMode:b})(O),g=a(8),M=(a(13),function(e){var t=e.blockStyle,a=e.columnIndex,n=e.onMouseDown;return o.a.createElement("div",{className:"wall-block",style:t,onMouseDown:function(e){n(e,a)}})}),A=function(e){var t=e.blockStyle;return o.a.createElement("div",{className:"water-block",style:t},o.a.createElement("div",{className:"fill"},o.a.createElement("svg",null,o.a.createElement("path",{id:"waveShape",d:"M 60.059343,78.359519 V 0.75034655 c 0,0 -0.120119,-0.026086 -0.220217,-0.026086 0,0 -5.105044,-0.60000334 -8.108011,-0.62609128 -3.002968,0 -8.128032,0.62609128 -8.128032,0.62609128 C 41.14065,1.0112204 37.53709,1.1938291 37.216774,1.219917 36.816378,1.1938314 33.272877,1.0112204 30.810443,0.72426085 c 0,0 -5.165103,-0.60000334 -8.168071,-0.62609013 -3.002967,0 -8.16807,0.62609013 -8.16807,0.62609013 C 12.011869,1.0112204 8.388288,1.1938302 8.0679717,1.219917 7.6675761,1.1938314 4.0640155,1.0112204 1.6216022,0.72426205 c 0,0 -0.6206131,-0.078257 -1.621602235344366,-0.18261002 V 78.359521 Z",fill:"#04acff"}))))},h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onMouseDown=function(e,t){var n=a.props,r=n.setDragMode;n.rainMode||(e.preventDefault(),r({x:e.pageX,y:e.pageY},1,t))},a.renderWallColumn=function(e,t){var n=a.props,r=n.blockSize,l=n.columnIndex,i=n.additionalWallBlocks,c=n.water,s=n.nextLevel,u={width:r,height:r},d=(c[t]||0)+(s[t]||0),m=t===l?e+i:e;return m+d===0?(u.height=0,u.borderTop=0,o.a.createElement(M,{key:"wallBlock".concat(t,"-#"),columnIndex:t,blockStyle:u,onMouseDown:a.onMouseDown})):o.a.createElement("div",{className:"wall-column",key:"column".concat(t)},o.a.createElement("div",{className:"water-column"},Array.from(Array(d)).map((function(e,a){return o.a.createElement(A,{key:"waterBlock".concat(t,"-").concat(a),blockStyle:u})}))),Array.from(Array(m)).map((function(e,n){return o.a.createElement(M,{key:"wallBlock".concat(t,"-").concat(n),columnIndex:t,blockStyle:u,onMouseDown:a.onMouseDown})})))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.wall,a=e.additionalWallLength,n=Object(g.a)(t);if(a>0&&(n=t.concat(Array(a).fill(0))),a<0){var r=t.length-Math.abs(a);n=t.slice(0,Math.abs(r))}return o.a.createElement("div",{ref:this.grassRef,className:"wall-container"},n.map(this.renderWallColumn))}}]),t}(r.PureComponent),E=Object(c.b)((function(e){var t=e.wall,a=e.drag,n=e.rain;return{wall:t.wall,blockSize:t.blockSize,water:t.water,nextLevel:t.nextLevel,columnIndex:a.columnIndex,rainMode:n.rainMode}}),{setDragMode:b})(h),y=a(21),N=a.n(y),_=(a(33),1e3),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).addLevel=function(){for(var e=a.props,t=e.wall,n=e.water,r=e.nextLevel,o=e.addNextLevel,l=n.map((function(e,t){return e+r[t]})),i=Array(t.length).fill(0),c=1;c<t.length-1;c++){for(var s=t[c]+l[c],u=!1,d=c-1;d>=0&&!(t[d]+l[d]>s);d--)if(t[d]+l[d]<s||0===d){u=!0;break}if(!u){for(var m=c+1;m<t.length&&!(t[m]+l[m]>s);m++)if(t[m]+l[m]<s||m===t.length-1){u=!0;break}u||(i[c]=1)}}o(l,i)},a.toggleRain=function(){var e=a.props,t=e.startRain,n=e.stopRain;e.rainMode?(n(),clearInterval(a.animation),a.animation=null):(t(),a.addLevel(),a.animation=setInterval(a.addLevel,_))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.animation&&(clearInterval(this.animation),this.animation=null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"clouds-container",onClick:this.toggleRain},o.a.createElement("img",{src:N.a,className:"clouds",alt:"clouds"}))}}]),t}(r.PureComponent),L=Object(c.b)((function(e){var t=e.wall,a=e.rain;return{water:t.water,nextLevel:t.nextLevel,wall:t.wall,rainMode:a.rainMode}}),{startRain:function(){return{type:f.Rain.START_RAIN}},stopRain:function(){return{type:f.Rain.STOP_RAIN}},addNextLevel:function(e,t){return{type:f.Rain.ADD_NEXT_LEVEL,water:e,nextLevel:t}}})(j),D=(a(34),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).setVolumeWater=function(e){a.setState({volumeWater:e})},a.handleChange=function(e){a.setNewInputValue(e.target.value),a.setState({wasChanges:!0})},a.parseInput=function(){var e=a.state.inputValue,t=null;return{array:e.split(",").map((function(e){return""===e.trim()||isNaN(Number(e))?(t="Wall format is incorrect (should be [1,4,6]).",null):(e=Number(e),Number.isInteger(e)?e:(t="Wall format is incorrect. All numbers should be integers.",null))})),error:t}},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.createWall,r=t.setNoAnimationMode,o=a.parseInput(),l=o.array,i=o.error;i?a.setState({error:i}):l.length>f.MAX_WALL_LENGTH?r(l):Math.max.apply(Math,Object(g.a)(l))>f.MAX_WALL_HEIGHT?r(l):(n(l),a.setState({wasChanges:!1}))},a.setNewInputValue=function(e){a.setState({inputValue:e,error:null})},a.state={inputValue:e.wall.join(","),error:null,wasChanges:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.calculateVolumeWater,r=a.wall,o=a.rainMode;e.wall!==r&&this.setNewInputValue(r.join(",")),!e.rainMode&&o&&this.setVolumeWater(n(r))}},{key:"render",value:function(){var e=this.state,t=e.inputValue,a=e.error,n=e.wasChanges,r=this.props,l=r.rainMode,i=r.noAnimationMode,c=r.volumeWater,s=i||l||!n,u=s?"textual-wall-disabled-button":"textual-wall-button";return o.a.createElement("div",{className:"textual-wall-container"},o.a.createElement("div",{className:"textual-wall-label"},"Water volume: ",c),o.a.createElement("form",{className:"textual-wall-form",onSubmit:this.handleSubmit},o.a.createElement("label",{className:"textual-wall-label"},"Textual Wall:",o.a.createElement("input",{type:"text",name:"Textual Wall",className:"textual-wall-input",value:t,onChange:this.handleChange,readOnly:l})),o.a.createElement("input",{type:"submit",value:"Build Wall",className:u,disabled:s})),o.a.createElement("div",{className:"textual-wall-error"},a||""))}}]),t}(r.PureComponent)),k=function(){return{type:f.Wall.CALCULATE_VOLUME_WATER}},W=Object(c.b)((function(e){var t=e.wall,a=e.rain;return{wall:t.wall,rainMode:a.rainMode,noAnimationMode:a.noAnimationMode,volumeWater:t.volumeWater}}),{createWall:function(e){return{type:f.Wall.CREATE_WALL,wall:e}},setNoAnimationMode:function(e){return{type:f.Animation.SET_NO_ANIMATION_MODE,wall:e}},calculateVolumeWater:k})(D),S=(a(19),function(e){var t=e.noAnimationMode,a=e.unsetNoAnimationMode,n=e.calculateVolumeWater;return t?o.a.createElement("div",{className:"app-no-animation"},o.a.createElement("div",{className:"app-no-animation-text"},"The requested wall is too complex to draw. But you can still calculate it."),o.a.createElement("div",null,o.a.createElement("button",{onClick:a,className:"app-button-reset"},"RESET"),o.a.createElement("button",{onClick:n,className:"app-button"},"CALCULATE"))):null}),x=function(e,t){return Math.abs(e-t)},T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={additionalGrassBlocks:0,additionalWallBlocks:0},a.getMovingAxis=function(e){var t=a.props.startCoordinates;return x(t.x,e.x)>=x(t.y,e.y)?"X":"Y"},a.setNewGrassBlocks=function(e){var t=a.props.grass;t+e>=f.MIN_WALL_LENGTH&&t+e<=f.MAX_WALL_LENGTH&&a.setState({additionalGrassBlocks:e})},a.setNewWallBlocks=function(e){var t=a.props,n=t.wall,r=t.columnIndex;n[r]+e>=0&&n[r]+e<=f.MAX_WALL_HEIGHT&&a.setState({additionalWallBlocks:e})},a.onMouseMove=function(e){if(a.props.dragMode){e.preventDefault();var t=a.props,n=t.startCoordinates,r=n.x,o=n.y,l=t.blockSize,i=t.direction,c={x:e.pageX,y:e.pageY},s=a.getMovingAxis(c);if("X"===s){var u=Math.round(2*i*(c.x-r)/l);a.setNewGrassBlocks(u),a.setNewWallBlocks(0)}if("Y"===s){var d=Math.round((o-c.y)/l);a.setNewWallBlocks(d),a.setNewGrassBlocks(0)}}},a.onMouseUp=function(e){var t=a.props,n=t.dragMode,r=t.unsetDragMode,o=t.columnIndex;if(n){e.preventDefault();var l=a.props,i=l.addGrassBlocks,c=l.addWallBlocks,s=a.state,u=s.additionalGrassBlocks,d=s.additionalWallBlocks;r(),u&&i(u),d&&c(d,o),a.setNewGrassBlocks(0),a.setNewWallBlocks(0)}},a.onMouseLeave=function(e){var t=a.props,n=t.dragMode,r=t.unsetDragMode;n&&(r(),a.setNewGrassBlocks(0),a.setNewWallBlocks(0))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rainMode,a=e.noAnimationMode,n=e.unsetNoAnimationMode,r=e.calculateVolumeWater,l=this.state,i=l.additionalGrassBlocks,c=l.additionalWallBlocks,s="auto";c>0&&(s="ns-resize"),i>0&&(s="ew-resize");var u={backgroundColor:t?"lightblue":"white",cursor:s};return o.a.createElement("div",{className:"app-container",onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},o.a.createElement("div",{className:"app-main",style:u},o.a.createElement(L,null),o.a.createElement("div",{className:"app-wall"},o.a.createElement(E,{additionalWallLength:i,additionalWallBlocks:c}),o.a.createElement(w,{additionalBlocks:i})),o.a.createElement(S,{noAnimationMode:a,unsetNoAnimationMode:n,calculateVolumeWater:r})),o.a.createElement(W,null))}}]),t}(r.PureComponent),I=Object(c.b)((function(e){var t=e.wall,a=e.drag,n=e.rain;return{dragMode:a.dragMode,startCoordinates:a.startCoordinates,blockSize:t.blockSize,grass:t.grass,direction:a.direction,columnIndex:a.columnIndex,wall:t.wall,rainMode:n.rainMode,noAnimationMode:n.noAnimationMode}}),{unsetDragMode:function(){return{type:f.Drag.UNSET_DRAG_MODE}},addGrassBlocks:function(e){return{type:f.Grass.ADD_GRASS_BLOCK,count:e}},addWallBlocks:function(e,t){return{type:f.Wall.ADD_WALL_BLOCKS,count:e,columnIndex:t}},unsetNoAnimationMode:function(){return{type:f.Animation.UNSET_NO_ANIMATION_MODE}},calculateVolumeWater:k})(T),C=a(11),R=a(1),B=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(n.type)?t[n.type](a,n):a}};function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V,U=function(e){return Array(e).fill(0)},X=function(){return{calculatedWall:[1,8,1,5,2,0,6],wall:[1,8,1,5,2,0,6],water:[0,0,0,0,0,0,0],nextLevel:[0,0,0,0,0,0,0],grass:7,blockSize:f.BLOCK_SIZE,volumeWater:0}},z=B(X(),(n={},Object(R.a)(n,f.Wall.CREATE_WALL,(function(e,t){var a=t.wall;if(a){var n=a.length;return P({},X(),{wall:a,calculatedWall:a,grass:n,water:U(n),nextLevel:U(n)})}return P({},X())})),Object(R.a)(n,f.Animation.SET_NO_ANIMATION_MODE,(function(e,t){return P({},e,{calculatedWall:t.wall})})),Object(R.a)(n,f.Grass.ADD_GRASS_BLOCK,(function(e,t){var a=t.count,n=e.grass+a,r=Object(g.a)(e.wall);if(a>0&&(r=e.wall.concat(U(a))),a<0){var o=e.wall.length+a;r=e.wall.slice(0,o)}var l=r.length;return P({},e,{grass:n,wall:r,calculatedWall:r,water:U(l),nextLevel:U(l),volumeWater:0})})),Object(R.a)(n,f.Wall.ADD_WALL_BLOCKS,(function(e,t){var a=t.count,n=t.columnIndex,r=Object(g.a)(e.wall);return r[n]=e.wall[n]+a,P({},e,{wall:r,calculatedWall:r})})),Object(R.a)(n,f.Rain.ADD_NEXT_LEVEL,(function(e,t){return P({},e,{water:t.water,nextLevel:t.nextLevel})})),Object(R.a)(n,f.Rain.STOP_RAIN,(function(e){var t=e.wall.length;return P({},e,{water:U(t),nextLevel:U(t),volumeWater:0})})),Object(R.a)(n,f.Wall.CALCULATE_VOLUME_WATER,(function(e){return P({},e,{volumeWater:function(e){var t=0,a=e.map((function(e){return e>t&&(t=e),t}));t=0;for(var n=Object(g.a)(e).reverse().map((function(e){return e>t&&(t=e),t})),r=0,o=1;o<e.length-1;o++)r+=Math.min(a[o],n[o])-e[o];return r}(e.calculatedWall)})})),Object(R.a)(n,f.Animation.UNSET_NO_ANIMATION_MODE,(function(){return P({},X())})),n));function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y,Z=B({dragMode:!1,direction:0,startCoordinates:null,columnIndex:-1},(V={},Object(R.a)(V,f.Drag.SET_DRAG_MODE,(function(e,t){var a=t.coordinates;return K({},e,{dragMode:!0,direction:t.direction,columnIndex:t.columnIndex,startCoordinates:a})})),Object(R.a)(V,f.Drag.UNSET_DRAG_MODE,(function(){return K({},{dragMode:!1,direction:0,startCoordinates:null,columnIndex:-1})})),V));function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=B({rainMode:!1,noAnimationMode:!1},(Y={},Object(R.a)(Y,f.Rain.START_RAIN,(function(e){return q({},e,{rainMode:!0})})),Object(R.a)(Y,f.Rain.STOP_RAIN,(function(){return q({},{rainMode:!1,noAnimationMode:!1})})),Object(R.a)(Y,f.Animation.SET_NO_ANIMATION_MODE,(function(e){return q({},e,{noAnimationMode:!0})})),Object(R.a)(Y,f.Animation.UNSET_NO_ANIMATION_MODE,(function(){return q({},{rainMode:!1,noAnimationMode:!1})})),Y)),F=Object(C.c)(Object(C.b)({wall:z,drag:Z,rain:$}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,{store:F},o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.85c2313b.chunk.js.map