(function() {
    
  $.simpleWeather({
    location:  'Krakow, PL',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      var temp = '<h2 class="title">' + weather.temp + '&deg;' +
                 weather.units.temp + '</h2>',
          weat = '<i class="icon icon-' + weather.code + '">' + '</i>',
          loc = 'Kraków '+ ', ' + 'Małopolska' + ' (' + 'Polska' +
          ')',
          forecast = '',
          dzien;
        
        for(var i=1;i<4;i++) {
            
            switch(weather.forecast[i].day){
                    
                case 'Mon': dzien = 'Poniedziałek'
                break;
                case 'Tue': dzien = 'Wtorek'    
                break;  
                case 'Wed': dzien = 'Środa'    
                break;
                case 'Thu': dzien = 'Czwartek'    
                break;
                case 'Fri': dzien = 'Piątek'    
                break;
                case 'Sat': dzien = 'Sobota'    
                break;
                case 'Sun': dzien = 'Niedziela'    
                break;    
            }
            
        forecast += '<p>'+dzien+': '+weather.forecast[i].high+'&deg;'+weather.units.temp+'&nbsp;&nbsp;'+'<i class="icon icon-' + weather.forecast[i].code + '">'+'</i>'+'</p>';
      }
        
      $('#weather1').html(temp + weat);
      $('#loc').html(loc);
      $('#forecast').html(forecast);     
        
    }
  })
})()


