export const SwearList = ({ swears }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swears && swears.map(swear => (
                <div key={swear._id} className="bg-gray-800 p-6 rounded">
                    <p className="font-bold">{swear.goal}</p>
                    <p className="text-sm text-gray-400">By {swear.user}</p>
                </div>
            ))}
        </div>
    )
}
