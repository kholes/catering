// show all menu
Vue.component('show_menu-section', {
    template: `
    <div class="menu" v-bind="all_menu">
        <div class="menu-item" v-for="val in all_menu">
            <img width="200" v-bind:src="val.gambar" v-bind:alt="val.nama_menu">
            <h3>{{val.nama_menu}}</h3>
            <p>{{val.komposisi}}</p>
            <p>Harga : {{val.harga}} / porsi</p>
            <input type="button" value="Order" @click="order(val._id)">
        </div>
        <!-- detail-order -->
        <div class="modal fade" id="order_detail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h2 class="modal-title" id="myModalLabel">Detail Order</h2>
                    </div>
                    <div class="modal-body">
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data : function() {
        return {
            all_menu:'',
            order_menu:[]
        }
    },
    mounted: function() {
        this.getAll()
    },
    methods: {
        getAll() {
            axios.get('http://localhost:3000/menu')
            .then(response => {
                this.all_menu = response.data
                 console.log(this.all_menu)
            })
            .catch(err => {
                console.log(err)
            })
        },
        order(id) {
            let newOrder = this.all_menu.filter(order => {
                return order._id == id
            })
            this.order_menu.push(newOrder)
            console.log(this.order_menu)
        }
    }
})
// show item menu
Vue.component('show_item-section', {
    template: `
    <div class="item-menu">
        <div class="menu-item">
            <img width="200" v-bind:src="item_menu.gambar" v-bind:alt="item_menu.nama_menu">
            <h3>{{item_menu.nama_menu}}</h3>
            <p>{{item_menu.komposisi}}</p>
            <p>Harga : {{item_menu.harga}} / porsi</p>
            <input type="button" value="Order" @click="order(item_menu._id)">
        </div>
    </div>
    `,
    data : function() {
        return {
            item_menu:'',
            order_menu:[]
        }
    },
    mounted: function() {
        this.getItem()
    },
    methods: {
        getItem(id) {
            axios.get('http://localhost:3000/menu/'+id)
            .then(response => {
                this.item_menu = response.data
                 console.log(this.item_menu)
            })
            .catch(err => {
                console.log(err)
            })
        },
        order(id) {
            let newOrder = this.all_menu.filter(order => {
                return order._id == id
            })
            this.order_menu.push(newOrder)
            console.log(this.order_menu)
        }
    }
})
// SIgnup customer
Vue.component('signup-section', {
    template: `
      <div class="signup">
        <h3>Signup login</h3>
        <form @submit.prevent="signup">
            <p>Username</p>
            <input type="text" v-model="username">
            <p>Password</p>
            <input type="password" v-model="password">
            <p>
            <input type="submit" value="Submit">
            </p>
        </form>
      </div>
    `,
    data : function() {
        return {
            username:'',
            password:'',
            role:'customer'
        }
    },
    methods: {
        signup() {
            let objInput = {username:this.username,password:this.password,role:this.role}
            console.log(objInput)
            axios.post('http://localhost:3000/signup', objInput)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})
// Login customer
Vue.component('login-section', {
    template: `
      <div class="login">
        <h3>User login</h3>
        <form @submit.prevent="login">
            <p>Username</p>
            <input type="text" v-model="username">
            <p>Password</p>
            <input type="password" v-model="password">
            <p>
            <input type="submit" value="Login">
            </p>
        </form>
      </div>
    `,
    data : function() {
        return {
            username:'',
            password:''    
        }
    },
    methods: {
        login() {
            let objLog = {username:this.username,password:this.password}
            axios.post('http://localhost:3000/login', objLog)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})
// CRUD Menu
Vue.component('table-menu-section', {
    template: `
        <div class="table-menu">
            <h3>Menus List</h3>
            <a href="" data-toggle="modal" data-target="#add-menu">Add Menu</a>
            <table class="table">
                <th>No</th>
                <th>Kategori menu</th>
                <th>Nama menu</th>
                <th>Komposisi</th>
                <th>Harga / porsi</th>
                <th>view</th>
                <th colspan="2">Action</th>
                <tr v-for="(val,no) in all_menu">
                    <td>{{no+1}}</td>
                    <td>{{val.kategori}}</td>
                    <td>{{val.nama_menu}}</td>
                    <td>{{val.komposisi}}
                    <!--
                    <ul>
                        <li v-for="i in val.komposisi">{{i}}</li>
                    </ul>
                    -->
                    </td>
                    <td>{{val.harga}}</td>
                    <td><img width="100" v-bind:src="val.gambar" v-bind:alt="val.nama_menu"></td>
                    <td><input type="button" data-toggle="modal" data-target="#edit-menu" @click="getEdit(val._id)" value="Edit"></td>
                    <td><input type="button" v-on:click="deleteMenu(val._id)" value="Delete"></td>
                </tr>
            </table>
            <!-- Add form -->
            <div class="modal fade" id="add-menu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h2 class="modal-title" id="myModalLabel">Add Menu</h2>
                        </div>
                        <form @submit.prevent="addMenu">
                            <div class="modal-body">
                                <p>Kategori</p>
                                <select v-model="kategori">
                                    <option value="Karbo" selected="selected">Karbo</option>
                                    <option value="Minuman">Meat</option>
                                    <option value="Sayuran">Sayuran</option>
                                    <option value="Minuman">Minuman</option>
                                </select>
                                <p>Nama menu</p>
                                <input type="text" v-model="nama_menu" placeholder="ex: Nasi putih">
                                <p>Komposisi</p>
                                <textarea v-model="komposisi"></textarea>
                                <p>Harga</p>
                                <input type="text" v-model="harga" placeholder="ex: 50000">
                                <p>Image</p>
                                <!-- <input type="file" v-model="gambar"> -->
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add</button>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
            <!-- Edit form -->
            <div class="modal fade" id="edit-menu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h2 class="modal-title" id="myModalLabel">Edit Menu</h2>
                        </div>
                        <form @submit.prevent="editMenu">
                            <div class="modal-body">
                                <p>Kategori</p>
                                <select v-model="kategori">
                                    <option value="Karbo">Karbo</option>
                                    <option value="Minuman">Meat</option>
                                    <option value="Sayuran">Sayuran</option>
                                    <option value="Minuman">Minuman</option>
                                </select>
                                <p>Nama menu</p>
                                <input type="text" v-model="item_menu.nama_menu">
                                <p>Komposisi</p>
                                <textarea v-model="komposisi">{{item_menu.komposisi}}</textarea>
                                <p>Harga</p>
                                <input type="text" v-model="item_menu.harga">
                                <p>Image</p>
                                <!-- <input type="file" v-model="gambar"> -->
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Edit Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    data : function() {
        return {
            all_menu:{},
            all_item_menu:{},
            item_menu:{},
            kategori:'',
            nama_menu:'',
            komposisi:'',
            harga:''
        }
    },
    mounted: function(){
        this.getAllMenu()
    },
    methods: {
        getAllMenu() {
            axios.get('http://localhost:3000/menu')
            .then(response => {
                this.all_menu = response.data
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        },
        addMenu() {
            let objInput = {
                "kategori":this.kategori,
                "nama_makanan":this.nama_menu,
                "komposisi":this.komposisi,
                "harga":this.harga,
                "gambar":this.gambar
            }
            axios.post('http://localhost:3000/menu', objInput)
            .then(response => {
                this.all_menu = response.data
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        },
        getEdit(id) {
            axios.get('http://localhost:3000/menu/'+id)
            .then(response => {
                this.item_menu = response.data
            })
            .catch(err => {
                console.log(err)
            })            
        },
        editMenu() {
            axios.get('http://localhost:3000/menu/'+this.item_menu._id, this.item_menu)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })            
        }, 
        deleteMenu(id) {
            axios.delete('http://localhost:3000/menu/'+id)
            .then(response => {
                let newMenu = this.all_menu.filter(menu => {
                    return menu._id != id
                })
                this.all_menu = newMenu
            })
            .catch(err => {
                console.log(err)
            })            
        }
    }
})

new Vue({
    el: '#app'
})










// Vue.component('news', {
//     props: ['newsTitle', 'newsContent', 'newsImage', 'newsLink', 'index'],
//     template: `
//       <div class="news">
//         <h2>{{ newsTitle }}</h2>
//         <img :src="newsImage" alt="news image" />
//         <p>
//           {{ newsContent }}
//           <a :href="newsLink" target="_blank">[read more]</a>
//         </p>
//         <a href="#" @click="updateReadCount">i have read this</a>
//       </div>
//     `,
//     methods: {
//       updateReadCount () {
//         this.$emit('alreadyRead', {
//           key: this.key
//         })
//       }
//     }
//   })
//   Vue.component('news-section', {
//     template: `
//       <div class="news-section">
//         <h1>
//           {{ sectionName.toUpperCase() }}
//           <br/>
//           <small> ( {{ totalNews }} )</small>
//         </h1>
//         <news v-for="(n, index) in news" key="index" :index="index" @alreadyRead="omitNews(index)" :newsTitle="n.title" :newsContent="n.description" :newsImage="n.urlToImage" :newsLink="n.url"/>
//         <button @click="updateContent()" >Update Content</button>
//       </div>
//     `,
//     data: function () {
//       return {
//         sectionName: '',
//         news: [],
//         totalNews: 0,
//         apiKey: `6930ad9801f445289713494467af8220`
//       }
//     },
//     methods: {
//       updateContent () {
//         axios.get(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=6930ad9801f445289713494467af8220`)
//         .then(result => {
//           this.prepNews(result.data)
//         })
//       },
//       prepNews (data) {
//         this.sectionName = data.source
//         this.news = data.articles
//         this.totalNews = data.articles.length
//       },
//       omitNews (index) {
//         this.news.splice(index, 1)
//         this.decrementCount()
//       },
//       decrementCount () {
//         this.totalNews--
//       }
//     }, 
//     created () {
//       axios.get(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=6930ad9801f445289713494467af8220`)
//       .then(result => {
//         this.prepNews(result.data)
//       })
//     } 
//   })
//   new Vue({
//     el: '#app'
//   })
