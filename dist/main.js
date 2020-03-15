!function(e){var t={};function s(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(o,i,function(t){return e[t]}.bind(null,i));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=1)}([function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(0);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n={velocityX:0,velocityY:0,posX:0,posY:0},r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e);var s=Object.assign({},n,t);this.velocityX=s.velocityX,this.velocityY=s.velocityY,this.posX=s.posX,this.posY=s.posY}var t,s,r;return t=e,(s=[{key:"move",value:function(){this.posX+=this.velocityX,this.posY+=this.velocityY}}])&&i(t.prototype,s),r&&i(t,r),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e,s,o){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=c(this,p(t).call(this,o))).canvas=e,i.canvas.width=450,i.canvas.height=700,i.ctx=i.canvas.getContext("2d"),i.img=new Image,i.img.src="".concat(s),i}var s,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),s=t,(o=[{key:"draw",value:function(){var e=this.canvas,t=this.ctx,s=this.img,o=this.posY,i=this.velocityY;this.posY+=i,t.clearRect(0,0,450,700),t.drawImage(s,0,-700+o),t.drawImage(s,0,o),o>=e.height?this.posY=0:o<-700&&(this.posY=1)}}])&&l(s.prototype,o),i&&l(s,i),t}(r);var d=function(){for(var e=[],t=0;t<8;t++)e.push(t);return e.map((function(e){return function(e){var t={velocityY:0};switch(e){case 0:t.velocityY=.1;break;case 1:t.velocityY=.3;break;case 2:t.velocityY=.1;break;case 3:t.velocityY=1;break;case 4:t.velocityY=.05;break;case 5:t.velocityY=.1;break;case 6:t.velocityY=.5;break;case 7:t.velocityY=1}return new u(document.getElementById("l"+e),"./src/images/background_layers/"+e+".png",t)}(e)}))};function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e,s){var o,i,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(o=!(n=y(t).call(this,s))||"object"!==w(n)&&"function"!=typeof n?m(i):n).status="active",o.name=e,o.canvas=document.getElementById("game-canvas"),o.ctx=o.canvas.getContext("2d"),o.img=new Image;var r=m(o).img;switch(e){case"red-laser":r.src="./src/images/weapons/red_laser.png",o.hp=1;break;case"laser1":r.src="./src/images/weapons/laser1.png",o.hp=2;break;case"laser2":r.src="./src/images/weapons/laser2.png",o.hp=4;break;case"laser3":r.src="./src/images/weapons/laser3.png",o.hp=8;break;case"laser4":r.src="./src/images/weapons/laser4.png",o.hp=16;break;case"laser5":r.src="./src/images/weapons/laser5.png",o.hp=32}return o}var s,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),s=t,(o=[{key:"draw",value:function(){var e=this.ctx,t=this.img,s=this.posX,o=this.posY;o+=this.velocityY,e.drawImage(t,s,o)}}])&&f(s.prototype,o),i&&f(s,i),t}(r);function b(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="player",this.weapon="laser1",this.canvas=document.getElementById("game-canvas"),this.ctx=this.canvas.getContext("2d"),this.img=window.playerImg,this.laserSound=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),this.hp=100,this.height=100,this.width=100,this.x=400,this.y=765,this.projectiles=[],this.projectileCoolDown=0,this.projectileCoolDownConstant=10,this.spacePressed=!1,this.upPressed=!1,this.downPressed=!1,this.rightPressed=!1,this.leftPressed=!1,this.drawXFighter=this.drawXFighter.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this),this.touchHandler=this.touchHandler.bind(this),this.touchEndHandler=this.touchEndHandler.bind(this),document.addEventListener("keyup",this.keyUpHandler,!1),document.addEventListener("keydown",this.keyDownHandler,!1),document.addEventListener("touchstart",this.touchHandler),document.addEventListener("touchend",this.touchEndHandler),document.addEventListener("touchmove",this.touchHandler)}var t,s,o;return t=e,(s=[{key:"keyUpHandler",value:function(e){"Space"!=e.code&&"Space"!=e.key||(this.spacePressed=!1),"Right"!=e.key&&"ArrowRight"!=e.key||(this.rightPressed=!1),"Left"!=e.key&&"ArrowLeft"!=e.key||(this.leftPressed=!1),"Up"!=e.key&&"ArrowUp"!=e.key||(this.upPressed=!1),"Down"!=e.key&&"ArrowDown"!=e.key||(this.downPressed=!1)}},{key:"keyDownHandler",value:function(e){e.preventDefault(),"Space"==e.code&&(this.spacePressed=!0),"Right"!=e.key&&"ArrowRight"!=e.key||(this.rightPressed=!0),"Left"!=e.key&&"ArrowLeft"!=e.key||(this.leftPressed=!0),"Up"!=e.key&&"ArrowUp"!=e.key||(this.upPressed=!0),"Down"!=e.key&&"ArrowDown"!=e.key||(this.downPressed=!0)}},{key:"touchHandler",value:function(e){e.touches&&(this.spacePressed=!0,2.32*e.touches[0].pageX<this.x?this.leftPressed=!0:this.rightPressed=!0,1.45*e.touches[0].pageY<this.y?this.upPressed=!0:this.downPressed=!0),e.preventDefault()}},{key:"touchEndHandler",value:function(e){e.preventDefault(),this.leftPressed=!1,this.rightPressed=!1,this.upPressed=!1,this.downPressed=!1,this.spacePressed=!1}},{key:"drawXFighter",value:function(){var e=this.canvas,t=this.ctx,s=this.x,o=this.y,i=this.height,n=this.width;t.clearRect(0,0,e.width,e.height),this.spacePressed&&this.fireWeapon(),this.leftPressed&&(this.x>0?this.x-=15:this.x=750),this.rightPressed&&(this.x<700?this.x+=15:this.x=-50),this.upPressed&&this.y>0&&(this.y-=10),this.downPressed&&this.y<755&&(this.y+=10),t.drawImage(this.img,s,o,i,n)}},{key:"fireWeapon",value:function(){var e,t,s,o;if(this.projectileCoolDown<=0)switch(this.projectileCoolDown+=this.projectileCoolDownConstant,this.weapon){case"laser1":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser1",{velocityY:-10,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser2":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser1",{velocityY:-10,posX:this.x,posY:this.y-10}),s=new v("laser1",{velocityY:-10,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s);break;case"laser3":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser1",{velocityY:-10,posX:this.x,posY:this.y-10}),s=new v("laser1",{velocityY:-10,posX:this.x+43,posY:this.y-10}),o=new v("laser1",{velocityY:-10,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s),this.projectiles.push(o);break;case"laser4":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser2",{velocityY:-8,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser5":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser2",{velocityY:-8,posX:this.x,posY:this.y-10}),s=new v("laser2",{velocityY:-8,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s);break;case"laser6":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser2",{velocityY:-8,posX:this.x,posY:this.y-10}),s=new v("laser2",{velocityY:-8,posX:this.x+43,posY:this.y-10}),o=new v("laser2",{velocityY:-8,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s),this.projectiles.push(o);break;case"laser7":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser3",{velocityY:-6,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser8":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser3",{velocityY:-6,posX:this.x,posY:this.y-10}),s=new v("laser3",{velocityY:-6,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s);break;case"laser9":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser3",{velocityY:-6,posX:this.x,posY:this.y-10}),s=new v("laser3",{velocityY:-6,posX:this.x+43,posY:this.y-10}),o=new v("laser3",{velocityY:-6,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s),this.projectiles.push(o);break;case"laser10":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser4",{velocityY:-4,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser11":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser4",{velocityY:-4,posX:this.x,posY:this.y-10}),s=new v("laser4",{velocityY:-4,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s);break;case"laser12":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser4",{velocityY:-4,posX:this.x,posY:this.y-10}),s=new v("laser4",{velocityY:-4,posX:this.x+43,posY:this.y-10}),o=new v("laser4",{velocityY:-4,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s),this.projectiles.push(o);break;case"laser13":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser5",{velocityY:-2,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser14":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser5",{velocityY:-2,posX:this.x,posY:this.y-10}),s=new v("laser5",{velocityY:-2,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s);break;case"laser15":e=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),window.muted||e.play(),t=new v("laser5",{velocityY:-2,posX:this.x,posY:this.y-10}),s=new v("laser5",{velocityY:-2,posX:this.x+43,posY:this.y-10}),o=new v("laser5",{velocityY:-2,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(s),this.projectiles.push(o)}else this.projectileCoolDown-=1}}])&&b(t.prototype,s),o&&b(t,o),e}();function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e){function t(e,s){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=S(this,j(t).call(this,s))).name="TieFighter",o.weapon="red-laser",o.hp=5,o.loot=[{name:"upgrade",droprate:.04}],o.loot=o.loot[Math.floor(Math.random()*o.loot.length)];var i=Math.ceil(100*Math.random());return 100*o.loot.droprate>i?o.loot=o.loot.name:o.loot=null,o.projectileCoolDown=0,o.projectileCoolDownConstant=10,o.canvas=document.getElementById("game-canvas"),o.ctx=o.canvas.getContext("2d"),o.img=e,o.posX=Math.floor(731*Math.random()),o.posY=Math.floor(-800*Math.random()),o.height=40,o.width=80,o.projectiles=[],o}var s,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),s=t,(o=[{key:"drawTieFighter",value:function(){var e=this.ctx,t=this.img,s=this.posX,o=this.posY,i=this.velocityY,n=this.height,r=this.width;e.drawImage(t,s,o,r,n),this.posY+=i,t.onload=function(){e.drawImage(t,s,o,r,n)}}},{key:"fireWeapon",value:function(){var e;if(this.projectileCoolDown<=0)switch(this.projectileCoolDown+=this.projectileCoolDownConstant,this.weapon){case"red-laser":window.muted||new Audio("./src/sounds/tie_fire_laser.mp3").play(),e=new v("red-laser",{velocityY:5,posX:this.posX+53,posY:this.posY-10}),this.projectiles.push(e)}else this.projectileCoolDown-=1}}])&&k(s.prototype,o),i&&k(s,i),t}(r);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(e,s){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=A(this,E(t).call(this,s))).name="explosion",o.hp=64,o.canvas=document.getElementById("game-canvas"),o.ctx=o.canvas.getContext("2d"),o.img=new Image,o.img.src="./src/images/explosions/explosion_sprite_sheet.png",o.sX=0,o.sY=0,o.sWidth=512,o.sHeight=512,o.height=50,o.width=80,o.scale=5,o.loot=e,o}var s,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),s=t,(o=[{key:"drawExplosion",value:function(){var e=this.ctx,t=this.img,s=this.sX,o=this.sY,i=this.sWidth,n=this.sHeight,r=this.posX,a=this.posY,l=this.height,c=this.width,p=this.scale;this.hp>0&&e.drawImage(t,s,o,i,n,r-170,a-100,c*p,l*p),t.onload=function(){e.drawImage(t,r,a,c,l)}}}])&&P(s.prototype,o),i&&P(s,i),t}(r);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(e,s){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=L(this,M(t).call(this,s))).name="upgrade",o.canvas=document.getElementById("game-canvas"),o.ctx=o.canvas.getContext("2d"),o.img=new Image,o.img.src="./src/images/upgrades/upgrades1.png",o.height=20,o.width=30,o.loot=e,o}var s,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),s=t,(o=[{key:"drawUpgrade",value:function(){var e=this.ctx,t=this.img,s=this.posX,o=this.posY,i=this.velocityY,n=this.height,r=this.width;e.drawImage(t,s,o,r,n),this.posY+=i,t.onload=function(){e.drawImage(t,s,o,r,n)}}}])&&I(s.prototype,o),i&&I(s,i),t}(r);function H(e){return function(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function W(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var U=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.background=d(),this.tieFighterImg=new Image,this.tieFighterImg.src="./src/images/tie-advanced.png",this.canvas=document.getElementById("game-canvas"),this.context=this.canvas.getContext("2d"),this.player=new x(this.playerImg),this.wave=0,this.waveCount=0,this.lastWave=30,this.score=0,this.enemies=[],this.paused=!1,this.lost=!1,this.won=!1,this.fpsInterval=1e3/120,this.stop=!1,this.frameCount=0,this.fps=60,this.now=0,this.then=Date.now(),this.startTime=this.then,this.elapsed=0,this.playingStatus=document.getElementById("sound"),this.notPlayingStatus=document.getElementById("no-sound"),this.checkCollision=this.checkCollision.bind(this),this.draw=this.draw.bind(this),this.drawReset=this.drawReset.bind(this),this.drawWin=this.drawWin.bind(this),this.drawWavesLeft=this.drawWavesLeft.bind(this),this.impact=new Audio("./src/sounds/impact.mp3"),this.tieExplode=new Audio("./src/sounds/tie_explode_short.mp3"),this.tieExplode.volume=.3,this.keyDownHandler=this.keyDownHandler.bind(this),document.addEventListener("keydown",this.keyDownHandler,!1),this.explosions=[],this.enemyLasers=[],this.upgrades=[],this.draw()}var t,s,o;return t=e,(s=[{key:"draw",value:function(){var e=this;if(this.waveCount>=30&&(this.drawWin(),this.won=!0),requestAnimationFrame(this.draw),this.now=Date.now(),this.elapsed=this.now-this.then,this.elapsed>this.fpsInterval){if(this.then=this.now-this.elapsed%this.fpsInterval,this.paused||this.lost||this.won)this.lost||this.won?!this.lost&&this.won?(this.drawWin(),window.muted?this.drawMuted():this.context.clearRect(300,-100,550,150)):(this.drawLose(),window.muted?this.drawMuted():this.context.clearRect(300,-100,550,150)):(this.drawPause(),window.muted?this.drawMuted():this.context.clearRect(300,-100,550,150));else{var t=this.background,s=this.context,o=this.player,i=this.enemies,n=this.enemyLasers,r=this.checkCollision,a=this.explosions,l=this.upgrades;if(s.clearRect(0,0,450,700),t[0]&&t.forEach((function(e){return e.draw()})),o.hp>0&&window.playerImg?o.drawXFighter():o.hp>0||(this.drawLose(),this.lost=!0),this.drawCoolDownConstant(),this.drawScore(),this.drawHP(),this.drawWavesLeft(),a.forEach((function(t){if(t.hp>0)t.drawExplosion(),t.sX<=3584?t.sX+=512:t.sX=0,t.sY<=3584?t.sY+=512:t.sY=0,t.hp-=1;else if(t.hp<=0){if(t.loot){var s=new F(e.loot,{posX:t.posX,posY:t.posY,velocityY:1});l.push(s)}a.splice(a.indexOf(t),1)}})),l.forEach((function(t){if(r(o,t)){switch(o.weapon){case"laser1":o.weapon="laser2";var s=new Audio("./src/sounds/upgrade_complete.mp3");window.muted||s.play();break;case"laser2":o.weapon="laser3",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser3":o.weapon="laser4",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser4":o.weapon="laser5",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser5":o.weapon="laser6",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser6":o.weapon="laser7",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser7":o.weapon="laser8",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser8":o.weapon="laser9",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser9":o.weapon="laser10",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser10":o.weapon="laser11",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser11":o.weapon="laser12",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser12":o.weapon="laser13",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser13":o.weapon="laser14",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser14":o.weapon="laser15",s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play();break;case"laser15":o.weapon="laser15",100===o.hp?o.projectileCoolDownConstant>=5&&(o.projectileCoolDownConstant-=1,s=new Audio("./src/sounds/upgrade_complete.mp3"),window.muted||s.play()):o.hp<=99?o.hp+=2:e.score+=5}l.splice(l.indexOf(t),1)}else t&&t.posY<850?t.drawUpgrade():l.splice(l.indexOf(t),1)})),o.projectiles.forEach((function(t){if(t&&t.posY>=-5){var s=!1;i.forEach((function(n){if(r(t,n)){if(window.muted||e.impact.play(),t.hp-=1,t.hp<=0&&o.projectiles.splice(o.projectiles.indexOf(t),1),n.hp-=1,n.hp<=0){var l=null;switch(n.name){case"TieFighter":l=new C(n.loot,{posX:n.posX,posY:n.posY,velocityY:1}),window.muted||new Audio("./src/sounds/tie_explode_short.mp3").play(),a.push(l),e.score+=1}i.splice(i.indexOf(n),1)}}else s||(t.posY+=t.velocityY,t.draw(),s=!0)}))}else o.projectiles.splice(o.projectiles.indexOf(t),1)})),n.forEach((function(t){if(r(t,o)){n.splice(n.indexOf(t),1),o.hp-=10;var s=new C(null,{posX:e.player.x,posY:e.player.y,velocityY:1});window.muted||e.tieExplode.play(),e.explosions.push(s)}else t.posY<850?(t.draw(),t.posY+=t.velocityY):n.splice(n.indexOf(t),1)})),i.forEach((function(t){t.posY>=850?(e.player.hp-=1,i.splice(i.indexOf(t),1)):(t.drawTieFighter(),1===Math.ceil(1e3*Math.random())&&(t.fireWeapon(),n.push(t.projectiles[t.projectiles.length-1])))})),0===i.length){var c=3;switch(this.wave){case this.wave>20:c=5;break;case this.wave>30:c=6;break;case this.wave>40:c=8;break;case this.wave>50:c=10}this.wave+=2,this.waveCount+=1,this.enemies=H(Array(this.wave).keys()).map((function(){return new X(e.tieFighterImg,{velocityY:Math.ceil(Math.random()*c)})}))}}window.muted&&!this.paused&&this.drawMuted()}}},{key:"checkCollision",value:function(e,t){switch(e.name){case"laser1":case"laser2":case"laser3":case"laser4":case"laser5":return!(!e||!t||e.posY>t.posY+t.height||e.posY<t.posY||e.posX+10<t.posX||e.posX>t.posX+t.width);case"red-laser":return!(!e||!t||e.posY>t.y+t.height||e.posY<t.y||e.posX+10<t.x||e.posX>t.x+t.width);case"player":return!(!e||!t||e.y>t.posY+t.height||e.y+e.height<t.posY||e.x+e.width<t.posX||e.x>t.posX+t.width)}}},{key:"keyDownHandler",value:function(e){e.preventDefault(),"r"==e.key||"R"==e.key?(this.player=new x,this.wave=1,this.score=0,this.enemies=[],this.explosions=[],this.enemyLasers=[],this.upgrades=[],this.lost=!1,this.won=!1):"p"==e.key||"P"==e.key?this.paused=!this.paused:"m"!=e.key&&"M"!=e.key||(window.muted?(this.playingStatus.classList.toggle("hidden"),this.notPlayingStatus.classList.toggle("hidden"),window.muted=!1,window.bgMusic.play()):(this.notPlayingStatus.classList.toggle("hidden"),this.playingStatus.classList.toggle("hidden"),window.muted=!0,window.bgMusic.pause()))}},{key:"drawMuted",value:function(){var e=this.context;e.font="bold 30px Arial",e.fillStyle="red",e.fillText("MUTED! PRESS M TO UNMUTE",388,30)}},{key:"drawHP",value:function(){var e=this.context;e.font="bold 30px Arial",e.fillStyle="red",e.fillText("HP: "+this.player.hp,10,30)}},{key:"drawCoolDownConstant",value:function(){var e=this.context;e.font="bold 20px Arial",e.fillStyle="white",e.fillText("Laser Cooldown: "+this.player.projectileCoolDownConstant,10,60)}},{key:"drawWavesLeft",value:function(){var e=this.context;e.font="bold 20px Arial",e.fillStyle="white",e.fillText("Waves Remaining: "+(this.lastWave-this.waveCount),10,80)}},{key:"drawScore",value:function(){var e=this.context;e.font="bold 30px Arial",e.fillStyle="white",e.fillText("Score: "+this.score,130,30)}},{key:"drawWin",value:function(){var e=this.context;e.font="bold 80px Arial",e.fillStyle="green",e.fillText("YOU WIN!",230,280),e.font="bold 30px Arial",e.fillText("THE FORCE IS STRONG WITHIN YOU",150,330),e.font="bold 50px Arial",e.fillText("Your final score is: "+this.score,155,410),e.font="bold 50px Arial",e.fillText("PRESS R TO RESTART",150,470)}},{key:"drawLose",value:function(){var e=this.context;e.font="bold 130px Arial",e.fillStyle="red",e.fillText("GAME OVER",10,250),e.font="bold 50px Arial",e.fillText("Your final score is: "+this.score,150,330),e.font="bold 50px Arial",e.fillText("PRESS R TO RESTART",150,400)}},{key:"drawPause",value:function(){var e=this.context;e.font="100px Arial",e.fillStyle="green",e.fillText("PAUSED",250,370),e.font="bold 50px Arial",e.fillText("PRESS P TO PLAY/PAUSE",110,420)}},{key:"drawReset",value:function(){var e=this.context;e.font="100px Arial",e.fillStyle="red",e.fillText("RESET",250,320)}}])&&W(t.prototype,s),o&&W(t,o),e}();document.addEventListener("DOMContentLoaded",(function(){d(),window.muted=!0,window.bgMusic=new Audio("./src/sounds/sw.mp3"),window.bgMusic.volume=.1,window.playerImg=new Image,window.playerImg.src="./src/images/xwing.png",window.playerImg.onload=function(){var e=document.getElementById("game-canvas");e.width=this.naturalWidth,e.height=this.naturalHeight,setTimeout((function(){new U}),100)},bgMusic.loop=!0;var e=document.getElementById("sound"),t=document.getElementById("no-sound");e.addEventListener("click",(function(){e.classList.toggle("hidden"),t.classList.toggle("hidden"),muted=!0,bgMusic.pause()})),t.addEventListener("click",(function(){e.classList.toggle("hidden"),t.classList.toggle("hidden"),muted=!1,bgMusic.play()}))}))}]);
//# sourceMappingURL=main.js.map