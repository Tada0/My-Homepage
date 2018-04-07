(function() {
  var contador = 0;
    var miesiace = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

  setInterval(setDates, 0);

  function setDates() {
    var date = new Date;
    var hour = (date.getHours() < 10) ? '0' + String(date.getHours()):
        date.getHours();
        minutes = (date.getMinutes() < 10) ? '0' + String(date.getMinutes()):
        date.getMinutes();
        hourTitle = document.getElementById('hour');
        hourTitle.textContent = hour + ':' + minutes;

    var day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        dateSubtitle = document.getElementById("date");
        month = miesiace[month];
       
    dateSubtitle.textContent = day + ' ' + month + ' ' + year;
  }
})()