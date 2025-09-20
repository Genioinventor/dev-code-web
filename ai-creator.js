// AI Creator using Gemini API
// Following the blueprint: javascript_gemini integration

// API key directly embedded as requested by user (normally would use environment variables)
const GEMINI_API_KEY = 'AIzaSyA7YE5mC26qxlqYL0uf9FxfrWDGRjSH-y0';

// Initialize Gemini AI (will be loaded from CDN)
let ai = null;

// Initialize AI when Google GenAI library is loaded
function initializeAI() {
    if (window.GoogleGenAI) {
        ai = new window.GoogleGenAI({ apiKey: GEMINI_API_KEY });
        return true;
    }
    return false;
}

// Global variable to store the generated HTML
let generatedWebsiteHTML = '';

// Function to generate the most advanced webpage possible
async function generateAdvancedWebpage(objective, description) {
    if (!ai) {
        if (!initializeAI()) {
            throw new Error('La biblioteca de Google GenAI no está disponible');
        }
    }

    try {
        const prompt = `Eres el DESARROLLADOR WEB MÁS AVANZADO DEL MUNDO. Tu misión es crear la página web más impresionante, moderna y funcional que jamás haya existido.

🎯 OBJETIVO PRINCIPAL: ${objective}
📋 DESCRIPCIÓN: ${description}

🚀 TECNOLOGÍAS DE VANGUARDIA OBLIGATORIAS:

🎨 CSS ULTRA MODERNO:
- CSS Container Queries para layouts realmente adaptativos
- CSS Grid con subgrid, aspect-ratio, gap avanzado
- Flexbox con flex-grow, flex-shrink optimizados
- CSS Custom Properties (variables) para tematización dinámica
- CSS Logical Properties (margin-inline, padding-block)
- Modern CSS Selectors (:has(), :is(), :where())
- CSS Animation con timeline-scope, animation-composition
- CSS Transforms 3D con perspective, transform-style
- CSS Filters y backdrop-filter para efectos Glass
- CSS Clip-path para formas geométricas avanzadas
- CSS Scroll-snap para navegación suave
- CSS View Transitions para transiciones fluidas

📱 RESPONSIVE DESIGN EXTREMO:
- Mobile-first approach OBLIGATORIO
- Breakpoints: 320px, 480px, 768px, 1024px, 1200px, 1400px
- Fluid Typography: clamp(1rem, 2vw + 1rem, 3rem)
- Fluid Spacing: clamp(1rem, 5vw, 3rem)
- Container queries para componentes inteligentes
- Touch targets mínimo 44px con touch-action optimization
- Viewport units: dvh, svh, lvh para altura real
- Print styles con @media print

💻 JAVASCRIPT ULTRA AVANZADO:
- ES2024+ features: async/await, destructuring, spread operator
- Intersection Observer para lazy loading y scroll animations
- ResizeObserver para responsive components
- MutationObserver para DOM changes
- Web Animations API para animaciones complejas
- RequestAnimationFrame para 60fps smooth animations
- Service Workers para PWA capabilities
- Web Components con Shadow DOM
- Modern Fetch API con error handling
- LocalStorage y SessionStorage optimization
- CSS-in-JS para dynamic styling
- Event delegation y passive event listeners

🎭 EFECTOS VISUALES DE OTRO NIVEL:
- Glassmorphism con backdrop-filter: blur()
- Neumorphism con box-shadow múltiples
- Morphing animations con CSS @keyframes
- Parallax scrolling con transform3d()
- Scroll-triggered animations con IntersectionObserver
- Mouse tracking effects con clientX/clientY
- Liquid animations con CSS cubic-bezier()
- Particle systems con Canvas o CSS
- Text masking y gradient text effects
- Hover effects con CSS transforms
- Loading states con skeleton screens
- Micro-interactions en todos los elementos

🖼️ GESTIÓN DE IMÁGENES PROFESIONAL:
- WEBP y AVIF formats con fallbacks
- Responsive images con srcset y sizes
- Art direction con <picture> element
- Lazy loading: loading="lazy" + Intersection Observer
- Blur-to-sharp loading effects
- Image optimization con width/height hints
- CSS object-fit y object-position perfect
- Background images con multiple layers
- SVG icons optimizados e inline
- Image galleries con lightbox functionality
- High-DPI support con image-set()

⚡ PERFORMANCE MÁXIMA:
- Critical CSS inline en <head>
- Resource hints: dns-prefetch, preconnect, prefetch
- Font loading con font-display: swap
- Image lazy loading avanzado
- CSS containment con contain property
- will-change para elementos animados
- transform3d(0,0,0) para hardware acceleration
- Minimal DOM manipulations
- Event throttling y debouncing
- CSS sprites para iconos pequeños
- Compressed CSS con logical properties

🎯 UX/UI PERFECTO:
- Loading states y skeleton screens
- Error states y 404 pages estilizadas
- Focus management para accesibilidad
- Keyboard navigation completa
- Touch gestures para móvil
- Haptic feedback simulation
- Progressive disclosure patterns
- Consistent spacing system (8px grid)
- Color system con HSL y custom properties
- Typography scale perfecta
- Icon system coherente
- Status feedback immediate

🔍 SEO OPTIMIZACIÓN TOTAL:
- Meta tags completos: title, description, keywords
- Open Graph para redes sociales
- Twitter Cards optimization
- Schema.org structured data
- Semantic HTML5 tags
- Alt text descriptivo en imágenes
- Heading hierarchy perfecta (h1-h6)
- Internal linking strategy
- Fast loading times (< 3 segundos)
- Mobile-friendly certification

♿ ACCESIBILIDAD WCAG 2.1:
- ARIA labels y roles
- Color contrast ratio 4.5:1 mínimo
- Focus indicators visibles
- Screen reader compatibility
- Reduced motion support
- High contrast mode support
- Large text support
- Keyboard navigation only

🎪 CARACTERÍSTICAS INTERACTIVAS:
- Smooth scrolling navigation
- Dynamic content loading
- Form validation en tiempo real
- Dark/Light mode toggle
- Search functionality
- Filtering y sorting
- Modal windows y tooltips
- Drag and drop interfaces
- Infinite scrolling
- Pagination inteligente
- Cookie consent optimizado

🏗️ ARQUITECTURA MODERNA:
- Component-based structure
- CSS metodology (BEM o similar)
- Consistent naming conventions
- Modular CSS architecture
- Scalable font system
- Color system organized
- Icon system unified
- Responsive images system
- Animation library personal
- Utility classes system

🌐 COMPATIBILITY TOTAL:
- Cross-browser support (Chrome, Firefox, Safari, Edge)
- Graceful degradation para browsers antiguos
- Progressive enhancement approach
- Feature detection con @supports
- Polyfills cuando sea necesario
- Vendor prefixes para CSS experimental

📊 ANALYTICS Y TRACKING:
- Performance monitoring setup
- Error tracking implementation
- User interaction tracking
- A/B testing ready structure
- Conversion tracking setup

🎮 APIS Y FUNCIONALIDADES MODERNAS:
- Geolocation API para contenido localizado
- Device Orientation para efectos inmersivos
- Clipboard API para copiar contenido
- Share API para compartir social
- Notification API para alerts
- Vibration API para feedback táctil
- Battery API para optimización
- Network Information API para adaptive loading
- Payment Request API para ecommerce
- Web Speech API para comandos de voz
- Camera y Microphone access con getUserMedia

🛡️ SEGURIDAD Y PRIVACIDAD:
- Content Security Policy headers
- HTTPS enforcement
- Secure cookies implementation
- XSS protection measures
- Input sanitization total
- Rate limiting implementation
- Privacy-focused analytics
- GDPR compliance ready
- Cookie consent management
- Data encryption best practices

🎨 DESIGN SYSTEMS AVANZADOS:
- Design tokens implementation
- Consistent color palette con HSL
- Typography scale mathematical (1.25 ratio)
- Spacing system based on 8px grid
- Component library structure
- Icon system with SVG sprites
- Animation timing library
- Shadow system organized
- Border radius consistent system
- Opacity scales systematic

💎 FRAMEWORKS Y LIBRERÍAS MODERNAS:
- Vanilla JavaScript priority (no dependencies unnecessary)
- CSS custom framework personal
- Animation library custom con GSAP concepts
- State management con localStorage
- Routing system con History API
- Component system modular
- Event system organized
- Utility functions library
- Polyfills conditional loading

🚀 PWA CAPABILITIES:
- Service Worker registration
- Offline functionality
- App manifest.json complete
- Install prompt optimization
- Push notifications setup
- Background sync implementation
- Cache strategies advanced
- Update mechanisms automatic
- App icons all sizes
- Splash screens custom

🎯 CONVERSION OPTIMIZATION:
- Call-to-action buttons optimized
- Form completion optimization
- Page speed optimization
- Social proof elements
- Trust signals placement
- Urgency indicators
- Progress indicators
- Testimonials integration
- Contact information prominent
- Security badges visible

🔥 TENDENCIAS 2024-2025:
- Bento box layouts
- Kinetic typography
- Scroll-triggered animations
- Micro-interactions everywhere
- Voice interface integration
- AI chatbot integration
- Augmented Reality features
- 3D elements con CSS 3D transforms
- Immersive scrolling experiences
- Data visualization interactive

🎪 EFECTOS CREATIVOS ÚNICOS:
- Morphing shapes con clip-path
- Text reveal animations
- Image hover distortions
- Liquid navigation menus
- Floating action buttons
- Magnetic cursor effects
- Scroll progress indicators
- Loading animations creative
- Error state animations
- Success state celebrations

INSTRUCCIONES TÉCNICAS ESPECÍFICAS:
- HTML5 semantic perfecto: header, nav, main, section, article, aside, footer
- CSS Grid Layout para estructura principal
- Flexbox para componentes internos
- CSS Custom Properties para theming
- JavaScript ES6+ features exclusively
- No jQuery o librerías obsoletas
- Performance budget: < 3 segundos loading
- Accessibility score: AAA compliance
- SEO score: 100/100 Google PageSpeed
- Mobile score: 100/100 Mobile-Friendly Test

ESTRUCTURA OBLIGATORIA:
<!DOCTYPE html>
<html lang="es">
<head>
    - Meta charset UTF-8
    - Viewport responsive meta tag
    - Title optimizado para SEO
    - Meta description compelling
    - Open Graph tags complete
    - Favicon implementation
    - Preconnect a Google Fonts
    - CSS inline para critical path
</head>
<body>
    - Header con navegación responsive
    - Hero section impactante
    - Content sections bien estructuradas
    - Footer completo con links
    - JavaScript inline para funcionalidad
</body>
</html>

IMPORTANTE CRÍTICO: 
- Responde ÚNICAMENTE con el código HTML completo y funcional
- NO incluyas marcas de código markdown como backticks triple
- NO incluyas explicaciones ni texto adicional antes o después
- NO incluyas ningún texto antes del <!DOCTYPE html>
- Empieza directamente con <!DOCTYPE html> y termina con </html>
- El código debe ser 100% funcional y auto-contenido
- Incluye CSS y JavaScript inline en el mismo archivo
- Usa imágenes reales de Unsplash con URLs válidas
- Debe verse espectacular en móvil, tablet y desktop
- Implementa al menos 15 de las técnicas mencionadas arriba
- La página debe ser relacionada específicamente con: ${objective}
- NO incluyas explicaciones ni texto adicional
- NO incluyas ningún texto antes o después del HTML
- El HTML debe empezar directamente con <!DOCTYPE html>
- El HTML debe ser completamente funcional y auto-contenido
- Incluye CSS y JavaScript inline en el mismo archivo
- Asegúrate de que la página esté relacionada con el objetivo proporcionado

Genera la página web más impresionante y avanzada posible:`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: prompt,
        });

        let htmlContent = response.text || "Error al generar la página web";
        
        // Limpiar marcas de código markdown si existen
        htmlContent = cleanHTMLContent(htmlContent);
        
        return htmlContent;
    } catch (error) {
        console.error('Error generating webpage:', error);
        throw new Error(`Error al generar la página web: ${error.message}`);
    }
}

