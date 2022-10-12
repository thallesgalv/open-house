import amazonLogo from '@/assets/amazon.png'
import americanasLogo from '@/assets/americanas.png'
import casasbahiaLogo from '@/assets/casasbahia.png'
import magaluLogo from '@/assets/magalu.png'
import mercadolivreLogo from '@/assets/mercadolivre.webp'
import shopeeLogo from '@/assets/shopee.png'
import shoptimeLogo from '@/assets/shoptime.png'
import camicadoLogo from '@/assets/camicado.webp'
import carrefourLogo from '@/assets/carrefour.webp'
import extraLogo from '@/assets/extra.webp'
import polishopLogo from '@/assets/polishop.webp'

export const useGiftStores = (storeName) => {
  const stores = {
    amazon: {
      name: 'Amazon',
      logo: amazonLogo
    },
    americanas: {
      name: 'Americanas',
      logo: americanasLogo
    },
    casasBahia: {
      name: 'Casas Bahia',
      logo: casasbahiaLogo
    },
    magalu: {
      name: 'Magalu',
      logo: magaluLogo
    },
    mercadoLivre: {
      name: 'Mercado Livre',
      logo: mercadolivreLogo
    },
    shopee: {
      name: 'Shopee',
      logo: shopeeLogo
    },
    shopTime: {
      name: 'Shoptime',
      logo: shoptimeLogo
    },
    camicado: {
      name: 'Camicado',
      logo: camicadoLogo
    },
    carrefour: {
      name: 'Carrefour',
      logo: carrefourLogo
    },
    extra: {
      name: 'Extra',
      logo: extraLogo
    },
    polishop: {
      name: 'Polishop',
      logo: polishopLogo
    }
  }

  return stores[storeName]
}
