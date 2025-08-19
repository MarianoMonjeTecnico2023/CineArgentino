# 🎬 Estrenos de Cine Argentina

Una aplicación web que muestra los estrenos de cine más recientes en Argentina, con información detallada de películas y trailers integrados.

## 📋 Descripción

Esta aplicación web consume la API de The Movie Database (TMDB) para mostrar los estrenos de cine actuales en Argentina. La aplicación presenta las películas en dos secciones:

- **Estrenos Destacados**: Las 5 películas más populares en un carrusel
- **Todos los Estrenos**: Una grilla completa con todas las películas disponibles

## ✨ Características

- 🎯 **API de TMDB**: Integración con The Movie Database para datos actualizados
- 🎬 **Trailers integrados**: Reproducción de trailers de YouTube directamente en la aplicación
- 📱 **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla
- 🔄 **Actualización automática**: Los datos se actualizan cada 24 horas
- 🇦🇷 **Localización**: Contenido en español argentino
- 🎨 **Interfaz moderna**: Diseño limpio y atractivo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **CSS3**: Estilos y diseño responsivo
- **JavaScript (ES6+)**: Lógica de la aplicación
- **The Movie Database API**: Datos de películas
- **YouTube Embed API**: Reproducción de trailers

## 📦 Instalación

1. **Clona o descarga el repositorio**
   ```bash
   git clone [URL-del-repositorio]
   cd Cine
   ```

2. **Configura la API Key** (opcional)
   - El proyecto incluye una API key de ejemplo
   - Para uso personal, obtén tu propia API key en [TMDB](https://www.themoviedb.org/settings/api)
   - Reemplaza la API key en `script.js` línea 1

3. **Abre el proyecto**
   - Abre `index.html` en tu navegador web
   - O ejecuta un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```

## 🚀 Uso

1. Abre la aplicación en tu navegador
2. Navega por los estrenos destacados en el carrusel superior
3. Explora todos los estrenos en la grilla inferior
4. Haz clic en los trailers para reproducirlos
5. La información se actualiza automáticamente cada 24 horas

## 📁 Estructura del Proyecto

```
Cine/
├── index.html          # Página principal
├── script.js           # Lógica de la aplicación
├── styles.css          # Estilos CSS
└── README.md           # Documentación
```

## 🔧 Configuración

### API Key de TMDB

Para obtener tu propia API key:

1. Ve a [The Movie Database](https://www.themoviedb.org/)
2. Crea una cuenta gratuita
3. Ve a Configuración > API
4. Solicita una API key
5. Reemplaza la API key en `script.js`:

```javascript
const apiKey = 'TU_API_KEY_AQUI';
```

## 🌟 Características Técnicas

- **Filtrado por popularidad**: Las películas destacadas se seleccionan por su índice de popularidad
- **Manejo de errores**: Mensajes de error amigables si la API no responde
- **Optimización de imágenes**: Uso de imágenes optimizadas de TMDB
- **Caché automático**: Los datos se mantienen actualizados sin recargar manualmente

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autores

- **Mariano** - Desarrollo inicial
- **Gemini Advanced** - Asistencia en desarrollo

## 🙏 Agradecimientos

- [The Movie Database](https://www.themoviedb.org/) por proporcionar la API
- [YouTube](https://www.youtube.com/) por el servicio de embebido de videos

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.

---

⭐ ¡No olvides darle una estrella al proyecto si te gustó!
