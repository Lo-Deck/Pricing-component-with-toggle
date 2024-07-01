const btnSwitchMode = document.getElementById('switch-mode');
const changePrice = document.getElementsByClassName('change-price');


let annual = 0;
const tabPriceHigh = [199.99, 249.99, 399.99];
const tabPriceLow = [19.99, 24.99, 39.99];


//console.log(btnSwitchMode);
//console.log(changePrice);


btnSwitchMode.addEventListener('click', () => 
    {

        if(annual === 0)
        {

            btnSwitchMode.childNodes[0].style.transform = 'translateX(-0.6875rem)';  

            Array.from(changePrice).forEach( (item, index) => 
                {
                    item.innerText = tabPriceHigh[index];
                }
            );

            annual = 1;

        }
        else
        {
            btnSwitchMode.childNodes[0].style.transform = 'translateX(0.6875rem)';   

            Array.from(changePrice).forEach( (item, index) => 
                {
                    item.innerText = tabPriceLow[index];
                }
            );
            
            annual = 0;
        }

    }
);