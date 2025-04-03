/* ********************************************* *
 * LNC-GEO.JS                                    *
 * ********************************************* *
 * Contiene las rutinas para consumir el WCF     *
 * de información geográfica de Portal Services. *
 * ********************************************* *
 * Versión 2.24.10.25                            *
 * ********************************************* */

class Geografico {

    constructor() {
        window.geoApiRoot = "https://ctc-geografico.psweb.me/";

        $.ajax({
            url: window.geoApiRoot + "sys/version"
        })
            .done(function (data) {
                window.geoApiVersion = data;
                console.log("LNC-GEO.JS v." + window.geoApiVersion);
            });

    }

    getCurrentVersion() {
        return window.geoApiVersion;
    }

    listAllPaises() {
        return $.ajax({
            url: window.geoApiRoot + "paises/list"
        })
    }

    getPais(paisId) {
        return $.ajax({
            url: window.geoApiRoot + "paises/get/" + paisId
        })
    }

    listEstadosByPais(paisId) {
        return $.ajax({
            url: window.geoApiRoot + "estados/list/" + paisId
        })
    }

    getEstado(estadoId) {
        return $.ajax({
            url: window.geoApiRoot + "estados/get/" + estadoId
        })
    }

    listMunicipiosByEstado(paisId, estadoId) {
        return $.ajax({
            url: window.geoApiRoot + "municipios/list/" + paisId + "/" + estadoId
        })
    }

    getMunicipio(municipioId) {
        return $.ajax({
            url: window.geoApiRoot + "municipios/get/" + municipioId
        })
    }

    listCiudadesByMunicipio(paisId, estadoId, municipioId) {
        return $.ajax({
            url: window.geoApiRoot + "ciudades/list/" + paisId + "/" + estadoId + "/" + municipioId
        })
    }

    getCiudad(ciudadId) {
        return $.ajax({
            url: window.geoApiRoot + "ciudades/get/" + ciudadId
        })
    }
}

const geografico = new Geografico();