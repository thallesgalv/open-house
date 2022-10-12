<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '/firebase/config'
import GiftListContainer from '@/containers/GiftListContainer.vue'
import CustomLoader from '@/components/CustomLoader.vue'

const giftList = ref([])
const isGiftListLoading = ref(false)

const getGifts = async () => {
  isGiftListLoading.value = true
  try {
    const querySnapshot = await getDocs(collection(db, 'gifts'))
    querySnapshot.forEach((doc) => {
      const newDoc = {
        id: doc.id,
        ...doc.data()
      }
      giftList.value.push(newDoc)
    })
  } finally {
    isGiftListLoading.value = false
  }
}

onMounted(getGifts)
</script>

<template>
  <GiftListContainer
    v-if="giftList.length && !isGiftListLoading"
    :giftList="giftList"
    :isGiftListLoading="isGiftListLoading"
  />
  <div class="flex items-center justify-center w-full">
    <CustomLoader v-if="isGiftListLoading" />
    <p
      v-if="giftList.length === 0 && !isGiftListLoading"
      class="italic text-center"
    >
      Erro ao carregar a lista de presentes! Manda um zap pra me avisar que tá
      fora do ar!
    </p>
  </div>
</template>
