   
      function writeFlash(id,file) {
          document.getElementById(id).innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='774' height='206'><param name='movie' value='"+file+"'><param name='quality' value='high'><embed src='"+file+"' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='774' height='206'></embed></object> ";
      }
