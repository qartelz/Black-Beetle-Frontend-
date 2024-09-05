export const sum = (a) => {
    let s = 0;
    for (let i = 0; i < a.length; i++) s += parseInt(a[i]);
    return s;
}

export const max = (a) => {
    a = a.map((x) => parseInt(x));
    let max = a[0];
    for (let i = 1; i < a.length; i++) if (a[i] > max) max = a[i];
    return max;
}

export const min = (a) => {
    a = a.map((x) => parseInt(x));
    let min = a[0];
    for (let i = 1; i < a.length; i++) if (a[i] < min) min = a[i];
    return min;
}

export const average = (a) => sum(a) / a.length;
