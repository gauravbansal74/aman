/*!
	jQuery ColorBox v1.3.34 - 2013-02-04
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var h=t.createElement(i);return o&&(h.id=V+o),n&&(h.style.cssText=n),e(h)}function n(e){var t=T.length,i=(N+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?C.width():C.height())/100:1)*parseInt(e,10))}function r(e){return P.photo||P.photoRegex.test(e)}function l(e){return P.retinaUrl&&i.devicePixelRatio>1?e.replace(P.photoRegex,P.retinaSuffix):e}function s(){var t,i=e.data(B,J);null==i?(P=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):P=e.extend({},i);for(t in P)e.isFunction(P[t])&&"on"!==t.slice(0,2)&&(P[t]=P[t].call(B));P.rel=P.rel||B.rel||e(B).data("rel")||"nofollow",P.href=P.href||e(B).attr("href"),P.title=P.title||B.title,"string"==typeof P.href&&(P.href=e.trim(P.href))}function a(i,o){e(t).trigger(i),st.trigger(i),e.isFunction(o)&&o.call(B)}function d(){var e,t,i,o,n,h=V+"Slideshow_",r="click."+V;P.slideshow&&T[1]?(t=function(){clearTimeout(e)},i=function(){(P.loop||T[N+1])&&(e=setTimeout($.next,P.slideshowSpeed))},o=function(){L.html(P.slideshowStop).unbind(r).one(r,n),st.bind(tt,i).bind(et,t).bind(it,n),m.removeClass(h+"off").addClass(h+"on")},n=function(){t(),st.unbind(tt,i).unbind(et,t).unbind(it,n),L.html(P.slideshowStart).unbind(r).one(r,function(){$.next(),o()}),m.removeClass(h+"on").addClass(h+"off")},P.slideshowAuto?o():n()):m.removeClass(h+"off "+h+"on")}function c(t){q||(B=t,s(),T=e(B),N=0,"nofollow"!==P.rel&&(T=e("."+Y).filter(function(){var t,i=e.data(this,J);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===P.rel}),N=T.index(B),-1===N&&(T=T.add(B),N=T.length-1)),O||(O=j=!0,m.css({visibility:"hidden",display:"block"}),k=o(at,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(g),_=x.height()+b.height()+g.outerHeight(!0)-g.height(),K=v.width()+y.width()+g.outerWidth(!0)-g.width(),z=k.outerHeight(!0),D=k.outerWidth(!0),P.returnFocus&&(e(B).blur(),st.one(ot,function(){e(B).focus()})),p.css({opacity:parseFloat(P.opacity),cursor:P.overlayClose?"pointer":"auto",visibility:"visible"}).show(),P.w=h(P.initialWidth,"x"),P.h=h(P.initialHeight,"y"),$.position(),rt&&C.bind("resize."+lt+" scroll."+lt,function(){p.css({width:C.width(),height:C.height(),top:C.scrollTop(),left:C.scrollLeft()})}).trigger("resize."+lt),d(),a(Z,P.onOpen),R.add(H).hide(),F.html(P.close).show()),$.load(!0))}function u(){!m&&t.body&&(Q=!1,C=e(i),m=o(at).attr({id:J,"class":ht?V+(rt?"IE6":"IE"):""}).hide(),p=o(at,"Overlay",rt?"position:absolute":"").hide(),W=o(at,"LoadingOverlay").add(o(at,"LoadingGraphic")),w=o(at,"Wrapper"),g=o(at,"Content").append(H=o(at,"Title"),E=o(at,"Current"),M=o(at,"Next"),S=o(at,"Previous"),L=o(at,"Slideshow"),F=o(at,"Close")),w.append(o(at).append(o(at,"TopLeft"),x=o(at,"TopCenter"),o(at,"TopRight")),o(at,!1,"clear:left").append(v=o(at,"MiddleLeft"),g,y=o(at,"MiddleRight")),o(at,!1,"clear:left").append(o(at,"BottomLeft"),b=o(at,"BottomCenter"),o(at,"BottomRight"))).find("div div").css({"float":"left"}),I=o(at,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),R=M.add(S).add(E).add(L),e(t.body).append(p,m.append(w,I)))}function f(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),c(this))}return m?(Q||(Q=!0,M.click(function(){$.next()}),S.click(function(){$.prev()}),F.click(function(){$.close()}),p.click(function(){P.overlayClose&&$.close()}),e(t).bind("keydown."+V,function(e){var t=e.keyCode;O&&P.escKey&&27===t&&(e.preventDefault(),$.close()),O&&P.arrowKey&&T[1]&&(37===t?(e.preventDefault(),S.click()):39===t&&(e.preventDefault(),M.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+V,"."+Y,i):e("."+Y).live("click."+V,i)),!0):!1}var p,m,w,g,x,v,y,b,T,C,k,I,W,H,E,L,M,S,F,R,P,_,K,z,D,B,N,A,O,j,q,U,$,G,Q,X={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},J="colorbox",V="cbox",Y=V+"Element",Z=V+"_open",et=V+"_load",tt=V+"_complete",it=V+"_cleanup",ot=V+"_closed",nt=V+"_purge",ht=!e.support.leadingWhitespace,rt=ht&&!i.XMLHttpRequest,lt=V+"_IE6",st=e({}),at="div";e.colorbox||(e(u),$=e.fn[J]=e[J]=function(t,i){var o=this;if(t=t||{},u(),f()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,J,e.extend({},e.data(this,J)||X,t))}).addClass(Y),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&c(o[0])}return o},$.position=function(e,t){function i(e){x[0].style.width=b[0].style.width=g[0].style.width=parseInt(e.style.width,10)-K+"px",g[0].style.height=v[0].style.height=y[0].style.height=parseInt(e.style.height,10)-_+"px"}var o,n,r,l=0,s=0,a=m.offset();C.unbind("resize."+V),m.css({top:-9e4,left:-9e4}),n=C.scrollTop(),r=C.scrollLeft(),P.fixed&&!rt?(a.top-=n,a.left-=r,m.css({position:"fixed"})):(l=n,s=r,m.css({position:"absolute"})),s+=P.right!==!1?Math.max(C.width()-P.w-D-K-h(P.right,"x"),0):P.left!==!1?h(P.left,"x"):Math.round(Math.max(C.width()-P.w-D-K,0)/2),l+=P.bottom!==!1?Math.max(C.height()-P.h-z-_-h(P.bottom,"y"),0):P.top!==!1?h(P.top,"y"):Math.round(Math.max(C.height()-P.h-z-_,0)/2),m.css({top:a.top,left:a.left,visibility:"visible"}),e=m.width()===P.w+D&&m.height()===P.h+z?0:e||0,w[0].style.width=w[0].style.height="9999px",o={width:P.w+D+K,height:P.h+z+_,top:l,left:s},0===e&&m.css(o),m.dequeue().animate(o,{duration:e,complete:function(){i(this),j=!1,w[0].style.width=P.w+D+K+"px",w[0].style.height=P.h+z+_+"px",P.reposition&&setTimeout(function(){C.bind("resize."+V,$.position)},1),t&&t()},step:function(){i(this)}})},$.resize=function(e){O&&(e=e||{},e.width&&(P.w=h(e.width,"x")-D-K),e.innerWidth&&(P.w=h(e.innerWidth,"x")),k.css({width:P.w}),e.height&&(P.h=h(e.height,"y")-z-_),e.innerHeight&&(P.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(k.css({height:"auto"}),P.h=k.height()),k.css({height:P.h}),$.position("none"===P.transition?0:P.speed))},$.prep=function(t){function i(){return P.w=P.w||k.width(),P.w=P.mw&&P.mw<P.w?P.mw:P.w,P.w}function h(){return P.h=P.h||k.height(),P.h=P.mh&&P.mh<P.h?P.mh:P.h,P.h}if(O){var l,s="none"===P.transition?0:P.speed;k.empty().remove(),k=o(at,"LoadedContent").append(t),k.hide().appendTo(I.show()).css({width:i(),overflow:P.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(g),I.hide(),e(A).css({"float":"none"}),l=function(){function t(){ht&&m[0].style.removeAttribute("filter")}var i,h,l=T.length,d="frameBorder",c="allowTransparency";O&&(h=function(){clearTimeout(U),W.remove(),a(tt,P.onComplete)},ht&&A&&k.fadeIn(100),H.html(P.title).add(k).show(),l>1?("string"==typeof P.current&&E.html(P.current.replace("{current}",N+1).replace("{total}",l)).show(),M[P.loop||l-1>N?"show":"hide"]().html(P.next),S[P.loop||N?"show":"hide"]().html(P.previous),P.slideshow&&L.show(),P.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=T[this],n=e.data(o,J);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=e(o).attr("href"),t&&(r(t)||n.photo)&&(i=new Image,i.src=t)})):R.hide(),P.iframe?(i=o("iframe")[0],d in i&&(i[d]=0),c in i&&(i[c]="true"),P.scrolling||(i.scrolling="no"),e(i).attr({src:P.href,name:(new Date).getTime(),"class":V+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(k),st.one(nt,function(){i.src="//about:blank"}),P.fastIframe&&e(i).trigger("load")):h(),"fade"===P.transition?m.fadeTo(s,1,t):t())},"fade"===P.transition?m.fadeTo(s,0,function(){$.position(0,l)}):$.position(s,l)}},$.load=function(t){var n,d,c,u=$.prep;j=!0,A=!1,B=T[N],t||s(),G&&m.add(p).removeClass(G),P.className&&m.add(p).addClass(P.className),G=P.className,a(nt),a(et,P.onLoad),P.h=P.height?h(P.height,"y")-z-_:P.innerHeight&&h(P.innerHeight,"y"),P.w=P.width?h(P.width,"x")-D-K:P.innerWidth&&h(P.innerWidth,"x"),P.mw=P.w,P.mh=P.h,P.maxWidth&&(P.mw=h(P.maxWidth,"x")-D-K,P.mw=P.w&&P.w<P.mw?P.w:P.mw),P.maxHeight&&(P.mh=h(P.maxHeight,"y")-z-_,P.mh=P.h&&P.h<P.mh?P.h:P.mh),n=P.href,U=setTimeout(function(){W.appendTo(g)},100),P.inline?(c=o(at).hide().insertBefore(e(n)[0]),st.one(nt,function(){c.replaceWith(k.children())}),u(e(n))):P.iframe?u(" "):P.html?u(P.html):r(n)?(n=l(n),e(A=new Image).addClass(V+"Photo").bind("error",function(){P.title=!1,u(o(at,"Error").html(P.imgError))}).one("load",function(){var e;P.retinaImage&&i.devicePixelRatio>1&&(A.height=A.height/i.devicePixelRatio,A.width=A.width/i.devicePixelRatio),P.scalePhotos&&(d=function(){A.height-=A.height*e,A.width-=A.width*e},P.mw&&A.width>P.mw&&(e=(A.width-P.mw)/A.width,d()),P.mh&&A.height>P.mh&&(e=(A.height-P.mh)/A.height,d())),P.h&&(A.style.marginTop=Math.max(P.mh-A.height,0)/2+"px"),T[1]&&(P.loop||T[N+1])&&(A.style.cursor="pointer",A.onclick=function(){$.next()}),ht&&(A.style.msInterpolationMode="bicubic"),setTimeout(function(){u(A)},1)}),setTimeout(function(){A.src=n},1)):n&&I.load(n,P.data,function(t,i){u("error"===i?o(at,"Error").html(P.xhrError):e(this).contents())})},$.next=function(){!j&&T[1]&&(P.loop||T[N+1])&&(N=n(1),$.load())},$.prev=function(){!j&&T[1]&&(P.loop||N)&&(N=n(-1),$.load())},$.close=function(){O&&!q&&(q=!0,O=!1,a(it,P.onCleanup),C.unbind("."+V+" ."+lt),p.fadeTo(200,0),m.stop().fadeTo(300,0,function(){m.add(p).css({opacity:1,cursor:"auto"}).hide(),a(nt),k.empty().remove(),setTimeout(function(){q=!1,a(ot,P.onClosed)},1)}))},$.remove=function(){e([]).add(m).add(p).remove(),m=null,e("."+Y).removeData(J).removeClass(Y),e(t).unbind("click."+V)},$.element=function(){return e(B)},$.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        setTimeout(function () { $('#cboxTitle', context).slideUp() }, 1500);
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initRecruiterColorbox = {
  attach: function (context, settings) {
    // Modify settings as suiting for the recruiter.
    settings.colorbox.innerHeight = "70%";
    settings.colorbox.innerWidth = 950;
    settings.colorbox.iframe = true;

    var width = $(window).width();
    var uagent = navigator.userAgent.toLowerCase();
    var mobile = false;
    // Detection for the most important mobile devices. Only checking the screen
    // resultion is not enough.
    if (width < settings.colorbox.innerWidth || uagent.match(/(iphone|ipod|ipad|android|webos|blackberry|blackberryplaybook|windowsphone|kindlefire)/)) {
      mobile = true;
    }
    var basepath = window.location.href;
    var https = false;
    if (basepath.substr(0, 5) == "https") {
      https = true;
    }

    $('a, area, input', context)
      .filter('.recruiter-job-link, .recruiter-resume-link')
      .once('init-recruitercolorbox-processed').each(function() {
        // Append the render slim context.
        $(this).attr('href', function (ind, attr) {
          // If the href contains "?", append $, else, append ?
          return /\?/.test(attr) ? attr + '&render=slim' : attr + '?render=slim';
        });
        // First do not open colorbox wihtin mobile devices (hard to handle)
        // and second, do not open http iframes within https.
        if (!mobile && !(https && $(this).attr('href').substr(0, 5) == "http:")) {
          $(this).colorbox(settings.colorbox);
        }
        else {
          $(this).attr('target', '_blank');
        }
      });
    }
  }
})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
