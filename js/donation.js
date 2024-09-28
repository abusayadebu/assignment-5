document.getElementById('btn-donation')
.addEventListener('click', function(){
    console.log('btn donation clicked')
    document.getElementById('all-card-container').classList.remove('hidden');
    
})


// history button fucntionality
document.getElementById('btn-history').addEventListener('click', function(){
    console.log('history button clicked');
    document.getElementById('all-card-container').classList.add('hidden');
})


// donate now button functionality
document.getElementById('btn-donate-now')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('donate now button clicked');

    // get the money from input
    const inputMoney = document.getElementById('input-money').value;
    console.log(inputMoney);

    if (!isNaN(inputMoney)) {
        console.log('Your donation added');

        // get the current balance and donate balance
        const currentBalance = document.getElementById('current-balance').innerText;
        console.log(currentBalance);

        const donateBalance = document.getElementById('donate-balance').innerText;
        console.log(donateBalance);

        // decrease money from the current balance and add to the donate balance
        const currentBalanceNumber = parseFloat(currentBalance);
        const inputMoneyNumber = parseFloat(inputMoney)
        const donateBalanceNumber = parseFloat(donateBalance)

        const updatedBalance = currentBalanceNumber - inputMoneyNumber;
        console.log(updatedBalance);
        
        const updatedDonateBalance = donateBalanceNumber + inputMoneyNumber;

        // showing current balance and donate balance in UI
        document.getElementById('current-balance').innerText = updatedBalance;
        document.getElementById('donate-balance').innerText = updatedDonateBalance;

    } 
    
    else {
        alert('Sorry, your input is wrong.');
    }

})
