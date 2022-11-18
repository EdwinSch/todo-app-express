// export the module
module.exports = getDate;


function getDate() {
     const today = new Date();
    // convert to shorthand Locale
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',};
    // return output
        return today.toLocaleDateString('en-US', options)

}