!function(r,p){"use strict";var c="function",u="undefined",m="object",i="model",s="name",e="type",o="vendor",n="version",a="architecture",t="console",w="mobile",l="tablet",d="smarttv",f="wearable",b={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.split(".")[0]:p}},g={rgx:function(){for(var i,s,e,o,r,n,a,t=0,w=arguments;t<w.length&&!n;){var l=w[t],d=w[t+1];if(typeof i==u)for(o in i={},d)d.hasOwnProperty(o)&&(typeof(r=d[o])==m?i[r[0]]=p:i[r]=p);for(s=e=0;s<l.length&&!n;)if(n=l[s++].exec(this.getUA()))for(o=0;o<d.length;o++)a=n[++e],typeof(r=d[o])==m&&0<r.length?2==r.length?typeof r[1]==c?i[r[0]]=r[1].call(this,a):i[r[0]]=r[1]:3==r.length?typeof r[1]!=c||r[1].exec&&r[1].test?i[r[0]]=a?a.replace(r[1],r[2]):p:i[r[0]]=a?r[1].call(this,a,r[2]):p:4==r.length&&(i[r[0]]=a?r[3].call(this,a.replace(r[1],r[2])):p):i[r]=a||p;t+=2}return i},str:function(i,s){for(var e in s)if(typeof s[e]==m&&0<s[e].length){for(var o=0;o<s[e].length;o++)if(b.has(s[e][o],i))return"?"===e?p:e}else if(b.has(s[e],i))return"?"===e?p:e;return i}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},v={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[s,n],[/(OPiOS)[\/\s]+([\w\.]+)/i],[[s,"Opera Mini"],n],[/\s(opr)\/([\w\.]+)/i],[[s,"Opera"],n],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[s,n],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[s,"IE"],n],[/(edge)\/((\d+)?[\w\.]+)/i],[s,n],[/(yabrowser)\/([\w\.]+)/i],[[s,"Yandex"],n],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],n],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[s,n],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[s,"UCBrowser"],n],[/(dolfin)\/([\w\.]+)/i],[[s,"Dolphin"],n],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[s,"Chrome"],n],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[n,[s,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[n,[s,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[n,[s,"Facebook"]],[/fxios\/([\w\.-]+)/i],[n,[s,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[n,[s,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[n,s],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[s,[n,g.str,h.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[s,n],[/(navigator|netscape)\/([\w\.-]+)/i],[[s,"Netscape"],n],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[s,n]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[a,"amd64"]],[/(ia32(?=;))/i],[[a,b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[a,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[a,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[a,/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[[a,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[a,b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[i,o,[e,l]],[/applecoremedia\/[\w\.]+ \((ipad)/],[i,[o,"Apple"],[e,l]],[/(apple\s{0,1}tv)/i],[[i,"Apple TV"],[o,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[o,i,[e,l]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[i,[o,"Amazon"],[e,l]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[i,g.str,h.device.amazon.model],[o,"Amazon"],[e,w]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[i,o,[e,w]],[/\((ip[honed|\s\w*]+);/i],[i,[o,"Apple"],[e,w]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[o,i,[e,w]],[/\(bb10;\s(\w+)/i],[i,[o,"BlackBerry"],[e,w]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[i,[o,"Asus"],[e,l]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[o,"Sony"],[i,"Xperia Tablet"],[e,l]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[o,"Sony"],[i,"Xperia Phone"],[e,w]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[o,i,[e,t]],[/android.+;\s(shield)\sbuild/i],[i,[o,"Nvidia"],[e,t]],[/(playstation\s[34portablevi]+)/i],[i,[o,"Sony"],[e,t]],[/(sprint\s(\w+))/i],[[o,g.str,h.device.sprint.vendor],[i,g.str,h.device.sprint.model],[e,w]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[o,i,[e,l]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[o,[i,/_/g," "],[e,w]],[/(nexus\s9)/i],[i,[o,"HTC"],[e,l]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[i,[o,"Microsoft"],[e,t]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[o,"Microsoft"],[e,w]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],[i,[o,"Motorola"],[e,w]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[i,[o,"Motorola"],[e,l]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[o,"Samsung"],i,[e,l]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[o,"Samsung"],i,[e,w]],[/(samsung);smarttv/i],[o,i,[e,d]],[/\(dtv[\);].+(aquos)/i],[i,[o,"Sharp"],[e,d]],[/sie-(\w+)*/i],[i,[o,"Siemens"],[e,w]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[o,"Nokia"],i,[e,w]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[i,[o,"Acer"],[e,l]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[o,"LG"],i,[e,l]],[/(lg) netcast\.tv/i],[o,i,[e,d]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[i,[o,"LG"],[e,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[i,[o,"Lenovo"],[e,l]],[/linux;.+((jolla));/i],[o,i,[e,w]],[/((pebble))app\/[\d\.]+\s/i],[o,i,[e,f]],[/android.+;\s(glass)\s\d/i],[i,[o,"Google"],[e,f]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[i,/_/g," "],[o,"Xiaomi"],[e,w]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[[e,b.lowerize],o,i]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[n,[s,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,n],[/rv\:([\w\.]+).*(gecko)/i],[n,s]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[s,n],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[s,[n,g.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[n,g.str,h.os.windows.version]],[/\((bb)(10);/i],[[s,"BlackBerry"],n],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[s,n],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[s,"Symbian"],n],[/\((series40);/i],[s],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"],n],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[s,n],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],n],[/(sunos)\s?([\w\.]+\d)*/i],[[s,"Solaris"],n],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[s,n],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[s,"iOS"],[n,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[s,"Mac OS"],[n,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[s,n]]},x=function(i,s){if(!(this instanceof x))return new x(i,s).getResult();var e=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?b.extend(v,s):v;return this.getBrowser=function(){var i=g.rgx.apply(this,o.browser);return i.major=b.major(i.version),i},this.getCPU=function(){return g.rgx.apply(this,o.cpu)},this.getDevice=function(){return g.rgx.apply(this,o.device)},this.getEngine=function(){return g.rgx.apply(this,o.engine)},this.getOS=function(){return g.rgx.apply(this,o.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(i){return e=i,this},this};x.VERSION="0.7.10",x.BROWSER={NAME:s,MAJOR:"major",VERSION:n},x.CPU={ARCHITECTURE:a},x.DEVICE={MODEL:i,VENDOR:o,TYPE:e,CONSOLE:t,MOBILE:w,SMARTTV:d,TABLET:l,WEARABLE:f,EMBEDDED:"embedded"},x.ENGINE={NAME:s,VERSION:n},x.OS={NAME:s,VERSION:n},typeof exports!=u?(typeof module!=u&&module.exports&&(exports=module.exports=x),exports.UAParser=x):typeof define==c&&define.amd?define("ua-parser-js",[],function(){return x}):r.UAParser=x;var y=r.jQuery||r.Zepto;if(typeof y!=u){var k=new x;y.ua=k.getResult(),y.ua.get=function(){return k.getUA()},y.ua.set=function(i){k.setUA(i);var s=k.getResult();for(var e in s)y.ua[e]=s[e]}}}("object"==typeof window?window:this);