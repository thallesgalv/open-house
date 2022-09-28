import { ref } from 'vue'
const activeModal = ref('')

export const useModal = () => {
  const isModalActive = (modalId) => activeModal.value === modalId
  const openModal = (modalId) => (activeModal.value = modalId)
  const closeModal = () => (activeModal.value = '')

  return {
    activeModal,
    isModalActive,
    openModal,
    closeModal
  }
}
