//правило вычисления ключа
let argKey = x => x.toString() + ':' + typeof x;
//генерация ключа
let generateKey = args =>args.map(argKey).join('|');

let memoization = fn =>{
    //пустой объект, который хранит будет хранит кэш
    let cache = {};
    console.log(cache);

    //захватываем массив аргументов
    return (...args)=>{
        console.log(cache);
        //ключ по которому записывается значение в кэш
        let key = generateKey(args);
        //берем значение из кэша
        let val=cache[key];
        //если такое значение в кэше есть, то возвращаем его из мемоизированной функции
        if(val) return val;
        //если ничего не нашли, то мемоизируем
        const res = fn(...args);
        cache[key]=res;
        return res;
    };
};