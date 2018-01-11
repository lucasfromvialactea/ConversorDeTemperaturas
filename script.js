function celcions(para) {
    
    switch( para ) {
            
        case 'c': alert(' c para c');
            break;

        case 'f': alert(' c para f');
            break;

        case 'k': alert(' c para k');
            break;
    }
}

function fahremheit(para) {
    
    switch( para ) {
            
        case 'c': alert(' f para c');
            break;
    
        case 'f': alert(' f para f');
            break;
    
        case 'k': alert(' f para k');
            break;
    }
}

function kelvin(para) {
    
    switch( para ) {
            
        case 'c': alert(' k para c');
            break;
    
        case 'f': alert(' k para f');
            break;
        
        case 'k': alert(' k para k');
            break;
    }
}

function converter() {

    var de = document.getElementById('de').value;
    var para = document.getElementById('para').value;

    switch( de ) {
        case 'c': celcions(para);
            break;

        case 'f': fahremheit(para);
            break;

        case 'k': kelvin(para);
            break;

    }  
}
