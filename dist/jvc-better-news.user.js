!function(){"use strict";GM_addStyle(""),window.modules={},function(){window.modules.Utils={}}();window.modules.Utils;!function(){window.modules.News=function(){},window.modules.News.loadFromCurrentPage=function(){var e=new window.modules.News;return e.url=location.href,e.el=document.getElementsByTagName("article")[0],e},window.modules.News.prototype={constructor:window.modules.News,url:null,el:null}}();var e=window.modules.News;window.BetterNews={version:"0.1.0",init:function(){if(this.detectPage(),console.log("Initialisation de Better News..."),(this.onNewsPage||this.onNewsListPage)&&this.onNewsPage){e.loadFromCurrentPage()}},onNewsPage:!1,onNewsListPage:!1,detectPage:function(){this.onNewsListPage=location.href.match(/^https?:\/\/www\.jeuxvideo\.com\/toutes-les-news/),this.onNewsPage=location.href.match(/^https?:\/\/www\.jeuxvideo\.com\/news\/\d+/)},initWhenReady:function(){var e=this,t=window.top!==window.self;if(!t)var n=setInterval(function(){document.getElementsByClassName("stats").length>0&&(clearInterval(n),e.init())},300)}},window.BetterNews.initWhenReady()}();