document.getElementById('btn-donation')
.addEventListener('click', function(){
    console.log('btn donation clicked')
    document.getElementById('all-card-container').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    
})


// history button fucntionality
document.getElementById('btn-history').addEventListener('click', function(){
    console.log('history button clicked');
    document.getElementById('all-card-container').classList.add('hidden');
    const historySection = getSectionById('history-section');
    console.log(historySection);

})


// donate now button functionality
document.getElementById('btn-donate-now')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('donate now button clicked');

    // get the money from input
    const inputMoney = getInputFieldValueById('input-money');
    console.log(inputMoney);

    if (!isNaN(inputMoney)) {
      console.log('Your donation added');

    //   get the current balance and donate balance
    const currentBalance = getTextFieldValueById('current-balance')
    console.log(currentBalance);
    const donateBalance = getTextFieldValueById('donate-balance')
    console.log(donateBalance);

    // decrease money from the current balance and add to the donate balance and show balance
    const updatedBalance = currentBalance - inputMoney;
    console.log(updatedBalance);
    document.getElementById('current-balance').innerText = updatedBalance

    const updatedDonateBalance = donateBalance + inputMoney;
    console.log(updatedDonateBalance);
    document.getElementById('donate-balance').innerText = updatedDonateBalance;

    // transaction history
    const p = document.createElement('p');
    p.innerText = `${updatedDonateBalance} Taka Donated and Available Balance is ${updatedBalance} Taka`;
    console.log(p);

    // showing the history
    document.getElementById('transaction-container').appendChild(p);

    } 
    
    else {
        alert('Sorry, your input is wrong.');
    }



    // const inputMoney2 = getInputFieldValueById('btn-donate-now-two');
    // console.log(inputMoney2);



}) 