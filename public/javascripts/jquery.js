<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="keywords" content="Downloading jQuery,Discussion,Licensing,Release:jQuery 1.2,Release:jQuery 1.2.1,Release:jQuery 1.2.2,Release:jQuery 1.2.3,Release:jQuery 1.2.4,Release:jQuery 1.2.5,Release:jQuery 1.2.6,Release:jQuery 1.3" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch_desc.php" title="jQuery JavaScript Library (English)" />
		<title>Downloading jQuery - jQuery JavaScript Library</title>
		<link rel="stylesheet" href="http://static.jquery.com/files/rocker/css/reset.css" type="text/css" />
		<link rel="stylesheet" href="http://static.jquery.com/files/rocker/css/screen.css" type="text/css" />
		<style type="text/css" media="screen,projection">/*<![CDATA[*/ @import "http://docs.jquery.com/skins/monobook/main.css?9"; /*]]>*/</style>

		<link rel="stylesheet" type="text/css" href="http://jquery.com/files/social/jquery.tabs.css" />
		<!--[if lte IE 7]>
		<link rel="stylesheet" href="http://jquery.com/files/social/jquery.tabs-ie.css" type="text/css" media="projection, screen"/>
		<![endif]-->

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
		<script src="http://jquery.com/files/social/js/jquery.tabs.js"></script>

		<script>$(function(){
			$("div[id=examples]").each(function(){
				$(this).siblings("div:first").find("div.desc").after(
					$(this).find("div.example:has(#demo):first").remove().clone());

				if ( !$("div.example", this).length )
					$(this).remove();
			});

			$("div.entry")
				.children("p").remove().end()
				.find("ul:first li").each(function(){
					if ( !$(this).parent().siblings( $("a",this).attr("href") ).length )
						$(this).remove();
				}).end()
				.not(".ui")
				.tabs();

			$("div.args > br").remove();

			$("div.example")
				.children("p").remove().end()
				.tabs();

			var keywords = "String,Number,Object,Options,Array,Function,Callback,Selector,Event,Element,Integer,Float,Boolean".split(",");

			$("td.default span, td.type").each(function(){
				var html = this.innerHTML;
				jQuery.each(keywords, function(i,key){
					html = html.replace(new RegExp(key, "ig"), "<a href='/Types#" + key + "'>" + key + "</a>");
				});
				this.innerHTML = html;
			});

			$("div[id=source]").each(function(){
				var source = $("pre", this).html()
					.replace(/<\/?a.*?>/ig, "")
					.replace(/<\/?strong.*?>/ig, "")
					.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

				//var items = [];
				//source = source.replace(/\s*<(link|script).*?>\s\*/g, function(m){
					//items.push(m);
					//return "";
				//}).replace("</head>", items.join("") + "</head>")
				//*/

				var iframe = document.createElement("iframe");
				iframe.src = "/index-blank.html";
				iframe.width = "100%";
				iframe.height = $(this).prev().attr("rel") || "125";
				iframe.style.border = "none";
				$(this).prev().append(iframe);


				$(window).load(function(){
					var doc = iframe.contentDocument || iframe.contentWindow.document;
					  source = source
					          .replace(/<script>([^<])/g,"<script>window.onload = (function(){\ntry{$1")
					          .replace(/([^>])<\/sc/g,  '$1\n}catch(e){}});</sc');

					    source = source
					            .replace("</head>", "<style>html,body{border:0; margin:0; padding:0;}</style></head>");

					doc.open();
					doc.write( source );
					doc.close();
				});

			});
		});</script>
		<script type="text/javascript" src="http://static.jquery.com/files/rocker/scripts/custom.js"></script>
		<link rel="shortcut icon" href="http://static.jquery.com/favicon.ico" type="image/x-icon"/>
		<style type="text/css" media="screen,projection">/*<![CDATA[*/ @import "/skins/monobook/main.css?9"; /*]]>*/</style>
		<link rel="stylesheet" type="text/css" media="print" href="/skins/common/commonPrint.css" />
		<!--[if lt IE 5.5000]><style type="text/css">@import "/skins/monobook/IE50Fixes.css";</style><![endif]-->
		<!--[if IE 5.5000]><style type="text/css">@import "/skins/monobook/IE55Fixes.css";</style><![endif]-->
		<!--[if IE 6]><style type="text/css">@import "/skins/monobook/IE60Fixes.css";</style><![endif]-->
		<!--[if IE 7]><style type="text/css">@import "/skins/monobook/IE70Fixes.css?1";</style><![endif]-->
		<!--[if lt IE 7]><script type="text/javascript" src="/skins/common/IEFixes.js"></script>
		<meta http-equiv="imagetoolbar" content="no" /><![endif]-->
		
		<!-- Head Scripts -->
			</head>
	<body id="jq-interior"  class="mediawiki ns-0 ltr">

	<div id="jq-siteContain">
			<div id="jq-header">
				<a id="jq-siteLogo" href="http://jquery.com/" title="jQuery Home"><img src="http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif" width="215" height="53" alt="jQuery: Write Less, Do More." /></a>

				<div id="jq-primaryNavigation">

					<ul>
