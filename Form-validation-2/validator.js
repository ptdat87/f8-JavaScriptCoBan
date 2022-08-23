function Validator(formSelector) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    const formRules = {};

    /*
    Quy ước:
    Nếu có lỗi thì return error message
    Nếu không lỗi thì return undefined
    */

    const validatorRules = {
        required: function (value) {
            return value ? undefined : "This field is required";
        },
        email: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Incorrect email format";
        },
        min: function (min) {
            return function (value) {
                return value.length >= min
                    ? undefined
                    : `Please enter at least ${min} characters`;
            };
        },
        max: function (max) {
            return function (value) {
                return value.length <= max
                    ? undefined
                    : `Please enter at most ${max} characters`;
            };
        },
    };

    //Lấy ra formElement trong DOM
    const formElement = document.querySelector(formSelector);
    if (formElement) {
        const inputs = formElement.querySelectorAll("[name][rules]");
        for (let input of inputs) {
            const rules = input.getAttribute("rules").split("|");
            for (let rule of rules) {
                const isRuleHasValue = rule.includes(":");
                let ruleInfo;
                if (isRuleHasValue) {
                    ruleInfo = rule.split(":");
                    rule = ruleInfo[0];
                }

                let ruleFunc = validatorRules[rule];
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            //listen event to validate (blur, change)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        //Function handle validate
        function handleValidate(event) {
            const rules = formRules[event.target.name];
            let errorMessage;

            rules.find((rule) => {
                errorMessage = rule(event.target.value);
                return errorMessage;
            });

            //If have any error, show error message
            if (errorMessage) {
                const formGroup = getParent(event.target, ".form-group");
                if (!formGroup) {
                    return;
                }

                if (formGroup) {
                    formGroup.classList.add("invalid");
                    const formMessage =
                        formGroup.querySelector(".form-message");
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
        }

        function handleClearError(event) {
            const formGroup = getParent(event.target, ".form-group");
            if (formGroup.classList.contains("invalid")) {
                formGroup.classList.remove("invalid");
            }
        }

        //Handle submit form
        formElement.onsubmit = function (event) {
            event.preventDefault();

            const inputs = formElement.querySelectorAll("[name][rules]");
            for (const input of inputs) {
                console.log(input);
            }
        };
    }
}
