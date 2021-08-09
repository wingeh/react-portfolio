
export function checkEmail(email) {
    const regex = `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`;
    if (email.match(regex)) {
        return true;
    };
    return false;
};