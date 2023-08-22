const showIcons = false;
$(document).ready(function () {
    $.getJSON('data/db.json', function (data) {
        $.each(data.groups, function (i, group) {
            var groupName = group.name.charAt(0).toUpperCase() + group.name.slice(1); 
            var groupDiv = $('<div>').addClass('group');
            
            var groupHeader = $('<div>').addClass('groupHeader');
            var groupTitle = $('<h2>').text(groupName);
            var groupDescription = $('<p>').text(group.description);
            groupHeader.append(groupTitle, groupDescription);
            groupDiv.append(groupHeader);
            
            var cardView = $('<div>').addClass('cardView flexGrid'); 
            $.each(data.items, function (j, item) {
                if (item.group === group.name) {
                    var card = $('<div>').addClass('card').attr("onclick", `changePage('${item.href}')`);
                    var img = $('<img>').attr('src', item.img).addClass('card-img');
                    var title = $('<h3>').text(item.title).addClass('card-title'); 
                    var description = $('<p>').text(item.description).addClass('card-description');
                    card.append(img, title, description);
                    cardView.append(card);
                }
            });
            
            groupDiv.append(cardView); 
            $('body').append(groupDiv);
        });
    });
});


function changePage(href) {
    // Change the current page's location to the specified href
    window.location.href = href;
}
// const css = "background-image:linear-gradient(to bottom, black, red);"
// // const css = "background-image:linear-gradient(to bottom, rgb($r1, $g1, $b1), rgb($r2, $g2, $b2));"
// for (var r = 0; r < 256; r++) {
//     for (var g = 0; g < 256; g++) {
//         for (var b = 0; b < 256; b++) {
//             setStyle([r, g, b, 0, 0, 0])
//         }
//     }
// }

function setStyle(colorList) {
    var style = "background-image:linear-gradient(to bottom, rgb($1, $2, $3), rgb($4, $5, $6));"
    var target = $("body");
    var newStyle = style;
    for (var i = 0; i < 6; i++) {
        newStyle = newStyle.replace("$" + (i + 1), colorList[i])
    }
    console.log(newStyle)
    target.attr("style", target.attr("style") + "; " + newStyle);
}
// }

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }


// document.addEventListener("DOMContentLoaded", function() {
//     let hue = 0;
//     const saturation = 10;
//     const lightness = 40;

//     function changeBackground() {
//         const color1 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//         const color2 = `hsl(${(hue + 180) % 360}, ${saturation}%, ${lightness}%)`;
//         document.body.style.background = `${color1}`;
//         // document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
//         hue = (hue + 1) % 360;
//         setTimeout(changeBackground, 100); // Change every 100 milliseconds
//     }

//     changeBackground();
// });
