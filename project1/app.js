document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form");
    const Customername = document.querySelector("#Customername");
    const Mobile = document.querySelector("#Mobile");
    const Address = document.querySelector("#Address");
    const Quantity = document.querySelector("#Quantity");
    const Price = document.querySelector("#Price");
  
  const sumbitBtn = document.querySelector('#submit-button');
  
  sumbitBtn.addEventListener('click',validateInputs);
 
  
    function validateInputs(e) {
      e.preventDefault();
      const CustomernameVal = Customername.value.trim();
      const MobileVal = Mobile.value.trim();
      const AddressVal = Address.value.trim();
      const QuantityVal = Quantity.value.trim();
      const PriceVal = Price.value.trim();
      let success = true;
  
      if (CustomernameVal === "") {
        success = false;
        setError(Customername, "Customer name is required");
      } else {
        setSuccess(Customername);
      }
  
      if (MobileVal === "") {
        success = false;
        setError(Mobile, "Mobile is required");
      } else if (MobileVal.length !== 10) {
        // Fixed condition for mobile length validation
        success = false;
        setError(Mobile, "Mobile number must be 10 digits");
      } else {
        setSuccess(Mobile);
      }
  
      if (AddressVal === "") {
        success = false;
        setError(Address, "Address is required");
      } else {
        setSuccess(Address);
      }
  
      if (QuantityVal === "") {
        // Fixed variable name Quantityal to QuantityVal
        success = false;
        setError(Quantity, "Quantity is required");
      } else {
        setSuccess(Quantity);
      }
  
      if (PriceVal === "") {
        success = false;
        setError(Price, "Price is required");
      } else {
        setSuccess(Price);
      }
  
      return success;
    }
  
    function setError(element, message) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector(".error");
      errorElement.innerText = message;
      inputGroup.classList.add("error");
      inputGroup.classList.remove("success");
    }
  
    function setSuccess(element) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector(".error");
      errorElement.innerText = "";
      inputGroup.classList.add("success");
      inputGroup.classList.remove("error");
    }
   
  });
 