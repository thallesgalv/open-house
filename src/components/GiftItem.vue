<script setup>
import { useCurrency } from '@/composables/useCurrency'
import { ref, computed } from 'vue'

const props = defineProps({
  giftData: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['openGiftModal'])

const giftedBy = ref(props.giftData?.presenteado || '')

const buttonText = computed(() =>
  giftedBy.value ? `Presenteado por: ${giftedBy.value}` : 'Presenteie!'
)

const dynamicCardClasses = computed(() =>
  giftedBy.value
    ? 'cursor-not-allowed opacity-50'
    : 'transition-transform md:hover:scale-110'
)

const openGiftModal = () =>
  giftedBy.value || emit('openGiftModal', props.giftData)
</script>

<template>
  <div
    class="flex items-center justify-center gap-2 p-4 bg-white shadow-md cursor-pointer md:flex-col"
    :class="dynamicCardClasses"
    @click="openGiftModal"
  >
    <img
      :src="giftData?.foto"
      :alt="giftData?.nome"
      class="w-24 h-24 md:w-36 md:h-36"
    />
    <div class="flex flex-col gap-1 text-sm text-center">
      <p v-if="giftData?.nome" class="font-semibold text-primary md:text-lg">
        {{ giftData?.nome }}
      </p>
      <p v-if="giftData?.preco">
        A partir de {{ useCurrency(giftData?.preco) }}
      </p>
      <button
        class="px-1 py-2 mt-1 text-white truncate rounded bg-primary h-9"
        :class="giftData?.presenteado && 'cursor-none bg-gray-500 text-xs'"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
