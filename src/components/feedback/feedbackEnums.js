const signInSuccess = {
    show: true,
    success: true,
    message: "Welcome back valued customer"
};

const signInFailure = {
    show: true,
    success: false,
    message: "Password or username is incorrect"
}

const createSuccess = {
    show: true,
    success: true,
    message: "You have successfully signed up for this awesome product"
}

const createFailure = {
    show: true,
    success: false,
    message: "Username is already in use, please try a different one"
}

const closeFeedback = {
    show: false,
    success: null,
    message: null
}

const internalError = {
    show: true,
    success: false,
    message: "Internal error, please try again"
}

const noInfoError = {
    show: true,
    success: false,
    message: "Please fill out form completely"
}

export {
    signInSuccess,
    signInFailure,
    createSuccess,
    createFailure,
    closeFeedback,
    internalError,
    noInfoError
}