//Функция возвращает число - количество свойств.

const countProps = function (obj) {
  //возвращаем массив с ключами обьекта.
  const keys = Object.keys(obj);

  //возвращаем количество элементов массива
  return keys.length;
};

//Вызовы функции для проверки работоспособности твоей реализации.\* /
console.log(countProps({})); //0

console.log(countProps({ name: "Mango", age: 2 })); //2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3
