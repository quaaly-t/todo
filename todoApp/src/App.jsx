import { Provider } from "react-redux"
import "./App.css"
import TodoApp from "./components/TodoApp"
import { sotre } from "./store/store"

function App() {
    return (
        <Provider store={sotre}>
            <TodoApp />
        </Provider>
    )
}

export default App
