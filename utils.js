export { countAsYes };
function countAsYes(userInput) {
    return userInput.charAt(0).toUpperCase() === 'Y';
}