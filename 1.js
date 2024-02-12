//Задание 1


let allList = ['putin@mail.ru', 'lukashenko@mail.ru', 'trump@mail.ru', 'biden@mail.ru', 'zelenski@mail.ru'];
let blackList = ['biden@mail.ru', 'zelenski@mail.ru'];

getValidEmails = () => {
    return allList.filter((mail) => !blackList.includes(mail));
  }

  console.log(getValidEmails())