import StatusCount from "./components/StatusCount";
import ActionsCount from "./components/ActionsCount";

const App = () => {
  return (
      <div className="App">
      <div className="container">
          <StatusCount />
          <ActionsCount />
      </div>
    </div>
  );
}

export default App;

// ========== Заметки ===========
// Что было на уроке?

// Как нам подключить Redux?
// Скачали react-redux redux в наш проект
// Импортировали Provider из react-redux и store из нашего проекта, который мы в дальнейшем создадим на уровне с src в папке redux
// Обернули весь наш App в ранее импортированный Provider и сказали что его store будет равен store-у который мы создадим
// Далее мы создали тот самый файл store в папке redux который находится на одном уровне с src
// В нашем файле store мы импортируем createStore из redux. Затем создаем переменную store которая будет равна нашему createStore в который мы будем передавать функции (reducers) и экспортируем эту переменную store

// Вот теперь мы можем работать с нашим redux.

// Как работать с Redux?

// Для работы с redux нам помогут хуки useSelector useDispatch и функция reducer которую мы сами создадим

// useDispatch() это функция которая передает action в наш reducer
// reducer, в нашем случае countReducer это функция проверяющая типы наших action и если совпадает тип изменяет состояние нашего state, или делает то что мы сказали
// useSelector() это функция достающая наше состояние с нашего store

