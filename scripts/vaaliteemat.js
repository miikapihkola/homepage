let i_value = 0;

window.onload = function () {
    update();
}
function next() {
    $("#maintext").slideUp("slow", function () {
        i_value = validIndex(--i_value);
        update();
        localStorage.setItem('index', i_value);
    });
    $("#maintext").slideDown("slow", function () { });
}
function prev() {
    $("#maintext").slideUp("slow", function () {
        i_value = validIndex(++i_value);
        update();
        localStorage.setItem('index', i_value);
    });
    $("#maintext").slideDown("slow", function () { });
}
function validIndex(value) {
    if (value >= vaaliteema_array.length) {
        value = 0;
    }
    else if (value < 0) {
        value = vaaliteema_array.length - 1;
    }
    return value;
}

function update() {
    document.getElementById('maintext').innerHTML = vaaliteema_array[i_value].text;
    document.getElementById('current_title').innerHTML = vaaliteema_array[i_value].title;
    document.getElementById('prev_title').innerHTML = vaaliteema_array[validIndex(i_value + 1)].title;
    document.getElementById('next_title').innerHTML = vaaliteema_array[validIndex(i_value - 1)].title;
}

// ---------- Array ----------
// Next = newer, Prev = older
//
// Fill from TOP

let vaaliteema_array = [
    {
        'date': '2.4.2024',
        'title': 'Eurovaalit 2024',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida auctor scelerisque. Aliquam sodales metus quis nunc bibendum mollis. Sed malesuada, neque eget dignissim placerat, lacus arcu condimentum purus, in sagittis lorem odio nec orci. Aliquam condimentum molestie tortor pellentesque ultricies. Proin scelerisque neque turpis, quis ultricies lacus gravida ac. Praesent interdum leo quis lobortis vehicula. Aenean sit amet dolor est. Mauris quis ante diam. Vivamus elit dolor, convallis ut metus vel, rutrum imperdiet nibh. Fusce mattis, sem et feugiat pretium, massa nisl hendrerit est, quis ultrices libero nunc non elit. Suspendisse dolor libero, viverra vel porttitor id, ornare consequat ante. Sed bibendum pharetra erat, quis fringilla velit bibendum in. Aenean at lorem at leo volutpat sodales. Phasellus blandit rhoncus turpis posuere mattis. Proin finibus sapien sapien, at fermentum nisi hendrerit eget. Duis ultrices malesuada lorem in accumsan. Suspendisse nec volutpat lacus. Donec lacus tellus, viverra vel ligula consectetur, vehicula vestibulum ex. Proin diam nisi, semper quis lacinia ac, gravida condimentum lacus. Phasellus efficitur sit amet dolor quis efficitur. Nunc sollicitudin varius ipsum, a ultricies tortor tincidunt in. Sed sed eros semper, aliquam magna in, ultrices justo. Fusce accumsan erat at quam consectetur, vitae facilisis ante dignissim. Duis quis ullamcorper sem. Nullam feugiat congue sapien, quis imperdiet justo. In ac neque dictum, congue ligula eu, bibendum elit. Cras et tortor consequat, molestie metus et, tempor turpis. Aenean ut magna ac odio lobortis dictum nec non orci. Sed lectus quam, consectetur a sapien ac, volutpat ornare velit. Donec elementum elit vitae leo dignissim vestibulum. Maecenas condimentum elementum elit sed porta. Suspendisse dictum ante et mauris commodo sagittis. Nunc efficitur at dui nec sollicitudin. Mauris accumsan vitae ipsum quis porta. Sed nec odio diam. Fusce vestibulum semper leo ut consectetur. Morbi nisi nibh, pulvinar eget mattis eget, maximus id erat. Sed porttitor est quis dapibus facilisis. In eu sagittis justo. Aenean elit turpis, finibus a felis a, fermentum eleifend orci. Etiam eget efficitur diam. Vivamus nec felis eu purus interdum consectetur. Phasellus sed magna lacinia, pretium ligula aliquet, pharetra eros. In velit nisi, egestas lobortis gravida ac, consectetur eleifend lorem. Duis lacinia imperdiet lectus ut rhoncus. Ut ac felis sed odio lobortis viverra nec vitae sapien. Etiam ac sapien felis. In porta, nunc sed pulvinar eleifend, nisi mauris semper eros, id auctor justo libero in lectus. Pellentesque gravida tristique sagittis. Mauris quis porttitor erat. Sed pretium laoreet purus a tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu erat finibus, maximus dui quis, porttitor nulla.'
    },
    {
        'date': '2.4.2024',
        'title': 'Kuntavaalit 2025',
        'text': 'TBA'
    }
]