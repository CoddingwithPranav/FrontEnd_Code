const input = document.querySelector(".input");
const body = document.querySelector("body");

input.Checked = JSON.parse(localStorage.getItem("mode") );

console.log(input.Checked)

function bodyUpdate(){
    if(input.checked){

       body.style.background ="black";
    }
    else{
        body.style.background ="white";
    }
}

input.addEventListener("input" ,()=>{
    bodyUpdate();
    updatelocalstorage();
})






let notes = []
index = 1; 
document.querySelector('form').onsubmit =(e)=>{
           e.preventDefault();
           const note = document.getElementById('note') ;
           if(!note && note.trim()==="" && note.value==''){

            return console.log("Invalid inputs")
           }
           else{

               createNote(note.value)
           }
       
}

function createNote(note){
  const Newnote = {note,index, id:Date.now()}
  notes.push(Newnote)
  localStorage.setItem("note", JSON.stringify(notes))
  console.log(notes)
  displayNotes();
  index++

}

function displayNotes(){
    if(localStorage.getItem('note')){

        notes = JSON.parse(localStorage.getItem('note'))
        document.querySelectorAll("h2").forEach((child)=>{
            child.remove()
        })
        
        notes.forEach((note)=>{
            const p = document.createElement('h2')
            const notes_written = document.getElementById('notes_written')
            p.innerText=note.index + note.note
            notes_written.append(p)
        })
    }
}
window.onload =()=>{
    displayNotes()
}
clear.addEventListener('click',()=>{
        deleteAll()
})
function deleteAll(){
    localStorage.clear()
    notes = []
    index = 1
    document.querySelectorAll('h2').forEach((child)=>{
        if(child){

            child.remove()
        }
    })
}