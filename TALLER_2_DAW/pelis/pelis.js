var peliculas = [{
    titulo: 'Venom',
    duracion: '135 min  ',
    formato: ['3D', '5D', '2D'],
    clasificacion: 'A',
    butacas: 'Tradicionales',
    horarios: ['8:30 am', '12:00 md','16:45 pm']
},{

    titulo: 'Black Window',
    duracion: '110 min',
    formato: ['3D', '2D'],
    clasificacion: 'B',
    butacas: 'Tradicionales',
    horarios: [ '12:40 md','6:20 pm']
},{

    titulo: 'Bob Esponja',
    duracion: '1:54 min',
    formato: ['3D', '2D'],
    clasificacion: 'A',
    butacas: 'VIP',
    horarios: [ '12:40 md','18:20 pm']
},{

    titulo: 'Purga Infinita',
    duracion: '145 min',
    formato: [ '2D'],
    clasificacion: 'C',
    butacas: 'Tradicionales',
    horarios: [ '11:40 am','13:10 pm']
},{

    titulo: 'Transilvania 4 ',
    duracion: '132 min',
    formato: ['2D'],
    clasificacion: 'A',
    butacas: 'Tradicionales',
    horarios: [ '8:20 am','14:15 pm']
},{

    titulo: 'Tiburon',
    duracion: '105 min',
    formato: ['3D', '2D'],
    clasificacion: 'B',
    butacas: 'Tradicionales',
    horarios: [ '9:35 am','15:20 pm']
},{

    titulo: 'Sharcknado',
    duracion: '154 min',
    formato: ['3D'],
    clasificacion: 'C',
    butacas: 'Tradicionales',
    horarios: [ '8:40 am','13:25 pm', '15:45 pm']
},{

    titulo: 'Tiburon Fantasma',
    duracion: '123 min',
    formato: ['3D', '2D'],
    clasificacion: 'B15',
    butacas: 'Tradicionales',
    horarios: [ '12:40 md','6:20 pm']
},{

    titulo: 'El Transportador',
    duracion: '154 min',
    formato: ['2D'],
    clasificacion: 'B15',
    butacas: 'VIP',
    horarios: [ '13:00 pm','16:10 pm']
},{

    titulo: 'Mission Imposible',
    duracion: '123 min',
    formato: [ '2D'],
    clasificacion: 'B15',
    butacas: 'Tradicionales',
    horarios: [ '13:45 pm','15:50 pm']
},{

    titulo: 'Lavalantula',
    duracion: '110 min',
    formato: ['3D', '2D'],
    clasificacion: 'A',
    butacas: 'Tradicionales',
    horarios: [ '8:40 am','13:22 pm', '16:15 pm']
},{

    titulo: 'Sonic',
    duracion: '151 min',
    formato: ['3D'],
    clasificacion: 'A',
    butacas: 'Tradicionales',
    horarios: [ '13:05 pm','15:20 pm']
},{

    titulo: 'Dragon Ball Z',
    duracion: '162 min',
    formato: ['3D', '2D'],
    clasificacion: 'A',
    butacas: 'Tradicionales',
    horarios: [ '9:25 am','15:04 pm']
},{

    titulo: 'Bob Esponja al Rescate',
    duracion: '135 min',
    formato: ['3D'],
    clasificacion: 'A',
    butacas: 'Tradicionales',
    horarios: [ '10:40 am','13:53 pm', '14:20 pm']
},{

    titulo: 'Pirañas',
    duracion: '154 min',
    formato: [ '2D'],
    clasificacion: 'D',
    butacas: 'Tradicionales',
    horarios: [ '13:00 md','16:34 pm']
},]
window.onload = function(){
msj = "";
    contenido = document.getElementById('contenido');
    contenid = document.getElementById('contenid');
    for (i = 0; i< peliculas.length; i++) {      
    msj +='<h2>' +peliculas[i].titulo +'<h2>'   
    msj += '<h3>'+'Clasificacion: ' +peliculas[i].clasificacion+ '||' + ' Duracion: '+ peliculas[i].duracion +'<h3>' 
    msj += '<table border>'
    msj += '<tr>'
    msj += '<td>'
    msj += '<h3>' +'Formato: ' + peliculas[i].formato+ '||' +' Butacas: ' + peliculas[i].butacas+ '<h3>'
    msj += '</td>'
    msj += '</tr>'
    msj += '<tr>'
    msj += '<td>'
    msj += '<h3>Horarios:<h3>' 
    msj += '<h3>'  + peliculas[i].horarios+'<h3>'
    msj += '</td>'
    msj += '</tr>'
    msj += '<br>'
    msj += '</table>'
    msj += '<br>'
    msj += '<br>'
    msj += '<br>'
}
    contenido.innerHTML = msj   

  
}

