<template>
    <a-config-provider :locale="zhCN">
        <home-view />
    </a-config-provider>
</template>
<script lang="ts" setup>
import HomeView from '@/views/HomeView/index.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>
