
let isNameValid = false;
let isEmailValid = false;
let isNumberValid = false;
let isDescriptionValid = false;
let isRecipientValid = false;
let isSenderAdressValid = false;
let isRecipientAdressValid = false;
let isRecipientDescriptionValid = false;
let isRecipientNumberValid = false;

let isSecondPageDisplayed = false;
let isThirdPageDisplayed = false;


let whoIsPayingValue;


const backButton = document.querySelector('.contact_form__backButton');
const wrapper = document.querySelector('#contact_form')
const contactsInput = "#contact_form_"
const contactsError = ".form_wrapper_error_"
const nameField = document.querySelector(`${contactsInput}sender`);
const emailField = document.querySelector(`${contactsInput}email`);
const numberField = document.querySelector(`${contactsInput}number`);

const descriptionField = document.querySelector(`${contactsInput}description`);
const recipientDescriptionField = document.querySelector(`${contactsInput}description_recipient`);
const recipientField = document.querySelector(`${contactsInput}recipient`);
const recipientAdressField = document.querySelector(`${contactsInput}recipient_adress`);
const senderAdressField = document.querySelector(`${contactsInput}sender_adress`);
const recipientNumberField = document.querySelector('#contact_form_number_recipient')

const recipientError = document.querySelector(`${contactsError}recipient`);
const recipientAdressError = document.querySelector(`${contactsError}recipient_adress`);
const senderAdressError = document.querySelector(`${contactsError}sender_adress`);

const nameError = document.querySelector(`${contactsError}sender`);
const emailError = document.querySelector(`${contactsError}email`);
const numberError = document.querySelector(`${contactsError}number`);
const recipientNumberError = document.querySelector(`${contactsError}number_recipient`);
const descriptionError = document.querySelector(`${contactsError}description`);
const recipientDescriptionError = document.querySelector(`${contactsError}description_recipient`);
const sumbitFirstPage = document.querySelector('#contact_form_zakaz')
const sumbitSecondPage = document.querySelector('#contact_form_submit')
const submitSenderPage = document.querySelector('#contact_form_submit_next')

const senderPage = document.querySelector('.form_wrapper__sender')
const recipientPage = document.querySelector('.form_wrapper__recipient')

const orderIDElement = document.querySelector('#contact_form_sended_order-id')


function isNumber(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}


recipientDescriptionField.addEventListener('input', () => {
  if(recipientDescriptionField.value.length > 3) isRecipientDescriptionValid = true;
  else isRecipientDescriptionValid = false;
  recipientDescriptionError.style.display = (!isRecipientDescriptionValid) ? "block": "none";
  
})
recipientField.addEventListener('input', () => {
  if(recipientField.value.length > 3) isRecipientValid = true;
  else isRecipientValid = false;
  recipientError.style.display = (!isRecipientValid) ? "block": "none";
  
})


recipientAdressField.addEventListener('input', () => {
  if(recipientAdressField.value.length > 3) isRecipientAdressValid = true;
  else isRecipientAdressValid = false;
  recipientAdressError.style.display = (!isRecipientAdressValid) ? "block": "none";
  
})

senderAdressField.addEventListener('input', () => {
  if(senderAdressField.value.length > 3) isSenderAdressValid = true;
  else isSenderAdressValid = false;
  senderAdressError.style.display = (!isSenderAdressValid) ? "block": "none";
  
})

