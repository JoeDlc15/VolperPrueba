
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
    name: 'Tuerca unión Cañería',
    description: 'Empaquetadura de 8 huecos para reguladores Mitsubishi R900.',
    category: 'Bronce',
    brand: 'Mitsubishi',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771416772/Tuerca_golpwg.png',
    stock: 'In Stock'
  },
  {
    id: '6',
    sku: 'MITS08',
    ref: '006',
    name: 'Tuerca unión Cañería MM',
    description: 'Empaquetadura de 8 huecos para reguladores Mitsubishi R900.',
    category: 'Bronce',
    brand: 'Mitsubishi',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771417262/TuercaMilimetrico_odwxiq.png',
    stock: 'In Stock'
  },
  {
    id: '7',
    sku: 'MITS08',
    ref: '007',
    name: 'Guía o Clavija',
    description: 'Empaquetadura de 8 huecos para reguladores Mitsubishi R900.',
    category: 'Bronce',
    brand: 'Mitsubishi',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413536/GuiaClavija_g6hbwf.png',
    stock: 'In Stock'
  },
  {
    id: '8',
    sku: 'T2B01',
    ref: '008',
    name: 'Guía o Clavija Milimetrica',
    description: 'Repuesto original para motores Toyota serie 2B.',
    category: 'Bronce',
    brand: 'Toyota',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771413536/GuiaClavijaMilimetrico_p1zwrc.png',
    stock: 'In Stock'
  },
  {
    id: '9',
    sku: 'BU-3000-038',
    ref: '009',
    name: 'Conector Recto NPT (Armado)',
    description: 'Conexión de bronce de alta presión para aplicaciones industriales críticas.',
    category: 'Bronce',
    brand: 'Volper',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771416738/Conector_Recto_aihece.png',
    stock: 'In Stock',
    material: 'Bronce C95400',
    specs: {
      'Presión': '3000 PSI',
      'Rosca': 'NPT',
      'Medida': '3/8"'
    }
  }
  ,
  {
    id: '10',
    sku: 'BU-3000-038',
    ref: '010',
    name: 'Conector Recto MM (Armado)',
    description: 'Conexión de bronce de alta presión para aplicaciones industriales críticas.',
    category: 'Bronce',
    brand: 'Volper',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771416727/Conector_Milimetrico_hyxs1g.png',
    stock: 'In Stock',
    material: 'Bronce C95400',
    specs: {
      'Presión': '3000 PSI',
      'Rosca': 'NPT',
      'Medida': '3/8"'
    }
  }
  ,
  {
    id: '11',
    sku: 'BU-3000-038',
    ref: '011',
    name: 'Conector Hembra (Armado)',
    description: 'Conexión de bronce de alta presión para aplicaciones industriales críticas.',
    category: 'Bronce',
    brand: 'Volper',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771416747/ConectorHembra_u7ylye.png',
    stock: 'In Stock',
    material: 'Bronce C95400',
    specs: {
      'Presión': '3000 PSI',
      'Rosca': 'NPT',
      'Medida': '3/8"'
    }
  }
  ,
  {
    id: '12',
    sku: 'BU-3000-038',
    ref: '012',
    name: 'Acoplamiento Macho',
    description: 'Conexión de bronce de alta presión para aplicaciones industriales críticas.',
    category: 'Bronce',
    brand: 'Volper',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771416726/AcoplamientoMacho_bojdec.png',
    stock: 'In Stock',
    material: 'Bronce C95400',
    specs: {
      'Presión': '3000 PSI',
      'Rosca': 'NPT',
      'Medida': '3/8"'
    }
  }
  ,
  {
    id: '13',
    sku: 'BU-3000-038',
    ref: '013',
    name: 'Acoplamiento Hembra',
    description: 'Conexión de bronce de alta presión para aplicaciones industriales críticas.',
    category: 'Bronce',
    brand: 'Volper',
    image: 'https://res.cloudinary.com/dpn43zprq/image/upload/v1771416726/AcoplamientoHembra_xgq4vb.png',
    stock: 'In Stock',
    material: 'Bronce C95400',
    specs: {
      'Presión': '3000 PSI',
      'Rosca': 'NPT',
      'Medida': '3/8"'
    }
  }
];
