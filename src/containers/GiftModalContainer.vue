<script setup>
import { useCurrency } from '@/composables/useCurrency'
import { useGiftStores } from '@/composables/useGiftStores'
import { computed } from 'vue'

const props = defineProps({
  giftData: {
    type: Object,
    required: true
  }
})

const whatsAppLink = computed(
  () =>
    `https://api.whatsapp.com/send?phone=5513997774462&text=Ol%C3%A1!%20Estava%20vendo%20o%20site%20e%20vou%20levar%20${
      props.giftData.nome || ''
    }%20como%20presente`
)
</script>

<template>
  <div class="flex gap-4">
    <div>
      <h1 class="text-2xl font-semibold md:text-3xl text-primary">
        {{ giftData?.nome }}
      </h1>

      <p v-if="giftData?.preco" class="mt-4">
        A partir de
        <strong class="semibold">{{ useCurrency(giftData?.preco) }}</strong>
      </p>
      <p class="mt-2">Onde comprar:</p>
      <ul class="flex flex-wrap gap-1 mt-2">
        <li v-for="(link, store) in giftData?.lojas" :key="store" class="flex">
          <a
            :href="link"
            target="_blank"
            class="flex items-center gap-1 px-2 py-1 border rounded bg-slate-100"
          >
            <img class="w-6" :src="useGiftStores(store)?.logo" />
            <p class="text-xs">{{ useGiftStores(store)?.name }}</p>
          </a>
        </li>
      </ul>
    </div>
    <img
      :src="giftData?.foto"
      :alt="giftData?.nome"
      class="w-24 h-24 md:w-48 md:h-48"
    />
  </div>
  <div class="flex justify-center md:justify-start">
    <button
      class="w-full px-1 py-2 mt-4 text-sm text-white bg-green-500 rounded md:w-72 h-9"
    >
      <a
        :href="whatsAppLink"
        target="_blank"
        class="flex items-center justify-center w-full gap-2"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.1"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z"
          ></path>
        </svg>
        Avisa pra gente que você vai levar!
      </a>
    </button>
  </div>
  <p class="mt-4 text-xs italic md:text-center md:max-w-md md:mx-auto">
    Recomendamos que coloque o próprio endereço, pois se enviarem para cá, a
    entrega pode ser rejeitada por conta do nome do destinatário!
  </p>
</template>
