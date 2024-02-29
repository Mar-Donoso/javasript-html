class DataService {
    constructor(repository) {
        this.repository = repository;
    }

    saveData(data) {
        const key = 'appData'; // Clave fija para simplificar
        this.repository.saveData(key, data);
    }

    retrieveData() {
        const key = 'appData';
        return this.repository.getData(key);
    }
}
