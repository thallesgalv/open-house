<script setup>
import { useCurrency } from '@/composables/useCurrency'
import { ref, computed, getCurrentInstance } from 'vue'
import pixImage from '@/assets/pix.png'

const props = defineProps({
  giftData: {
    type: Object
  },
  pix: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['openGiftModal'])

const giftedBy = ref(props.giftData?.presenteado || '')

const giftName = computed(() =>
  props?.pix ? 'Pode mandar um Pix pra gente :)' : props.giftData?.nome
)
const giftImage = computed(() => (props?.pix ? pixImage : props.giftData?.foto))
const giftPrice = computed(() =>
  props?.pix
    ? 'Ao invés do presente'
    : `A partir de ${useCurrency(props.giftData?.preco)}`
)
const buttonText = computed(() => {
  if (props?.pix) return 'Pix copia e cola'
  return giftedBy.value ? `Presenteado por: ${giftedBy.value}` : 'Presenteie!'
})

const dynamicCardClasses = computed(() =>
  giftedBy.value
    ? 'cursor-not-allowed opacity-50'
    : 'transition-transform md:hover:scale-110'
)

const dynamicAction = () => {
  props?.pix ? copyKey() : openGiftModal()
}

const openGiftModal = () =>
  giftedBy.value || emit('openGiftModal', props.giftData)

const { proxy } = getCurrentInstance()

const copyKey = () => {
  navigator.clipboard.writeText(
    '00020126580014BR.GOV.BCB.PIX0136f40a56a2-da85-4cfc-a6c1-0b3917e0a1785204000053039865802BR5923Thalles Galvao da Silva6006Santos62130509OPENHOUSE63042094'
  )
  proxy.$toast.open({
    message: 'Pix copiado com sucesso!',
    type: 'success',
    duration: 2000,
    dismissible: true,
    position: 'top-right'
  })
}
</script>

<template>
  <div
    class="flex items-center justify-between gap-2 p-4 bg-white shadow-md cursor-pointer md:justify-center md:flex-col md:h-80"
    :class="dynamicCardClasses"
    @click="dynamicAction"
  >
    <img :src="giftImage" class="w-24 h-24 md:w-36 md:h-36" />
    <div class="flex flex-col justify-center gap-1 text-sm text-center">
      <p class="flex justify-center text-base font-semibold text-primary">
        {{ giftName }}
      </p>
      <p>{{ giftPrice }}</p>
      <button
        class="py-2 mx-auto mt-1 text-white truncate rounded w-36 md:w-full bg-primary h-9"
        :class="giftData?.presenteado && 'cursor-none bg-gray-500 text-xs'"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
