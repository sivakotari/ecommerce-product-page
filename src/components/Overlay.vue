<template>
    <div class="overlay" @click="clickHandler">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .overlay {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--black-alpha);
        z-index: 999;
    }
</style>

<script>
export default {
    methods: {
        clickHandler(e) {
            if(!e.target.classList.contains('overlay')) return;
            this.$emit('clickOutSide');
        }
    },
    emits: ['clickOutSide']
}
</script>