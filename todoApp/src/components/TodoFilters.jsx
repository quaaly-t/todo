import { CheckCircle, Clock, List } from "lucide-react"

function TodoFilters({ currentFilter, stats }) {
    const filters = [
        { key: "all", label: "All", icon: List, count: stats.total },
        { key: "active", label: "Active", icon: Clock, count: stats.active },
        {
            key: "completed",
            label: "Completed",
            icon: CheckCircle,
            count: stats.completed,
        },
    ]
    return (
        <div className="flex items-center justify-center">
            <div className="inline-flex bg-gray-200">{/*  */}</div>
        </div>
    )
}

export default TodoFilters
