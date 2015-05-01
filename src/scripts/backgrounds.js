// src/scripts/backgrounds.js

function get(name) {
    return localStorage.getItem(name);
}

function set(name, value) {
    return localStorage.setItem(name, value);
}

function check() {
    return !!get('bgCount');
}

function getBgCount() {
    if (check()) {
        let val = get('bgCount');
        return parseInt(val, 10);
    } else {
        set('bgCount', '0');
        return 0;
    }
}

function __rand(max) {
    var min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBg() {
    if (!check()) {
        return false;
    }

    var count = getBgCount(),
        num   = __rand(count);
    
    return get(`bg_${num}`);
}

export function addBg(url) {
    if (!check()) {
        set('bgCount', '0');
    }
    var count = getBgCount() + 1;
    set('bgCount', count);
    return set(`bg_${count}`, url);
}