// Function to clean HTML content from markdown code blocks
function cleanHTMLContent(content) {
    // Remover marcas de código markdown
    content = content.replace(/^```html\s*/i, '');
    content = content.replace(/^```\s*/m, '');
    content = content.replace(/```\s*$/m, '');
    
    // Remover texto extra antes del DOCTYPE
    const doctypeIndex = content.indexOf('<!DOCTYPE');
    if (doctypeIndex > 0) {
        content = content.substring(doctypeIndex);
    }
    
    // Remover texto extra después del HTML final
    const htmlEndIndex = content.lastIndexOf('</html>');
    if (htmlEndIndex > 0) {
        content = content.substring(0, htmlEndIndex + 7);
    }
    
    return content.trim();
}

// Function to download the generated HTML file
function downloadHTMLFile(htmlContent, filename = 'pagina-web-avanzada.html') {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Function to show preview in iframe
function showPreview(htmlContent) {
    const previewFrame = document.getElementById('preview-frame');
    if (previewFrame) {
        // Create a blob URL for the HTML content
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
        
        // Clean up the URL after a delay
        setTimeout(() => URL.revokeObjectURL(url), 60000);
    }
}

// Function to open preview in fullscreen
function openFullscreen() {
    const previewFrame = document.getElementById('preview-frame');
    if (previewFrame && previewFrame.src) {
        // Open the iframe source in a new tab for fullscreen experience
        window.open(previewFrame.src, '_blank', 'width=' + screen.width + ',height=' + screen.height + ',fullscreen=yes');
    } else {
        alert('Primero genera una página web para ver en pantalla completa');
    }
}

// Main function to handle AI webpage generation
async function handleAIGeneration(state) {
    const aiStatus = document.getElementById('ai-status');
    const aiResult = document.getElementById('ai-result');
    const btnGenerate = document.getElementById('btn-ai-generate');
    
    try {
        // Show loading state
        aiStatus.style.display = 'block';
        aiResult.style.display = 'none';
        btnGenerate.disabled = true;
        btnGenerate.textContent = 'Generando...';
        
        // Get objective and description from state
        const objective = state.goal || 'Crear una página web moderna';
        let description = `Usuario: ${state.name}`;
        if (state.country) description += `, País: ${state.country}`;
        description += `. Sitios planeados: ${state.count}`;
        
        // Add domain descriptions
        for (let i = 0; i < state.count; i++) {
            if (state.domains[i] && state.desc[i]) {
                description += `. Sitio ${i + 1}: ${state.domains[i]}.netlify.app - ${state.desc[i]}`;
            }
        }
        
        // Generate the advanced webpage
        generatedWebsiteHTML = await generateAdvancedWebpage(objective, description);
        
        // Show result
        aiStatus.style.display = 'none';
        aiResult.style.display = 'block';
        
        // Show preview
        showPreview(generatedWebsiteHTML);
        
        // Add confetti effect
        if (typeof createConfetti === 'function') {
            createConfetti();
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert('Error al generar la página web: ' + error.message);
        aiStatus.style.display = 'none';
    } finally {
        btnGenerate.disabled = false;
        btnGenerate.textContent = '🚀 Generar página web';
    }
}

// Export functions for use in main script
window.AICreator = {
    handleAIGeneration,
    downloadHTMLFile: () => {
        if (generatedWebsiteHTML) {
            downloadHTMLFile(generatedWebsiteHTML);
        } else {
            alert('Primero genera una página web');
        }
    },
    openFullscreen: openFullscreen,
    regenerate: (state) => {
        generatedWebsiteHTML = '';
        handleAIGeneration(state);
    }
};
