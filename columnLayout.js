const columns = ['A', 'B', 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J'];

const createColumns = () => {
    const container = document.getElementById('columnContainer');
    columns.forEach(column => {
        const button = document.createElement('button');
        button.textContent = column;
        button.className = "bg-gray-300 text-white py-2 px-4 rounded-xl w-[110px] h-[56px]";
        container.appendChild(button);
        
    })
}

document.addEventListener('DOMContentLoaded',createColumns)