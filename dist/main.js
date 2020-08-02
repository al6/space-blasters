!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var o=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("game-canvas"),this.context=this.canvas.getContext("2d")};function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=l(t);if(e){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(u,t);var e,n,o,r=c(u);function u(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,u),t=r.call(this);var n={velocityX:0,velocityY:0,posX:0,posY:0},o=Object.assign({},n,e);return t.velocityX=o.velocityX,t.velocityY=o.velocityY,t.posX=o.posX,t.posY=o.posY,t}return e=u,(n=[{key:"checkCollision",value:function(t){var e=t;if(!this||!e)return!1;switch(this.name){case"laser1":case"laser2":case"laser3":case"laser4":case"laser5":return!(this.posY>e.posY+e.height||this.posY<e.posY||this.posX+10<e.posX||this.posX>e.posX+e.width);case"red-laser":return!(this.posY>e.y+e.height||this.posY<e.y||this.posX+10<e.x||this.posX>e.x+e.width);case"player":return!(this.y>e.posY+e.height||this.y+this.height<e.posY||this.x+this.width<e.posX||this.x>e.posX+e.width)}}}])&&i(e.prototype,n),o&&i(e,o),u}(o);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(s,t);var e,n,o,r=d(s);function s(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(o=r.call(this,e)).name="explosion",o.hp=64,o.img=n,o.sX=0,o.sY=0,o.sWidth=512,o.sHeight=512,o.height=50,o.width=80,o.scale=5,o.loot=t,o}return e=s,(n=[{key:"draw",value:function(){var t=this.context,e=this.img,n=this.sX,o=this.sY,r=this.sWidth,s=this.sHeight,i=this.posX,a=this.posY,c=this.height,u=this.width,l=this.scale;this.hp>0&&t.drawImage(e,n,o,r,s,i-170,a-100,u*l,c*l)}}])&&f(e.prototype,n),o&&f(e,o),s}(h);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Y(t);if(e){var r=Y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(s,t);var e,n,o,r=x(s);function s(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(o=r.call(this,n)).canvas=t,o.canvas.width=450,o.canvas.height=700,o.context=o.canvas.getContext("2d"),o.img=new Image,o.img.src="".concat(e),o}return e=s,(n=[{key:"draw",value:function(){var t=this.canvas,e=this.context,n=this.img,o=this.posY,r=this.velocityY;this.posY+=r,e.clearRect(0,0,450,700),e.drawImage(n,0,-700+o),e.drawImage(n,0,o),o>=t.height?this.posY=0:o<-700&&(this.posY=1)}}])&&m(e.prototype,n),o&&m(e,o),s}(h);var P=function(){for(var t=[],e=0;e<8;e++)t.push(e);return t.map((function(t){return function(t){var e={velocityY:0};switch(t){case 0:e.velocityY=.1;break;case 1:e.velocityY=.3;break;case 2:e.velocityY=.1;break;case 3:e.velocityY=1;break;case 4:e.velocityY=.05;break;case 5:e.velocityY=.1;break;case 6:e.velocityY=.5;break;case 7:e.velocityY=1}return new j(document.getElementById("l"+t),"./src/images/background_layers/"+t+".png",e)}(t)}))};var O=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.background=P(),this.tieFighterImg=new Image,this.tieFighterImg.src="./src/images/tie-advanced.png",this.playerImg=new Image,this.playerImg.src="./src/images/xwing.png",this.upgradeImg=new Image,this.upgradeImg.src="./src/images/upgrades/upgrades1.png",this.explosionImg=new Image,this.explosionImg.src="./src/images/explosions/explosion_sprite_sheet.png"};function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=C(t);if(e){var r=C(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return I(this,n)}}function I(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?X(t):e}function X(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(s,t);var e,n,o,r=T(s);function s(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(n=r.call(this,e)).status="active",n.name=t,n.canvas=document.getElementById("game-canvas"),n.ctx=n.canvas.getContext("2d"),n.img=new Image;var o=X(n).img;switch(t){case"red-laser":o.src="./src/images/weapons/red_laser.png",n.hp=1;break;case"laser1":o.src="./src/images/weapons/laser1.png",n.hp=2;break;case"laser2":o.src="./src/images/weapons/laser2.png",n.hp=4;break;case"laser3":o.src="./src/images/weapons/laser3.png",n.hp=8;break;case"laser4":o.src="./src/images/weapons/laser4.png",n.hp=16;break;case"laser5":o.src="./src/images/weapons/laser5.png",n.hp=32}return n}return e=s,(n=[{key:"draw",value:function(){var t=this.ctx,e=this.img,n=this.posX,o=this.posY,r=this.velocityY;this.posY+=r,t.drawImage(e,n,o)}}])&&_(e.prototype,n),o&&_(e,o),s}(h);function A(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var D="BACKGROUND_MUSIC",L="IMPACT",H="PLAYER_LASER",B="ENEMY_LASER",N="UPGRADE",U="TIE_EXPLODE",W=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"initialize",value:function(){this.muted=!0,this.backgroundMusic=new Audio("./src/sounds/sw.mp3"),this.backgroundMusic.volume=.1,this.backgroundMusic.loop=!0,this.impact=new Audio("./src/sounds/impact.mp3"),this.impact.volume=.5,this.laserSound=new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3"),this.enemyLaserSound=new Audio("./src/sounds/tie_fire_laser.mp3"),this.upgradeSound=new Audio("./src/sounds/upgrade_complete.mp3"),this.tieExplodeSound=new Audio("./src/sounds/tie_explode_short.mp3"),this.tieExplodeSound.volume=.2,this.setPlayMethods()}},{key:"playSound",value:function(t){switch(t){case D:this.backgroundMusic.playIfNotMuted();break;case L:this.impact.playIfNotMuted();break;case H:this.laserSound.playIfNotMuted();break;case B:this.enemyLaserSound.playIfNotMuted();break;case N:this.upgradeSound.playIfNotMuted();break;case U:this.tieExplodeSound.playIfNotMuted()}}},{key:"setPlayMethods",value:function(){var t=this;this.backgroundMusic.playIfNotMuted=function(){t.muted||this.play()},this.impact.playIfNotMuted=function(){t.muted||(this.currentTime=0,this.play())},this.laserSound.playIfNotMuted=function(){t.muted||(this.currentTime=0,this.play())},this.enemyLaserSound.playIfNotMuted=function(){t.muted||(this.currentTime=0,this.play())},this.upgradeSound.playIfNotMuted=function(){t.muted||(this.currentTime=0,this.play())},this.tieExplodeSound.playIfNotMuted=function(){t.muted||(this.currentTime=0,this.play())}}}])&&A(e.prototype,n),o&&A(e,o),t}());function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=V(t);if(e){var r=V(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return q(this,n)}}function q(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(s,t);var e,n,o,r=z(s);function s(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(n=r.call(this,e)).name="TieFighter",n.weapon="red-laser",n.hp=5,n.loot=[{name:"upgrade",droprate:.04}],n.loot=n.loot[Math.floor(Math.random()*n.loot.length)];var o=Math.ceil(100*Math.random());return 100*n.loot.droprate>o?n.loot=n.loot.name:n.loot=null,n.img=t,n.posX=Math.floor(731*Math.random()),n.posY=Math.floor(-800*Math.random()),n.height=40,n.width=80,n.projectiles=[],n}return e=s,(n=[{key:"draw",value:function(){var t=this.context,e=this.img,n=this.posX,o=this.posY,r=this.velocityY,s=this.height,i=this.width;t.drawImage(e,n,o,i,s),this.posY+=r}},{key:"fireWeapon",value:function(){var t;switch(W.playSound(B),this.weapon){case"red-laser":t=new M("red-laser",{velocityY:5,posX:Math.floor(this.posX+48),posY:Math.floor(this.posY-10)}),this.projectiles.push(t)}}}])&&G(e.prototype,n),o&&G(e,o),s}(h);function J(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.canvas=document.getElementById("ui-canvas"),this.context=this.canvas.getContext("2d"),this.playingStatus=document.getElementById("sound"),this.notPlayingStatus=document.getElementById("no-sound"),this.backgroundButton=document.getElementById("toggle-background-button"),this.instructionsOpenButton=document.getElementById("instructions-modal-open-button"),this.instructionsModalBackground=document.getElementById("instructions-modal-background"),this.instructionsModalContent=document.getElementById("instructions-modal-content"),this.setInstructionsModal(),this.setToggleBackgroundOnClick(),this.setToggleSoundOnClick()}var e,n,o;return e=t,(n=[{key:"draw",value:function(t){this.drawCoolDownConstant(t.player.projectileCoolDownConstant),this.drawHP(t.player.hp),this.drawScore(t.score),this.drawWavesLeft(t.lastWave,t.waveCount),this.drawFPS(t.fps)}},{key:"drawMuted",value:function(){var t=this.context;t.font="bold 30px Arial",t.fillStyle="red",t.fillText("MUTED! PRESS M TO UNMUTE",388,30)}},{key:"drawBeginInstructions",value:function(){var t=this.context;t.font="80px Arial",t.fillStyle="green",t.fillText("PRESS ANY KEY",100,370),t.fillText("TO START PLAYING",35,520)}},{key:"drawHP",value:function(t){var e=this.context;e.font="bold 30px Arial",e.fillStyle="red",e.fillText("HP: "+t,10,30)}},{key:"drawCoolDownConstant",value:function(t){var e=this.context;e.font="bold 20px Arial",e.fillStyle="white",e.fillText("Laser Cooldown: "+t,10,60)}},{key:"drawWavesLeft",value:function(t,e){var n=this.context;n.font="bold 20px Arial",n.fillStyle="white",n.fillText("Waves Remaining: "+(t-e),10,80)}},{key:"drawFPS",value:function(t){var e=this.context;e.font="bold 20px Arial",e.fillStyle="white",e.fillText("FPS: "+t,10,100)}},{key:"drawScore",value:function(t){var e=this.context;e.font="bold 30px Arial",e.fillStyle="white",e.fillText("Score: "+t,130,30)}},{key:"drawWin",value:function(t){var e=this.context;e.font="bold 80px Arial",e.fillStyle="green",e.fillText("YOU WIN!",230,310),e.font="bold 30px Arial",e.fillText("THE FORCE IS STRONG WITHIN YOU",150,370),e.font="bold 50px Arial",e.fillText("Your final score is: "+t,155,430),e.font="bold 50px Arial",e.fillText("PRESS R TO RESTART",150,500)}},{key:"drawLose",value:function(t){var e=this.context;e.font="bold 130px Arial",e.fillStyle="red",e.fillText("GAME OVER",10,350),e.font="bold 50px Arial",e.fillText("Your final score is: "+t,150,430),e.font="bold 50px Arial",e.fillText("PRESS R TO RESTART",150,500)}},{key:"drawPause",value:function(){var t=this.context;t.font="100px Arial",t.fillStyle="green",t.fillText("PAUSED",230,370),t.font="bold 50px Arial",t.fillText("PRESS P TO PLAY/PAUSE",110,520)}},{key:"drawReset",value:function(){var t=this.context;t.font="100px Arial",t.fillStyle="red",t.fillText("RESET",250,320)}},{key:"setToggleBackgroundOnClick",value:function(){var t=this.game;this.backgroundButton.addEventListener("click",(function(){t.toggleBackground()}))}},{key:"setToggleSoundOnClick",value:function(){var t=this,e=this.playingStatus,n=this.notPlayingStatus;e.addEventListener("click",(function(){e.classList.toggle("hidden"),n.classList.toggle("hidden"),t.game.sounds.muted=!0,t.game.sounds.backgroundMusic.pause()})),n.addEventListener("click",(function(){e.classList.toggle("hidden"),n.classList.toggle("hidden"),t.game.sounds.muted=!1,t.game.sounds.backgroundMusic.play()}))}},{key:"setInstructionsModal",value:function(){var t=this.game,e=this.instructionsModalBackground,n=this.instructionsOpenButton,o=this.instructionsModalContent;e.addEventListener("click",(function(){e.classList.toggle("hidden"),o.classList.toggle("hidden")})),n.addEventListener("click",(function(){t.playing&&t.pause(),e.classList.toggle("hidden"),o.classList.toggle("hidden")}))}}])&&J(e.prototype,n),o&&J(e,o),t}();function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function et(t,e){return(et=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=rt(t);if(e){var r=rt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return ot(this,n)}}function ot(t,e){return!e||"object"!==Z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var st=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&et(t,e)}(s,t);var e,n,o,r=nt(s);function s(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(o=r.call(this,n)).name="upgrade",o.img=t,o.height=20,o.width=30,o.loot=e,o}return e=s,(n=[{key:"drawUpgrade",value:function(){var t=this.context,e=this.img,n=this.posX,o=this.posY,r=this.velocityY,s=this.height,i=this.width;t.drawImage(e,n,o,i,s),this.posY+=r,e.onload=function(){t.drawImage(e,n,o,i,s)}}}])&&tt(e.prototype,n),o&&tt(e,o),s}(h);function it(t){return(it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function at(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=ht(t);if(e){var r=ht(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return lt(this,n)}}function lt(t,e){return!e||"object"!==it(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ht(t){return(ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var pt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(s,t);var e,n,o,r=ut(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=r.call(this)).name="player",e.weapon="laser1",e.img=t,e.sounds=W,e.restart(),e.setKeyAndTouchHandlers(),e}return e=s,(n=[{key:"restart",value:function(){this.hp=100,this.height=100,this.width=100,this.x=400,this.y=765,this.projectiles=[],this.projectileCoolDown=0,this.projectileCoolDownConstant=10,this.spacePressed=!1,this.upPressed=!1,this.downPressed=!1,this.rightPressed=!1,this.leftPressed=!1}},{key:"setKeyAndTouchHandlers",value:function(){this.keyUpHandler=this.keyUpHandler.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this),this.touchHandler=this.touchHandler.bind(this),this.touchEndHandler=this.touchEndHandler.bind(this),document.addEventListener("keyup",this.keyUpHandler,!1),document.addEventListener("keydown",this.keyDownHandler,!1),document.addEventListener("touchstart",this.touchHandler),document.addEventListener("touchend",this.touchEndHandler),document.addEventListener("touchmove",this.touchHandler)}},{key:"keyUpHandler",value:function(t){"Space"!=t.code&&"Space"!=t.key||(this.spacePressed=!1),"Right"!=t.key&&"ArrowRight"!=t.key||(this.rightPressed=!1),"Left"!=t.key&&"ArrowLeft"!=t.key||(this.leftPressed=!1),"Up"!=t.key&&"ArrowUp"!=t.key||(this.upPressed=!1),"Down"!=t.key&&"ArrowDown"!=t.key||(this.downPressed=!1)}},{key:"keyDownHandler",value:function(t){t.preventDefault(),"Space"==t.code&&(this.spacePressed=!0),"Right"!=t.key&&"ArrowRight"!=t.key||(this.rightPressed=!0),"Left"!=t.key&&"ArrowLeft"!=t.key||(this.leftPressed=!0),"Up"!=t.key&&"ArrowUp"!=t.key||(this.upPressed=!0),"Down"!=t.key&&"ArrowDown"!=t.key||(this.downPressed=!0)}},{key:"touchHandler",value:function(t){t.touches&&(this.spacePressed=!0,2.32*t.touches[0].pageX<this.x?this.leftPressed=!0:this.rightPressed=!0,1.45*t.touches[0].pageY<this.y?this.upPressed=!0:this.downPressed=!0),t.preventDefault()}},{key:"touchEndHandler",value:function(t){t.preventDefault(),this.leftPressed=!1,this.rightPressed=!1,this.upPressed=!1,this.downPressed=!1,this.spacePressed=!1}},{key:"draw",value:function(){var t=this.context,e=this.x,n=this.y,o=this.height,r=this.width;this.spacePressed&&this.fireWeapon(),this.leftPressed&&(this.x>0?this.x-=15:this.x=750),this.rightPressed&&(this.x<700?this.x+=15:this.x=-50),this.upPressed&&this.y>0&&(this.y-=10),this.downPressed&&this.y<755&&(this.y+=10),t.drawImage(this.img,e,n,o,r)}},{key:"fireWeapon",value:function(){var t,e,n;if(this.projectileCoolDown<=0)switch(this.projectileCoolDown+=this.projectileCoolDownConstant,this.sounds.muted||(this.sounds.laserSound.currentTime=0,this.sounds.laserSound.play()),this.weapon){case"laser1":t=new M("laser1",{velocityY:-10,posX:this.x+43,posY:this.y-1}),this.projectiles.push(t);break;case"laser2":t=new M("laser1",{velocityY:-10,posX:this.x,posY:this.y-10}),e=new M("laser1",{velocityY:-10,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e);break;case"laser3":t=new M("laser1",{velocityY:-10,posX:this.x,posY:this.y-10}),e=new M("laser1",{velocityY:-10,posX:this.x+43,posY:this.y-10}),n=new M("laser1",{velocityY:-10,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e),this.projectiles.push(n);break;case"laser4":t=new M("laser2",{velocityY:-8,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser5":t=new M("laser2",{velocityY:-8,posX:this.x,posY:this.y-10}),e=new M("laser2",{velocityY:-8,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e);break;case"laser6":t=new M("laser2",{velocityY:-8,posX:this.x,posY:this.y-10}),e=new M("laser2",{velocityY:-8,posX:this.x+43,posY:this.y-10}),n=new M("laser2",{velocityY:-8,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e),this.projectiles.push(n);break;case"laser7":t=new M("laser3",{velocityY:-6,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser8":t=new M("laser3",{velocityY:-6,posX:this.x,posY:this.y-10}),e=new M("laser3",{velocityY:-6,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e);break;case"laser9":t=new M("laser3",{velocityY:-6,posX:this.x,posY:this.y-10}),e=new M("laser3",{velocityY:-6,posX:this.x+43,posY:this.y-10}),n=new M("laser3",{velocityY:-6,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e),this.projectiles.push(n);break;case"laser10":t=new M("laser4",{velocityY:-4,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser11":t=new M("laser4",{velocityY:-4,posX:this.x,posY:this.y-10}),e=new M("laser4",{velocityY:-4,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e);break;case"laser12":t=new M("laser4",{velocityY:-4,posX:this.x,posY:this.y-10}),e=new M("laser4",{velocityY:-4,posX:this.x+43,posY:this.y-10}),n=new M("laser4",{velocityY:-4,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e),this.projectiles.push(n);break;case"laser13":t=new M("laser5",{velocityY:-2,posX:this.x+43,posY:this.y-10}),this.projectiles.push(t);break;case"laser14":t=new M("laser5",{velocityY:-2,posX:this.x,posY:this.y-10}),e=new M("laser5",{velocityY:-2,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e);break;case"laser15":t=new M("laser5",{velocityY:-2,posX:this.x,posY:this.y-10}),e=new M("laser5",{velocityY:-2,posX:this.x+43,posY:this.y-10}),n=new M("laser5",{velocityY:-2,posX:this.x+90,posY:this.y-10}),this.projectiles.push(t),this.projectiles.push(e),this.projectiles.push(n)}else this.projectileCoolDown-=1}},{key:"upgrade",value:function(){var t=this.weapon,e=this.hp,n=this.projectileCoolDownConstant;switch(this.sounds.muted||"laser15"===t||(this.sounds.upgradeSound.currentTime=0,this.sounds.upgradeSound.play()),t){case"laser1":this.weapon="laser2";break;case"laser2":this.weapon="laser3";break;case"laser3":this.weapon="laser4";break;case"laser4":this.weapon="laser5";break;case"laser5":this.weapon="laser6";break;case"laser6":this.weapon="laser7";break;case"laser7":this.weapon="laser8";break;case"laser8":this.weapon="laser9";break;case"laser9":this.weapon="laser10";break;case"laser10":this.weapon="laser11";break;case"laser11":this.weapon="laser12";break;case"laser12":this.weapon="laser13";break;case"laser13":this.weapon="laser14";break;case"laser14":this.weapon="laser15";break;case"laser15":100===e?n>=5&&(this.projectileCoolDownConstant-=1,this.sounds.muted||"laser15"===t||(this.sounds.upgradeSound.currentTime=0,this.sounds.upgradeSound.play())):e<=90?this.hp+=10:e<=100&&(this.hp+=1)}}}])&&at(e.prototype,n),o&&at(e,o),s}(h);function ft(t){return(ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yt(t){return function(t){if(Array.isArray(t))return dt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return dt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dt(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function gt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function bt(t,e){return(bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=mt(t);if(e){var r=mt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return wt(this,n)}}function wt(t,e){return!e||"object"!==ft(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function mt(t){return(mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var kt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bt(t,e)}(s,t);var e,n,o,r=vt(s);function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this)).setAssets(),t.restart(),t.bindStuff(),t}return e=s,(n=[{key:"draw",value:function(){var t=this,e=this.background,n=this.clear,o=this.enemies,r=this.enemyLasers,s=this.explosions,i=this.images,a=this.lost,c=this.paused,u=this.player,l=this.score,h=this.sounds,p=this.upgrades,f=this.waveCount,y=this.won,d=this.ui;if(n(),this.playing||(e.forEach((function(t){return t.draw()})),this.background=[],d.drawBeginInstructions()),!this.paused&&!this.lost&&!this.won&&this.playing&&(e.forEach((function(t){return t.draw()})),u.hp>0?u.draw():u.hp<=0&&(this.lost=!0),u.projectiles.forEach((function(e,n){if(e&&e.posY>=-5){var r=!1;o.forEach((function(a,c){if(a)if(e.checkCollision(a)){if(h.muted||h.impact.play(),a.hp-=1,e.hp-=1,e.hp<=0&&(u.projectiles[n]=null),a.hp<=0){var l=null;switch(a.name){case"TieFighter":l=new v(a.loot,{posX:a.posX,posY:a.posY,velocityY:1},i.explosionImg),h.muted||(h.tieExplodeSound.currentTime=0,h.tieExplodeSound.play()),s.push(l),t.score+=1}o[c]=null}}else r||(e.draw(),r=!0)}))}else u.projectiles[n]=null})),o.forEach((function(t,e){t&&(t.posY>=850?o[e]=null:(t.draw(),1===Math.ceil(1e3*Math.random())&&(t.fireWeapon(),r.push(t.projectiles[t.projectiles.length-1]))))})),r.forEach((function(e,n){if(e)if(e.checkCollision(u)){u.hp-=10;var o=new v(null,{posX:e.posX-20,posY:e.posY-10,velocityY:1},i.explosionImg);r[n]=null,h.tieExplodeSound.playIfNotMuted(),t.explosions.push(o)}else e.posY<850?e.draw():r[n]=null})),s.forEach((function(e,n){if(e.hp>0)e.draw(),e.sX<=3584?e.sX+=512:e.sX=0,e.sY<=3584?e.sY+=512:e.sY=0,e.hp-=1;else if(e.hp<=0){if(e.loot){var o=new st(i.upgradeImg,t.loot,{posX:e.posX,posY:e.posY,velocityY:1});p.push(o)}s[n]=null}})),p.forEach((function(t,e){u.checkCollision(t)?(u.upgrade(),p[e]=null):t&&t.posY<850?t.drawUpgrade():p[e]=null})),0===o.length||o.every((function(t){return null===t})))){var g=3;switch(this.wave){case this.waveCount>=10&&this.waveCount<20:g=5;break;case this.waveCount>=20&&this.waveCount<29:g=6;break;case this.waveCount>=29:g=20,this.wave+=20;break;case this.wave>50:g=10}this.wave+=5,this.waveCount+=1,this.enemies=yt(Array(this.wave).keys()).map((function(){return new $(i.tieFighterImg,{velocityY:Math.ceil(Math.random()*g)})}))}this.filterNulls(),d.draw(this),f>=30&&(this.won=!0),y&&d.drawWin(l),a&&d.drawLose(l),!c||a||y||d.drawPause(),h.muted&&d.drawMuted(),setTimeout((function(){requestAnimationFrame(t.draw)}),1e3/this.fps)}},{key:"filterNulls",value:function(){this.player.projectiles=this.player.projectiles.filter((function(t){return t})),this.enemyLasers=this.enemyLasers.filter((function(t){return t})),this.enemies=this.enemies.filter((function(t){return t})),this.explosions=this.explosions.filter((function(t){return t})),this.upgrades=this.upgrades.filter((function(t){return t}))}},{key:"clear",value:function(){var t=this.canvas,e=this.context,n=this.ui;e.clearRect(0,0,t.width,t.height),n.context.clearRect(0,0,t.width,t.height)}},{key:"pause",value:function(){this.paused=!0}},{key:"play",value:function(){this.paused=!1}},{key:"setAssets",value:function(){W.initialize(),this.sounds=W,this.images=new O,this.background=this.images.background,this.ui=new Q(this),this.fps=60,this.setCanvasResolution()}},{key:"setCanvasResolution",value:function(){var t=this;this.images.playerImg.onload=function(){var e=t.canvas,n=this.naturalWidth,o=this.naturalHeight;e.width=n,e.height=o,(e=document.getElementById("ui-canvas")).width=n,e.height=o,t.draw()}}},{key:"bindStuff",value:function(){this.clear=this.clear.bind(this),this.draw=this.draw.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this),document.addEventListener("keydown",this.keyDownHandler,!1)}},{key:"restart",value:function(){this.player=new pt(this.images.playerImg),this.score=0,this.wave=0,this.waveCount=0,this.lastWave=30,this.playing=!1,this.lost=!1,this.paused=!1,this.won=!1,this.enemies=[],this.enemyLasers=[],this.explosions=[],this.upgrades=[]}},{key:"keyDownHandler",value:function(t){var e=this.sounds,n=this.won,o=this.lost,r=this.ui,s=r.playingStatus,i=r.notPlayingStatus;t.preventDefault(),this.playing||(this.playing=!0,this.background=this.images.background),"r"==t.key||"R"==t.key?(this.player=new pt(this.images.playerImg),this.restart()):"p"==t.key||"P"==t.key?n||o||(this.paused=!this.paused):"m"==t.key||"M"==t.key?e.muted?(s.classList.toggle("hidden"),i.classList.toggle("hidden"),e.backgroundMusic.play(),this.sounds.muted=!1):(i.classList.toggle("hidden"),s.classList.toggle("hidden"),e.backgroundMusic.pause(),this.sounds.muted=!0):"t"!=t.key&&"T"!=t.key||this.toggleBackground()}},{key:"toggleBackground",value:function(){0===this.background.length?this.background=this.images.background:this.background=[]}}])&&gt(e.prototype,n),o&&gt(e,o),s}(o);document.addEventListener("DOMContentLoaded",(function(){new kt}))}]);
//# sourceMappingURL=main.js.map