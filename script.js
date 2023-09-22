document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from Google Sheets API
    fetch('https://script.google.com/macros/s/AKfycbydAP9-SIHEWiYHa2LOfMvy7Nk7mvkcroK93NVWUGYD1gJOX_5foLJJp0UGyFksdJoo/exec')
        .then(response => response.json())
        .then(data => {
            const dataTable = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
            
            // Loop through the data and populate the table
            data.forEach(row => {
                const newRow = dataTable.insertRow();
                newRow.innerHTML = `<td>${row.ID}</td><td>${row.Name}</td><td>${row.Adr}</td><td>${row.MobileNo}</td>`;
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    // Add search functionality (same as previous example)
    document.getElementById("searchInput").addEventListener("keyup", function () {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");

        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    }
                }
            }
        }
    });
});
