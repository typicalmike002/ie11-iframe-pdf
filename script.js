!function(){
    var subNavContainer = document.getElementsByClassName('subNav-container');
    Array.prototype.forEach.call(subNavContainer, function(currentItem){
        var iframe = document.createElement('iframe');
        iframe.src = 'about:blank';
        iframe.className = 'cover';
        currentItem.appendChild(iframe);
    });
}();



