document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    
    
    const withdrawaAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('Withdraw-total');
    const newWithdrawTotal = withdrawaAmount + previousWithdrawTotal;

    setTextElemenValuetById ('Withdraw-total', newWithdrawTotal);




   
    const previoustBalance = getTextElementValueById("balance-total");
    const newBalance = previoustBalance - withdrawaAmount;

    setTextElemenValuetById ('balance-total', newBalance);

  
})