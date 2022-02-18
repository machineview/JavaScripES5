//COOKIES INSTALACION DE NODE.JS PARA WIN

/*
Lo descargamos de la pagina oficial
https://nodejs.org/es/


Abrimos ventana de comandos como admin y ejecutamos

> node -v 

nos arroja la version de node instalada

A continuacion instalamos el mpmjs , para ello cogemos los 
comandos de la pagina web

http-server es un servidor HTTP estático de línea de comandos simple y sin configuración. Es lo suficientemente potente para el uso en producción, pero es lo suficientemente simple y lo suficientemente hackeable como para ser utilizado para pruebas, desarrollo local y aprendizaje.

https://www.npmjs.com/package/http-server

> npm install http-server -g

Una vez instalado ejecutamos

> http-server J:\-=CURSOS=-\-=JavaScrip de cero hasta los detalles ES5=- -p 8081

podemos indicar un puerto diferente o dejarlo en blanco y por defecto sera el puerto 8080

al ejecutar el comando veremos esto a fecha 9/1/2022

C:\WINDOWS\system32>http-server J:\jvs
Starting up http-server, serving J:\jvs

http-server version: 14.0.0

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://172.25.96.1:8080
  http://192.168.0.28:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server

si nos da error 
How to fix (node:12388) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated in windows

cada vez que iniciemos el proyecto ejecutamos antes

npm i browser-sync

*/