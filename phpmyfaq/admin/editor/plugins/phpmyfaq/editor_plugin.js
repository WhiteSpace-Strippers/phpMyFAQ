(function(){tinymce.PluginManager.requireLangPack('phpmyfaq');tinymce.create('tinymce.plugins.phpmyfaqPlugin',{init:function(ed,url){ed.addCommand('mcePhpmyfaq',function(){ed.windowManager.open({file:url+'/dialog.html',width:480+parseInt(ed.getLang('phpmyfaq.delta_width',0)),height:320+parseInt(ed.getLang('phpmyfaq.delta_height',0)),inline:1},{plugin_url:url,some_custom_arg:'custom arg'})});ed.addButton('phpmyfaq',{title:'phpmyfaq.desc',cmd:'mcePhpmyfaq',image:url+'/img/phpmyfaq.gif'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('phpmyfaq',n.nodeName=='IMG')})},createControl:function(n,cm){return null},getInfo:function(){return{longname:'phpMyFAQ plugin',author:'Thorsten Rinne',authorurl:'http://www.phpmyfaq.de',infourl:'http://www.phpmyfaq.de',version:"1.0"}}});tinymce.PluginManager.add('phpmyfaq',tinymce.plugins.phpmyfaqPlugin)})();