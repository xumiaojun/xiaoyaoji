webpackJsonp([16],[function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){var o=new Date,e=o.getFullYear(),a=o.getDate(),i=t.slice(0,4);if(i==e){var l=t.slice(5,10);t=l==a?t.slice(11,16):t.slice(5,16)}else t=t.slice(0,10);return t}var l=e(1),n=a(l),c=e(9),d=a(c);new n["default"]({el:"#history",data:{logs:[],page:1,limit:7,id:null,noData:!1,loading:!1,bottom:!1},created:function(){this.id=d["default"].getQueryParams(location.search).projectId,this.load()},watch:{limit:function(){return $("html,body").animate({scrollTop:0},200),this.load(),!1}},methods:{reload:function(){location.reload()},load:function(){var t=this;t.noData||t.loading||(t.loading=!0,d["default"].get("/projectlog.json",{projectId:t.id,limit:t.limit,page:t.page},function(o){t.page++,0==o.data.logs.length&&(t.noData=!0),o.data.logs.forEach(function(o){o.createTime=i(o.createTime),t.logs.push(o)})},function(){t.loading=!1}),$(document).off("scroll").on("scroll",function(){$(document).height()-$(window).scrollTop()<=$(window).height()&&t.load()}))}}})}]);