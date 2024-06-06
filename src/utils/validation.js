export const validateForm = ({ name, email }) => {
    const errors = {};
    if (name.trim() === '') {
        errors.name = 'Please enter your name.';
    }
    if (email.trim() === '') {
        errors.email = 'Please enter your email address.';
    } else if (!isValidEmail(email)) {
        errors.email = 'Please enter a valid email address.';
    }
    return errors;
};

export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