nameField.addEventListener('input', () => {
  if(nameField.value.length > 3) isNameValid = true;
  else isNameValid = false;
  nameError.style.display = (!isNameValid) ? "block": "none";
  
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

emailField.addEventListener('input', () => {
  if(validateEmail(emailField.value)) isEmailValid = true;
  else isEmailValid = false;

   emailError.style.display = !isEmailValid ? "block": "none";
})

recipientNumberField.addEventListener('input', () => {
  if(recipientNumberField.value.length > 5) 
    isRecipientNumberValid = true;
  else 
  isRecipientNumberValid = false;

  recipientNumberError.style.display = !isRecipientNumberValid ? "block": "none";
})

recipientNumberField.addEventListener('keypress', (e)=> {
  if(!isNumber(e)) return e.preventDefault()
  if(recipientNumberField.value.length == 0)
    recipientNumberField.value = "+"
})

numberField.addEventListener('keypress', (e)=> {
  if(!isNumber(e)) return e.preventDefault()
  if(numberField.value.length == 0)
    numberField.value = "+"
})
numberField.addEventListener('input', () => {
  if(numberField.value.length > 5) 
    isNumberValid = true;
  else 
    isNumberValid = false;

  numberError.style.display = !isNumberValid ? "block": "none";
})

descriptionField.addEventListener('input', () => {
  if(descriptionField.value.length > 3) isDescriptionValid = true;
  else isDescriptionValid = false;

  descriptionError.style.display = !isDescriptionValid ? "block" : "none";
})
const formWrapper = document.querySelector('#form_wrapper')
const calcWrapper = document.querySelector('#calc_wrapper')


function checkFields() {
  if(!isNameValid) nameError.style.display = "block";
  if(!isEmailValid) emailError.style.display = "block";
  if(!isNumberValid) numberError.style.display = "block";
  if(!isDescriptionValid) descriptionError.style.display = "block";
  if(!isRecipientValid) recipientError.style.display = "block";
  if(!isRecipientAdressValid) recipientAdressError.style.display = "block";
  if(!isSenderAdressValid)  senderAdressError.style.display = "block";
  if(!isRecipientNumberValid) recipientNumberError.style.display = "block";
  if(!isRecipientDescriptionValid) recipientDescriptionError.style.display = "block"
  if(isNameValid && isEmailValid && isEmailValid && isDescriptionValid && isRecipientValid && isRecipientAdressValid && isSenderAdressValid) return true;
}
function checkSenderFields() {
  if(!isNameValid) nameError.style.display = "block";
  if(!isEmailValid) emailError.style.display = "block";
  if(!isNumberValid) numberError.style.display = "block";
  if(!isDescriptionValid) descriptionError.style.display = "block";
  if(!isSenderAdressValid)  senderAdressError.style.display = "block"
  if(whoIsPayingValue == undefined) selectWhoIsPaying.style.border = "1px solid red";
  if(isNameValid && isEmailValid && isEmailValid && isDescriptionValid && isSenderAdressValid && whoIsPayingValue != undefined) return true;
}



// second page - calculator

const selectDeparture = document.querySelector("#calc_select_city_departure");
const selectArrival = document.querySelector("#calc_select_city_arrival")

const selectDepartureWindow = selectDeparture.querySelector('.calc_select_city_select')
const selectArrivalWindow = selectArrival.querySelector('.calc_select_city_select')
let citiesDeparture = selectDeparture.querySelectorAll('.calc_select_city_select span')
let citiesArrival = selectArrival.querySelectorAll('.calc_select_city_select span')

const citiesDepartureContainer = selectDeparture.querySelector('.calc_select_city_select')
const citiesArrivalContainer = selectArrival.querySelector('.calc_select_city_select')
const selectDepartureInput = selectDeparture.querySelector('input')
const selectArrivalInput = selectArrival.querySelector('input')
const selectDepartureText = selectDeparture.querySelector('span')
const selectArrivalText = selectArrival.querySelector('span')

const selectWhoIsPaying = document.querySelector('#calc_select_who-is-playing');
const selectWhoIsPayingContainer = selectWhoIsPaying.querySelector('.calc_select_city_select');
const selectWhoIsPayingVariants = selectWhoIsPayingContainer.querySelectorAll('span')




window.addEventListener('click', () => {
  selectArrivalWindow.style.maxHeight = "0px";
  selectDepartureWindow.style.maxHeight = "0px";
  selectDepartureText.style.display = "flex";
    selectDepartureInput.style.display = "none";
    selectArrivalText.style.display = "flex";
  selectArrivalInput.style.display = "none";

  selectWhoIsPayingContainer.style.maxHeight = "0px"
})

selectDeparture.addEventListener('click', (e) => {
  e.stopPropagation()
  const el = selectDepartureWindow;
  const maxHeight = el.style.maxHeight;
  selectDepartureText.style.display = "none";
  selectDepartureInput.style.display = "flex";
  selectDepartureInput.focus()
  el.style.maxHeight = (maxHeight === "500px") ? "0px": "500px";
  
})

selectDepartureInput.addEventListener('input', () => {
  
  for(let city of citiesDeparture) {
    const regexp = new RegExp(selectDepartureInput.value, "gi")

    city.setAttribute('order', (city.textContent.trim().match(regexp) !=null) ? city.textContent.trim().match(regexp)[0].length : 0)
    if(city.textContent.trim().toLowerCase().startsWith(selectDepartureInput.value.toLocaleLowerCase()))
      city.setAttribute('order', city.getAttribute('order') + 1)    
  
  }
  let citiesDepartureArray = Array.prototype.slice.call(citiesDeparture, 0);
  citiesDepartureArray.sort((a, b) => {
    if(a.getAttribute('order') > b.getAttribute('order')) return 1
    else if(a.getAttribute('order') < b.getAttribute('order')) return -1
    return 0
  })
  citiesDepartureContainer.innerHTML = ""
  citiesDepartureArray.reverse()
  for(let i = 0; citiesDepartureArray.length > i; i++) {
      
      citiesDepartureContainer.appendChild(citiesDepartureArray[i])

      
  }
  citiesDeparture = selectDeparture.querySelectorAll('.calc_select_city_select span')
})

selectArrivalInput.addEventListener('input', () => {
   
  for(let city of citiesArrival) {
    const regexp = new RegExp(selectArrivalInput.value, "gi")

    city.setAttribute('order', (city.textContent.trim().match(regexp) !=null) ? city.textContent.trim().match(regexp)[0].length : 0)
    if(city.textContent.trim().toLowerCase().startsWith(selectArrivalInput.value.toLocaleLowerCase()))
      city.setAttribute('order', city.getAttribute('order') + 1)    
  
  }
  let citiesArrivalArray = Array.prototype.slice.call(citiesArrival, 0);
  citiesArrivalArray.sort((a, b) => {
    if(a.getAttribute('order') > b.getAttribute('order')) return 1
    else if(a.getAttribute('order') < b.getAttribute('order')) return -1
    return 0
  })
  citiesArrivalContainer.innerHTML = ""
  citiesArrivalArray.reverse()
  for(let i = 0; citiesArrivalArray.length > i; i++) {
      
      citiesArrivalContainer.appendChild(citiesArrivalArray[i])

      
  }
  citiesArrival = selectArrival.querySelectorAll('.calc_select_city_select span')
})

selectArrival.addEventListener('click', (e) => {
  e.stopPropagation()
  const el = selectArrivalWindow;
  const maxHeight = el.style.maxHeight;
  selectArrivalText.style.display = "none";
  selectArrivalInput.style.display = "flex";
  selectArrivalInput.focus()
  el.style.maxHeight = (maxHeight === "500px") ? "0px": "500px";
})


let departure
let arrival
for(let city of citiesDeparture) {
  city.addEventListener('click', (e) => {
    e.stopPropagation();
    departure = city.textContent
    selectDeparture.querySelector('span').innerText = city.textContent;
    selectDepartureText.style.display = "flex";
    selectDepartureInput.style.display = "none";
    selectDepartureWindow.style.maxHeight = "0px";
    selectDeparture.style.border = "none";

  })
}

for(let city of citiesArrival) {
  city.addEventListener('click', (e) => {
    e.stopPropagation();
    arrival = city.textContent
    selectArrival.querySelector('span').innerText = city.textContent;
    selectArrivalText.style.display = "flex";
  selectArrivalInput.style.display = "none";
    selectArrivalWindow.style.maxHeight = "0px";
    selectArrival.style.border = "none";

  })
}

const estimatedButton = document.querySelector('#calc_weight_choose_estimated');
const accurateButton = document.querySelector('#calc_weight_choose_accurate');

const estimatedContainer = document.querySelector("#calc_weight_estimated_container")
const accurateContainer = document.querySelector("#calc_weight_accurate_container")

const estimatedVariants = estimatedContainer.querySelectorAll('.calc_weight_estimated_package')

let isEstimatedContainerDisplayed = false;
let isAccurateContainerDisplayed = true;


const priceText = document.querySelector("#calc_weight_price_value");
let choosenEstimatedVariant = estimatedVariants[0]

estimatedButton.addEventListener('click', () => {
  estimatedContainer.style.display = "block";
  isEstimatedContainerDisplayed = true;
  estimatedButton.classList.add('selectedAfter');
  price = Number(choosenEstimatedVariant.getAttribute('value'))
  priceText.innerText = `${price} ₽`;
  if(isAccurateContainerDisplayed) {
    accurateContainer.style.display = "none";
    accurateButton.classList.remove('selectedAfter');
    choosenEstimatedVariant.classList.add('selectedBefore');
    isAccurateContainerDisplayed = false;
    
  }
})

accurateButton.addEventListener('click', () => {
  accurateContainer.style.display = "flex";
  accurateButton.classList.add('selectedAfter');
  isAccurateContainerDisplayed = true;
  price = 0;
  calculateM3();
  if(isEstimatedContainerDisplayed) {
    estimatedContainer.style.display = "none";
    isEstimatedContainerDisplayed = false;
    choosenEstimatedVariant.classList.remove('selectedBefore');
    estimatedButton.classList.remove('selectedAfter');
  }
})

let price = 0.00

for(let variant of estimatedVariants) {
  variant.addEventListener('click', () => {
        choosenEstimatedVariant.classList.remove('selectedBefore');
        variant.classList.add('selectedBefore');
        choosenEstimatedVariant = variant;
        price = Number(variant.getAttribute('value'));
        priceText.innerText = `${price} ₽`;
  })
}

const accurateInputLength = accurateContainer.querySelector('.calc_weight_accurate_length');
const accurateInputWidth = accurateContainer.querySelector('.calc_weight_accurate_width');
const accurateInputHeight = accurateContainer.querySelector('.calc_weight_accurate_height');
let length = 0;
let width = 0;
let height = 0;
accurateInputLength.addEventListener('keypress', (evt) => {
  return isNumberKey(evt)
})
accurateInputWidth.addEventListener('keypress', (evt) => {
  return isNumberKey(evt)
})
accurateInputHeight.addEventListener('keypress', (evt) => {
  return isNumberKey(evt)
})
accurateInputLength.addEventListener('input', () => {
  length = Number(accurateInputLength.value.replace(",", "."));
  if(length == 0) 
    accurateInputLength.style.border = "1px solid red"
  else
  accurateInputLength.style.border = "none"
  calculateM3()
})
accurateInputWidth.addEventListener('input', () => {
  width = Number(accurateInputWidth.value.replace(",", "."));
  if(width == 0) 
    accurateInputWidth.style.border = "1px solid red"
  else
  accurateInputWidth.style.border = "none"
  calculateM3()
})
accurateInputHeight.addEventListener('input', () => {
  height = Number(accurateInputHeight.value.replace(",", "."));
  if(height == 0) 
    accurateInputHeight.style.border = "1px solid red"
  else
  accurateInputHeight.style.border = "none"
  calculateM3()

})
function paintRedAccurateInput() {
  if(height == 0) 
    accurateInputHeight.style.border = "1px solid red"
  else
    accurateInputHeight.style.border = "none"
  if(width == 0) 
    accurateInputWidth.style.border = "1px solid red"
  else
    accurateInputWidth.style.border = "none"
  if(length == 0) 
    accurateInputLength.style.border = "1px solid red"
  else
    accurateInputLength.style.border = "none"
}
// вычисление метров кубических
function calculateM3() {
    if(length > 0 && width > 0 && height > 0) {
      let lenghtInM = length / 100;
      let widthInM = width / 100;
      let heightInM = height / 100;
      let value = lenghtInM * widthInM * heightInM;
      calculatePrice(value.toFixed(3))

    } else {
      price = 0
      priceText.innerText = `${price.toFixed(2)} ₽`;
    }
}
function calculatePrice(value) {
  let base = 300;
  let multiplier = 30.2;
  let start = 0.001;
  if(value < 0.005) {
    start = 0.001
    base = 300
    multiplier = 30.2
  } else if(value >= 0.005 && value < 0.022) {
    start = 0.005
    base = 451;
    multiplier = 4.8
  } else if(value >= 0.022 && value < 0.034) {
    start = 0.022
    base = 532.6;
    multiplier = 3.45; 
  } else if(value >=0.034 && value < 0.112) {
    start = 0.034
    base = 574;
    multiplier = 3.08;
  } else if(value >= 0.112 && value < 0.135) {
    start = 0.112
    base = 814.24;
    multiplier = 1.68
  } else if(value >= 0.135 && value < 0.2) {
    start = 0.135
    base = 852.88;
    multiplier = 1.555
  } else if (value >= 0.2 && value < 0.5) {
    start = 0.2
    base = 953.9
    multiplier = 1.097
  } else if (value >= 0.5 && value < 0.9) {
    start = 0.5
    base = 1283;
    multiplier = 1.56
  } else if(value >=0.9 && value <= 3) {
    start = 0.9
    base = 1910;
    multiplier = 2,56
  }
  
  price = base + (multiplier * ((value - start) * 1000))
  priceText.innerText = `${price.toFixed(2)} ₽`;
}

sumbitFirstPage.addEventListener('click', () => {
  if(arrival == undefined && departure == undefined) {
    selectArrival.style.border = "1px solid red"
    selectDeparture.style.border = "1px solid red"
   
  } else if(arrival == undefined) {
    selectArrival.style.border = "1px solid red"
    
  } else if(departure == undefined) {
    selectDeparture.style.border = "1px solid red"
    
  }
  if(isAccurateContainerDisplayed && price == 0.00)  {
      paintRedAccurateInput()
  }
  if(arrival != undefined && departure != undefined && price != 0) {
    document.querySelector("#form_price_value").innerText = `${price.toFixed(2)} ₽`;
    calcWrapper.style.display = "none"
    formWrapper.style.display = "flex"
    backButton.style.display="block"
    isSecondPageDisplayed = true
  } 
})


selectWhoIsPaying.addEventListener('click', (e) => {
  e.stopPropagation()
  selectWhoIsPayingContainer.style.maxHeight = "300px"
})
for(let varint of selectWhoIsPayingVariants) {
  varint.addEventListener('click', (e) => {
    e.stopPropagation()
    selectWhoIsPaying.querySelector('span').innerText = varint.textContent;
    selectWhoIsPaying.querySelector('span').style.color = "#adadad"
    selectWhoIsPaying.style.border = "none";
    whoIsPayingValue = varint.textContent
    selectWhoIsPayingContainer.style.maxHeight = "0px"
  })
}


submitSenderPage.addEventListener('click', () => {
  if(!checkSenderFields()) return;
  senderPage.style.display = "none"
  recipientPage.style.display = "block"
  isThirdPageDisplayed = true;
})

sumbitSecondPage.addEventListener('click', (e) => {
    e.preventDefault()
   if(!checkFields()) return;
   const data = new FormData()
   data.append('price', price)
   data.append('username', nameField.value)
   data.append('number', numberField.value)
   data.append('email', emailField.value)
   data.append('description', descriptionField.value)
   data.append('from', departure)
   data.append('to', arrival);
   data.append('sender-adress', senderAdressField.value);
   data.append('recipient-adress', recipientAdressField.value);
   data.append('recipient-name', recipientField.value)
   data.append('recipient-number', recipientNumberField.value)
   data.append('recipient-description', recipientDescriptionField.value)
   data.append('who-is-paying', whoIsPayingValue)
   data.append('_wpcf7', 7049)
   if(isEstimatedContainerDisplayed) {
    data.append('plan', choosenEstimatedVariant.querySelector('.calc_weight_estimated_package_name').getAttribute('value'))
   } else if(isAccurateContainerDisplayed) {
     data.append('width', width);
     data.append('height', height);
     data.append('length', length);
   }
   let date = new Date()
   let orderID = `${String(date.getFullYear()).slice(2)}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${recipientNumberField.value.slice(recipientNumberField.value.length - 4)}`
   data.append('order-id', orderID)
  
   fetch('index.php?rest_route=/contact-form-7/v1/contact-forms/7049/feedback', {
    method: 'POST',
    body: data
  }).then((resp) => {
    orderIDElement.innerText = `Номер заказа: ${orderID}`;
    formWrapper.querySelector('.contact_from_sended').style.display = "flex"
    recipientPage.style.display = "none"
    backButton.style.display = "none"
    
  });

})

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31
  && (charCode < 48 || charCode > 57))
      evt.preventDefault()

  return true;
}
backButton.addEventListener('click', () => {
  if(isThirdPageDisplayed) {
    senderPage.style.display = "block"
    recipientPage.style.display = "none"
    isThirdPageDisplayed = false;
    return;
  }
  if(isSecondPageDisplayed) {
    calcWrapper.style.display = "flex"
    formWrapper.style.display = "none"
    backButton.style.display="none"
    isSecondPageDisplayed = false;
  }
})




