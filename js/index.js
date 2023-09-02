let result = $('#display');


$('.button-text').click((e)=>{
let existingNumber = result.val();
let value = e.target.value;
result.val(existingNumber+value);
})

$('#percentage').click(()=>{
    result.val(Number(result.val())/100);
})

$('#clear').click(()=>{
    result.val('');
})

$('#delete').click(()=>{
    let previousValue = result.val();
    if(previousValue!==' '){}
    result.val(previousValue.slice(0,-1));
})

$('#equal').click(()=>{
    let newResult = eval(result.val());
    result.val(newResult);
})