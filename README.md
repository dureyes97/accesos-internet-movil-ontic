# 📶 Widget Indicador: Accesos a Internet Móvil • ONTIC (MinTIC)

Widget oficial para **ArcGIS Experience Builder** y Dashboard Web autónomo interactivo que reproduce con fidelidad el indicador del **Observatorio Nacional de Tecnologías de la Información y las Comunicaciones (ONTIC)** del **Ministerio TIC (Colombia)**.

![MinTIC](https://img.shields.io/badge/MinTIC-PotencIA_Digital-004884?logo=colombia&logoColor=white)
![ArcGIS](https://img.shields.io/badge/ArcGIS-Experience_Builder_1.21-0079C1?logo=esri&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)

---

## 🎯 Fuentes Oficiales Conectadas

* **Página de Referencia MinTIC:** [Accesos a Internet móvil - ONTIC](https://ontic.mintic.gov.co/portal/Secciones/Indicadores/Conectividad-e-inclusion-digital/383126:Accesos-a-Internet-movil)
* **Servicio Esri Hosted FeatureServer:** [Ontic - Overview (Ítem 7815eb8fb385422e870f8f11d37c21c4)](https://arcgis.esri.co/portal/home/item.html?id=7815eb8fb385422e870f8f11d37c21c4)
* **Endpoint REST:** `https://arcgis.esri.co/server/rest/services/Hosted/Ontic/FeatureServer/0`
* **Fuente Administrativa:** Registro Administrativo Reporte HECAA - MinTIC.

---

## 🎨 Paleta de Tecnologías Oficial MinTIC

El widget adopta con total precisión los colores de la gráfica oficial del indicador:

| Tecnología | Color Hex | Muestra Visual | Descripción |
| :---: | :---: | :---: | :--- |
| **2G** | `#F9E6CF` | 🟨 Beige suave | Telefonía básica / GSM histórica |
| **3G** | `#FAC67A` | 🟧 Dorado / Naranja claro | Redes UMTS en transición de desmonte |
| **4G** | `#DA498D` | 🟪 Magenta / Rosa fuerte | Tecnología LTE predominante |
| **5G** | `#69247C` | 🟪 Púrpura profundo | Nueva generación móvil en expansión sostenida |

---

## 🚀 Características del Widget

1. **Gráfico de Barras Apiladas SVG Vectorial:**
   - Eje X cronológico con trimestres (`2023-3` a `2026-1`).
   - Eje Y en **Millones de accesos**.
   - Etiquetas numéricas integradas y cálculo de totales acumulados.
   - Tooltip flotante interactivo en tiempo real con desglose y porcentajes.
   - Leyenda con interruptor de visibilidad (clic para ocultar/mostrar tecnologías).

2. **Filtros Dinámicos en Memoria:**
   - **Operador:** Selección por proveedor (Claro/Comcel, Movistar, Tigo, Wom, Éxito, Virgin, ETB, etc.).
   - **Segmento:** Todos, Prepago, Pospago.
   - **Terminal:** Todos, Teléfono móvil, Data card (Módem).

3. **Tarjetas KPI en Tiempo Real:**
   - Total de accesos móviles del periodo más reciente.
   - Participación y volumen de 4G LTE.
   - Avance del despliegue 5G.
   - Evolución de 3G.

4. **Tabla de Datos y Exportación:**
   - Vista de tabla detallada por periodo y tecnología.
   - Botón de descarga instantánea en formato **CSV**.

---

## 🛠️ Instalación en ArcGIS Experience Builder (Developer Edition)

1. El widget ya está instalado y compilado en:
   ```text
   arcgis-experience-builder-1.21/client/your-extensions/widgets/accesos-internet-movil-ontic/
   ```
2. Inicia tu servidor de Experience Builder:
   ```bash
   cd arcgis-experience-builder-1.21/client
   npm start
   ```
3. Abre tu experiencia en `https://localhost:3001` y arrastra el widget **Accesos a Internet Móvil - ONTIC** desde la sección **Personalizado**.

---

## 🌐 Despliegue en GitHub Pages y StoryMaps

1. Abre **GitHub Desktop** > **File** > **Add Local Repository** y selecciona la carpeta `accesos-internet-movil-ontic`.
2. Publica el repositorio como **Público** y activa **GitHub Pages** en la rama `main`.
3. Tu widget estará disponible en línea en:
   ```text
   https://<tu-usuario>.github.io/accesos-internet-movil-ontic/
   ```
4. Para incrustarlo en cualquier página web, StoryMap o Portal, usa el código iframe:
   ```html
   <iframe src="https://<tu-usuario>.github.io/accesos-internet-movil-ontic/" width="100%" height="620" frameborder="0" style="border:none;border-radius:14px;box-shadow:0 4px 16px rgba(0,0,0,0.08);"></iframe>
   ```