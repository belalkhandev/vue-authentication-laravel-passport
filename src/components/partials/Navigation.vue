<template>
    <!-- Navigation -->
    <nav class="navigation" v-if="authenticated && user">
        <ul>
            <li>
                <a href="#" @click.prevent="signOut">
                    <span>Logout ({{ user.email }})</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="navigation" v-else>
        <ul>
            <li>
                <router-link :to="{name: 'Login'}">Login</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Register'}">Register</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default ({
    name: 'Navigation',
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
    
    methods: {
        ...mapActions({
            signOutAction: 'auth/signOut'
        }),
        signOut() {
            this.signOutAction().then(() => {
                this.$router.replace({
                    name: 'Login'
                })
            })
        },
        
    },
})
</script>

<style scoped>
</style>