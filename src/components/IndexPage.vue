<template>
    <section class="section">
        <div class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="app-info">
                        <div class="app-icon">
                            <img src="/static/icon.png" alt="">
                        </div>
                        <div class="title">Airbops</div>
                        <a href="" class="is-link">
                            <img src="/static/app-store-button.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <!-- <svg width="1024px" height="799px" viewBox="0 0 1024 799" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.307574728">
                    <g id="Desktop" transform="translate(0.000000, -225.000000)" fill="#FFFFFF">
                    <path d="M0,258.948137 C225.536643,236.316046 395.749409,225 510.638298,225 C625.527187,225 796.647754,236.316046 1024,258.948137 L1024,1024 L0,1024 L0,258.948137 Z" id="ground"></path>
                </g>
            </g>
            </svg> -->
        </div>
    </section>
</template>

<script>
export default {
    name: 'IndexPage',
    props: {},
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
.hero-body {
    padding: 0;
}
.app-info {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
        margin-top: 30px;
    }
}
.app-icon {
    width: 300px;
    height: 300px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 3px 3px 0 0 rgba(0,0,0,0.25);
}
</style>
