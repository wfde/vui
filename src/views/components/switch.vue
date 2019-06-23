<template>
    <section>
        <div class="item">
            <v-switch @change="change" :disabled="false" :size="'small'"></v-switch>
            <v-switch @change="change" :bgcolor="'success'" :disabled="false" :size="'small'"></v-switch>
            <v-switch @change="change" :bgcolor="'warning'" :disabled="false" :size="'small'"></v-switch>
            <v-switch @change="change" :bgcolor="'danger'" :disabled="false" :size="'small'"></v-switch>
            <v-switch @change="change" :bgcolor="'danger'" :disabled="true" :size="'small'"></v-switch>
        </div>

        <div class="item">
            <v-switch @change="change" :disabled="false"></v-switch>
            <v-switch @change="change" :bgcolor="'success'" :disabled="false"></v-switch>
            <v-switch @change="change" :bgcolor="'warning'" :disabled="false"></v-switch>
            <v-switch @change="change" :bgcolor="'danger'" :disabled="false"></v-switch>
            <v-switch @change="change" :bgcolor="'danger'" :disabled="true"></v-switch>
        </div>

        <div class="item">
            <v-switch @change="change" :bgcolor="'danger'" :size="'large'"></v-switch>
            <v-switch @change="change" :bgcolor="'success'" :size="'large'"></v-switch>
            <v-switch @change="change" :bgcolor="'warning'" :size="'large'"></v-switch>
            <v-switch @change="change" :bgcolor="'danger'" :size="'large'"></v-switch>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        methods: {
            change(val: boolean) {
                console.log(val);
            }
        }
    };

</script>
<style lang="scss" scoped>
    .item {
        text-align: left;
    }
</style>

