Vue.component('menu-section', {
    template: `
      <div class="menu-item" v-for="val in all_menu">
        <img v-bind:src="val.imgUrl" v-bind:alt="val.menu_name">
        <h3>{{val.menu_name}}</h3>
        <p>{{val.composition}}</p>
        <input type="button" value="Order">
      </div>
    `,
    data : function() {
        return {
            all_menu:[]
        }
    },
    methods: {
        getAll() {
            axios.get('http://localhost:3000/menu')
            .then(response => {
                this.all_menu = response
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})

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
