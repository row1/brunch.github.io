!function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var t={},n={},s=function(e,t){return{}.hasOwnProperty.call(e,t)},r=function(e,t){var n,s,r=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var i=0,l=n.length;l>i;i++)s=n[i],".."===s?r.pop():"."!==s&&""!==s&&r.push(s);return r.join("/")},i=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(n){var s=i(t),l=r(s,n);return e.require(l,t)}},o=function(e,t){var s={id:e,exports:{}};return n[e]=s,t(s.exports,l(e),s),s.exports},a=function(e,i){var l=r(e,".");if(null==i&&(i="/"),s(n,l))return n[l].exports;if(s(t,l))return o(l,t[l]);var a=r(l,"./index");if(s(n,a))return n[a].exports;if(s(t,a))return o(a,t[a]);throw new Error('Cannot find module "'+e+'" from '+'"'+i+'"')},h=function(e,n){if("object"==typeof e)for(var r in e)s(e,r)&&(t[r]=e[r]);else t[e]=n},u=function(){var e=[];for(var n in t)s(t,n)&&e.push(n);return e};e.require=a,e.require.define=h,e.require.register=h,e.require.list=u,e.require.brunch=!0}}(),jade=function(e){function t(e){return null!=e}return Array.isArray||(Array.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}),e.merge=function(e,n){var s=e["class"],r=n["class"];(s||r)&&(s=s||[],r=r||[],Array.isArray(s)||(s=[s]),Array.isArray(r)||(r=[r]),s=s.filter(t),r=r.filter(t),e["class"]=s.concat(r).join(" "));for(var i in n)"class"!=i&&(e[i]=n[i]);return e},e.attrs=function(t,n){var s=[],r=t.terse;delete t.terse;var i=Object.keys(t),l=i.length;if(l){s.push("");for(var o=0;l>o;++o){var a=i[o],h=t[a];"boolean"==typeof h||null==h?h&&(r?s.push(a):s.push(a+'="'+a+'"')):0==a.indexOf("data")&&"string"!=typeof h?s.push(a+"='"+JSON.stringify(h)+"'"):"class"==a&&Array.isArray(h)?s.push(a+'="'+e.escape(h.join(" "))+'"'):n&&n[a]?s.push(a+'="'+e.escape(h)+'"'):s.push(a+'="'+h+'"')}}return s.join(" ")},e.escape=function(e){return String(e).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},e.rethrow=function(e,t,n){if(!t)throw e;var s=3,r=require("fs").readFileSync(t,"utf8"),i=r.split("\n"),l=Math.max(n-s,0),o=Math.min(i.length,n+s),s=i.slice(l,o).map(function(e,t){var s=t+l+1;return(s==n?"  > ":"    ")+s+"| "+e}).join("\n");throw e.path=t,e.message=(t||"Jade")+":"+n+"\n"+s+"\n\n"+e.message,e},e}({}),require.register("marked",function(e,t,n){n.exports=function s(e,t,n){function r(l,o){if(!t[l]){if(!e[l]){var a="function"==typeof require&&require;if(!o&&a)return a(l,!0);if(i)return i(l,!0);var h=new Error("Cannot find module '"+l+"'");throw h.code="MODULE_NOT_FOUND",h}var u=t[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return r(n?n:t)},u,u.exports,s,e,t,n)}return t[l].exports}for(var i="function"==typeof require&&require,l=0;l<n.length;l++)r(n[l]);return r}({"/Users/user/Developer/brunch/gh/node_modules/marked/lib/marked.js":[function(e,t,n){!function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||h.defaults,this.rules=u.normal,this.options.gfm&&(this.rules=this.options.tables?u.tables:u.gfm)}function s(e,t){if(this.options=t||h.defaults,this.links=e,this.rules=p.normal,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.rules=this.options.breaks?p.breaks:p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function r(e){this.tokens=[],this.token=null,this.options=e||h.defaults}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e,t){return e=e.source,t=t||"",function n(s,r){return s?(r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(s,r),n):new RegExp(e,t)}}function o(){}function a(e){for(var t,n,s=1;s<arguments.length;s++){t=arguments[s];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function h(t,n,s){if(s||"function"==typeof n){s||(s=n,n=null),n=a({},h.defaults,n||{});var l,o,u=n.highlight,p=0;try{l=e.lex(t,n)}catch(c){return s(c)}o=l.length;var g=function(){var e,t;try{e=r.parse(l,n)}catch(i){t=i}return n.highlight=u,t?s(t):s(null,e)};if(!u||u.length<3)return g();if(delete n.highlight,!o)return g();for(;p<l.length;p++)!function(e){return"code"!==e.type?--o||g():u(e.text,e.lang,function(t,n){return null==n||n===e.text?--o||g():(e.text=n,e.escaped=!0,--o||g(),void 0)})}(l[p])}else try{return n&&(n=a({},h.defaults,n)),r.parse(e.lex(t,n),n)}catch(c){if(c.message+="\nPlease report this to https://github.com/chjj/marked.",(n||h.defaults).silent)return"<p>An error occured:</p><pre>"+i(c.message+"",!0)+"</pre>";throw c}}var u={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:o,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:o,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};u.bullet=/(?:[*+-]|\d+\.)/,u.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,u.item=l(u.item,"gm")(/bull/g,u.bullet)(),u.list=l(u.list)(/bull/g,u.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),u._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b",u.html=l(u.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,u._tag)(),u.paragraph=l(u.paragraph)("hr",u.hr)("heading",u.heading)("lheading",u.lheading)("blockquote",u.blockquote)("tag","<"+u._tag)("def",u.def)(),u.normal=a({},u),u.gfm=a({},u.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),u.gfm.paragraph=l(u.paragraph)("(?!","(?!"+u.gfm.fences.source.replace("\\1","\\2")+"|"+u.list.source.replace("\\1","\\3")+"|")(),u.tables=a({},u.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=u,e.lex=function(t,n){var s=new e(n);return s.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t){for(var n,s,r,i,l,o,a,h,p,e=e.replace(/^ +$/gm,"");e;)if((r=this.rules.newline.exec(e))&&(e=e.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(e))e=e.substring(r[0].length),r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?r:r.replace(/\n+$/,"")});else if(r=this.rules.fences.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2],text:r[3]});else if(r=this.rules.heading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if(t&&(r=this.rules.nptable.exec(e))){for(e=e.substring(r[0].length),o={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/\n$/,"").split("\n")},h=0;h<o.align.length;h++)o.align[h]=/^ *-+: *$/.test(o.align[h])?"right":/^ *:-+: *$/.test(o.align[h])?"center":/^ *:-+ *$/.test(o.align[h])?"left":null;for(h=0;h<o.cells.length;h++)o.cells[h]=o.cells[h].split(/ *\| */);this.tokens.push(o)}else if(r=this.rules.lheading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2]?1:2,text:r[1]});else if(r=this.rules.hr.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(e)){for(e=e.substring(r[0].length),i=r[2],this.tokens.push({type:"list_start",ordered:i.length>1}),r=r[0].match(this.rules.item),n=!1,p=r.length,h=0;p>h;h++)o=r[h],a=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(a-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+a+"}","gm"),"")),this.options.smartLists&&h!==p-1&&(l=u.bullet.exec(r[h+1])[0],i===l||i.length>1&&l.length>1||(e=r.slice(h+1).join("\n")+e,h=p-1)),s=n||/\n\n(?!\s*$)/.test(o),h!==p-1&&(n="\n"===o.charAt(o.length-1),s||(s=n)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(o,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(e))e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===r[1]||"script"===r[1]||"style"===r[1],text:r[0]});else if(t&&(r=this.rules.def.exec(e)))e=e.substring(r[0].length),this.tokens.links[r[1].toLowerCase()]={href:r[2],title:r[3]};else if(t&&(r=this.rules.table.exec(e))){for(e=e.substring(r[0].length),o={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<o.align.length;h++)o.align[h]=/^ *-+: *$/.test(o.align[h])?"right":/^ *:-+: *$/.test(o.align[h])?"center":/^ *:-+ *$/.test(o.align[h])?"left":null;for(h=0;h<o.cells.length;h++)o.cells[h]=o.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(o)}else if(t&&(r=this.rules.paragraph.exec(e)))e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:o,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=l(p.link)("inside",p._inside)("href",p._href)(),p.reflink=l(p.reflink)("inside",p._inside)(),p.normal=a({},p),p.pedantic=a({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=a({},p.normal,{escape:l(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=a({},p.gfm,{br:l(p.br)("{2,}","*")(),text:l(p.gfm.text)("{2,}","*")()}),s.rules=p,s.output=function(e,t,n){var r=new s(t,n);return r.output(e)},s.prototype.output=function(e){for(var t,n,s,r,l="";e;)if(r=this.rules.escape.exec(e))e=e.substring(r[0].length),l+=r[1];else if(r=this.rules.autolink.exec(e))e=e.substring(r[0].length),"@"===r[2]?(n=":"===r[1].charAt(6)?this.mangle(r[1].substring(7)):this.mangle(r[1]),s=this.mangle("mailto:")+n):(n=i(r[1]),s=n),l+='<a href="'+s+'">'+n+"</a>";else if(r=this.rules.url.exec(e))e=e.substring(r[0].length),n=i(r[1]),s=n,l+='<a href="'+s+'">'+n+"</a>";else if(r=this.rules.tag.exec(e))e=e.substring(r[0].length),l+=this.options.sanitize?i(r[0]):r[0];else if(r=this.rules.link.exec(e))e=e.substring(r[0].length),l+=this.outputLink(r,{href:r[2],title:r[3]});else if((r=this.rules.reflink.exec(e))||(r=this.rules.nolink.exec(e))){if(e=e.substring(r[0].length),t=(r[2]||r[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){l+=r[0].charAt(0),e=r[0].substring(1)+e;continue}l+=this.outputLink(r,t)}else if(r=this.rules.strong.exec(e))e=e.substring(r[0].length),l+="<strong>"+this.output(r[2]||r[1])+"</strong>";else if(r=this.rules.em.exec(e))e=e.substring(r[0].length),l+="<em>"+this.output(r[2]||r[1])+"</em>";else if(r=this.rules.code.exec(e))e=e.substring(r[0].length),l+="<code>"+i(r[2],!0)+"</code>";else if(r=this.rules.br.exec(e))e=e.substring(r[0].length),l+="<br>";else if(r=this.rules.del.exec(e))e=e.substring(r[0].length),l+="<del>"+this.output(r[1])+"</del>";else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),l+=i(this.smartypants(r[0]));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return l},s.prototype.outputLink=function(e,t){return"!"!==e[0].charAt(0)?'<a href="'+i(t.href)+'"'+(t.title?' title="'+i(t.title)+'"':"")+">"+this.output(e[1])+"</a>":'<img src="'+i(t.href)+'" alt="'+i(e[1])+'"'+(t.title?' title="'+i(t.title)+'"':"")+">"},s.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},s.prototype.mangle=function(e){for(var t,n="",s=e.length,r=0;s>r;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.parse=function(e,t){var n=new r(t);return n.parse(e)},r.prototype.parse=function(e){this.inline=new s(e.links,this.options),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+this.token.depth+' id="'+this.token.text.toLowerCase().replace(/[^\w]+/g,"-")+'">'+this.inline.output(this.token.text)+"</h"+this.token.depth+">\n";case"code":if(this.options.highlight){var e=this.options.highlight(this.token.text,this.token.lang);null!=e&&e!==this.token.text&&(this.token.escaped=!0,this.token.text=e)}return this.token.escaped||(this.token.text=i(this.token.text,!0)),"<pre><code"+(this.token.lang?' class="'+this.options.langPrefix+this.token.lang+'"':"")+">"+this.token.text+"</code></pre>\n";case"table":var t,n,s,r,l,o="";for(o+="<thead>\n<tr>\n",n=0;n<this.token.header.length;n++)t=this.inline.output(this.token.header[n]),o+="<th",this.token.align[n]&&(o+=' style="text-align:'+this.token.align[n]+'"'),o+=">"+t+"</th>\n";for(o+="</tr>\n</thead>\n",o+="<tbody>\n",n=0;n<this.token.cells.length;n++){for(s=this.token.cells[n],o+="<tr>\n",l=0;l<s.length;l++)r=this.inline.output(s[l]),o+="<td",this.token.align[l]&&(o+=' style="text-align:'+this.token.align[l]+'"'),o+=">"+r+"</td>\n";o+="</tr>\n"}return o+="</tbody>\n","<table>\n"+o+"</table>\n";case"blockquote_start":for(var o="";"blockquote_end"!==this.next().type;)o+=this.tok();return"<blockquote>\n"+o+"</blockquote>\n";case"list_start":for(var a=this.token.ordered?"ol":"ul",o="";"list_end"!==this.next().type;)o+=this.tok();return"<"+a+">\n"+o+"</"+a+">\n";case"list_item_start":for(var o="";"list_item_end"!==this.next().type;)o+="text"===this.token.type?this.parseText():this.tok();return"<li>"+o+"</li>\n";case"loose_item_start":for(var o="";"list_item_end"!==this.next().type;)o+=this.tok();return"<li>"+o+"</li>\n";case"html":return this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);case"paragraph":return"<p>"+this.inline.output(this.token.text)+"</p>\n";case"text":return"<p>"+this.parseText()+"</p>\n"}},o.exec=o,h.options=h.setOptions=function(e){return a(h.defaults,e),h},h.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1},h.Parser=r,h.parser=r.parse,h.Lexer=e,h.lexer=e.lex,h.InlineLexer=s,h.inlineLexer=s.output,h.parse=h,"object"==typeof n?t.exports=h:"function"==typeof define&&define.amd?define(function(){return h}):this.marked=h}.call(function(){return this||("undefined"!=typeof window?window:global)}())},{}]},{},[])("/Users/user/Developer/brunch/gh/node_modules/marked/lib/marked.js")}),require.register("scripts/app",function(){});