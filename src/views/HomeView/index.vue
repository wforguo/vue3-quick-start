<template>
    <LayoutPage class="work" v-loading="loading">
        <template #header>审核</template>
        <template #actions>
            <a-input v-model:value="form.username" placeholder="请输入用户名" style="width: 180px" />
            <a-button type="primary" @click="fetch">查询</a-button>
        </template>
        <a-table :columns="tableColumns" :data-source="tableData" :pagination="false" :scroll="{ y: 600 }"></a-table>
        <template #pagination>
            <a-pagination :total="tableData.length" show-size-changer />
        </template>
    </LayoutPage>
</template>
<script setup lang="ts">
defineOptions({
    name: 'WorkView',
    title: 'WorkView'
})
import { useLoading } from '@/hooks'
const { loading, showLoading, hideLoading } = useLoading()
const tableData = new Array(100).fill({}).map(index => {
    return {
        key: index + 1,
        username: 'username' + Math.random(),
        userID: '123456' + Math.random(),
        gender: '男' + Math.random(),
        phoneNumber: '13888888888' + Math.random()
    }
})
const tableColumns = [
    {
        title: '用户昵称',
        dataIndex: 'username',
        align: 'center'
    },
    {
        title: '用户ID',
        dataIndex: 'userID',
        align: 'center'
    },
    {
        title: '性别',
        dataIndex: 'gender',
        align: 'center'
    },
    {
        title: '手机号码',
        dataIndex: 'phoneNumber',
        align: 'center'
    }
]

let form = ref({
    username: ''
})

const fetch = () => {
    loading.value ? hideLoading() : showLoading()
    setTimeout(() => {
        hideLoading()
    }, 1500)
}

fetch()
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
