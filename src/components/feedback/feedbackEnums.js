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

const createFailre = {
    show: true,
    success: false,
    message: "Username is already in use, please try a different one"
}

const closeFeedback = {
    show: false,
    success: null,
    message: null
}

export {
    signInSuccess,
    signInFailure,
    createSuccess,
    createFailre,
    closeFeedback
}