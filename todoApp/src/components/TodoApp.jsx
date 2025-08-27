import { CheckCircle2, Circle, Filter, Plus, Trash2 } from "lucide-react"
import TodoFilters from "./TodoFilters"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

function TodoApp() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4">
            <div class="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Quaaly-Todo
                    </h1>
                    <p>Organize your life, one task at a tim with quaality!</p>
                </div>

                {/* Stats Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-300 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold text-gray-800">
                            Progress Overview
                        </h2>
                        <div className="text-2xl font-bold text-green-600 ">
                            {/* Stats completed logics */}
                        </div>
                    </div>

                    <div class="w-full bg-gray-300 rounded-full h-3 mb-4">
                        {/* Progressbar */}
                        <div class="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-gray-800">
                                {/* stat total logic */}
                            </div>
                            <div className="text-sm text-gray-600">Total</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-800">
                                {/* stat active logid */}
                            </div>
                            <div className="text-sm text-gray-600">Active</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-800">
                                {/* stat completed logid */}
                            </div>
                            <div className="text-sm text-gray-600">
                                Completed
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main todo Container */}
                <div className="bg-white/90 backdrop-blur-sm rounded-b-2xl border border-gray-300 shadow-lg overflow-hidden ">
                    {/* Action Bar */}
                    <div className="p-6 border-b border-gray-300">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 
                                rounded-lg transition-colors duration-200 font-medium cursor-pointer"
                            >
                                <Plus size={20} /> Add Todo
                            </button>

                            {/* clear and delette button */}
                            <div className="flex items-center gap-2">
                                <button
                                    className="flex items-center gap-3 text-red-600 hover:text-red-700 
                                    px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-200 text-sm cursor-pointer"
                                >
                                    <Trash2 size={16} />
                                    Clear completed
                                </button>
                                <button
                                    className="flex items-center gap-3 text-green-600 hover:text-green-700 
                                    px-3 py-2 rounded-lg hover:bg-green-100 transition-colors duration-200 text-sm cursor-pointer"
                                >
                                    <CheckCircle2 size={16} />
                                    Mark all completed
                                </button>
                            </div>
                        </div>

                        {/* Todo Filter */}
                        <TodoFilters />
                    </div>
                    {/* Todo From */}
                    <div className="p-6 border-b border-gray-300 bg-gray-100">
                        <TodoForm />
                    </div>

                    {/* Todo list */}
                    <div className="max-h-96 overflow-auto">
                        <div className="p-12 text-center">
                            <div className="text-gray-600">
                                <Circle
                                    size={48}
                                    className="mx-auto mb-4 opacity-50"
                                />
                                <p className="text-lg font-medium mb-2 text-gray-800">
                                    No todos yet
                                </p>
                                <p>Add your firts todo to get stated!</p>
                            </div>
                            {/* Condition rendering */}
                            <div className="text-gray-600">
                                <Filter
                                    size={48}
                                    className="mx-auto mb-4 opacity-50"
                                />
                                <p className="text-lg font-medium mb-2 text-gray-800">
                                    No filter todos
                                </p>
                                <p class=""></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer information */}
                <div className="text-center mt-6 text-sm text-gray-700">
                    Footer
                </div>
            </div>
        </div>
    )
}

export default TodoApp
