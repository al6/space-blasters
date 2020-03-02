!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=2)}([function(e,t,n){},function(e,t){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o={velocityX:0,velocityY:0,posX:0,posY:0},a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e);var n=Object.assign({},o,t);this.velocityX=n.velocityX,this.velocityY=n.velocityY,this.posX=n.posX,this.posY=n.posY}var t,n,a;return t=e,(n=[{key:"move",value:function(){this.posX+=this.velocityX,this.posY+=this.velocityY}}])&&i(t.prototype,n),a&&i(t,a),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e,n,r){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=u(this,h(t).call(this,r))).canvas=e,i.canvas.width=450,i.canvas.height=700,i.ctx=i.canvas.getContext("2d"),i.img=new Image,i.img.src="".concat(n),i.audioctx=new AudioContext,i}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"draw",value:function(){var e=this.canvas,t=this.ctx,n=this.img,r=this.posY,i=this.velocityY;requestAnimationFrame((function o(){t.clearRect(0,0,450,700),t.drawImage(n,0,r),t.drawImage(n,0,r-e.height),((r+=i)<=-e.height||r>=e.height)&&(r=0),setTimeout((function(){return requestAnimationFrame(o)}),60)}))}}])&&c(n.prototype,r),i&&c(n,i),t}(a);var y=function(){for(var e=[],t=0;t<8;t++)e.push(t);e.forEach((function(e){return function(e){var t={velocityY:0};switch(e){case 0:t.velocityY=1;break;case 1:case 2:t.velocityY=2;break;case 3:t.velocityY=-1;break;case 4:t.velocityY=-2;break;case 5:case 6:t.velocityY=1;break;case 7:t.velocityY=-2}new f(document.getElementById("l"+e),"./src/images/background_layers/"+e+".png",t).draw()}(e)}))};n(1);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(e,n){var r,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(r=!(o=v(t).call(this,n))||"object"!==p(o)&&"function"!=typeof o?g(i):o).canvas=document.getElementById("game-canvas"),r.canvas.width=450,r.canvas.height=700,r.name=e,r.ctx=r.canvas.getContext("2d"),r.img=new Image;var a=g(r).img;switch(e){case"laser":a.src="./src/images/ship4.png/";break;case"laser2":a.src="./src/images/ship.png/"}return r}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"draw",value:function(){var e=this.canvas,t=this.ctx,n=this.img,r=this.posY,i=this.velocityY;requestAnimationFrame((function o(){t.clearRect(0,0,450,700),t.drawImage(n,0,r),t.drawImage(n,0,r-e.height),((r+=i)<=-e.height||r>=e.height)&&(r=0),setTimeout((function(){return requestAnimationFrame(o)}),60)}))}}])&&d(n.prototype,r),i&&d(n,i),t}(a);function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.weapon="laser",this.canvas=document.getElementById("game-canvas"),this.ctx=this.canvas.getContext("2d"),this.img=new Image,this.img.src="".concat(t),this.x=1.4*this.canvas.width,this.y=3.85*this.canvas.height,this.height=80,this.width=30,this.spacePressed=!1,this.upPressed=!1,this.rightPressed=!1,this.downPressed=!1,this.leftPressed=!1,this.drawXFighter=this.drawXFighter.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this),document.addEventListener("keyup",this.keyUpHandler,!1),document.addEventListener("keydown",this.keyDownHandler,!1)}var t,n,r;return t=e,(n=[{key:"keyUpHandler",value:function(e){"Right"==e.key||"ArrowRight"==e.key?this.rightPressed=!1:"Left"==e.key||"ArrowLeft"==e.key?this.leftPressed=!1:"Up"==e.key||"ArrowUp"==e.key?this.upPressed=!1:"Down"!=e.key&&"ArrowDown"!=e.key||(this.downPressed=!1)}},{key:"keyDownHandler",value:function(e){"Space"==e.code?this.shootPayload():"Right"==e.key||"ArrowRight"==e.key?(this.rightPressed=!0,this.x>=this.canvas.width-3*this.width||(this.x+=this.canvas.height/20)):"Left"==e.key||"ArrowLeft"==e.key?(this.leftPressed=!0,this.x<=0||(this.x-=this.canvas.height/20)):"Up"==e.key||"ArrowUp"==e.key?(this.upPressed=!0,this.y<=0||(this.y-=this.canvas.height/20)):"Down"!=e.key&&"ArrowDown"!=e.key||(this.downPressed=!0,this.y>=this.canvas.height-this.height+20||(this.y+=this.canvas.height/20))}},{key:"drawXFighter",value:function(){var e=this.canvas,t=this.ctx,n=this.img,r=this.x,i=this.y,o=this.height,a=this.width;t.clearRect(0,0,e.width,e.height),t.drawImage(n,r,i,o,a),n.onload=function(){e.width=this.naturalWidth,e.height=this.naturalHeight,t.drawImage(n,r,i,o,a)},requestAnimationFrame(this.drawXFighter)}},{key:"shootPayload",value:function(){switch(this.weapon){case"laser":console.log("fire laser"),console.log("posY: ".concat(this.y));var e=new w("laser",{velocityY:-5,posY:this.y+50});e.draw(),console.log(e);break;case"laser2":console.log("fire laser2")}}}])&&m(t.prototype,n),r&&m(t,r),e}();document.addEventListener("DOMContentLoaded",(function(){y(),new k("./src/images/ship.png").drawXFighter()}))}]);
//# sourceMappingURL=main.js.map