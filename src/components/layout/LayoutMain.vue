<template>
    <Layout class="layout-page">
        <LayoutMainHeader @back="$router.back()" />
        <Layout class="layout-content">
            <LayoutMainMenu />
            <LayoutContent class="layout-inner">
                <router-view v-slot="{ Component, route }">
                    <keep-alive>
                        <component :is="Component" v-if="route.meta && route.meta.keepAlive" :key="route.fullPath" />
                    </keep-alive>
                    <component :is="Component" v-if="!(route.meta && route.meta.keepAlive)" :key="route.fullPath" />
                </router-view>
            </LayoutContent>
        </Layout>
    </Layout>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'LayoutMain'
})
import { Layout } from 'ant-design-vue'
import LayoutMainHeader from '@/components/layout/LayoutMainHeader.vue'
import LayoutMainMenu from '@/components/layout/LayoutMainMenu.vue'

const { Content: LayoutContent } = Layout
</script>

<style scoped lang="scss">
.layout-page {
    width: 100%;
    height: 100%;
    background: none;
    .layout-content {
        flex: 1;
        height: 100%;
        display: flex;
        background: none;
        flex-direction: row;
        padding: 0;
        .layout-inner {
            width: 100%;
            height: 100%;
            padding: 24px;
            min-width: 1140px;
            overflow: hidden;
            flex-grow: 1;
            overflow-y: auto;
            background: rgb(242 243 245);
        }
    }
}
</style>
