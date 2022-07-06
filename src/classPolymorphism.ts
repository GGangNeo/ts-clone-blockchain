type LStorage<V> = {
  [key: string]: V;
};

interface LocalStorageAPI<V> {
  setItem(key: string, value: V): void;
  getItem(key: string): V;
  clearItem(key: string): void;
  clear(): void;
}

abstract class LocalStorage<V> implements LocalStorageAPI<V> {
  protected ls: LStorage<V>;
  constructor() {
    this.ls = {};
  }
  // protected ls: LStorage<V> = {};
  // constructor(protected ls: LStroage<V>) {}
  abstract setItem(key: string, value: V): void;
  abstract getItem(key: string): V;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class SStorage<V> extends LocalStorage<V> {
  setItem(key: string, value: V) {
    this.ls[key] = value;
  }
  getItem(key: string) {
    return this.ls[key];
  }
  clearItem(key: string) {
    delete this.ls[key];
  }
  clear() {
    this.ls = {};
  }
  showAll() {
    Object.keys(this.ls).forEach((e) => console.log(`${e} : ${this.ls[e]}`));
  }
}

// const numberLS = new SStorage<number>();

// numberLS.setItem('1', 1);
// numberLS.setItem('1', 1);
// numberLS.setItem('3', 3);
// numberLS.setItem('4', 4);
// numberLS.setItem('5', 5);

// numberLS.showAll();
// console.log(numberLS.getItem('1'));

// numberLS.clearItem('5');
// numberLS.showAll();
// numberLS.clearItem('5');
// numberLS.showAll();
// numberLS.clear();
// numberLS.showAll();

interface GeolocationAPI {
  getCurrentPosition(successFn: Function): void;
  getCurrentPosition(successFn: Function, errorFn: Function): void;
  getCurrentPosition(
    successFn: Function,
    errorFn: Function,
    optionsObj: Object
  ): void;
  watchPosition(uccessFn: Function): void;
  watchPosition(successFn: Function, errorFn: Function): void;
  watchPosition(
    successFn: Function,
    errorFn: Function,
    optionsObj: Object
  ): void;
  clearWatch(id: number): void;
}

class GeolocationApi implements GeolocationAPI {
  getCurrentPosition(
    successFn: Function,
    errorFn?: Function,
    optionsObj?: Object
  ): void {
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
  watchPosition(
    successFn: Function,
    errorFn?: Function,
    optionsObj?: Object
  ): void {
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

  clearWatch(id: number): void {}
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

type Option = {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
};

const opt: Option = {
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
