



let avalibleKeywords = [
    'who is Bookworm',
    'Inflatable',	
    'Salesclerk',
    'Butterscotch',	
    'Inimical',	
    'Snapshot',
    'buy a Camera',	
    'Interim',	
    'Shellfish',
    'Campus',	
    'Invest',	
    'Ship'
]
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result  = avalibleKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
     display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}



document.addEventListener('DOMContentLoaded', async function(){
    const article_id = new URL(window.location.href).searchParams.get("id");
    let prod = await axios.get('templates/prod.html');
    let products = await axios.get('templates/product.html');
    

    

    const data = {
        test: 'hi',
        currentPath: window.location.hash,
        books: [],
        books_copy: [],
        new_books: []
    }

    const ProductComponent = {
        props: ['book'],
        template: prod.data
    }

    


    const app = {
        data(){
            return data
        },
        methods: {
            signOut() {
                console.log('Clicked the signOut link'); // Add this line to check if the event handler is being triggered
                firebase.auth().signOut().then(() => {
                    console.log('Sign-out successful.');
                }).catch((error) => {
                    console.error('Sign-out error:', error);
                });
                setTimeout(function () {
                    window.location.href = `z1.html`;
                }, 1000);
            },
            getProducts(){
                db.collection('Allbooks').get().then(res => {
                    this.books = [];
                    res.forEach(doc => {
                        let book = doc.data();
                        book.id = doc.id;
                        book.count = 1;
                        this.books.push(book);
                        console.log(this.books);
                    })
                     console.log(this.books);
                this.books_copy = this.books;
                console.log(this.books_copy)
                })
               
            },
            tovar_filter(category){
                this.return_allproducts()
                this.books = this.books.filter(book =>{
                    return book.category === category;
                })
                console.log(this.books)
            },
            return_allproducts(){
                
                this.books = this.books_copy;
                console.log(this.books);
            },
            filter(){
                this.new_books = this.books.slice();
             if(minprice.value.length > 0){
                this.new_books = this.new_books.filter(function (book){
                    return book.price >= minprice.value;
                })

            }
            if(maxprice.value.length > 0){
                this.new_books = this.new_books.filter(function (book){
                    return book.price <= maxprice.value
                })
                this.books = this.new_books;
            }
            this.books = this.new_books;
            console.log(this.new_books)
            }
        },
        
        components:{
            ProductComponent
        },
        computed: {
            currentView(){
                return routes[this.currentPath.slice(1) || '/' || NotFound]
            }
        },
        mounted(){
            window.addEventListener ('hashchange', () => {
                this.currentPath = window.location.hash
                console.log('hash change')
            }),
            this.getProducts()
            
        }
    }
    Vue.createApp(app).mount('#app')
})