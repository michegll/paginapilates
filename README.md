# 🏋️‍♀️ Blue Zone - Beam Store Replica

Réplica moderna y elegante de la tienda de productos fitness Beam de Blue Zone Peru.

## ✨ Características

- **Diseño moderno y minimalista** con animaciones suaves
- **Totalmente responsive** para móviles, tablets y desktop
- **Interactividad completa** con carrito de compras funcional
- **Animaciones elegantes** con scroll y hover effects
- **Tipografía premium** usando Archivo y Cormorant Garamond
- **Sistema de notificaciones** para acciones del usuario
- **Botones de favoritos** en cada producto
- **Hero banner con efecto parallax**

## 📁 Estructura del Proyecto

```
beam-store/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## 🚀 Cómo subir a GitHub

### 1. Inicializar Git (si aún no lo has hecho)

```bash
git init
git add .
git commit -m "Initial commit - Beam store replica"
```

### 2. Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Click en el botón `+` → `New repository`
3. Nombre: `beam-store` (o el que prefieras)
4. Déjalo **público** para usar GitHub Pages
5. **NO** inicialices con README
6. Click en `Create repository`

### 3. Conectar tu proyecto con GitHub

```bash
git remote add origin https://github.com/TU-USUARIO/beam-store.git
git branch -M main
git push -u origin main
```

### 4. Activar GitHub Pages

1. En tu repositorio, ve a `Settings`
2. En el menú lateral, click en `Pages`
3. En "Source", selecciona `main` branch
4. Click en `Save`
5. Espera 1-2 minutos

Tu sitio estará disponible en: `https://TU-USUARIO.github.io/beam-store`

## 💻 Desarrollo Local

Para ver el sitio en tu computadora:

1. Abre el archivo `index.html` en tu navegador
2. O usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

Luego abre: `http://localhost:8000`

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Color principal */
    --secondary-color: #7c6f5e;     /* Color secundario */
    --accent-color: #d4a574;        /* Color de acento */
    --background: #fafaf8;          /* Fondo */
}
```

### Cambiar fuentes

Las fuentes actuales son:
- **Archivo** (sans-serif) - Para texto general
- **Cormorant Garamond** (serif) - Para títulos

Para cambiar, edita el link de Google Fonts en `index.html` y actualiza `font-family` en `styles.css`.

### Agregar productos

En `index.html`, duplica un bloque `.product-card` y edita:
- Imagen (URL de Unsplash o propia)
- Título
- Rating
- Precio

## 📱 Responsive

El sitio se adapta automáticamente a:
- 📱 Móviles (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Desktop (> 768px)

## 🔧 Comandos Git útiles

```bash
# Ver estado de archivos
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de cambios"

# Subir cambios a GitHub
git push

# Ver historial
git log --oneline

# Crear nueva rama
git checkout -b nombre-rama
```

## 🌟 Funcionalidades

- ✅ Navegación sticky con menú móvil
- ✅ Hero banner con efecto Ken Burns
- ✅ Grid de productos responsive
- ✅ Sistema de carrito funcional
- ✅ Botones de favoritos
- ✅ Notificaciones toast
- ✅ Animaciones de scroll
- ✅ Efecto parallax en hero
- ✅ Filtros de productos (UI)
- ✅ Footer completo con links

## 📝 Notas

- Las imágenes actuales son placeholders de Unsplash
- Para producción, reemplaza con imágenes reales de productos
- El carrito y favoritos solo funcionan en el frontend (no hay backend)
- Los filtros muestran notificación pero no filtran productos aún

## 🎯 Próximas mejoras

- [ ] Backend para carrito persistente
- [ ] Sistema de filtros funcional
- [ ] Página de detalle de producto
- [ ] Checkout y pasarela de pago
- [ ] Sistema de reviews funcional
- [ ] Búsqueda en tiempo real
- [ ] Wishlist persistente

## 📄 Licencia

Este proyecto es una réplica educativa con fines de aprendizaje.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

Creado con ❤️ para aprender desarrollo web
