module.exports = (callback) => {
    console.log('funcao cb executada');
    let n1 = 99;
    let n2 = 1;
    n1+=n2;
    callback('callback executado', 'segundo parametro do cb', n1);
};