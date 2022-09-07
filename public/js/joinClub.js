const join = document.querySelector('#join')
const unjoin= document.querySelector('#unjoin')
const rate = document.querySelector('#rate')

if(join) join.addEventListener('click', joinClub)
if(unjoin) unjoin.addEventListener('click', unjoinClub)
if(rate) rate.addEventListener('click', rateClub)

async function rateClub(){
  console.log("hello?")
  const userId = this.dataset.id
  const rating = Number(this.parentNode.childNodes[3].value)
  const clubId = window.location.href.split('/').slice(-1)[0]
  try{
    const response = await fetch('rateClub', {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        'userId' : userId,
        'rating' : rating,
        'clubId' : clubId,
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  }catch(err){
    console.log(err)
  }
}

async function joinClub(){
  const userId = this.dataset.id
  const clubId = window.location.href.split('/').slice(-1)[0]
  try{
    const response = await fetch('joinClub', {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        'userId' : userId,
        'clubId' : clubId,
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()    
  }catch(err){
    console.log(err)
  }
}

async function unjoinClub(){
  const userId = this.dataset.id
  const clubId = window.location.href.split('/').slice(-1)[0]
  console.log("i got here")
  try{
    const response = await fetch('unJoin', {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        'userId' : userId,
        'clubId' : clubId,
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  }catch(err){
    console.log(err)
  }

}