<li class="jq-jquery jq-current"><a href="http://jquery.com/" title="jQuery Home">jQuery</a></li>
<li class="jq-plugins"><a href="http://plugins.jquery.com/" title="jQuery Plugins">Plugins</a></li>
<li class="jq-ui"><a href="http://jqueryui.com/" title="jQuery UI">UI</a></li>
<li class="jq-meetup"><a href="http://meetups.jquery.com/" title="jQuery Meetups">Meetups</a></li>
<li class="jq-forum"><a href="http://forum.jquery.com/" title="jQuery Forum">Forum</a></li>
<li class="jq-blog"><a href="http://blog.jquery.com/" title="jQuery Blog">Blog</a></li>
<li class="jq-about"><a href="http://jquery.org/about" title="About jQuery">About</a></li>
<li class="jq-donate"><a href="http://jquery.org/donate" title="Donate to jQuery">Donate</a></li>
					</ul>
				</div><!-- /#primaryNavigation -->

				<div id="jq-secondaryNavigation">
					<ul>
						<li class="jq-download jq-first"><a href="http://docs.jquery.com/Downloading_jQuery">Download</a></li>
						<li class="jq-documentation jq-current"><a href="http://docs.jquery.com/">Documentation</a></li>
						<li class="jq-tutorials"><a href="http://docs.jquery.com/Tutorials">Tutorials</a></li>

						<li class="jq-bugTracker"><a href="http://dev.jquery.com/">Bug Tracker</a></li>
						<li class="jq-discussion jq-last"><a href="http://docs.jquery.com/Discussion">Discussion</a></li>
					</ul>
				</div><!-- /#secondaryNavigation -->

				

				<h1>Documentation</h1>

				<form id="jq-primarySearchForm" action="/Special:Search">

					<div>
						<input type="hidden" value="1" name="ns0"/>
						<label for="primarySearch">Search <span class="jq-jquery">jQuery</span></label>
						<input type="text" value="" accesskey="f" title="Search jQuery" name="search" id="jq-primarySearch"/>
						<button type="submit" name="go" id="jq-searchGoButton"><span>Go</span></button>
					</div>

				</form>

			</div><!-- /#header -->

			<div id="jq-content" class="jq-clearfix">

				<div id="jq-interiorNavigation">
					<div class='jq-portlet' id='jq-p-Getting-Started'>
						<h5>Getting Started</h5>
						<div class='jq-pBody'>

							<ul>

								<li id="jq-n-Main-Page"><a href="/Main_Page">Main Page</a></li>
								<li id="jq-n-Downloading-jQuery"><a href="/Downloading_jQuery">Downloading jQuery</a></li>
				
								<li id="jq-n-How-jQuery-Works"><a href="/How_jQuery_Works">How jQuery Works</a></li>
								<li id="jq-n-FAQ"><a href="/Frequently_Asked_Questions">FAQ</a></li>
								<li id="jq-n-Tutorials"><a href="/Tutorials">Tutorials</a></li>

								<li id="jq-n-Using-jQuery-with-Other-Libraries"><a href="/Using_jQuery_with_Other_Libraries">Using jQuery with Other Libraries</a></li>

								<li id="jq-n-Variable-Types"><a href="/Types">Variable Types</a></li>
							</ul>
				
						</div>
					</div>
						<div class='jq-portlet' id='jq-p-API-Reference'>
						<h5>API Reference</h5>

						<div class='jq-pBody'>

							<ul>
								<li id="jq-n-jQuery-Core"><a href="/Core">jQuery Core</a></li>
								<li id="jq-n-Selectors"><a href="/Selectors">Selectors</a></li>
				
								<li id="jq-n-Attributes"><a href="/Attributes">Attributes</a></li>
								<li id="jq-n-Traversing"><a href="/Traversing">Traversing</a></li>
								<li id="jq-n-Manipulation"><a href="/Manipulation">Manipulation</a></li>

								<li id="jq-n-CSS"><a href="/CSS">CSS</a></li>
								<li id="jq-n-Events"><a href="/Events">Events</a></li>
								<li id="jq-n-Effects"><a href="/Effects">Effects</a></li>
				
								<li id="jq-n-Ajax"><a href="/Ajax">Ajax</a></li>
								<li id="jq-n-Utilities"><a href="/Utilities">Utilities</a></li>
								<li id="jq-n-jQuery-UI"><a href="/UI">jQuery UI</a></li>

							</ul>
						</div>
					</div>
						<div class='jq-portlet' id='jq-p-Plugins'>
				
						<h5>Plugins</h5>
						<div class='jq-pBody'>
							<ul>
								<li id="jq-n-Plugin-Repository"><a href="http://jquery.com/plugins/">Plugin Repository</a></li>

								<li id="jq-n-Authoring"><a href="/Plugins/Authoring">Authoring</a></li>
							</ul>
						</div>
				
					</div>
						<div class='jq-portlet' id='jq-p-Support'>
						<h5>Support</h5>
						<div class='jq-pBody'>

							<ul>

								<li id="jq-n-Mailing-List-and-Chat"><a href="/Discussion">Mailing List and Chat</a></li>
								<li id="jq-n-Submit-New-Bug"><a href="http://jquery.com/dev/bugs/new/">Submit New Bug</a></li>
								<li id="jq-n-Commercial-Support"><a href="/Commercial_Support">Commercial Support</a></li>
				
							</ul>
						</div>
					</div>
						<div class='jq-portlet' id='jq-p-About-jQuery'>

						<h5>About jQuery</h5>

						<div class='jq-pBody'>
							<ul>
								<li id="jq-n-Contributors"><a href="/Contributors">Contributors</a></li>
				
								<li id="jq-n-History-of-jQuery"><a href="/History_of_jQuery">History of jQuery</a></li>
								<li id="jq-n-Sites-Using-jQuery"><a href="/Sites_Using_jQuery">Sites Using jQuery</a></li>

								<li id="jq-n-Browser-Compatibility"><a href="/Browser_Compatibility">Browser Compatibility</a></li>
								<li id="jq-n-License"><a href="/Licensing">Licensing</a></li>

								<li id="jq-n-Donate"><a href="/Donate">Donate</a></li>
							</ul>
				
						</div>
					</div>
						
	<div class="jq-portlet" id="p-tb">
		<h5>Toolbox</h5>
		<div class="jq-pBody">
			<ul>
				<li id="t-whatlinkshere"><a href="/index.php?title=Special:Whatlinkshere&amp;target=Downloading_jQuery">What links here</a></li>
				<li id="t-recentchangeslinked"><a href="/index.php?title=Special:Recentchangeslinked&amp;target=Downloading_jQuery">Related changes</a></li>
