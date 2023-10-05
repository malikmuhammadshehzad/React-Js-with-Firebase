
import './App.css';
import { addDoc, collection, db, deleteDoc, doc, getDocs } from './FireStore';

function App() {
  
  
  const getDataFromFirebase = () => {
    // collection ref

    const colRef = collection(db, "books");

    // get collection data

    getDocs(colRef)
      .then((snapshot) => {
      //  console.log('snapshot.docs',snapshot.docs)   // it's represent all data from start 
        let books = []
        snapshot.docs.forEach((doc) => {
          books.push({  id: doc.id , ...doc.data()})   // spread Operator (...) is liya use kiya ha ka data ka under hi id save hojaya alg object na bana  
      
        })
        console.log(
          books
        )
      })
      .catch(err => {
        console.log(err)
      } )
  
}
    // adding document 
const colRef = collection(db, "books");
 const addBookForm=document.querySelector('.add')
addBookForm.addEventListener('submit', (e)=>{
e.preventDefault() 


addDoc(colRef,{
  title:addBookForm.title.value,
  author:addBookForm.author.value,
})
.then(()=>{
  addBookForm.reset()
})
})

const deleteBookForm=document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e)=>{
e.preventDefault() 
const docRef = doc(db, "books" , deleteBookForm.id.value);

deleteDoc(docRef)
.then(()=>{
  deleteBookForm.reset()
})

})

  return (
    <>
    <div className='App' >
      <h1 >
        FireBase FireStore
      </h1>
      {/* <Firebase/> */}
      <button className='App' onClick={getDataFromFirebase}   > 
        get Data
      </button>
{/*        
       <h1>
        Add Data ANd Delete
       </h1>
        <form className='add' >
          <label for="title" > Text  </label>
          <input type="text" name='title' required /> 
          <label for="author"> Author </label>
          <input type="text" name='author'required /> 
            <button  > add a new book  </button>
        </form>
        <form className='delete' >
          <label for="id" > Document id:   </label>
          <input type="text" name='id' required /> 
            <button>  delete a new book  </button>
        </form> */}
        </div>
    </>
  );
}

export default App;
