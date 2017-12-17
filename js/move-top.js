//JAVASCRIPT
function smart_showfooter(){
	document.write('<div class="footer">\n\t\t<div class="container">\n\t\t\t<div class="col-md-3 footer-grid">\n\t\t\t\t<h6>关于我们</h6>\n\t\t\t\t<p>我们致力于制造优质健康天然的手工宠物食品，并现已取得卓越成果，通过层层甄选优质原料，以传统的手工方式制成放心的宠物食品。</p>\n\t\t\t</div>\n\t\t\t<div class="col-md-3 footer-grid">\n\t\t\t\t<h6>信息</h6>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href="contact.html">关于我们</a></li>\n\t\t\t\t\t<li><a href="contact.html">推送消息</a></li>\n\t\t\t\t\t<li><a href="contact.html">隐私政策</a></li>\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="col-md-3 footer-grid">\n\t\t\t  <h6>其他</h6>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href="single.html?id=3">品牌</a></li>\n\t\t\t\t\t<li><a href="usercenter.html">AVP会员卡</a></li>\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="clearfix">\n\t\t\t  <div class="col-md-3 footer-grid">\n\t\t\t    <h6>我的账户</h6>\n\t\t\t    <ul>\n\t\t\t      <li><a href="usercenter.html">我的账户</a></li>\n\t\t\t      <li><a href="orderlist.html">订单记录</a></li>\n\t\t        </ul>\n\t\t      </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="footer-copy">\n\t\t<p>Copyright © 2018.Company name </p>\n\t</div>');
}

function show_top_header(){
	document.write('<div class="top_bg">\n\t<div class="container">\n\t\t<div class="header_top-sec">\n\t\t  <div class="clearfix"> </div>\n\t\t</div>\n\t</div>\n</div>\n<!-- top-header -->\n<!-- logo-cart -->\n<div class="header_top">\n\t<div class="container">\n\t\t<div class="logo">\n\t\t \t<a href="index.html" id="topCenterTitle">萌多多</a>\t\t\t \n\t\t</div>\n\t\t<div class="header_right">\n\t\t\t<div class="cart box_1">\n\t\t\t\t<a href="checkout.html">\n\t\t\t\t<h3> <div class="total">\n\t\t\t\t\t<span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity">0</span>件)</div>\n\t\t\t\t\t<img src="images/cart1.png" alt=""/></h3>\n\t\t\t\t</a>\n\t\t\t\t<p>'+((location.pathname=="/smartpets/checkout.html")?'<a href="javascript:;" class="simpleCart_empty">清空购物车</a>':'点击查看')+'</p>\n\t\t\t\t<div class="clearfix"> </div>\n\t\t\t</div><div class="cart box_1" style="margin-right: 10px;border-right-color: #f44271; border-right-style: solid;padding-right: 10px;">\n\t\t\t\t<a href="orderlist.html">\n\t\t\t\t<h3> <div class="total">\n\t\t\t\t\t订单</div>\n\t\t\t\t\t</h3>\n\t\t\t\t</a>\n\t\t\t\t<p><a href="orderlist.html">点击查看</a></p>\n\t\t\t\t<div class="clearfix"> </div>\n\t\t\t</div>\t\t\t\t \n\t\t</div>\n\t\t<div class="clearfix"></div>\t\n\t</div>\n</div>\n<!-- //logo-cart -->\n<!------>\n');	
}

setTimeout(alterText, 8000);
var curIndex = 0;
var titleTexts = ["萌多多","健康","美味","宠物专家","萌多多"];
function alterText(){
	$("#topCenterTitle").animate({opacity: 'hide'},500,function(){
		curIndex ++;
		curIndex = curIndex % titleTexts.length;
		$("#topCenterTitle").text(titleTexts[curIndex]);
		$("#topCenterTitle").animate({opacity: 'show'},300,function(){
			if(curIndex === titleTexts.length - 1){
				setTimeout(alterText, 8000);
			}else{
				setTimeout(alterText, 2000);
			}
		});
	});
}