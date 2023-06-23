# Guía de instalación de Vittal Manager

Vittal Manager es una aplicación web para la gestión de servicios de enfermería. Sigue los pasos a continuación para instalar y ejecutar la aplicación.

## Requisitos previos
- Base de datos: Asegúrate de tener una base de datos creada llamada "vittal". Hibernate utilizará esta base de datos para el funcionamiento de la aplicación.

## Backend
1. Clona el repositorio de Vittal Manager desde GitHub.
2. Navega hasta la carpeta del proyecto Backend.
3. Ejecuta el siguiente comando para desplegar el Backend en el servidor local: `mvn spring-boot:run`

  Esto iniciará el servidor Backend en `http://localhost:8080`.

## Frontend
1. Navega hasta la carpeta del proyecto Frontend, que se encuentra en `resources/static`.
2. Asegúrate de tener Node.js instalado en tu sistema.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto: `npm install`
4. Una vez completada la instalación, ejecuta el siguiente comando para iniciar el Frontend: `npm run start`
   
Esto abrirá automáticamente la aplicación en tu navegador.

## Interacción entre Backend y Frontend
Una vez que hayas desplegado tanto el Backend como el Frontend en sus respectivos servidores, interactuarán entre sí para el correcto funcionamiento de la aplicación.

¡Ahora puedes comenzar a utilizar Vittal Manager para gestionar servicios de enfermería!

---

Asegúrate de seguir estos pasos correctamente para instalar y ejecutar la aplicación Vittal Manager. Si tienes alguna pregunta o encuentras algún problema durante el proceso, no dudes en contactarnos.
