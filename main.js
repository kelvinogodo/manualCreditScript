let email = ''
let amount = 0

document.getElementById('emailInput').addEventListener('change', (e)=>{
    email = e.target.value
    return email
})

document.getElementById('amountInput').addEventListener('change', (e)=>{
    amount = parseInt(e.target.value)
    return amount
})

const sendRequest = async ()=>{
    const req = await fetch('https://www.bloxvest.com/api/manualCredit',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            email,
            amount
        })
    })
    const res = await req.json()
    if(res){
        if(res.status === 'ok'){
            alert(`you have successfully credited this user with ${res.amount}`)
        }
        else{
            alert(`sorry an error occurred! ${res.error}`)
        }
    }
}

document.getElementById('credit-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    if(isNaN(amount)){
        alert('amount must be a number')
        return
    }else{
        sendRequest()
    }
})
