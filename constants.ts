
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'CIR01',
    ref: '001',
    name: 'Unión Armada',
    description: 'Empaquetadura de alta resistencia para motores Nissan medianos. Material compuesto de corcho y caucho.',
    category: 'Bronce',
    brand: 'Nissan',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413227/unionArmada_uxrita.png',
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
    ref: '002',
    name: 'Unión Armada Mixta',
    description: 'Diseño avanzado para motores modernos Nissan, optimizado para altas presiones.',
    category: 'Bronce',
    brand: 'Nissan',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413386/unionArmadaMixta_nichld.png',
    stock: 'In Stock'
    // Removed duplicate brand property
  },
  {
    id: '3',
    sku: 'LDA01',
    ref: '003',
    name: 'Cono',
    description: 'Referencia clásica para motores Nissan de generaciones anteriores. Durabilidad probada.',
    category: 'Bronce',
    brand: 'Nissan',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413536/Cono_ufddeh.png',
    stock: 'Low Stock'
  },
  {
    id: '4',
    sku: 'TOY01',
    ref: '004',
    name: 'Cono Milimetrico',
    description: 'Componente especializado para sistemas rotativos Toyota. Sellado hermético garantizado.',
    category: 'Bronce',
    brand: 'Toyota',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413536/ConoMilemetrico_pgtmvc.png',
    stock: 'In Stock'
  },
  {
    id: '5',
    sku: 'MITS08',
    ref: '005',
    name: 'Guía o Clavija',
    description: 'Empaquetadura de 8 huecos para reguladores Mitsubishi R900.',
    category: 'Bronce',
    brand: 'Mitsubishi',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413536/GuiaClavija_g6hbwf.png',
    stock: 'In Stock'
  },
  {
    id: '6',
    sku: 'T2B01',
    ref: '006',
    name: 'Guía o Clavija Milimetrica',
    description: 'Repuesto original para motores Toyota serie 2B.',
    category: 'Bronce',
    brand: 'Toyota',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413536/GuiaClavijaMilimetrico_p1zwrc.png',
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
