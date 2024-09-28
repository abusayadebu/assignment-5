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