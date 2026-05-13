
function print_menu(_idx)
{
   var menu=[ "/usr","akaikoshi","news","demos","pixels","stickers","links","about" ];
   var ii, prefix,hlink;
   prefix="&nbsp;&nbsp;";
   hlink="index";
   
   document.write( "<h1>");
   document.write( "<p align=center>");
   document.write( "<a href='index.html'><img src='img/disc.jpeg' width=180 border=0></a>");
	document.write( "</P>");
  
    for( ii=0; ii<8; ii++ )
    {
	  if (ii>1) 		{ prefix="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; }
	  else if (ii>0) 	{ prefix="&nbsp;&nbsp;&nbsp;&nbsp;"; }
      if (ii>0)			{ document.write( prefix+"|</a><br>"); }
      if (ii>1) 		{ hlink=menu[ii]; }
      if (ii==_idx) 	{ document.write( prefix+"+ <B>"+menu[ii]+"</b><br>"); }
      else     			{ document.write( prefix+"+ <a href='"+hlink+".html'>"+menu[ii]+"/</a></b><br>"); }
    }
}


  function end_page()
  {
   // empty_line();
    document.write( "<font size=1><hr><table width=100% border=0 cellpadding=0 cellspacing=0><tr><td align=center><h1>" ); 
    document.write( "<font size=1>(c) akaikoshi - since 2025 - akaikoshi@proton.me - @akaikoshi@mastodon.social - demozoo - pouet - youtube<P align=right><PRE>\
     _       _ _           _   _ \
<BR> ___| |_ ___|_| |_ ___ ___| |_|_|\
<BR>| .'| '_| .'| | '_| . |_ -|   | |\
<BR>|__,|_,_|__,|_|_,_|___|___|_|_|_|\
<BR>                                 " );
          
    document.write( "</TABLE>" );
    document.write( "</BODY>" );
    document.write( "</HTML>" );
  }
  
