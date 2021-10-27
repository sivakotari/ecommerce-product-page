<template>
    <div class="quantity__wrapper">
        <button
            class="quantity__dec"
            @click="clickHandler"
            aria-label="decrease item quantity by one"
        >
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg>
        </button>
        <div class="quantity__input__wrap">
            <label class="sr_only" for="quantity__input">enter item quantity</label>
            <input 
                type="number"
                class="quantity__input"
                id="quantity__input"
                placeholder="Quantity"
                @input="inputHandler"
                :value='modelValue'
                aria-labelledby=""
            >
        </div>
        <button
            class="quantity__inc"
            @click="clickHandler"
            aria-label="increase item quantity by one"
        >
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg>
        </button>
    </div>
</template>

<script>

export default {
    data() {
        return {}
    },
    props: {
        modelValue: Number,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 6
        }
    },
    emits: ['update:modelValue'],
    methods: {
        clickHandler(e) {
            let quantity  = '';
            if (e.target.classList.contains('quantity__dec')) {
                quantity = this.modelValue - 1;
            }
            else {
                quantity = this.modelValue + 1;
            }

            if(!this.quantityInLimit(quantity)) {
                return;
            }

            this.emitHandler(quantity);
        },
        inputHandler(e) {
            const quantity = Number(e.target.value)
            if(!this.quantityInLimit(quantity)) {
                e.target.value = this.modelValue;
            }
            else {
                this.emitHandler(quantity);

            }
        },
        emitHandler(quantity) {
            this.$emit('update:modelValue', quantity);
        },
        quantityInLimit(quantity) {
            return Number(quantity) <= this.max && Number(quantity) >= this.min;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/_functions' as *;

    .quantity__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--light-grayish-blue);
        font-weight: 700;
        padding: rem(15);
        font-size: rem(20);
        border-radius: rem(8);

        input {
            width: rem(20);
            text-align: center;
            font-size: rem(16);
            font-weight: 700;
        }

        button[class^='quantity'] {
            font-size: rem(28);
            font-weight: 700;
            width: rem(30);
            height: rem(30);
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                fill: var(--orange);
                &:active,
                &:focus,
                &:hover {
                    opacity: 0.75;
                }
            }

            // position: relative;
            // &::after {
            //     position: absolute;
            //     content: '';
            //     width: 100%;
            //     height: 100%;
            //     background-repeat: no-repeat;
            //     background-position: center;
            //     top: 0;
            //     right: 0;
            // }
        }
        // button[class^='quantity__inc'] {
        //     &::after {
        //         background-image: url('../../images/icon-plus.svg');
        //     }
        //     &:hover::after {
        //         background-image: url('../../images/icon-plus.svg');
        //     }
        // }
        // button[class^='quantity__dec'] {
        //     &::after {
        //         background-image: url('../../images/icon-minus.svg');
        //     }
        // }
    }

</style>