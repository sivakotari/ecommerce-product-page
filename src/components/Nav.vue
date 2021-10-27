<template>
    <header class="nav_wrapper flex_center">
        <button
            class="mobile_nav nav_hamburger"
            ref="mobile_nav"
            @click="toggleMobileNav"
        >
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
        </button>
        <div class="logo">
            <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                    fill="#1D2026"
                    fill-rule="nonzero"
                />
            </svg>
        </div>
        <nav class="desktop_nav">
            <ul role="list" class="flex_center">
                <li class v-for="item in nav" :key="item">
                    <a href="#" class="nav_links">{{ item }}</a>
                </li>
            </ul>
        </nav>
        <Cart />
        <button class="avatar_wrapper" role="button">
            <img src="../../images/image-avatar.png" alt="avatar" />
        </button>
            
        <!-- <transition name="fade" @after-enter="showMobileNavContent=true" >
            <Overlay v-if='showMobileNav' @clickOutSide='showMobileNavContent = false'>
                <transition name="slide" @after-leave="toggleMobileNav">
                    <MobileNavMenu v-if='showMobileNav' @close='showMobileNavContent = false' :navlist='nav' />
                </transition>
            </Overlay>
        </transition> -->
        <transition name="slide">
            <Overlay v-if='showMobileNav' @clickOutSide='toggleMobileNav'>
                <MobileNavMenu v-if='showMobileNav' @close='toggleMobileNav' :navlist='nav' />
            </Overlay>
        </transition>



    </header>
</template>

<script>
import MobileNavMenu from "./MobileNavMenu.vue"
import Overlay from "./Overlay.vue"
import Cart from "./Cart.vue"

export default {
    components: {
        MobileNavMenu,
        Overlay,
        Cart
    },
    data() {
        return {
            showMobileNav: false,
            // showMobileNavContent: false,
            nav: ["Collections", "Men", "Women", "About", "Contact"],
        };
    },
    methods: {
        toggleMobileNav() {
            this.showMobileNav = !this.showMobileNav
        }
    },
};
</script>

<style lang="scss">
@use "../styles/_functions" as *;

@mixin boxshadow {
    box-shadow: inset 0px -4px 0 0 var(--orange);
}

.nav_wrapper {
    padding: 0 rem(24);
    gap: rem(16);
    border-bottom: rem(1) solid var(--border-grayish-blue);
}

.logo {
    padding: rem(20) 0;
    margin-inline-end: rem(6);
}

.desktop_nav ul {
    font-size: rem(15);
    gap: rem(25);
    color: var(--dark-grayish-blue);
    li {
        padding: rem(42) rem(4) rem(48) rem(4);
        cursor: pointer;
        &:hover,
        &:active,
        &:focus {
            @include boxshadow();
            color: var(--black);
        }
    }
}

.avatar_wrapper {
    position: relative;
    border-radius: 50%;
    width: rem(25);
    height: rem(25);
    margin-bottom: rem(6);
    cursor: pointer;
    outline: none;
    flex-shrink: 0;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: rem(26);
        width: rem(26);
        box-shadow: inset 0 0 0 rem(2) var(--orange);
        border-radius: 50%;
        opacity: 0;
        transition: opacity .1s ease-in-out;
    }
    &:hover,
    &:active,
    &:focus {
        &::after {
            opacity: 1;
        }
    }
}

.active {
    @include boxshadow();
}

.desktop_nav {
    display: none;
}

.mobile_nav {
    position: relative;
}

.slide-leave-active,
.slide-enter-active {
  transition: all .08s ease-out;
}

.slide-leave-to,
.slide-enter-from {
  transform: translateX(-15px);
  opacity: 0;
}


.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: 0.2s opacity ease-out;
}

@media screen and (min-width: 970px) {
    .nav_wrapper {
        margin: 0 rem(165);
        padding: 0;
        gap: rem(46);
    }
    .nav_hamburger {
        display: none;
    }
    .desktop_nav {
        display: block;
    }
    .avatar_wrapper {
        width: rem(50);
        height: rem(50);
        &::after {
            height: rem(51);
            width: rem(51);
        }
    }
}
</style>
