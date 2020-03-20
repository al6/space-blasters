!function(e){var t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0);var s=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.getElementById("game-canvas"),this.context=this.canvas.getContext("2d"),this.playingStatus=document.getElementById("sound"),this.notPlayingStatus=document.getElementById("no-sound")};function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),e=i(this,a(t).call(this));var s={velocityX:0,velocityY:0,posX:0,posY:0},n=Object.assign({},s,o);return e.velocityX=n.velocityX,e.velocityY=n.velocityY,e.posX=n.posX,e.posY=n.posY,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),t}(s);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e,o,s){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,f(t).call(this,o))).name="explosion",n.hp=64,n.img=s,n.sX=0,n.sY=0,n.sWidth=512,n.sHeight=512,n.height=50,n.width=80,n.scale=5,n.loot=e,n}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),o=t,(s=[{key:"draw",value:function(){var e=this.context,t=this.img,o=this.sX,s=this.sY,n=this.sWidth,r=this.sHeight,i=this.posX,a=this.posY,c=this.height,l=this.width,u=this.scale;this.hp>0&&e.drawImage(t,o,s,n,r,i-170,a-100,l*u,c*u)}}])&&h(o.prototype,s),n&&h(o,n),t}(l);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e,o){var s,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(s=!(r=v(t).call(this,o))||"object"!==w(r)&&"function"!=typeof r?m(n):r).status="active",s.name=e,s.canvas=document.getElementById("game-canvas"),s.ctx=s.canvas.getContext("2d"),s.img=new Image;var i=m(s).img;switch(e){case"red-laser":i.src="./src/images/weapons/red_laser.png",s.hp=1;break;case"laser1":i.src="./src/images/weapons/laser1.png",s.hp=2;break;case"laser2":i.src="./src/images/weapons/laser2.png",s.hp=4;break;case"laser3":i.src="./src/images/weapons/laser3.png",s.hp=8;break;case"laser4":i.src="./src/images/weapons/laser4.png",s.hp=16;break;case"laser5":i.src="./src/images/weapons/laser5.png",s.hp=32}return s}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),o=t,(s=[{key:"draw",value:function(){var e=this.ctx,t=this.img,o=this.posX,s=this.posY;s+=this.velocityY,e.drawImage(t,o,s)}}])&&b(o.prototype,s),n&&b(o,n),t}(l);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function j(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e,o,s){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=j(this,S(t).call(this,s))).canvas=document.getElementById("game-canvas"),n.ctx=n.canvas.getContext("2d"),n.sounds=o,n.name="TieFighter",n.weapon="red-laser",n.hp=5,n.loot=[{name:"upgrade",droprate:.04}],n.loot=n.loot[Math.floor(Math.random()*n.loot.length)];var r=Math.ceil(100*Math.random());return 100*n.loot.droprate>r?n.loot=n.loot.name:n.loot=null,n.img=e,n.posX=Math.floor(731*Math.random()),n.posY=Math.floor(-800*Math.random()),n.height=40,n.width=80,n.projectiles=[],n}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),o=t,(s=[{key:"draw",value:function(){var e=this.ctx,t=this.img,o=this.posX,s=this.posY,n=this.velocityY,r=this.height,i=this.width;e.drawImage(t,o,s,i,r),this.posY+=n}},{key:"fireWeapon",value:function(){var e;switch(this.sounds.muted||(this.sounds.enemyLaserSound.currentTime=0,this.sounds.enemyLaserSound.play()),this.weapon){case"red-laser":e=new k("red-laser",{velocityY:5,posX:Math.floor(this.posX+48),posY:Math.floor(this.posY-10)}),this.projectiles.push(e)}}}])&&Y(o.prototype,s),n&&Y(o,n),t}(l);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function X(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(e,o,s){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=X(this,T(t).call(this,s))).name="upgrade",n.img=e,n.height=20,n.width=30,n.loot=o,n}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,e),o=t,(s=[{key:"drawUpgrade",value:function(){var e=this.context,t=this.img,o=this.posX,s=this.posY,n=this.velocityY,r=this.height,i=this.width;e.drawImage(t,o,s,i,r),this.posY+=n,t.onload=function(){e.drawImage(t,o,s,i,r)}}}])&&_(o.prototype,s),n&&_(o,n),t}(l);function A(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var L=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,s;return t=e,(o=[{key:"initialize",value:function(){this.muted=!0,this.backgroundMusic=new Audio("./src/sounds/sw.mp3"),this.backgroundMusic.volume=.1,this.backgroundMusic.loop=!0,this.impact=new Audio("./src/sounds/impact.mp3"),this.laserSound=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),this.enemyLaserSound=new Audio("./src/sounds/tie_fire_laser.mp3"),this.upgradeSound=new Audio("./src/sounds/upgrade_complete.mp3"),this.tieExplodeSound=new Audio("./src/sounds/tie_explode_short.mp3"),this.tieExplodeSound.volume=.1}}])&&A(t.prototype,o),s&&A(t,s),e}());function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=function(e){function t(e){var o,s,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=this,(o=!(n=D(t).call(this))||"object"!==M(n)&&"function"!=typeof n?H(s):n).name="player",o.weapon="laser1",o.img=e,o.restart(),o.sounds=L,o.spacePressed=!1,o.upPressed=!1,o.downPressed=!1,o.rightPressed=!1,o.leftPressed=!1,o.keyUpHandler=o.keyUpHandler.bind(H(o)),o.keyDownHandler=o.keyDownHandler.bind(H(o)),o.touchHandler=o.touchHandler.bind(H(o)),o.touchEndHandler=o.touchEndHandler.bind(H(o)),document.addEventListener("keyup",o.keyUpHandler,!1),document.addEventListener("keydown",o.keyDownHandler,!1),document.addEventListener("touchstart",o.touchHandler),document.addEventListener("touchend",o.touchEndHandler),document.addEventListener("touchmove",o.touchHandler),o}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,e),o=t,(s=[{key:"restart",value:function(){this.hp=100,this.height=100,this.width=100,this.x=400,this.y=765,this.projectiles=[],this.projectileCoolDown=0,this.projectileCoolDownConstant=10}},{key:"keyUpHandler",value:function(e){"Space"!=e.code&&"Space"!=e.key||(this.spacePressed=!1),"Right"!=e.key&&"ArrowRight"!=e.key||(this.rightPressed=!1),"Left"!=e.key&&"ArrowLeft"!=e.key||(this.leftPressed=!1),"Up"!=e.key&&"ArrowUp"!=e.key||(this.upPressed=!1),"Down"!=e.key&&"ArrowDown"!=e.key||(this.downPressed=!1)}},{key:"keyDownHandler",value:function(e){e.preventDefault(),"Space"==e.code&&(this.spacePressed=!0),"Right"!=e.key&&"ArrowRight"!=e.key||(this.rightPressed=!0),"Left"!=e.key&&"ArrowLeft"!=e.key||(this.leftPressed=!0),"Up"!=e.key&&"ArrowUp"!=e.key||(this.upPressed=!0),"Down"!=e.key&&"ArrowDown"!=e.key||(this.downPressed=!0)}},{key:"touchHandler",value:function(e){e.touches&&(this.spacePressed=!0,2.32*e.touches[0].pageX<this.x?this.leftPressed=!0:this.rightPressed=!0,1.45*e.touches[0].pageY<this.y?this.upPressed=!0:this.downPressed=!0),e.preventDefault()}},{key:"touchEndHandler",value:function(e){e.preventDefault(),this.leftPressed=!1,this.rightPressed=!1,this.upPressed=!1,this.downPressed=!1,this.spacePressed=!1}},{key:"draw",value:function(){var e=this.context,t=this.x,o=this.y,s=this.height,n=this.width;this.spacePressed&&this.fireWeapon(),this.leftPressed&&(this.x>0?this.x-=15:this.x=750),this.rightPressed&&(this.x<700?this.x+=15:this.x=-50),this.upPressed&&this.y>0&&(this.y-=10),this.downPressed&&this.y<755&&(this.y+=10),e.drawImage(this.img,t,o,s,n)}},{key:"fireWeapon",value:function(){var e,t,o;if(this.projectileCoolDown<=0)switch(this.projectileCoolDown+=this.projectileCoolDownConstant,this.sounds.muted||(this.sounds.laserSound.currentTime=0,this.sounds.laserSound.play()),this.weapon){case"laser1":e=new k("laser1",{velocityY:-10,posX:this.x+43,posY:this.y-1}),this.projectiles.push(e);break;case"laser2":e=new k("laser1",{velocityY:-10,posX:this.x,posY:this.y-10}),t=new k("laser1",{velocityY:-10,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t);break;case"laser3":e=new k("laser1",{velocityY:-10,posX:this.x,posY:this.y-10}),t=new k("laser1",{velocityY:-10,posX:this.x+43,posY:this.y-10}),o=new k("laser1",{velocityY:-10,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t),this.projectiles.push(o);break;case"laser4":e=new k("laser2",{velocityY:-8,posX:this.x+43,posY:this.y-10}),this.projectiles.push(e);break;case"laser5":e=new k("laser2",{velocityY:-8,posX:this.x,posY:this.y-10}),t=new k("laser2",{velocityY:-8,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t);break;case"laser6":e=new k("laser2",{velocityY:-8,posX:this.x,posY:this.y-10}),t=new k("laser2",{velocityY:-8,posX:this.x+43,posY:this.y-10}),o=new k("laser2",{velocityY:-8,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t),this.projectiles.push(o);break;case"laser7":e=new k("laser3",{velocityY:-6,posX:this.x+43,posY:this.y-10}),this.projectiles.push(e);break;case"laser8":e=new k("laser3",{velocityY:-6,posX:this.x,posY:this.y-10}),t=new k("laser3",{velocityY:-6,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t);break;case"laser9":e=new k("laser3",{velocityY:-6,posX:this.x,posY:this.y-10}),t=new k("laser3",{velocityY:-6,posX:this.x+43,posY:this.y-10}),o=new k("laser3",{velocityY:-6,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t),this.projectiles.push(o);break;case"laser10":e=new k("laser4",{velocityY:-4,posX:this.x+43,posY:this.y-10}),this.projectiles.push(e);break;case"laser11":e=new k("laser4",{velocityY:-4,posX:this.x,posY:this.y-10}),t=new k("laser4",{velocityY:-4,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t);break;case"laser12":e=new k("laser4",{velocityY:-4,posX:this.x,posY:this.y-10}),t=new k("laser4",{velocityY:-4,posX:this.x+43,posY:this.y-10}),o=new k("laser4",{velocityY:-4,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t),this.projectiles.push(o);break;case"laser13":e=new k("laser5",{velocityY:-2,posX:this.x+43,posY:this.y-10}),this.projectiles.push(e);break;case"laser14":e=new k("laser5",{velocityY:-2,posX:this.x,posY:this.y-10}),t=new k("laser5",{velocityY:-2,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t);break;case"laser15":e=new k("laser5",{velocityY:-2,posX:this.x,posY:this.y-10}),t=new k("laser5",{velocityY:-2,posX:this.x+43,posY:this.y-10}),o=new k("laser5",{velocityY:-2,posX:this.x+90,posY:this.y-10}),this.projectiles.push(e),this.projectiles.push(t),this.projectiles.push(o)}else this.projectileCoolDown-=1}},{key:"upgrade",value:function(){var e=this.weapon,t=this.hp,o=this.projectileCoolDownConstant;switch(this.sounds.muted||(this.sounds.upgradeSound.currentTime=0,this.sounds.upgradeSound.play()),e){case"laser1":this.weapon="laser2";break;case"laser2":this.weapon="laser3";break;case"laser3":this.weapon="laser4";break;case"laser4":this.weapon="laser5";break;case"laser5":this.weapon="laser6";break;case"laser6":this.weapon="laser7";break;case"laser7":this.weapon="laser8";break;case"laser8":this.weapon="laser9";break;case"laser9":this.weapon="laser10";break;case"laser10":this.weapon="laser11";break;case"laser11":this.weapon="laser12";break;case"laser12":this.weapon="laser13";break;case"laser13":this.weapon="laser14";break;case"laser14":this.weapon="laser15";break;case"laser15":100===t?o>=5&&(this.projectileCoolDownConstant-=1):t<=90?this.hp+=10:t<=100&&(this.hp+=1)}}}])&&R(o.prototype,s),n&&R(o,n),t}(l);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function z(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(e,o){var s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(s=z(this,G(t).call(this))).images=e,s.sounds=o,s.player=new W(e.playerImg),s.reset(),s.bindStuff(),document.addEventListener("keydown",s.keyDownHandler,!1),s.draw(),s}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),o=t,(s=[{key:"bindStuff",value:function(){this.draw=this.draw.bind(this),this.checkFPS=this.checkFPS.bind(this),this.checkCollision=this.checkCollision.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this)}},{key:"reset",value:function(){this.score=0,this.wave=0,this.waveCount=0,this.lastWave=30,this.lost=!1,this.paused=!1,this.won=!1,this.enemies=[],this.enemyLasers=[],this.explosions=[],this.upgrades=[],this.setFPS()}},{key:"setFPS",value:function(){this.now=0,this.elapsed=0,this.then=Date.now(),this.fpsInterval=1}},{key:"checkFPS",value:function(){this.now=Date.now(),this.elapsed=this.now-this.then,this.elapsed>this.fpsInterval&&(this.then=this.now-this.elapsed%this.fpsInterval,this.images.background.forEach((function(e){return e.draw()})))}},{key:"draw",value:function(){var e=this,t=this.sounds;if(this.waveCount>=30&&this.drawWin(),this.paused||this.lost||this.won)this.lost||this.won?!this.lost&&this.won?(this.drawWin(),t.muted?this.drawMuted():this.context.clearRect(300,-100,550,150)):(this.drawLose(),t.muted?this.drawMuted():this.context.clearRect(300,-100,550,150)):(this.drawPause(),t.muted?this.drawMuted():this.context.clearRect(300,-100,550,150));else{var o=this.canvas,s=this.context,n=this.player,r=this.enemies,i=this.enemyLasers,a=this.checkCollision,c=this.explosions,l=this.upgrades,u=this.images,h=this.sounds,p=this.checkFPS;if(s.clearRect(0,0,o.width,o.height),p(),n.hp>0?n.draw():(this.drawLose(),this.lost=!0),this.drawUI(),n.projectiles.forEach((function(t,o){if(t&&t.posY>=-5){var s=!1;r.forEach((function(i,l){if(i)if(a(t,i)){if(h.muted||h.impact.play(),i.hp-=1,t.hp-=1,t.hp<=0&&(n.projectiles[o]=null),i.hp<=0){var p=null;switch(i.name){case"TieFighter":p=new d(i.loot,{posX:i.posX,posY:i.posY,velocityY:1},u.explosionImg),h.muted||(h.tieExplodeSound.currentTime=0,h.tieExplodeSound.play()),c.push(p),e.score+=1}r[l]=null}}else s||(t.posY+=t.velocityY,t.draw(),s=!0)}))}else n.projectiles[o]=null})),r.forEach((function(e,t){e&&(e.posY>=850?r[t]=null:(e.draw(),1===Math.ceil(1e3*Math.random())&&(e.fireWeapon(),i.push(e.projectiles[e.projectiles.length-1]))))})),i.forEach((function(t){if(a(t,n)){i.splice(i.indexOf(t),1),n.hp-=10;var o=new d(null,{posX:t.posX-20,posY:t.posY-10,velocityY:1},u.explosionImg);h.muted||(h.tieExplodeSound.currentTime=0,h.tieExplodeSound.play()),e.explosions.push(o)}else t.posY<850?(t.draw(),t.posY+=t.velocityY):i.splice(i.indexOf(t),1)})),c.forEach((function(t){if(t.hp>0)t.draw(),t.sX<=3584?t.sX+=512:t.sX=0,t.sY<=3584?t.sY+=512:t.sY=0,t.hp-=1;else if(t.hp<=0){if(t.loot){var o=new C(u.upgradeImg,e.loot,{posX:t.posX,posY:t.posY,velocityY:1});l.push(o)}c.splice(c.indexOf(t),1)}})),l.forEach((function(e){a(n,e)?(n.upgrade(),l.splice(l.indexOf(e),1)):e&&e.posY<850?e.drawUpgrade():l.splice(l.indexOf(e),1)})),0===r.length||r.every((function(e){return null===e}))){var f=3;switch(this.wave){case this.waveCount>=10&&this.waveCount<20:f=5;break;case this.waveCount>=20&&this.waveCount<29:f=6;break;case this.waveCount>=29:f=20,this.wave+=20;break;case this.wave>50:f=10}this.wave+=5,this.waveCount+=1,this.enemies=B(Array(this.wave).keys()).map((function(){return new P(u.tieFighterImg,h,{velocityY:Math.ceil(Math.random()*f)})}))}}this.sounds.muted&&!this.paused&&this.drawMuted(),requestAnimationFrame(this.draw)}},{key:"drawUI",value:function(){this.drawCoolDownConstant(),this.drawHP(),this.drawScore(),this.drawWavesLeft()}},{key:"checkCollision",value:function(e,t){switch(e.name){case"laser1":case"laser2":case"laser3":case"laser4":case"laser5":return!(!e||!t||e.posY>t.posY+t.height||e.posY<t.posY||e.posX+10<t.posX||e.posX>t.posX+t.width);case"red-laser":return!(!e||!t||e.posY>t.y+t.height||e.posY<t.y||e.posX+10<t.x||e.posX>t.x+t.width);case"player":return!(!e||!t||e.y>t.posY+t.height||e.y+e.height<t.posY||e.x+e.width<t.posX||e.x>t.posX+t.width)}}},{key:"keyDownHandler",value:function(e){var t=this.sounds,o=this.playingStatus,s=this.notPlayingStatus;e.preventDefault(),"r"==e.key||"R"==e.key?(this.player=new W(this.images.playerImg),this.reset()):"p"==e.key||"P"==e.key?this.paused=!this.paused:"m"!=e.key&&"M"!=e.key||(t.muted?(o.classList.toggle("hidden"),s.classList.toggle("hidden"),t.backgroundMusic.play(),this.sounds.muted=!1):(s.classList.toggle("hidden"),o.classList.toggle("hidden"),t.backgroundMusic.pause(),this.sounds.muted=!0))}},{key:"drawMuted",value:function(){var e=this.context;e.font="bold 30px Arial",e.fillStyle="red",e.fillText("MUTED! PRESS M TO UNMUTE",388,30)}},{key:"drawHP",value:function(){var e=this.context;e.font="bold 30px Arial",e.fillStyle="red",e.fillText("HP: "+this.player.hp,10,30)}},{key:"drawCoolDownConstant",value:function(){var e=this.context;e.font="bold 20px Arial",e.fillStyle="white",e.fillText("Laser Cooldown: "+this.player.projectileCoolDownConstant,10,60)}},{key:"drawWavesLeft",value:function(){var e=this.context;e.font="bold 20px Arial",e.fillStyle="white",e.fillText("Waves Remaining: "+(this.lastWave-this.waveCount),10,80)}},{key:"drawScore",value:function(){var e=this.context;e.font="bold 30px Arial",e.fillStyle="white",e.fillText("Score: "+this.score,130,30)}},{key:"drawWin",value:function(){var e=this.context;this.won=!0,e.font="bold 80px Arial",e.fillStyle="green",e.fillText("YOU WIN!",230,280),e.font="bold 30px Arial",e.fillText("THE FORCE IS STRONG WITHIN YOU",150,330),e.font="bold 50px Arial",e.fillText("Your final score is: "+this.score,155,410),e.font="bold 50px Arial",e.fillText("PRESS R TO RESTART",150,470)}},{key:"drawLose",value:function(){var e=this.context;e.font="bold 130px Arial",e.fillStyle="red",e.fillText("GAME OVER",10,250),e.font="bold 50px Arial",e.fillText("Your final score is: "+this.score,150,330),e.font="bold 50px Arial",e.fillText("PRESS R TO RESTART",150,400)}},{key:"drawPause",value:function(){var e=this.context;e.font="100px Arial",e.fillStyle="green",e.fillText("PAUSED",250,370),e.font="bold 50px Arial",e.fillText("PRESS P TO PLAY/PAUSE",110,420)}},{key:"drawReset",value:function(){var e=this.context;e.font="100px Arial",e.fillStyle="red",e.fillText("RESET",250,320)}}])&&N(o.prototype,s),n&&N(o,n),t}(s);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function Q(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ee=function(e){function t(e,o,s){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Q(this,Z(t).call(this,s))).canvas=e,n.canvas.width=450,n.canvas.height=700,n.context=n.canvas.getContext("2d"),n.img=new Image,n.img.src="".concat(o),n}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,e),o=t,(s=[{key:"draw",value:function(){var e=this.canvas,t=this.context,o=this.img,s=this.posY,n=this.velocityY;this.posY+=n,t.clearRect(0,0,450,700),t.drawImage(o,0,-700+s),t.drawImage(o,0,s),s>=e.height?this.posY=0:s<-700&&(this.posY=1)}}])&&K(o.prototype,s),n&&K(o,n),t}(l);var te=function(){for(var e=[],t=0;t<8;t++)e.push(t);return e.map((function(e){return function(e){var t={velocityY:0};switch(e){case 0:t.velocityY=.1;break;case 1:t.velocityY=.3;break;case 2:t.velocityY=.1;break;case 3:t.velocityY=1;break;case 4:t.velocityY=.05;break;case 5:t.velocityY=.1;break;case 6:t.velocityY=.5;break;case 7:t.velocityY=1}return new ee(document.getElementById("l"+e),"./src/images/background_layers/"+e+".png",t)}(e)}))};var oe=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.background=te(),this.tieFighterImg=new Image,this.tieFighterImg.src="./src/images/tie-advanced.png",this.playerImg=new Image,this.playerImg.src="./src/images/xwing.png",this.upgradeImg=new Image,this.upgradeImg.src="./src/images/upgrades/upgrades1.png",this.explosionImg=new Image,this.explosionImg.src="./src/images/explosions/explosion_sprite_sheet.png"},se=void 0;document.addEventListener("DOMContentLoaded",(function(){var e,t,o;t=new oe,o=L.initialize(),o=L,t.playerImg.onload=function(){var s=document.getElementById("game-canvas");s.width=this.naturalWidth,s.height=this.naturalHeight,e=new V(t,o)};var s=document.getElementById("instructions-modal-open-button"),n=document.getElementById("instructions-modal-background"),r=document.getElementById("instructions-modal-content");n.addEventListener("click",(function(){n.classList.toggle("hidden"),r.classList.toggle("hidden")})),s.addEventListener("click",(function(){e.paused=!0,n.classList.toggle("hidden"),r.classList.toggle("hidden")}));var i=document.getElementById("sound"),a=document.getElementById("no-sound");i.addEventListener("click",(function(){i.classList.toggle("hidden"),a.classList.toggle("hidden"),se.sounds.muted=!0,bgMusic.pause()})),a.addEventListener("click",(function(){i.classList.toggle("hidden"),a.classList.toggle("hidden"),se.sounds.muted=!1,o.backgroundMusic.play()}))}))}]);
//# sourceMappingURL=main.js.map