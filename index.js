function toastify(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}
function cancel(){
    Swal.fire({
        icon: "error",
        text: "order canceled",
      });
      
}
function changeprice(){
    const pop = document.querySelector(".toastify")
    pop.style.display = 'flex'
    pop.style.scale = '1.5'
}
function ok(){
    let minPrice = Number(20)
    const pop = document.querySelector(".toastify")
    const eror = document.querySelector(".eror")
    const usd = document.querySelector(".usd")
    const erorPrice = document.querySelector(".eror-price")
    let price = document.querySelector(".prices").value;
    if(!price){
        eror.style.display = "flex"
        pop.style.display = 'none'
    }
    else if(price){
        pop.style.display = 'none'
        usd.innerHTML = `$ ${price}/year`
    }
    if(price <= minPrice){
        erorPrice.style.display = 'flex'
        pop.style.display = 'flex'
    }

    
    
}