<li id="t-upload"><a href="/Special:Upload">Upload file</a></li>
<li id="t-specialpages"><a href="/Special:Specialpages">Special pages</a></li>
				<li id="t-print"><a href="/action/render/Downloading_jQuery">Printable version</a></li>				<li id="t-permalink"><a href="/index.php?title=Downloading_jQuery&amp;oldid=20670">Permanent link</a></li>			</ul>
		</div>
	</div>

	<div id="jq-p-cactions" class="jq-portlet">
		<h5>Views</h5>
		<div class="jq-pBody">
		<ul>
				 <li id="jq-ca-nstab-main" class="selected"><a href="/Downloading_jQuery">Article</a></li>
				 <li id="jq-ca-talk"><a href="/Talk:Downloading_jQuery">Discussion</a></li>
				 <li id="jq-ca-viewsource"><a href="/action/edit/Downloading_jQuery">View source</a></li>
				 <li id="jq-ca-history"><a href="/action/history/Downloading_jQuery">History</a></li>
		</ul>
		</div>
	</div>
	<div class="jq-portlet" id="jq-p-personal">
		<h5>Personal tools</h5>
		<div class="jq-pBody">
			<ul>
				<li id="jq-pt-login"><a href="/index.php?title=Special:Userlogin&amp;returnto=Downloading_jQuery">Log in / create account</a></li>
			</ul>
		</div>
	</div>

					
				</div><!-- /#interiorNavigation -->





				<div id="jq-primaryContent">
		<div id="column-content">
	<div id="docs-content">
		<a name="top" id="top"></a>
				<!--<div style="background:#efefff; border:#9f9fff 1px solid; padding: 10px;"><strong>UPDATE:</strong> The jQuery API documentation has been completely rewritten and moved to <a href="http://api.jquery.com/">api.jquery.com</a>. More details <a href="http://jquery14.com/pre-release-1/new-jquery-api-site">can be found on the jQuery blog</a>.</div>-->
		<h1 class="firstHeading">Downloading jQuery</h1>
		<div id="bodyContent">
			<h3 id="siteSub">From jQuery JavaScript Library</h3>
			<div id="contentSub"></div>
									<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>			<!-- start content -->
			<table id="toc" class="toc" summary="Contents"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1"><a href="#About_The_Code"><span class="tocnumber">1</span> <span class="toctext">About The Code</span></a></li>
