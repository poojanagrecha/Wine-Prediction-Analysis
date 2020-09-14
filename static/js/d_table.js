$(document).ready(function() {
    getDataTable();
});

function getDataTable() {
    $.ajax({
        type: 'POST',
        url: "/getdataFrame/",
        dataType: 'json',
        success: function(data) {

            $('#dataframe').DataTable().clear().destroy(); //clear datatable
            $('#dataframe tbody').empty();

            data.forEach(function(Dtable) {
                let row = "<tr>";

                Object.entries(Dtable).forEach(function([key, value]) {

                    row += `<td>${value}</td>`;
                });
                row += "</tr>";

                $("#dataframe tbody").append(row);
            });
            $("#dataframe").DataTable();
        }
    });
};