const clearAllButton = document.querySelector('#contact_form_clear_all')


function clearAll() {

  price = 0.00
  nameField.value = ""
  numberField.value = ""
  emailField.value = ""
  descriptionField.value = ""
  departure = undefined
  arrival = undefined
  senderAdressField.value = ""
  recipientAdressField.value = ""
  recipientField.value = ""
  recipientNumberField.value = ""
  recipientDescriptionField.value = ""
  whoIsPayingValue = undefined
  isEstimatedContainerDisplayed = false;
  choosenEstimatedVariant.classList.remove('selectedBefore');
  choosenEstimatedVariant = estimatedVariants[0]
  choosenEstimatedVariant.classList.add('selectedBefore');
  isAccurateContainerDisplayed = true
  width = 0
  height = 0
  length = 0
  accurateInputWidth.value = ""
  accurateInputLength.value = ""
  accurateInputHeight.value = ""

  selectDeparture.querySelector('span').innerText = "Откуда забираем"
  selectArrival.querySelector('span').innerText = "Куда доставляем";
  selectArrivalInput.value = ""
  selectDepartureInput.value = ""
  accurateButton.classList.add('selectedAfter');
  estimatedButton.classList.remove('selectedAfter');
  estimatedContainer.style.display = "none"
  accurateContainer.style.display = "flex"

  formWrapper.querySelector('.contact_from_sended').style.display = "none"

  calcWrapper.style.display = "flex"


  isSecondPageDisplayed = false
  isThirdPageDisplayed = false

  senderPage.style.display = "block"
  formWrapper.style.display = "none"
  selectWhoIsPaying.querySelector('span').innerText = "Кто оплачивает"
}




clearAllButton.addEventListener('click', clearAll)

