<script setup>
import GiftListView from '@/views/GiftListView.vue'
import CustomHeader from '@/components/CustomHeader.vue'
import CustomIntro from '@/components/CustomIntro.vue'
</script>

<template>
  <div>
    <CustomHeader />
    <div class="bg-red-100">
      <CustomIntro />
    </div>
    <div class="p-8 mx-auto max-w-7xl">
      <GiftListView />
    </div>
  </div>
</template>
