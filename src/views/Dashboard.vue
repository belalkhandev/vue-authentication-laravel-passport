<template>
    <div>
        <div class="box">
            <div class="box-header">
                <h5 class="box-title">Users List</h5>
            </div>
            <div class="box-body">
                <div class="row"  v-if="users">
                    <div class="col-lg-12">
                        <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search Users" name="search_key" v-model="search_key" @keyup="filterItems">
                        </div>
                    </div>
                    </div>
                </div>
                <table class="table table-bordered" v-if="filterUsers">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Birthdate</th>
                            <th>Registered At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, i) in filterUsers" :key="user.id">
                            <td>{{ i+1 }}</td>
                            <td>{{ user.name }}</td>                            
                            <td>{{ user.email }}</td>                            
                            <td>{{ user.phone }}</td>                            
                            <td>{{ user.birthdate }}</td>                     
                            <td>{{ user.created_at }}</td>                            
                        </tr>
                    </tbody>
                </table>
                <div class="no-data" v-else>
                  
                    <h3>Opps! No Data Found</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {  

    name: 'Dashboard',
    data(){
      return {
        search_key: "",
      }
    },
    computed: {
        ...mapGetters({
            users: 'user/users',
        }),
        
        filterUsers: function (){
            if (this.search_key.length > 3) {
                var self = this;
                return this.users.filter(user => user.name.toLowerCase().includes(self.search_key) || 
                    user.phone ? user.phone.toLowerCase().includes(self.search_key) : null ||
                    user.email ? user.email.toLowerCase().includes(self.search_key) : null ||
                    user.birthdate ? user.birthdate.toLowerCase().includes(self.search_key) : null 
                )
            } else {
                return this.users
            }
        }
    },
    methods: {
        ...mapActions({
            getUserList: 'user/getUserList',
        }),

        filterItems() {
            this.filterUsers
        }
    },
    created() {
        this.getUserList()
    }
}
</script>

<style scoped>
</style>