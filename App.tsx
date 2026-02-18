
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Page, Product, CartItem } from './types';
import { PRODUCTS } from './constants';

// --- Shared Components ---

const Navbar: React.FC<{ 
  currentPage: Page, 
  onNavigate: (page: Page) => void,
  cartCount: number 
}> = ({ currentPage, onNavigate, cartCount }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed w-full z-50 top-0 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-border-light dark:border-border-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(Page.Home)}>
            <span className="material-icons-outlined text-primary text-4xl">settings_suggest</span>
            <div>
              <h1 className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white leading-none uppercase">
                VOLPER<span className="text-primary">SEAL</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">Suministros Industriales</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { label: 'Inicio', page: Page.Home },
              { label: 'Catálogo', page: Page.Catalog },
              { label: 'Lista de Cotización', page: Page.Cart },
              { label: 'Nosotros', page: Page.About },
              { label: 'Contacto', page: Page.Contact },
            ].map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`${
                  currentPage === link.page 
                    ? 'text-primary font-semibold border-b-2 border-primary' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium'
                } py-2`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate(Page.Cart)}
              className="text-slate-500 hover:text-primary transition-colors relative"
            >
              <span className="material-icons-outlined">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400" 
              onClick={() => setIsDark(!isDark)}
            >
              <span className="material-icons-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-icons-outlined text-primary text-2xl">settings_suggest</span>
          <h5 className="text-white font-bold text-xl">VOLPER SEAL</h5>
        </div>
        <p className="mb-6 max-w-sm text-sm">Proveedor líder de conexiones industriales, sellos y componentes de ingeniería. Sirviendo a las industrias automotriz y manufacturera desde 1995.</p>
        <div className="flex space-x-4">
          <span className="material-icons-outlined hover:text-primary cursor-pointer">facebook</span>
          <span className="material-icons-outlined hover:text-primary cursor-pointer">email</span>
          <span className="material-icons-outlined hover:text-primary cursor-pointer">call</span>
        </div>
      </div>
      <div>
        <h6 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Categorías</h6>
        <ul className="space-y-2 text-sm">
          <li>Conexiones de Bronce</li>
          <li>Arandelas de Aluminio</li>
          <li>Empaquetaduras y Sellos</li>
          <li>Fabricación a Medida</li>
        </ul>
      </div>
      <div>
        <h6 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Empresa</h6>
        <ul className="space-y-2 text-sm">
          <li>Sobre Nosotros</li>
          <li>Descargar Catálogo</li>
          <li>Soporte al Cliente</li>
          <li>Términos de Servicio</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
      © 2024 Volper Seal Industrial Supply Co. Todos los derechos reservados.
    </div>
  </footer>
);

// --- Page Components ---

const HomePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      <header className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Industrial fittings" className="w-full h-full object-cover grayscale opacity-30" src="https://picsum.photos/seed/volper1/1920/1080"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-2/3">
            <span className="inline-block py-1 px-3 rounded bg-primary/20 text-primary border border-primary/30 text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
              Proveedor B2B Premium
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Componentes Industriales <br/>
              <span className="text-primary">de Alta Precisión</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Volper Seal es su socio de confianza para conexiones de bronce de alta calidad, arandelas de aluminio y empaquetaduras especializadas.
            </p>
            <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-2xl max-w-xl flex flex-col sm:flex-row gap-2 border border-slate-200 dark:border-slate-700">
              <div className="relative flex-grow">
                <span className="material-icons-outlined absolute left-3 top-3 text-slate-400">search</span>
                <input className="w-full pl-10 pr-4 py-2.5 bg-transparent border-none focus:ring-0 text-slate-800 dark:text-white placeholder-slate-400" placeholder="Número de parte (e.g., 082 CIR01)"/>
              </div>
              <button 
                onClick={() => onNavigate(Page.Catalog)}
                className="bg-primary hover:bg-primary-hover text-black font-bold py-2.5 px-6 rounded transition-colors flex items-center justify-center gap-2"
              >
                Buscar Catálogo
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-primary font-bold tracking-wider uppercase mb-2">Especialidades</h3>
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Categorías de Productos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Conexiones de Bronce', img: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771414198/ConexionesBronce_sd33p1.jpg' },
              { title: 'Arandelas de Aluminio', img: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771414368/Arandelas_Aluminio_g8zobd.jpg' },
              { title: 'Empaquetaduras Industriales', img: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771416310/Empaquetaduras_bt6jvp.jpg' },
            ].map((cat, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl h-64 shadow-lg cursor-pointer" onClick={() => onNavigate(Page.Catalog)}>
                <img src={cat.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-2xl font-display font-bold text-white mb-1">{cat.title}</h4>
                  <span className="text-primary font-medium flex items-center gap-1">Ver Productos <span className="material-icons-outlined text-sm">arrow_forward</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const CatalogPage: React.FC<{ 
  onProductClick: (p: Product) => void,
  onAddToCart: (p: Product) => void 
}> = ({ onProductClick, onAddToCart }) => {
  const [filter, setFilter] = useState('');
  
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(filter.toLowerCase()) || 
      p.sku.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Catálogo de Productos</h1>
          <p className="text-slate-500 dark:text-slate-400">Mostrando {filteredProducts.length} resultados para su búsqueda.</p>
        </div>
        <div className="w-full md:w-64 relative">
          <input 
            type="text" 
            placeholder="Filtrar por nombre o SKU..." 
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border-border-light dark:border-border-dark rounded-md focus:ring-primary focus:border-primary dark:text-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span className="material-icons-outlined absolute left-3 top-2.5 text-slate-400">search</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="group bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col">
            <div className="p-4 flex justify-between items-start border-b border-dashed border-border-light dark:border-border-dark">
              <span className="font-mono text-2xl font-bold text-slate-300 dark:text-slate-600">{product.ref}</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold font-mono">{product.sku}</span>
            </div>
            <div 
              className="p-6 flex-grow flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <img alt={product.name} className="h-32 object-contain group-hover:scale-105 transition-transform" src={product.image} />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-800 dark:text-white mb-1 line-clamp-1">{product.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{product.category}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => onProductClick(product)}
                  className="flex-1 py-2 border border-slate-300 dark:border-slate-600 rounded text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Detalles
                </button>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="px-3 py-2 bg-primary hover:bg-primary-hover text-black rounded text-sm font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartPage: React.FC<{ 
  cartItems: CartItem[], 
  onUpdateQty: (id: string, delta: number) => void,
  onRemove: (id: string) => void,
  onSubmit: () => void
}> = ({ cartItems, onUpdateQty, onRemove, onSubmit }) => {
  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Solicitud de Cotización</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-surface-light dark:bg-surface-dark rounded-xl border border-dashed border-border-light dark:border-border-dark">
          <span className="material-icons-outlined text-6xl text-slate-300 mb-4">shopping_cart</span>
          <p className="text-slate-500">Su lista está vacía.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark flex items-center gap-4">
                <img src={item.image} className="w-20 h-20 object-contain rounded bg-slate-50 dark:bg-slate-800" />
                <div className="flex-grow">
                  <h4 className="font-bold dark:text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-mono">{item.sku}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onUpdateQty(item.id, -1)} className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white">-</button>
                  <span className="w-8 text-center font-bold dark:text-white">{item.quantity}</span>
                  <button onClick={() => onUpdateQty(item.id, 1)} className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white">+</button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 p-2">
                  <span className="material-icons-outlined">delete</span>
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark h-fit sticky top-24">
            <h3 className="text-xl font-bold mb-6 dark:text-white">Datos de la Empresa</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nombre de Empresa</label>
                <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-border-light dark:border-border-dark rounded p-2 dark:text-white" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Correo Corporativo</label>
                <input required type="email" className="w-full bg-slate-50 dark:bg-slate-800 border-border-light dark:border-border-dark rounded p-2 dark:text-white" />
              </div>
              <button className="w-full py-3 bg-primary hover:bg-primary-hover text-black font-bold rounded-md transition-colors shadow-lg">
                Enviar Solicitud
              </button>
              <p className="text-[10px] text-slate-400 text-center">Un agente se pondrá en contacto con usted en menos de 24 horas.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`Agregado: ${product.name}`);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmitQuote = () => {
    setCart([]);
    handleNavigate(Page.Success);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
      />
      
      <main className="flex-grow">
        {currentPage === Page.Home && <HomePage onNavigate={handleNavigate} />}
        {currentPage === Page.Catalog && (
          <CatalogPage 
            onProductClick={(p) => { setSelectedProduct(p); handleNavigate(Page.ProductDetail); }} 
            onAddToCart={handleAddToCart}
          />
        )}
        {currentPage === Page.Cart && (
          <CartPage 
            cartItems={cart} 
            onUpdateQty={updateCartQty} 
            onRemove={removeFromCart}
            onSubmit={handleSubmitQuote}
          />
        )}
        {currentPage === Page.ProductDetail && selectedProduct && (
          <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/2">
                <div className="aspect-square bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center p-8">
                  <img src={selectedProduct.image} className="max-h-full object-contain" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-primary text-[10px] font-bold uppercase rounded tracking-wider">
                    {selectedProduct.stock === 'In Stock' ? 'Disponible' : 'Stock Bajo'}
                  </span>
                  <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">{selectedProduct.name}</h1>
                  <p className="text-slate-500 font-mono mt-1">SKU: {selectedProduct.sku} | Ref: {selectedProduct.ref}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{selectedProduct.description}</p>
                
                {selectedProduct.specs && (
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 font-bold">Especificaciones Técnicas</div>
                    <table className="w-full text-sm">
                      <tbody>
                        {Object.entries(selectedProduct.specs).map(([key, val]) => (
                          <tr key={key} className="border-b border-slate-100 dark:border-slate-800/80">
                            <td className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400">{key}</td>
                            <td className="px-6 py-4 font-semibold dark:text-white">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <button 
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="w-full py-4 bg-primary hover:bg-primary-hover text-black font-bold rounded-lg flex items-center justify-center gap-3 transition-colors shadow-lg"
                >
                  <span className="material-icons-outlined">playlist_add</span>
                  Agregar a la Lista de Cotización
                </button>
              </div>
            </div>
          </div>
        )}
        {currentPage === Page.About && (
          <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
               <div className="w-full md:w-1/2">
                 <img src="https://picsum.photos/seed/about1/800/600" className="rounded-2xl shadow-2xl" />
               </div>
               <div className="w-full md:w-1/2 space-y-6">
                 <h2 className="text-4xl font-black dark:text-white tracking-tight">Nuestra Historia: Forjando Excelencia</h2>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Fundada en un legado de precisión en 1995, Volper Seal comenzó como un pequeño taller especializado en fundición de bronce de alta calidad. Hoy, somos un líder global en fundición de aluminio y empaquetaduras de alta presión.</p>
                 <div className="flex gap-12">
                   <div>
                     <p className="text-3xl font-bold text-primary">25+</p>
                     <p className="text-sm text-slate-500">Años de Experiencia</p>
                   </div>
                   <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                   <div>
                     <p className="text-3xl font-bold text-primary">500+</p>
                     <p className="text-sm text-slate-500">Socios Globales</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: 'Misión', desc: 'Suministrar al mundo los sellos y accesorios más duraderos para infraestructura crítica.', icon: 'track_changes' },
                 { title: 'Visión', desc: 'Innovar el futuro de las conexiones industriales mediante materiales sostenibles.', icon: 'visibility' },
                 { title: 'Valores', desc: 'Integridad en nuestros tratos, precisión micrométrica y seguridad ante todo.', icon: 'verified_user' },
               ].map((item, i) => (
                 <div key={i} className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-soft">
                   <span className="material-icons-outlined text-primary text-4xl mb-4">{item.icon}</span>
                   <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        )}
        {currentPage === Page.Contact && (
          <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-border-light dark:border-border-dark">
                 <h3 className="text-2xl font-bold mb-8 dark:text-white">Envíanos un Mensaje</h3>
                 <form className="space-y-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium mb-2 dark:text-gray-300">Nombre Completo</label>
                       <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-border-light dark:border-border-dark rounded-lg p-3 dark:text-white" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium mb-2 dark:text-gray-300">Empresa</label>
                       <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-border-light dark:border-border-dark rounded-lg p-3 dark:text-white" />
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2 dark:text-gray-300">Mensaje o Requerimiento</label>
                     <textarea rows={6} className="w-full bg-slate-50 dark:bg-slate-900 border-border-light dark:border-border-dark rounded-lg p-3 dark:text-white"></textarea>
                   </div>
                   <button className="bg-primary hover:bg-primary-hover text-black font-bold py-3 px-8 rounded-lg transition-all shadow-md">
                     Enviar Mensaje
                   </button>
                 </form>
               </div>
               <div className="lg:col-span-5 space-y-8">
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-border-light dark:border-border-dark">
                    <h3 className="text-xl font-bold mb-6 dark:text-white">Información de Contacto</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <span className="material-icons-outlined text-primary">location_on</span>
                        <div>
                          <p className="font-bold dark:text-white">Sede Central</p>
                          <p className="text-slate-500 text-sm">Industrial Parkway, Houston, TX 77032</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="material-icons-outlined text-primary">call</span>
                        <div>
                          <p className="font-bold dark:text-white">Teléfono</p>
                          <p className="text-slate-500 text-sm">+1 (555) 019-2834</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="material-icons-outlined text-primary">mail</span>
                        <div>
                          <p className="font-bold dark:text-white">Email</p>
                          <p className="text-slate-500 text-sm">ventas@volperseal.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        )}
        {currentPage === Page.Success && (
          <div className="pt-24 pb-16 flex items-center justify-center">
            <div className="text-center max-w-xl px-4">
              <div className="relative flex items-center justify-center mb-8">
                <div className="relative flex items-center justify-center size-24 bg-primary/10 rounded-full ring-1 ring-primary/20">
                  <span className="material-symbols-outlined text-6xl text-primary">check_circle</span>
                </div>
              </div>
              <h1 className="text-3xl font-extrabold dark:text-white mb-4">¡Solicitud Enviada con Éxito!</h1>
              <p className="text-slate-500 mb-8">Un representante técnico revisará su solicitud y se pondrá en contacto con usted en un plazo menor a 24 horas.</p>
              <button 
                onClick={() => handleNavigate(Page.Home)}
                className="bg-primary hover:bg-primary-hover text-black font-bold py-3 px-10 rounded-xl transition-all shadow-md"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
