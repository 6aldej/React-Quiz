# React Quiz
  🕹Данное приложение предназначено для создания и прохождения тестов.  
  📚Приложение написано на **React JS** с применением библиотек: **Redux, React Router, Axios.**  
  🌍Деплой готового приложения на **Firebase:** <http://react-quiz-c9caa.web.app>.  
  💻📱Приложение оптимизировано для экранов компьютеров, телефонов и планшетов.

## Функционал приложения 🎢

### Навигация 🧭
  
  Для навигации в приложении предусмотрено меню **☰** со следующими ссылками:
  
  * *до авторизации*
    * Список тестов
    * Авторизация
  * *после авторизации*
    * Список тестов
    * Создать тест 
    * Выйти
    
  ***

### Выполнение теста 💭

  📄**Страница с тестами:**
  
  ![Image alt](https://github.com/6aldej/ImagesForProjects/blob/master/react-quiz/QuizList2.png)
   ***
  ❓**Страница с вопросом:**  
  
  ![Image alt](https://github.com/6aldej/ImagesForProjects/blob/master/react-quiz/Quiz2.png)
  
  🏆**Результаты пройденного теста:**  
  
  ![Image alt](https://github.com/6aldej/ImagesForProjects/blob/master/react-quiz/FinishQuiz2.png)
  ***
### Авторизация🔑

  Для создания своего теста необходимо зарегистрироваться и войти в аккаунт.  
  Выйти из аккаунта можно по ссылке в навигационной панели, которая будет доступна после авторизации.  
  ![Image alt](https://github.com/6aldej/ImagesForProjects/blob/master/react-quiz/Auth.png)
  ***
### Создание теста👨‍🔧

  Для создания теста перейди по ссылке **Создать тест**, которая будет доступна в навигационной панели **☰** после Вашей авторизации в приложении.  
  
  ![Image alt](https://github.com/6aldej/ImagesForProjects/blob/master/react-quiz/QuizCreate.png)
  
  Заполнив **все** поля нажмите кнопку **ДОБАВИТЬ ВОПРОС**, чтобы создать первый вопрос, после этого форма обновится, для добавления нового вопроса. Добавив необходимое количество вопросов в тест, нажмите кнопку **СОЗДАТЬ ТЕСТ** для добавления теста в базу данных.  
  После этого на странице **Список вопросов** отобразится тест с присвоенным ему номером.

## Установка приложения 🚀

    git clone https://github.com/6aldej/React-Quiz.git
    cd React-Quiz
    npm install
    npm start

 ## Настройка приложения ⚙
  Для работы приложения с помощью сервиса **Firebase** необходимо создать новый проект и в нём создать новую базу данных.
  
  1. В файле `src\axios\axios-quiz.js` добавить ссылку своей базы данных вместо шаблона:
  
  `baseURL: 'https://****-*****-*****.firebaseio.com/' // 👈 ENTER YOUR baseURL ❗❗❗`
  
  2. В файле `src\store\actions\auth.js` добавить в переменную **url** свой **API_KEY** (ключ API для веб-приложения) вместо шаблона:
  
  ```
  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=🔴ENTER_YOUR_API_KEY🔴' // 👈 ENTER YOUR API_KEY 🔑❗❗❗
    
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=🔴ENTER_YOUR_API_KEY🔴' // 👈 ENTER YOUR API_KEY 🔑❗❗❗
        }
  ```
  3. Также в консоли своего проекта на Firebase во вкладке **Authentication** в разделе **Sign-in method** необходимо включить аутентификацию по адресу электронной почты и паролю.
  4. Документация Firebase <https://firebase.google.com/docs?authuser=0> 