<li class="toclevel-1"><a href="#CDN_Hosted_jQuery"><span class="tocnumber">2</span> <span class="toctext">CDN Hosted jQuery</span></a></li>
<li class="toclevel-1"><a href="#Download_jQuery"><span class="tocnumber">3</span> <span class="toctext">Download jQuery</span></a>
<ul>
<li class="toclevel-2"><a href="#Current_Release"><span class="tocnumber">3.1</span> <span class="toctext">Current Release</span></a></li>
<li class="toclevel-2"><a href="#Past_Releases"><span class="tocnumber">3.2</span> <span class="toctext">Past Releases</span></a></li>
</ul>
</li>
<li class="toclevel-1"><a href="#jQuery_Git_-_An_Instant_WIP_Build_For_Testing"><span class="tocnumber">4</span> <span class="toctext">jQuery Git - An Instant WIP Build For Testing</span></a></li>
<li class="toclevel-1"><a href="#Build_From_Git"><span class="tocnumber">5</span> <span class="toctext">Build From Git</span></a>
<ul>
<li class="toclevel-2"><a href="#Build_Requirements"><span class="tocnumber">5.1</span> <span class="toctext">Build Requirements</span></a>
<ul>
<li class="toclevel-3"><a href="#If_you.27re_using_make:"><span class="tocnumber">5.1.1</span> <span class="toctext">If you're using make:</span></a></li>
<li class="toclevel-3"><a href="#If_you.27re_using_ant:"><span class="tocnumber">5.1.2</span> <span class="toctext">If you're using ant:</span></a></li>
</ul>
</li>
</ul>
</li>
</ul>
</td></tr></table><script type="text/javascript"> if (window.showTocToggle) { var tocShowText = "show"; var tocHideText = "hide"; showTocToggle(); } </script>
<a name="About_The_Code"></a><h2> About The Code </h2>
<p>The code itself is written rather cleanly in an attempt to self-document. If you've spotted some areas of code that could be improved, please feel free to discuss it on <a href="/Discussion" title="Discussion">the Development mailing list</a>. All input is gladly appreciated! 
</p><p>All of the code is available in two formats: 
</p>
<ul><li> Compressed (which allows you to have a significantly smaller file size) and
</li><li> Uncompressed (good for debugging and to understand what is behind the magic).
</li></ul>
<p>If you're interested in downloading <a href="http://plugins.jquery.com/" class="external text" title="http://plugins.jquery.com/">Plugins</a> developed by jQuery contributors, please visit the <a href="http://plugins.jquery.com/" class="external text" title="http://plugins.jquery.com/">Plugins</a> page.
</p><p>jQuery is provided under the following <a href="/Licensing" title="Licensing">MIT and GPL licenses</a>.
</p>
<a name="CDN_Hosted_jQuery"></a><h2> CDN Hosted jQuery </h2>
<p>A number of large enterprises provide hosted copies of jQuery on existing <a href="http://en.wikipedia.org/wiki/Content_delivery_network" class="external text" title="http://en.wikipedia.org/wiki/Content_delivery_network">CDN</a> networks that are available for public use. Below are links to the CDN-hosted copies of jQuery that you may hotlink to.
</p>
<ul><li> Google Ajax API CDN
<ul><li> <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" class="external free" title="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js">http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js</a>
</li><li> <a href="http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery" class="external text" title="http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery">Google Ajax CDN Documentation</a>
</li></ul>
</li><li> Microsoft CDN
<ul><li> <a href="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.5.1.min.js" class="external free" title="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.5.1.min.js">http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.5.1.min.js</a>
</li><li> <a href="http://weblogs.asp.net/scottgu/archive/2009/09/15/announcing-the-microsoft-ajax-cdn.aspx" class="external text" title="http://weblogs.asp.net/scottgu/archive/2009/09/15/announcing-the-microsoft-ajax-cdn.aspx">Ajax CDN Announcement</a>, <a href="http://www.asp.net/ajax/cdn" class="external text" title="http://www.asp.net/ajax/cdn">Microsoft Ajax CDN Documentation</a>
</li></ul>
</li><li> jQuery CDN (via <a href="http://mediatemple.net" class="external text" title="http://mediatemple.net">Media Temple</a>)
<ul><li> <a href="http://code.jquery.com/jquery-1.5.1.min.js" class="external free" title="http://code.jquery.com/jquery-1.5.1.min.js">http://code.jquery.com/jquery-1.5.1.min.js</a> Minified version
</li><li> <a href="http://code.jquery.com/jquery-1.5.1.js" class="external free" title="http://code.jquery.com/jquery-1.5.1.js">http://code.jquery.com/jquery-1.5.1.js</a> Source version
</li></ul>
</li></ul>
<a name="Download_jQuery"></a><h2> Download jQuery </h2>
<p>This is the recommended version of jQuery to use for your application. The code in here should be stable and usable in all modern browsers.
</p><p>The minified versions, while having a larger file size than the packed versions (note: packed version is not available in current release), are generally the best versions to use on production deployments. The packed versions require non-trivial client-side processing time to uncompress (unpack) the code whereas the minified versions do not. The packed versions of jQuery will take less time to download than the minified or uncompressed versions; however, each time the library is loaded (initially or from the browser cache) it will need to be uncompressed which will cause a non-trivial delay in the execution of any jQuery code each time it is loaded.
</p>
<a name="Current_Release"></a><h3> Current Release </h3>
<ul><li> <b><a href="http://blog.jquery.com/2011/02/24/jquery-151-released/" class="external text" title="http://blog.jquery.com/2011/02/24/jquery-151-released/">1.5.1 (Release Notes)</a></b><br /> <a href="http://code.jquery.com/jquery-1.5.1.min.js" class="external text" title="http://code.jquery.com/jquery-1.5.1.min.js">Minified</a>, <a href="http://code.jquery.com/jquery-1.5.1.js" class="external text" title="http://code.jquery.com/jquery-1.5.1.js">Uncompressed</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.5.1/" class="external text" title="http://api.jquery.com/category/version/1.5.1/">Changelog</a>
</li></ul>
<a name="Past_Releases"></a><h3> Past Releases </h3>
<ul><li> <b><a href="http://blog.jquery.com/2011/01/31/jquery-15-released/" class="external text" title="http://blog.jquery.com/2011/01/31/jquery-15-released/">1.5 (Release Notes)</a></b><br /> <a href="http://code.jquery.com/jquery-1.5.min.js" class="external text" title="http://code.jquery.com/jquery-1.5.min.js">Minified</a>, <a href="http://code.jquery.com/jquery-1.5.js" class="external text" title="http://code.jquery.com/jquery-1.5.js">Uncompressed</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.5/" class="external text" title="http://api.jquery.com/category/version/1.5/">Changelog</a>
</li><li> <b><a href="http://blog.jquery.com/2010/11/11/jquery-1-4-4-release-notes/" class="external text" title="http://blog.jquery.com/2010/11/11/jquery-1-4-4-release-notes/">1.4.4 (Release Notes)</a></b><br /> <a href="http://code.jquery.com/jquery-1.4.4.min.js" class="external text" title="http://code.jquery.com/jquery-1.4.4.min.js">Minified</a>, <a href="http://code.jquery.com/jquery-1.4.4.js" class="external text" title="http://code.jquery.com/jquery-1.4.4.js">Uncompressed</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.4.4/" class="external text" title="http://api.jquery.com/category/version/1.4.4/">Changelog</a>
</li><li> <b><a href="http://blog.jquery.com/2010/10/16/jquery-143-released/" class="external text" title="http://blog.jquery.com/2010/10/16/jquery-143-released/">1.4.3 (Release Notes)</a></b><br /> <a href="http://code.jquery.com/jquery-1.4.3.min.js" class="external text" title="http://code.jquery.com/jquery-1.4.3.min.js">Minified</a>, <a href="http://code.jquery.com/jquery-1.4.3.js" class="external text" title="http://code.jquery.com/jquery-1.4.3.js">Uncompressed</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.4.3/" class="external text" title="http://api.jquery.com/category/version/1.4.3/">Changelog</a>
</li><li> <b><a href="http://blog.jquery.com/2010/02/19/jquery-142-released/" class="external text" title="http://blog.jquery.com/2010/02/19/jquery-142-released/">1.4.2 (Release Notes)</a></b><br /> <a href="http://code.jquery.com/jquery-1.4.2.min.js" class="external text" title="http://code.jquery.com/jquery-1.4.2.min.js">Minified</a>, <a href="http://code.jquery.com/jquery-1.4.2.js" class="external text" title="http://code.jquery.com/jquery-1.4.2.js">Uncompressed</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.4.2/" class="external text" title="http://api.jquery.com/category/version/1.4.2/">Changelog</a>
</li><li> <b><a href="http://jquery14.com/day-12/jquery-141-released" class="external text" title="http://jquery14.com/day-12/jquery-141-released">1.4.1 (Release Notes)</a></b><br /> <a href="http://code.jquery.com/jquery-1.4.1.min.js" class="external text" title="http://code.jquery.com/jquery-1.4.1.min.js">Minified</a>, <a href="http://code.jquery.com/jquery-1.4.1.js" class="external text" title="http://code.jquery.com/jquery-1.4.1.js">Uncompressed</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.4.1/" class="external text" title="http://api.jquery.com/category/version/1.4.1/">Changelog</a>, <a href="http://code.jquery.com/jquery-1.4.1-vsdoc.js" class="external text" title="http://code.jquery.com/jquery-1.4.1-vsdoc.js">Visual Studio</a>
</li><li> <b><a href="http://jquery14.com/day-01/jquery-14" class="external text" title="http://jquery14.com/day-01/jquery-14">1.4 (Release Notes)</a></b><br /> <a href="http://code.jquery.com/jquery-1.4.min.js" class="external text" title="http://code.jquery.com/jquery-1.4.min.js">Minified</a>, <a href="http://code.jquery.com/jquery-1.4.js" class="external text" title="http://code.jquery.com/jquery-1.4.js">Uncompressed</a><br /><a href="http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery" class="external text" title="http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery">Google's AJAX Library  API/CDN</a>: <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js" class="external text" title="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js">Minified</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.4/" class="external text" title="http://api.jquery.com/category/version/1.4/">Changelog</a>
</li><li> <b><a href="/Release:jQuery_1.3.2" title="Release:jQuery 1.3.2">1.3.2 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.2.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.2.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.2.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.2.js">Uncompressed</a><br /><a href="http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery" class="external text" title="http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery">Google's AJAX Library  API/CDN</a>: <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" class="external text" title="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js">Minified</a><br />Documentation: <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.2-vsdoc2.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.2-vsdoc2.js">Visual Studio</a>
</li><li> <b><a href="/Release:jQuery_1.3.1" title="Release:jQuery 1.3.1">1.3.1 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.1.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.1.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.1.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.1.js">Uncompressed</a><br />Documentation: <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.1-vsdoc.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.1-vsdoc.js">Visual Studio</a>
</li><li> <b><a href="/Release:jQuery_1.3" title="Release:jQuery 1.3">1.3 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.js">Uncompressed</a><br />Documentation: <a href="http://api.jquery.com/category/version/1.3/" class="external text" title="http://api.jquery.com/category/version/1.3/">Changelog</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3-vsdoc.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3-vsdoc.js">Visual Studio</a>
</li><li> <b><a href="/Release:jQuery_1.2.6" title="Release:jQuery 1.2.6">1.2.6 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6.pack.js">Packed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6.js">Uncompressed</a><br />Documentation: <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6-vsdoc.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.6-vsdoc.js">Visual Studio</a>
</li><li> <b><a href="/Release:jQuery_1.2.5" title="Release:jQuery 1.2.5">1.2.5 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.5.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.5.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.5.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.5.pack.js">Packed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.5.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.5.js">Uncompressed</a>
</li><li> <b><a href="/Release:jQuery_1.2.4" title="Release:jQuery 1.2.4">1.2.4 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.4.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.4.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.4.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.4.pack.js">Packed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.4.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.4.js">Uncompressed</a>
</li><li> <b><a href="/Release:jQuery_1.2.3" title="Release:jQuery 1.2.3">1.2.3 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.3.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.3.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.3.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.3.pack.js">Packed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.3.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.3.js">Uncompressed</a>
</li><li> <b><a href="/Release:jQuery_1.2.2" title="Release:jQuery 1.2.2">1.2.2 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.2.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.2.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.2.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.2.pack.js">Packed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.2.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.2.js">Uncompressed</a>
</li><li> <b><a href="/Release:jQuery_1.2.1" title="Release:jQuery 1.2.1">1.2.1 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.1.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.1.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.1.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.1.pack.js">Packed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.1.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.1.js">Uncompressed</a>
</li><li> <b><a href="/Release:jQuery_1.2" title="Release:jQuery 1.2">1.2 (Release Notes)</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.min.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.min.js">Minified</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.pack.js">Packed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.2.js">Uncompressed</a>
</li><li> <b><a href="http://jquery.com/blog/2007/08/24/jquery-114-faster-more-tests-ready-for-12/" class="external text" title="http://jquery.com/blog/2007/08/24/jquery-114-faster-more-tests-ready-for-12/">1.1.4</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.4.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.4.pack.js">Compressed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.4.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.4.js">Uncompressed</a>
</li><li> <b><a href="http://jquery.com/blog/2007/07/05/jquery-1131/" class="external text" title="http://jquery.com/blog/2007/07/05/jquery-1131/">1.1.3.1</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.1.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.1.pack.js">Compressed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.1.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.1.js">Uncompressed</a>
</li><li> <b><a href="http://jquery.com/blog/2007/07/01/jquery-113-800-faster-still-20kb/" class="external text" title="http://jquery.com/blog/2007/07/01/jquery-113-800-faster-still-20kb/">1.1.3</a></b><br /> <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.pack.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.pack.js">Compressed</a>, <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.js" class="external text" title="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.1.3.js">Uncompressed</a>
</li><li> <a href="http://jquery.com/blog/2007/02/27/jquery-112/" class="external text" title="http://jquery.com/blog/2007/02/27/jquery-112/"><b>1.1.2</b></a><br /> <a href="http://code.jquery.com/jquery-1.1.2.pack.js" class="external text" title="http://code.jquery.com/jquery-1.1.2.pack.js">Compressed</a>, <a href="http://code.jquery.com/jquery-1.1.2.js" class="external text" title="http://code.jquery.com/jquery-1.1.2.js">Uncompressed</a>
</li><li> <a href="http://jquery.com/blog/2007/01/22/jquery-111/" class="external text" title="http://jquery.com/blog/2007/01/22/jquery-111/"><b>1.1.1</b></a><br /> <a href="http://code.jquery.com/jquery-1.1.1.pack.js" class="external text" title="http://code.jquery.com/jquery-1.1.1.pack.js">Compressed</a>, <a href="http://code.jquery.com/jquery-1.1.1.js" class="external text" title="http://code.jquery.com/jquery-1.1.1.js">Uncompressed</a>
</li><li> <a href="http://jquery.com/blog/2007/01/14/jquery-birthday-11-new-site-new-docs/" class="external text" title="http://jquery.com/blog/2007/01/14/jquery-birthday-11-new-site-new-docs/"><b>1.1</b></a><br /> <a href="http://code.jquery.com/jquery-1.1.pack.js" class="external text" title="http://code.jquery.com/jquery-1.1.pack.js">Compressed</a>, <a href="http://code.jquery.com/jquery-1.1.js" class="external text" title="http://code.jquery.com/jquery-1.1.js">Uncompressed</a>
</li><li> <a href="http://jquery.com/blog/2006/12/12/jquery-104/" class="external text" title="http://jquery.com/blog/2006/12/12/jquery-104/"><b>1.0.4</b></a><br /> <a href="http://code.jquery.com/jquery-1.0.4.pack.js" class="external text" title="http://code.jquery.com/jquery-1.0.4.pack.js">Compressed</a>, <a href="http://code.jquery.com/jquery-1.0.4.js" class="external text" title="http://code.jquery.com/jquery-1.0.4.js">Uncompressed</a>
</li><li> <a href="http://jquery.com/blog/2006/10/27/jquery-103/" class="external text" title="http://jquery.com/blog/2006/10/27/jquery-103/"><b>1.0.3</b></a><br /> <a href="http://code.jquery.com/jquery-1.0.3.pack.js" class="external text" title="http://code.jquery.com/jquery-1.0.3.pack.js">Compressed</a>, <a href="http://code.jquery.com/jquery-1.0.3.js" class="external text" title="http://code.jquery.com/jquery-1.0.3.js">Uncompressed</a> 
</li><li> <a href="http://jquery.com/blog/2006/10/09/jquery-102/" class="external text" title="http://jquery.com/blog/2006/10/09/jquery-102/"><b>1.0.2</b></a><br /> <a href="http://code.jquery.com/jquery-1.0.2.pack.js" class="external text" title="http://code.jquery.com/jquery-1.0.2.pack.js">Compressed</a>, <a href="http://code.jquery.com/jquery-1.0.2.js" class="external text" title="http://code.jquery.com/jquery-1.0.2.js">Uncompressed</a>
</li><li> <a href="http://jquery.com/blog/2006/08/31/jquery-101/" class="external text" title="http://jquery.com/blog/2006/08/31/jquery-101/"><b>1.0.1</b></a><br /> <a href="http://code.jquery.com/jquery-1.0.1.pack.js" class="external text" title="http://code.jquery.com/jquery-1.0.1.pack.js">Compressed</a>, <a href="http://code.jquery.com/jquery-1.0.1.js" class="external text" title="http://code.jquery.com/jquery-1.0.1.js">Uncompressed</a>
</li><li> <a href="http://jquery.com/blog/2006/08/26/jquery-10/" class="external text" title="http://jquery.com/blog/2006/08/26/jquery-10/"><b>1.0</b></a><br /> <a href="http://code.jquery.com/jquery-1.0.pack.js" class="external text" title="http://code.jquery.com/jquery-1.0.pack.js">Compressed</a>
</li></ul>
<a name="jQuery_Git_-_An_Instant_WIP_Build_For_Testing"></a><h2> jQuery Git - An Instant WIP Build For Testing </h2>
<p>This work-in-progress build (known as jQuery Git) is generated once a minute from the <a href="http://github.com/jquery/jquery" class="external text" title="http://github.com/jquery/jquery">jQuery Git repository</a>. It is provided as a convenience for anyone that wants to help test changes in the next version of jQuery.
</p><p>When reporting issues with WIP builds of jQuery, please make sure you include the date the snapshot was generated (it is listed at the top of the file).
</p><p>Linking to WIP builds directly from the CDN is not advised, as the file is constantly refreshed and will change from minute to minute as new commits are made to the repository.
</p><p><b>WARNING:</b> Do <b>NOT</b> use jQuery Git in a production system or live application! It is not tested. It is not stable. It will probably blow up on you unexpectedly. You have been warned! If in doubt, stop and use the <a href="http://docs.jquery.com/Downloading_jQuery#Current_Release" class="external text" title="http://docs.jquery.com/Downloading_jQuery#Current_Release">current release</a>.
</p>
<ul><li> <a href="http://code.jquery.com/jquery-git.js" class="external text" title="http://code.jquery.com/jquery-git.js">jquery-git.js</a> - Uncompressed, work-in-progress build
</li></ul>
<a name="Build_From_Git"></a><h2> Build From Git </h2>
<p><b>Note:</b> The following is quite advanced. If you wish to just use a more-recent version of jQuery, please try the WIP build.
</p><p>All source code is kept under Git revision control, which you can <a href="http://github.com/jquery/jquery" class="external text" title="http://github.com/jquery/jquery">browse online</a>. There's a download link available for any file or directory, if you only want to download a portion of the jQuery code.
</p><p>If you have access to Git, you can connect to the repository here:
</p>
<pre>git clone git://github.com/jquery/jquery.git
</pre>
<p>You can also check out a specific version of jQuery from GitHub at:
</p>
<pre>git clone git://github.com/jquery/jquery.git
git checkout &lt;version&gt;
e.g. git checkout 1.2.6
</pre>
<p>If you want to build your own copy of jQuery from the Git repository, you will need to build it.
</p><p><b>Note:</b> The jQuery UI code is in its own Git repository:
</p>
<pre>git clone git://github.com/jquery/jquery-ui.git
</pre>
<a name="Build_Requirements"></a><h3> Build Requirements </h3>
<p>jQuery currently requires the following components to be installed:
</p>
<ul><li> A build system (either <code>make</code> or <code>ant</code> works):
<ul><li> make: Available on most Unix-based system (Unix, BSD, OSX, Cygwin)
</li><li> ant: Available on any platform with JDK and ANT installed
</li></ul>
</li><li> java: A copy of Java, version 1.6.0 or later (required to build the minified version of jQuery).
</li></ul>
<p><b> Build Process </b>
</p><p>You will now need to use the build system that you chose previously - either <code>make</code> or <code>ant</code>.
</p>
<a name="If_you.27re_using_make:"></a><h4> If you're using make: </h4>
<ul><li> <b>To create jQuery:</b> <code>make</code>
<ul><li> This will create jquery.js and jquery.min.js in the dist directory
</li></ul>
</li></ul>
<a name="If_you.27re_using_ant:"></a><h4> If you're using ant: </h4>
<ul><li> <b>To create jQuery:</b> <code>ant</code>
<ul><li> This will create jquery.js and jquery.min.js in the dist directory
</li></ul>
</li></ul>

