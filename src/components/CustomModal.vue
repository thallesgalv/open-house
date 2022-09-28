<script setup>
import { ref } from 'vue'
import { useModal } from '@/composables/useModal'

defineProps({
  isModalVisible: {
    type: Boolean,
    default: false,
    required: true
  }
})

const { closeModal } = useModal()

const containerModalRef = ref(null)

const handleClickOutside = ({ target }) => {
  if (target === containerModalRef.value) closeModal()
}
</script>

<template>
  <Teleport to="#modal">
    <div
      v-if="isModalVisible"
      class="fixed top-0 right-0 flex items-start justify-center w-full h-screen pt-12 bg-black/60"
      @click="handleClickOutside"
      ref="containerModalRef"
    >
      <div
        class="w-full p-4 m-4 bg-white rounded shadow-md md:max-w-lg animate-show"
      >
        <div class="flex justify-end w-full">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1.25em"
            width="1.25em"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
            @click="closeModal"
          >
            <path
              fill="none"
              stroke="#000"
              stroke-width="2"
              d="M3,3 L21,21 M3,21 L21,3"
            ></path>
          </svg>
        </div>
        <div><slot name="modalContent" /></div>
      </div>
    </div>
  </Teleport>
</template>
