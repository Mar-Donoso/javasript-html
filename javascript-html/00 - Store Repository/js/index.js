document.addEventListener('DOMContentLoaded', function() {
        const repository = new DataRepository();
        const dataService = new DataService(repository);

        document.getElementById('saveButton').addEventListener('click', function() {
                const data = document.getElementById('dataInput').value;
                dataService.saveData(data);
            });
        document.getElementById('retrieveData').addEventListener(
            'click',
            () =>{
                const savedData = dataService.retrieveData();
                if (savedData) {
                    document.getElementById('displayData').innerText = savedData;
                    // document.getElementById('displayData').innerText = "DATOS";
                    //document.getElementById('displayData').innerHTML = "<p>DATOS</p>";
                }
            }
        );
});