<!-- Saved in parser cache with key jqdocs_docs:pcache:idhash:1500-0!1!0!!en!2!edit=0 and timestamp 20110304130316 -->
<div class="printfooter">
Retrieved from "<a href="http://docs.jquery.com/Downloading_jQuery">http://docs.jquery.com/Downloading_jQuery</a>"</div>
						<!-- end content -->
			<div class="visualClear"></div>
		</div>
	</div>
		</div>

				</div><!-- /#primaryContent -->

				
				
				
			</div><!-- /#content -->


			<div id="jq-footer" class="jq-clearfix">

				<div id="jq-credits">
				<p id="jq-copyright">&copy; 2010 <a href="http://jquery.org/">The jQuery Project</a></p>
				<p id="jq-hosting">Sponsored by <a href="http://mediatemple.net" class="jq-mediaTemple">Media Temple</a> and <a href="http://jquery.org/sponsors">others</a>.</p>
				</div>

				<div id="jq-footerNavigation">
					<ul>
						<li class="jq-download jq-first"><a href="http://docs.jquery.com/Downloading_jQuery">Download</a></li>
						<li class="jq-documentation jq-current"><a href="http://docs.jquery.com/">Documentation</a></li>
						<li class="jq-tutorials"><a href="http://docs.jquery.com/Tutorials">Tutorials</a></li>
						<li class="jq-bugTracker"><a href="http://dev.jquery.com/">Bug Tracker</a></li>
						<li class="jq-discussion jq-last"><a href="http://docs.jquery.com/Discussion">Discussion</a></li>
					</ul>
				</div><!-- /#secondaryNavigation -->
				
			</div><!-- /#footer -->


	</div><!-- /#siteContain -->

<script type="text/javascript">
var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-1076265-1']); _gaq.push(['_trackPageview']); _gaq.push(['_setDomainName', '.jquery.com']);
(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);})();
</script>
	</body>
<!-- Cached 20110304130316 -->
</html>

