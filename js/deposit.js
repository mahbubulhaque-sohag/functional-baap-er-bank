


document.getElementById('btn-deposit').addEventListener('click', function(){
    
  
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previoustDepositTotal = getTextElementValueById('deposit-total');

    const newDepositTotal = newDepositAmount + previoustDepositTotal;
     
    setTextElemenValuetById('deposit-total', newDepositTotal);



    const previoustBalance = getTextElementValueById("balance-total");
    const newBalanceTotal = newDepositAmount + previoustBalance;
    setTextElemenValuetById('balance-total', newBalanceTotal);
})










