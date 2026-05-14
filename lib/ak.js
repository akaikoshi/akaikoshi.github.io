
function print_menu(_idx)
{
   var menu=[ "/usr","akaikoshi","news","demos","pixels","stickers", "photos", "links","about" ];
   var ii, prefix,hlink;
   prefix="&nbsp;&nbsp;";
   hlink="index";
   
   document.write( "<h6>");
   document.write( "<p align=center>");
   document.write( "<a href='index.html'><img src='img/disc.jpeg' width=180 height=180 border=0></a>");
	document.write( "</P>");
  
    for( ii=0; ii<9; ii++ )
    {
	  if (ii>1) 		{ prefix="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; }
	  else if (ii>0) 	{ prefix="&nbsp;&nbsp;&nbsp;&nbsp;"; }
      if (ii>0)			{ document.write( prefix+"|</a><br>"); }
      if (ii>1) 		{ hlink=menu[ii]; }
      if (ii==_idx) 	{ document.write( prefix+"+ <B>"+menu[ii]+"/</b><br>"); }
      else     			{ document.write( prefix+"+ <a href='"+hlink+".html'>"+menu[ii]+"/</a></b><br>"); }
    }
}

function start_page(_menu,_title,_text)
{
    document.write( "<BODY>");
    document.write( "<center>");
    document.write( "<table border=0 cellpadding=0 cellspacing=0 width=100% height=100%>");

    document.write( "<tr height=100 background='img/bandeau.jpg'>");
    document.write( "	<td colspan=3>");
    document.write( "	</td>");
    document.write( "</tr>");

    document.write( "<tr valign=top>");
    document.write( "	<td bgcolor=#EEEEEE width=200>");
		
    print_menu(_menu);

    document.write( "</td>");
        
    document.write( "<td bgcolor=#FFFFFF width=20>");
    document.write( "</td>");

    document.write( "<td bgcolor=white>");
    if (_title!=="") { document.write( "<h5>"+_title+"</h5>"); }
    if (_text!=="") { document.write( "<h4>"+_text+"</h4>"); }
    document.write( "<P>&nbsp;");
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
  
