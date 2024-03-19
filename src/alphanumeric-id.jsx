const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const LENGTH = 20;
// Adapted from: https://github.com/invertase/react-native-firebase/blob/6783245e19f81297363fc56a53063c8a053782b8/packages/app/lib/common/id.js
export const alphanumericId = () => {
    let id = '';
    for (let i = 0; i < LENGTH; i++) {
        id += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    return id;
};
