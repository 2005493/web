let Expense_description=document.getElementById("Expense_description");
let category=document.getElementById("category");
let Amount=document.getElementById("Amount");
let libody=document.getElementById("libody");
let expense_form=document.getElementById("expense-form");
expense_form.addEventListener('submit',(e)=>{
    e.preventDefault();//it is added to prevent the loading of the form and refreshing of the data 
    console.log(Expense_description.value);
    console.log(Amount.key);
    console.log(category.key);
    let li=document.createElement("tr");
    li.innerHTML=`<td class="border-2 border-gray-300 text-center">${Expense_description.value}</td>
                   <td  class="border-2 border-gray-300 text-center">${category.value}</td>
                   <td  class="border-2 border-gray-300 text-center">${Amount.value}</td>`
    libody.appendChild(li);

})