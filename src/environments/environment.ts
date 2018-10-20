// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAWcWqW5LqpsIElf5tHtxec8_zzDKZJjw4',
    authDomain: 'fund-the-game.firebaseapp.com',
    databaseURL: 'https://fund-the-game.firebaseio.com',
    projectId: 'fund-the-game',
    storageBucket: 'fund-the-game.appspot.com',
    messagingSenderId: '648838860890'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
