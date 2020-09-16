//run on page load
$(document).ready(function() {
    readData();
    // Add event listener for submit button
    $("#submit").on("click", function(event) {
        // Prevent the page from refreshing
        event.preventDefault();
        getPrediction();
    });

});

//Load drop down options
function readData() {

    $.ajax({
        type: 'POST',
        url: "/getDropdownid1/",
        dataType: 'json',
        success: function(data) {

            let wine_ent = data;

            Object.entries(wine_ent).forEach(function([key, value]) {
                let option_val = value.wineType_encoded;
                let option_name = value.Red_White;

                let option = `<option value=${option_val}>${option_name}</option>`;
                $("#id1").append(option);
            });

        }
    });

    $.ajax({
        type: 'POST',
        url: "/getDropdownid2/",
        dataType: 'json',
        success: function(data) {

            let country_ent = data;

            Object.entries(country_ent).forEach(function([key, value]) {
                let option_val = value.country_label;
                let option_name = value.country

                let option = `<option value=${option_val}>${option_name}</option>`;
                $("#id2").append(option);
            });

        }
    });

    $.ajax({
        type: 'POST',
        url: "/getDropdownid3/",
        dataType: 'json',
        success: function(data) {

            let country_ent = data;

            Object.entries(country_ent).forEach(function([key, value]) {
                let option_val = value.variety_label;
                let option_name = value.variety;

                let option = `<option value=${option_val}>${option_name}</option>`;
                $("#id3").append(option);
            });
        }
    });

    $.ajax({
        type: 'POST',
        url: "/getDropdownid4/",
        dataType: 'json',
        success: function(data) {

            let country_ent = data;

            Object.entries(country_ent).forEach(function([key, value]) {
                let option_val = value.winery_label;
                let option_name = value.winery;

                let option = `<option value=${option_val}>${option_name}</option>`;
                $("#id4").append(option);
            });
        }
    });

    $.ajax({
        type: 'POST',
        url: "/getDropdownid5/",
        dataType: 'json',
        success: function(data) {
            let country_ent = data;

            Object.entries(country_ent).forEach(function([key, value]) {
                let option_val = value.designation_label;
                let option_name = value.designation;

                let option = `<option value=${option_val}>${option_name}</option>`;
                $("#id5").append(option);
            });
        }
    });

    $.ajax({
        type: 'POST',
        url: "/getDropdownid6/",
        dataType: 'json',
        success: function(data) {
            let country_ent = data;
            Object.entries(country_ent).forEach(function([key, value]) {
                let option_val = value.province_label;
                let option_name = value.province;

                let option = `<option value=${option_val}>${option_name}</option>`;
                $("#id6").append(option);
            });
        }
    });
};

function getPrediction() {
    var payload = {
        "thing1": parseInt($("#id1").val()),
        "thing2": parseInt($("#id2").val()),
        "thing3": parseInt($("#id3").val()),
        "thing4": parseInt($("#id4").val()),
        "thing5": parseInt($("#id5").val()),
        "thing6": parseInt($("#id6").val())

    };


    $.ajax({
        type: 'POST',
        url: "/getPrediction/",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(data) {


            if (data == 0) {
                $('.modal-body p').empty();
                let data = "<p><b>This wine belongs in the 'Iconic' catagory and is worth: Over $50</b></p>";
                return $(".predict").append(data);
            } else if (data == 1) {
                $('.modal-body p').empty();
                let data = "<p><b>This wine belongs in the 'Popular' catagory and is worth: $10-15</b></p>";
                return $(".predict").append(data);
            } else if (data == 2) {
                $('.modal-body p').empty();
                let data = "<p><b>This wine belongs in the 'Premium' catagory and is worth: $15-20</b></p>";
                return $(".predict").append(data);
            } else if (data == 3) {
                $('.modal-body p').empty();
                let data = "<p><b>This wine belongs in the 'Super Premium' catagory and is worth: $20-30</b></p>";
                return $(".predict").append(data);
            } else if (data == 4) {
                $('.modal-body p').empty();
                let data = "<p><b>This wine belongs in the 'Ultra Premium' catagory and is worth: $30-50</b></p>";
                return $(".predict").append(data);
            } else {
                $('.modal-body p').empty();
                let data = "<p><b>This wine belongs in the 'Value' catagory and is worth: Under $10</b></p>";
                return $(".predict").append(data);
            };

        }
    });

};

// document.getElementById("submit").addEventListener('click', function() {
//     document.querySelector('.bg-modal').style.display = 'flex';
// });
// document.querySelector('.close').addEventListener('click', function() {
//     document.querySelector('.bg-modal').style.display = 'none';
// });