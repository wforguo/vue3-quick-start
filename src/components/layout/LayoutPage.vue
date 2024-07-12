<script setup lang="ts">
defineOptions({
    name: 'LayoutPage'
})

import { usePageTableSize } from '@/hooks'
const pageTableRef = ref<HTMLElement>()
const pageTableHeight = ref<number>(0)

usePageTableSize(pageTableRef, ({ height }) => {
    pageTableHeight.value = height
})

interface IProps {
    scrollY?: boolean
    title?: any
}

const meatTitle = ''
const props = withDefaults(defineProps<IProps>(), {
    scrollY: true,
    title: ''
})
</script>

<template>
    <div class="page">
        <div class="page-header">
            <slot name="header">
                {{ title || meatTitle || '' }}
            </slot>
        </div>
        <div class="page-actions" v-if="$slots.actions">
            <slot name="actions" />
        </div>
        <div class="page-table" :class="{ 'scroll-y': scrollY }" ref="pageTableRef">
            <slot name="default" :height="pageTableHeight" />
        </div>
        <div class="page-pagination" v-if="$slots.pagination">
            <slot name="pagination" />
        </div>
    </div>
</template>

<style lang="scss">
$gap: 16px;
.page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    .page-header {
        height: 50px;
        line-height: 50px;
        font-weight: bold;
        font-size: $gap;
        color: #333;
        padding: 0 $gap;
        flex-shrink: 0;
    }
    .page-actions {
        margin: 0 $gap $gap;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: $gap;
    }
    .page-table {
        margin: 0 $gap;
        flex: 1;
        height: 100%;
        overflow: hidden;
        border-bottom: none;
        &.scroll-y {
            overflow-y: auto;
        }
    }
    .page-pagination {
        margin: 0 $gap;
        height: 59px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 17px;
        flex-shrink: 0;
    }
}
</style>
