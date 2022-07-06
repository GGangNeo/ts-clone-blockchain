"use strict";
class LocalStorage {
    constructor() {
        this.ls = {};
    }
}
class SStorage extends LocalStorage {
    setItem(key, value) {
        this.ls[key] = value;
    }
    getItem(key) {
        return this.ls[key];
    }
    clearItem(key) {
        delete this.ls[key];
    }
    clear() {
        this.ls = {};
    }
    showAll() {
        Object.keys(this.ls).forEach((e) => console.log(`${e} : ${this.ls[e]}`));
    }
}
class GeolocationApi {
    getCurrentPosition(successFn, errorFn, optionsObj) {
        if (successFn) {
            successFN();
        }
        if (errorFn) {
            errorFN();
        }
        if (optionsObj) {
            console.log('option');
        }
    }
    watchPosition(successFn, errorFn, optionsObj) {
        if (successFn) {
            success();
        }
        if (errorFn) {
            error();
        }
        if (optionsObj) {
            console.log('option');
        }
    }
    clearWatch(id) { }
}
function successFN() {
    console.log('Your current position is:');
    console.log('Latitude : x');
    console.log('Longitude: y');
    console.log('More or less z meters.');
}
function errorFN() {
    console.log('error');
}
function success() {
    if (true) {
        console.log("Congratulations, you've reached the target!");
        geoloc.clearWatch(1);
    }
}
function error() {
    console.warn('ERROR');
}
const opt = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 1,
};
const geoloc = new GeolocationApi();
geoloc.getCurrentPosition(successFN);
geoloc.getCurrentPosition(successFN, errorFN);
geoloc.getCurrentPosition(successFN, errorFN, opt);
geoloc.watchPosition(success);
geoloc.watchPosition(success, error);
geoloc.watchPosition(success, error, opt);
