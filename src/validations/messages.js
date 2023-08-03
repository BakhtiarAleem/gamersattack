const streamerSignUp = {
    firstName: {
        required: 'First name field is required.',
    },

    lastName: {
        required: 'Last name field is required.',
    },
    gender: { required: 'Select gender field is required ' },

    dateOfBirth: {
        required: 'Date of birth field is required.',
    },
    cnicNumber: {
        required: 'CNIC number is required',
        invalid: 'Please enter a valid CNIC number.',
    },
    mobileNumber: {
        required: 'Mobile number field is required.',
        matches: 'Please enter a valid mobile number',
    },
    email: {
        required: 'Email field is required.',
        invalid: 'Please enter a valid email address.',
    },
}
const customizeChannel = {
    raptrID: {
        required: 'Raptr id field is required.',
    },

    displayName: {
        required: 'Display name field is required.',
    },
    tags: { required: 'Select tags field is required ' },

    shortBio: {
        required: 'Short bio field is required.',
    },
    mobileNumber: {
        required: 'Mobile number field is required.',
        matches: 'Please enter a valid mobile number',
    },
    email: {
        required: 'Email field is required.',
        invalid: 'Please enter a valid email address.',
    },
}
const authValidation = {
    email: {
        required: 'Email field is required.',
        invalid: 'Please enter a valid email address.',
    },
    otp: {
        required: 'OTP field is required.',
        invalid: 'Please enter a valid otp.',
    },
    raptrId: {
        required: 'Raptr id field is required.',
    },
    displayName: {
        required: 'Display name field is required.',
    },
    mobileNumber: {
        required: 'Mobile number field is required.',
        matches: 'Please enter a valid mobile number',
    },
}
const streaming = {
    title: {
        required: 'Title field is required.',
    },
    category: { required: 'Select category field is required ' },

    tags: { required: 'Select tags field is required ' },
}

const contact = {
    firstName: {
        required: 'First name field is required.',
    },

    lastName: {
        required: 'Last name field is required.',
    },

    email: {
        required: 'Email field is required.',
        invalid: 'Please enter a valid email address.',
    },

    phoneNumber: {
        required: 'Phone number field is required.',
    },

    company: {
        required: 'Company name is required',
    },

    country: {
        required: 'please select valid country name',
    },

    message: {
        required: 'Message is required',
    },
}
const debitCard = {
    cardName: {
        required: 'Card Name field is required.',
        invalid: 'Please enter a valid Card Name.',
    },
    cardNumber: {
        required: 'Card Number field is required ',
        invalid: 'Please enter a valid Card Number.',
    },

    month: {
        required: 'Card Month field is required ',
        invalid: 'Please enter a valid Card Month.',
    },
    year: {
        required: 'Card Year field is required ',
        invalid: 'Please enter a valid Card Year.',
    },
    cvv: {
        required: 'Card CVV field is required ',
        invalid: 'Please enter a valid Card CVV.',
    },
}

const otpVerification = {
    otp: {
        required: 'Enter OTP.',
        invalid: 'Incorrect OTP.',
    },
}

const zindigiWallet = {
    registerMobile: {
        required: 'Enter Mobile Number.',
        invalid: 'Incorrect Mobile Number.',
    },
    otp: {
        required: 'Enter OTP.',
        invalid: 'Incorrect OTP.',
    },
}

export {
    streamerSignUp,
    customizeChannel,
    authValidation,
    streaming,
    debitCard,
    otpVerification,
    zindigiWallet,
    contact,
}
