import finalSpot from './finalSpot';
const fakeData2 = [...finalSpot];
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData2);

export default fakeData2;