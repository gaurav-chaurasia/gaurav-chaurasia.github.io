const filter = function(input, element) {
    let filter_input = input.value.toUpperCase();

    for (let i = 0; i < element.length; i++) {
        let target = element[i].querySelector('.project-title h4').innerHTML;
        console.log(target);

        if (target.toUpperCase().indexOf(filter_input) > -1) {
            element[i].style.display = '';
        } else {
            element[i].style.display = 'none';
        }
    }
};
