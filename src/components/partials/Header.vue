<template>
    <!-- header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="header">
                        <div class="logo">
                            <router-link :to="{'name': 'Dashboard'}">
                                <h1>Vue Authentication</h1>
                            </router-link>
                        </div>
                        <Navigation></Navigation>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Navigation from '@/components/partials/Navigation.vue'
export default ({
    name: 'Header',
    components: {
        Navigation
    }
})
</script>

<style scoped>
</style>