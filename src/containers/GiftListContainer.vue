<script setup>
import GiftItem from '@/components/GiftItem.vue'
import CustomModal from '@/components/CustomModal.vue'
import { useModal } from '@/composables/useModal'
import { computed, ref } from 'vue'
import GiftModalContainer from '@/containers/GiftModalContainer.vue'

const { openModal, isModalActive } = useModal()

const giftModalIdentifier = 'giftModal'

const props = defineProps({
  giftList: {
    type: Array,
    default: () => [],
    required: true
  },
  isGiftListLoading: {
    type: Boolean,
    default: false
  }
})

const currentGiftOnModal = ref({})

const openGiftModal = (giftData) => {
  currentGiftOnModal.value = giftData
  openModal(giftModalIdentifier)
}

const sortedGiftList = computed(() => {
  const copyList = [...props.giftList]
  return copyList
    .sort((a, b) => +a?.preco - +b?.preco)
    .sort((a) => (a?.presenteado?.trim() ? 1 : -1))
})
</script>

<template>
  <div class="my-4 lg:my-8">
    <ul
      class="flex flex-col justify-center gap-5 mx-auto md:grid-cols-3 lg:grid-cols-5 md:grid animate-show"
    >
      <li v-for="gift in sortedGiftList" :key="gift.id">
        <GiftItem :giftData="gift" @openGiftModal="openGiftModal" />
      </li>
    </ul>
    <CustomModal :isModalVisible="isModalActive(giftModalIdentifier)">
      <template #modalContent>
        <GiftModalContainer :giftData="currentGiftOnModal" />
      </template>
    </CustomModal>
  </div>
</template>
