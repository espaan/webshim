jQuery.webshims.ready("number-date-type",function(c,i,r,m){c.support.inputUI="shim";var n=c.webshims.modules.inputUI.options,p,h=function(d){c("input",d).each(function(){var b=c.attr(this,"type");h[b]&&!c.data(this,"inputUIReplace")&&h[b](c(this))})};h.common=function(d,b,a){if(n.replaceNative)(function(){var f=[],j;d.bind("firstinvalid invalid",function(k){clearTimeout(j);f.push(k);j=setTimeout(function(){if(!c.data(k.target,"maybePreventedinvalid")&&(!f[0]||!f[0].isDefaultPrevented())&&(!f[1]||
!f[1].isDefaultPrevented())){var l=k.target,o=l.nodeName;if(l.id)o+="#"+l.id;if(l.name)o+="[name="+l.name+"]";if(l.className)o+="."+l.className.split(" ").join(".");throw o+" can not be focused. handle the invalid event.";}f=[]},30)})})();else c.support.validity===true&&d.bind("firstinvalid",function(f){clearTimeout(p);p=setTimeout(function(){!c.data(f.target,"maybePreventedinvalid")&&!f.isDefaultPrevented()&&i.validityAlert.showFor(f.target)},30)});var e=d.attr("id");e={css:{marginRight:d.css("marginRight"),
marginLeft:d.css("marginLeft")},outerWidth:d.getouterWidth(),label:e?c("label[for="+e+"]",d[0].form):c([])};var g=i.getID(e.label);b.addClass(d[0].className).data("html5element",d);d.after(b).data("inputUIReplace",{visual:b,methods:a}).hide();if(b.length==1&&!c("*",b)[0]){b.attr("aria-labeledby",g);e.label.bind("click",function(){b.focus();return false})}return e};h["datetime-local"]=function(d){if(c.fn.datepicker){var b=c('<span class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),
a=this.common(d,b,h["datetime-local"].attrs),e=c("input.input-datetime-local-date",b);c("input",b).data("html5element",c.data(b[0],"html5element"));e.attr("aria-labeledby",a.label.attr("id"));a.label.bind("click",function(){e.focus();return false});if(a.css){b.css(a.css);if(a.outerWidth){b.outerWidth(a.outerWidth);a=b.getwidth();e.css({marginLeft:0,marginRight:2}).outerWidth(Math.floor(a*0.61));c("input.input-datetime-local-time").css({marginLeft:2,marginRight:0}).outerWidth(Math.floor(a*0.37))}}i.triggerDomUpdate(b);
c("input.input-datetime-local-date",b).datepicker(c.extend({},n.datepicker)).bind("change",function(){var g,f=c("input.input-datetime-local-time",b).attr("value");try{g=(g=c.datepicker.parseDate(e.datepicker("option","dateFormat"),e.attr("value")))?c.datepicker.formatDate("yy-mm-dd",g):e.attr("value")}catch(j){g=e.attr("value")}if(!c("input.input-datetime-local-time",b).attr("value")){f="00:00";c("input.input-datetime-local-time",b).attr("value",f)}h["datetime-local"].blockAttr=true;d.attr("value",
g+"T"+f);h["datetime-local"].blockAttr=false;d.trigger("change")}).data("datepicker").dpDiv.addClass("input-date-datepicker-control");c("input.input-datetime-local-time",b).bind("input change",function(){var g=d.attr("value").split("T");if(g.length<2||!g[0])g[0]=c.datepicker.formatDate("yy-mm-dd",new Date);g[1]=c.attr(this,"value");h["datetime-local"].blockAttr=true;try{e.attr("value",c.datepicker.formatDate(e.datepicker("option","dateFormat"),c.datepicker.parseDate("yy-mm-dd",g[0])))}catch(f){}d.attr("value",
g.join("T"));h["datetime-local"].blockAttr=false;d.trigger("change")});c.each(["disabled","min","max","value","step"],function(g,f){d.attr(f,function(j,k){return k||""})})}};h["datetime-local"].attrs={disabled:function(d,b,a){c("input.input-datetime-local-date",b).datepicker("option","disabled",!!a);c("input.input-datetime-local-time",b).attr("disabled",!!a)},step:function(d,b,a){c("input.input-datetime-local-time",b).attr("step",a)},min:function(d,b,a){a=a.split?a.split("T"):[];try{a=c.datepicker.parseDate("yy-mm-dd",
a[0])}catch(e){a=false}a&&c("input.input-datetime-local-date",b).datepicker("option","minDate",a)},max:function(d,b,a){a=a.split?a.split("T"):[];try{a=c.datepicker.parseDate("yy-mm-dd",a[0])}catch(e){a=false}a&&c("input.input-datetime-local-date",b).datepicker("option","maxDate",a)},value:function(d,b,a){if(!h["datetime-local"].blockAttr){var e;a=a.split?a.split("T"):[];try{e=c.datepicker.parseDate("yy-mm-dd",a[0])}catch(g){e=false}if(e){c("input.input-datetime-local-date",b).datepicker("setDate",
e);c("input.input-datetime-local-time",b).attr("value",a[1]||"00:00")}else{c("input.input-datetime-local-date",b).attr("value",a[0]||"");c("input.input-datetime-local-time",b).attr("value",a[1]||"")}}}};h.date=function(d){if(c.fn.datepicker){var b=c('<input type="text" class="input-date" />'),a=this.common(d,b,h.date.attrs);if(a.css){b.css(a.css);a.outerWidth&&b.outerWidth(a.outerWidth)}b.datepicker(c.extend({},n.datepicker)).bind("change",function(){h.date.blockAttr=true;var e;try{e=(e=c.datepicker.parseDate(b.datepicker("option",
"dateFormat"),b.attr("value")))?c.datepicker.formatDate("yy-mm-dd",e):b.attr("value")}catch(g){e=b.attr("value")}d.attr("value",e);h.date.blockAttr=false;d.trigger("change")}).data("datepicker").dpDiv.addClass("input-date-datepicker-control");c.each(["disabled","min","max","value"],function(e,g){d.attr(g,function(f,j){return j||""})})}};h.date.attrs={disabled:function(d,b,a){b.datepicker("option","disabled",!!a)},min:function(d,b,a){try{a=c.datepicker.parseDate("yy-mm-dd",a)}catch(e){a=false}a&&b.datepicker("option",
"minDate",a)},max:function(d,b,a){try{a=c.datepicker.parseDate("yy-mm-dd",a)}catch(e){a=false}a&&b.datepicker("option","maxDate",a)},value:function(d,b,a){if(!h.date.blockAttr){try{var e=c.datepicker.parseDate("yy-mm-dd",a)}catch(g){e=false}e?b.datepicker("setDate",e):b.attr("value",a)}}};h.range=function(d){if(c.fn.slider){var b=c('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),a=this.common(d,b,h.range.attrs),e=function(g,f){if(g.originalEvent){h.range.blockAttr=
true;d.attr("value",f.value);h.range.blockAttr=false;g.type=="slidechange"?d.trigger("change"):i.triggerInlineForm(d[0],"input")}};c("span",b).attr("aria-labeledby",a.label.attr("id"));a.label.bind("click",function(){c("span",b).focus();return false});if(a.css){b.css(a.css);a.outerWidth&&b.outerWidth(a.outerWidth)}b.slider(c.extend(n.slider,{change:e,slide:e}));c.each(["disabled","min","max","value","step"],function(g,f){d.attr(f,function(j,k){return k||""})})}};h.range.attrs={disabled:function(d,
b,a){a=!!a;b.slider("option","disabled",a);c("span",b).attr({"aria-disabled":a+"",tabindex:a?"-1":"0"})},min:function(d,b,a){a=a?a*1||0:0;b.slider("option","min",a);c("span",b).attr({"aria-valuemin":a})},max:function(d,b,a){a=a||a===0?a*1||100:100;b.slider("option","max",a);c("span",b).attr({"aria-valuemax":a})},value:function(d,b,a){a=c(d).attr("valueAsNumber");if(isNaN(a)){a=(b.slider("option","max")-b.slider("option","min"))/2;d.value=a}h.range.blockAttr||b.slider("option","value",a);c("span",
b).attr({"aria-valuenow":a,"aria-valuetext":a})},step:function(d,b,a){a=a&&c.trim(a)?a*1||1:1;b.slider("option","step",a)}};c.each(["disabled","min","max","value","step"],function(d,b){i.attr(b,{elementNames:["input"],setter:function(a,e,g){var f=c.data(a,"inputUIReplace");g();f&&f.methods[b]&&f.methods[b](a,f.visual,e)},getter:true})});var q=function(d){if(d){d=c.extend({},d,n.date);c("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",d).each(function(){var b=
c.data(this,"html5element");b&&c.each(["disabled","min","max","value"],function(a,e){b.attr(e,function(g,f){return f||""})})});c.datepicker.setDefaults(d)}};c(m).bind("jquery-uiReady.langchange input-widgetsReady.langchange",function(){c.datepicker&&c(m).bind("htmlExtLangChange",function(){i.activeLang(c.datepicker.regional,"inputUI",q)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});i.addReady(function(d){c(m).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(c.datepicker||c.fn.slider)h(d);c.datepicker&&c.fn.slider&&c(m).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui");d===m&&i.createReadyEvent("inputUI")})})},true);
