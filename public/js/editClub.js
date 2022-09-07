const deleteBtn = document.querySelector('#deleteClub')
const joinBtn = document.querySelector('.join')
const updateBtn = document.querySelector('#update')



deleteBtn.addEventListener('click', deleteClub)
// joinBtn.addEventListener('click', joinClub)
updateBtn.addEventListener('click', updateClub)


async function deleteClub(){
  
  const clubId = this.dataset.id
  console.log('clubId', clubId)
  try{
    const response = await fetch('/editClub/deleteClub', {
      method: 'delete',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        'clubIdFromJSFile': clubId
      })
    })
    const data = await response.json()
    console.log(data)
    // location.reload()
    window.location.replace('/clubs')
  }catch(err){
    console.log(err)
  }
}

async function updateClub(){
  let arr = Array.from(this.parentNode.childNodes)
  const name = arr[1].value
  const book = arr[3].value
  const description = arr[5].value
  const isbn = arr[7].value
  const id = this.dataset.id

  try{
    const response = await fetch(`/editClub/editClub/${id}`, {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        name : name,
        book : book,
        description : description,
        isbn : isbn,
      })
    })
      const data = await response.json()
      console.log(data)
      window.location.replace(`/clubs/${id}`)
  }catch(err){
    console.log(err)
  }

  
}
