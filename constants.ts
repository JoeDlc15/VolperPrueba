
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'CIR01',
    ref: '082',
    name: 'Empaquetadura Círculo Mediano Nissan',
    description: 'Empaquetadura de alta resistencia para motores Nissan medianos. Material compuesto de corcho y caucho.',
    category: 'Gaskets',
    brand: 'Nissan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgw9TGgZ076dFmXMo_rc9F61Av0w2EwKSzrpl4cUHokEM4xjMzPG-DZnt5uDP62SpvWkrFE1Zcqo_sG0ZYVZcfdZzBwk9UAp33H83lS6BXfKyUhiW081XdCYgWclIuCG1PM1j57F7Tmwn0SwPPv514APkIMr5gZM2sajzNC5UIEEWu-xO4B4Lm-ruvh3TOS3NDW4nRu0ChJWMiJB76N2RBxbin5-SpBNmL7UQr9hNLV_R7IPzp8RH3xwnjDiK4rgjLKLCWifrhI0c',
    stock: 'In Stock',
    material: 'Compuesto Corcho/Caucho',
    specs: {
      'Diámetro': '150mm',
      'Espesor': '2.5mm',
      'Certificación': 'ISO 9001'
    }
  },
  {
    id: '2',
    sku: 'LDA02',
    ref: '083',
    name: 'Empaquetadura LDA Nissan Moderno',
    description: 'Diseño avanzado para motores modernos Nissan, optimizado para altas presiones.',
    category: 'Gaskets',
    brand: 'Nissan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg_HemTCgK0tw_uYBO51PngHkkiM_ki8Tc38WbzxIIWpq4kXX_cw8UG9HZgcGcDH7QF3LHOVth8u1ah_t9k716ImZLoyjCkVv751DoG-e39BA8o917YaqrRtYSEF7UXu_8aiUZa5ip5JqR0G84L0_gNy0dhXN-PAqU110Rae0IeNMJ1LWztCkmkOaxImJ9xWibCTI08RMqmwWkmu-X9NZgiM9gutxAaYBBQgk-T3BOOqvd0dnTh5FHc-xQG6FukosizNFFGEsbCwU',
    stock: 'In Stock'
    // Removed duplicate brand property
  },
  {
    id: '3',
    sku: 'LDA01',
    ref: '084',
    name: 'Empaquetadura LDA Nissan Antiguo',
    description: 'Referencia clásica para motores Nissan de generaciones anteriores. Durabilidad probada.',
    category: 'Gaskets',
    brand: 'Nissan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZlvFsAWYGXQyyFruH8btxRDDAbeWk-fAbyVoxwIf0d3DrBFl_qqEBgTzPD9GPzVXEdCfW3lzeMIPprZTS5czyMXbajmqe1a1UpYzaJgwLdjOLbVOuOgaZeain84uytfNVOORu7eixm7gLJUAUYFf2t8S3hBGfsuNl3jzJiXstt1UP_LJdlFNBOTCewifXXn9w8jriGNDMP9cEs2V2hhO5CT_ovCPv1tzaB4fNlU-PplUi7Es2N5JIp7_DpekkY9iT4HHDtK4wivs',
    stock: 'Low Stock'
  },
  {
    id: '4',
    sku: 'TOY01',
    ref: '085',
    name: 'Empaquetadura Rotativa Toyota',
    description: 'Componente especializado para sistemas rotativos Toyota. Sellado hermético garantizado.',
    category: 'Gaskets',
    brand: 'Toyota',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_s555mWiI4G8GmWZC5K5CctKEzJa3QFDEQ39YIMNry_sD3iTeNBWBhEp2ziRdnivSVdWKZPWtKEsJiPKuPE7_KXIOTTyvVBlSSbUivmf5PMPWA1rLpaQBQwn6c9H3mrAsDdID0nijoxs7P46r5-KCf8elGsK43Ji4uVTxD-uB3rZyz1brkmmLmr7UHrcPdlVYrv9UAXHnuwfIZyRbcOHF6tFTJmOWuS9kGcWJgeNg7uMVLQMFwSCC1v5JUNeIPYCI74aKm_UcL_E',
    stock: 'In Stock'
  },
  {
    id: '5',
    sku: 'MITS08',
    ref: '086',
    name: 'Emp. Governador R900 Mitsubishi',
    description: 'Empaquetadura de 8 huecos para reguladores Mitsubishi R900.',
    category: 'Gaskets',
    brand: 'Mitsubishi',
    image: 'https://picsum.photos/seed/mits8/400/400',
    stock: 'In Stock'
  },
  {
    id: '6',
    sku: 'T2B01',
    ref: '091',
    name: 'Emp. Governador Toyota 2B',
    description: 'Repuesto original para motores Toyota serie 2B.',
    category: 'Gaskets',
    brand: 'Toyota',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFHoxeuL62k-2fH1XASEtocMRiX5PXo3iHhyEUyhz3Vnig0459Oj72ZW6eS4xMY7-iCvu7JuQE2-8rs5Bqaq0ytKZavsmRCR_sAGs_Ykzb2SgbFmOa845rEhyQDaEdpJ9b5vlfs4bzuM3gJ3BCQ7LnTa7cTlDOo-tGXLSj_fK4a1uldG-VdJbhqrYte3ViBoAsd8AYuq95JglwSGnrbpazbdNz7HdQDUcjCMuiJuO6Ncr5Y_aIScvIojoMET6UIUrbJp7xI-NQry0',
    stock: 'In Stock'
  },
  {
    id: '7',
    sku: 'BU-3000-038',
    ref: 'F01',
    name: 'Unión de Bronce Clase 3000',
    description: 'Conexión de bronce de alta presión para aplicaciones industriales críticas.',
    category: 'Fittings',
    brand: 'Volper',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWJQd3mdOZquoyWsvOgzhHMvCgDzKtE-acpAczdxfc8tQXMJBsU-K6zofFAGt9DaefN9sSF-TZ3YDjlfor2W8LBq5A_nOYSDDega3dt8GFl1mZEpvYnbpdvDJMSG0Y5BOuwKZ4fh7Y4rpqY6T8TrqViWQI3pvPNPxCo1irKsj2wE0xu8QPrOEHtRWnW1B6Gwgm2Ikef2rhgqSkfh_p67u23CN1a1q80Izu4TOxJ_ByQXCvPO9mws1t10uSqi5UmuFKUYZGAo4oVBA',
    stock: 'In Stock',
    material: 'Bronce C95400',
    specs: {
      'Presión': '3000 PSI',
      'Rosca': 'NPT',
      'Medida': '3/8"'
    }
  }
];
