class DataRepository{

    saveData(key, data){
        alert("Voy a guardar los datos en caché. ")
        // localStorage.setItem("MY_DATA", "mis datos");
        localStorage.setItem(key, data);
    }
    getData(key){
        alert("Leer datos de caché. ")
        //localStorage.getItem("MY_DATA");
        return localStorage.getItem(key);
    }

}