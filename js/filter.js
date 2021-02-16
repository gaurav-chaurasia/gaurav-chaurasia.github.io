const custom_filter = function(input, element) {
    // getting input value converting all to uppercase 
    // to compair, trim it 
    let filter_input = input.value.toUpperCase().trim();
    
    // remove extra spaces
    filter_input = filter_input.replace(/  +/g, ' ');

    for (let i = 0; i < element.length; i++) {
        let target = element[i].querySelector('.project-title h4').innerHTML;

        if (target.toUpperCase().indexOf(filter_input) > -1) {
            element[i].style.display = '';
        } 
        else {
            element[i].style.display = 'none';
        }
    }
};
