# MeteoPic

![MeteoPic](/img/ico.png)

**WeatherApp** es una aplicación sencilla que obtiene datos meteorológicos de la API de OpenWeather y actualiza dinámicamente la imagen de fondo según las condiciones climáticas actuales utilizando la API de Unsplash.

![Guardar Imagen](/img/meteopicsample.png)
## Características

- 🌍 **Datos meteorológicos basados en geolocalización**: Obtiene y muestra automáticamente el clima para tu ubicación actual.
- 🌐 **Búsqueda de clima por ciudad**: Permite a los usuarios buscar información meteorológica ingresando el nombre de una ciudad.
- 🌞 **Imágenes de fondo dinámicas**: Muestra imágenes de fondo relevantes según la descripción del clima, con variaciones de día y noche. Puedes guardarte las imagenes.

![Guardar Imagen](/img/guardarimagen.png)

- 🌡️ **Información meteorológica detallada**: Proporciona detalles como temperatura, sensación térmica, humedad y un resumen descriptivo del clima.
- 🚀 **Interfaz de usuario interactiva y responsiva**: Interfaz de usuario intuitiva con controles fáciles de usar.

## Comenzando

#### Requisitos Previos
- Un navegador web moderno (Chrome, Firefox, Safari, etc.)
- Conocimientos básicos de HTML, CSS y JavaScript.
- Claves API para [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) y [Unsplash](https://unsplash.com/developers).

#### Instalación
1. **Clona el repositorio**:
2. **Reemplaza las claves API**:
- Abre el archivo index.html.
- Reemplaza TU API KEY DE OPENWEATHERMAP y  CON TU API KEY  UNSPLASH con tus claves API reales.
- Abre la aplicación:
- Simplemente abre el archivo index.html en tu navegador.
3. **Uso**:
- Detección automática del clima: Al cargar la página, la app solicitará tu ubicación para obtener las condiciones climáticas actuales.
- Buscar una ciudad: Ingresa el nombre de una ciudad y haz clic en el botón "Buscar" para obtener los detalles meteorológicos de esa ciudad.
- Actualización de fondo: La app cambiará la imagen de fondo según las condiciones meteorológicas y la hora del día.

## Descripción del Código

#### HTML
La estructura de la aplicación está definida en el archivo index.html, que incluye campos de entrada, botones y contenedores para mostrar los datos del clima.

#### JavaScript
El comportamiento de la aplicación está controlado por el archivo script.js, que incluye funciones para obtener datos meteorológicos de la API, actualizar la tarjeta del clima y cambiar la imagen de fondo.

## Contribuciones

- ¡Las contribuciones son bienvenidas! Si tienes alguna idea o mejora, siéntete libre.

  **Contacto:**
* Móvil: +34 635715157
* Correo: jorgesantiagosenas@gmail.com
* GitHub: https://github.com/SenasDev
* Linkedin: https://www.linkedin.com/in/senas-dev

- Haz un fork del proyecto:
Crea una nueva rama (git checkout -b mejora/nueva-funcion)
Realiza tus cambios y haz commit (git commit -am 'Añadir nueva función')
Sube los cambios a la rama (git push origin mejora/nueva-funcion)
Abre un Pull Request
