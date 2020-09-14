$(document).ready(function() {
    getDataTable();
    $("#dataframe").DataTable();
});

function getDataTable() {
    $.ajax({
        type: 'POST',
        url: "/getdataFrame/",
        dataType: 'json',
        success: function(data) {

            Object.entries(data).forEach(function([key, value]) {
                let country_val = value.country;
                let desc_val = value.description;
                let desig_val = value.designation;
                let points_val = value.points;
                let price_val = value.price;
                let prov_val = value.province;
                let reg1_val = value.region_1;
                let reg2_val = value.region_2;
                let var_val = value.variety;
                let winery_val = value.winery;
                let w_val = value['Red?'];
                let bin_val = value.Wine_Bins;


                let trow =
                    `<tr><td>${country_val}</td><td>${desc_val}</td><td>${desig_val}</td><td>${points_val}</td><td>${price_val}</td><td>${prov_val}</td>
            <td>${reg1_val}</td><td>${reg2_val}</td><td>${var_val}</td><td>${winery_val}</td><td>${w_val}</td><td>${bin_val}</td></tr>`;
                $("#wine-data").append(trow);
            });
        }
    });
};