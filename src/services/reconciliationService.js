function reconcileTransactions( bankTransactions,internalTransactions,timeToleranceMinutes=5){
  const matched=[]
  const unmatched=[...bankTransactions]
  
  const toleranceMs=timeToleranceMinutes*60*1000
  
internalTransaction.forEach((internalTx)=>{
const match=bankTransactions.find((banktx)=>{
  const amountMatches =banktx.amount=== internalTx.amount
  const 
})
  
})
  
  
}

