<template>
    <div class="mobile-nav-menu-wrapper">
        <button role="button" class="close" @click="$emit('close')">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
        </button>
        <nav class="">
            <ul role="list" class="">
                <li class v-for="item in navlist" :key="item">
                    <a href="#" class="nav_links">{{ item }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        navlist: {
            type: Array,
            default: []
        }
    },
    emits: ['close']
}
</script>

<style lang="scss">
@use "../styles/_functions" as *;

.mobile-nav-menu-wrapper {
    max-width: 67%;
    background-color: var(--white);
    height: 100%;
    padding: rem(20) rem(24);
    nav {
        margin-top: rem(40);
        ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 18px;
            font-weight: 700;
        }
    }
}
.close {
    margin: rem(5) rem(1);
}

</style>