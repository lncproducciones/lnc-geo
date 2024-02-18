/* ********************************************* *
 * LNC-GEO.JS                                    *
 * ********************************************* *
 * Contiene las rutinas para consumir el WCF     *
 * de información geográfica de Portal Services. *
 * ********************************************* *
 * Versión 0.24.2.18                             *
 * ********************************************* */

class Geografico {

    constructor() {
        window.geoApiRoot = "https://psweb4-geo.azurewebsites.net/api/";

        $.ajax({
            url: window.geoApiRoot + "sys/version"
        })
            .done(function (data) {
                window.geoApiVersion = data.Resultado;
            });

        console.log("LNC-GEO.JS v." + window.geoApiVersion);
    }

    getCurrentVersion() {
        return window.geoApiRoot;
    }

    listAllPaises() {
        return $.ajax({
            url: window.geoApiRoot + "paises/all"
        })
    }

    listPaisesConEstados() {
        return $.ajax({
            url: window.geoApiRoot + "paises/detailed"
        })
    }

    getPais(paisId) {
        return $.ajax({
            url: window.geoApiRoot + "paises/view/" + paisId
        })
    }

    listEstadosByPais(paisId) {
        return $.ajax({
            url: window.geoApiRoot + "estados/bypais/" + paisId
        })
    }

    getEstado(estadoId) {
        return $.ajax({
            url: window.geoApiRoot + "estados/view/" + estadoId
        })
    }

    listMunicipiosByEstado(paisId, estadoId) {
        return $.ajax({
            url: window.geoApiRoot + "municipios/byestado/" + paisId + "/" + estadoId
        })
    }

    getMunicipio(municipioId) {
        return $.ajax({
            url: window.geoApiRoot + "municipios/view/" + municipioId
        })
    }

    listCiudadesByMunicipio(paisId, estadoId, municipioId) {
        return $.ajax({
            url: window.geoApiRoot + "ciudades/bymunicipio/" + paisId + "/" + estadoId + "/" + municipioId
        })
    }

    getCiudad(ciudadId) {
        return $.ajax({
            url: window.geoApiRoot + "ciudades/view/" + ciudadId
        })
    }
}

const geografico = new Geografico();