import React from 'react'

export const BillingAddress = () => {
    function validateName(value) {
        const element = document.querySelector("#firstName + .error_1")
        var reg = /^[a-z A-Z]+$/;
        if (!value.trim()) {
            element.textContent = "First Name is Required"
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter a valid Name"
        }
        else {
            element.textContent = "";
        }
    }
    function validateLastName(value) {
        const element = document.querySelector("#lastName + .error_1")
        var reg = /^[a-z A-Z]+$/;

        if (!value.trim()) {
            element.textContent = "Last Name is Required"
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter a valid Name"
        }
        else {
            element.textContent = "";
        }
    }

    function validateAddress(value) {
        const element = document.querySelector("#address + .error_1")
        if (!value.trim()) {
            element.textContent = "Address Line 1 is Required"
        }
        else {
            element.textContent = "";
        }
    }

    function validateCity(value) {
        const element = document.querySelector("#city + .error_1")
        var reg = /^[a-z A-Z]+$/;
        if (!value.trim()) {
            element.textContent = "City/Town is required"
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter a valid City"
        }
        else {
            element.textContent = "";
        }
    }

    function validatePostCode(value) {
        const element = document.querySelector("#postcode + .error_1")
        if (!value.trim()) {
            element.textContent = "Zip Code is required."
        }
        else if (isNaN(value)) {
            element.textContent = "Please enter Valid Zip code"
        }
        else {
            element.textContent = "";
        }
    }

    function validateEmail(value) {
        const element = document.querySelector("#email + .error_1")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.trim()) {
            element.textContent = "Email Address is required."
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter Valid Email Address"
        }
        else {
            element.textContent = "";
        }
    }

    function validateTelephone(value) {
        const element = document.querySelector("#telephone + .error_1")
        if (!value.trim()) {
            element.textContent = "Telephone is required."
        }
        else if (isNaN(value) || value.length < 10) {
            element.textContent = "Please enter valid Telephone Number"
        }
        else {
            element.textContent = "";
        }
    }

    function validateSelectCity(value) {
        const element = document.querySelector("#selectCity + .error_1");

        if (!value.trim()) {
            element.textContent = "City is required.";
        } else {
            element.textContent = "";
        }
    }

    

    return (
        <>
            <div>
                <div className='group-fields two-fields'>
                    <div className="inputs">
                        <input type="text" placeholder='First Name' maxLength={30} onChange={(e) => validateName(e.target.value)} id='billingfirstName' />
                        <div className="error_1"></div>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder='Last Name' id='billinglastName' onChange={(e) => validateLastName(e.target.value)} />
                        <div className="error_1"></div>
                    </div>
                </div>
                <div className='group-fields'>

                    <div className="full-width">
                        <input type="text" placeholder='Address Line 1' id='billingaddress' onChange={(e) => validateAddress(e.target.value)} />
                        <div className="error_1"></div>
                    </div>
                    <div className="full-width">
                        <input type="text" placeholder='Address Line 2 (Optional)' />
                    </div>
                </div>
                <div className='group-fields two-fields'>
                    <div className="inputs">
                        <input type="text" placeholder='City' onChange={(e) => validateCity(e.target.value)} id='billingcity' />
                        <div className="error_1"></div>
                    </div>
                    <select name="" id="">
                        <option value="">Select State / Province</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Punjab">Punjab</option>
                    </select>
                </div>
                <div className='group-fields two-fields'>
                    <div className="inputs">
                        <input type="text" placeholder='Postcode' id='billingpostcode' onChange={(e) => validatePostCode(e.target.value)} />
                        <div className="error_1"></div>
                    </div>
                    <div className="inputs">
                        <select name="" id="billingselectCity" onChange={(e) => validateSelectCity(e.target.value)}>
                            <option value="">Select Country</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Punjab">Punjab</option>
                        </select>
                        <div className="error_1"></div>
                    </div>
                </div>
                <div className='group-fields'>
                    <div className="inputs">
                        <input type="tel" placeholder='Telephone' id='billingtelephone' maxLength={10} onChange={(e) => validateTelephone(e.target.value)} />
                        <div className="error_1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
