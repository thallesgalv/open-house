<script setup>
import GiftListView from '@/views/GiftListView.vue'
import CustomHeader from '@/components/CustomHeader.vue'
import CustomIntro from '@/components/CustomIntro.vue'
</script>

<template>
  <div>
    <CustomHeader />
    <div class="p-8 mx-auto max-w-7xl">
      <CustomIntro />
      <GiftListView />
    </div>
  </div>
</template>
