
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Task Completed', 'Task Incompleted'],
        datasets: [{
            label: '# TODO ANALYSIS',
            data: getData(),
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function getData() {
    let dataArray = [];

    let taskCompleted = 5;
    let incompleteTask = 5;

    dataArray[0] = taskCompleted;
    dataArray[1] = incompleteTask;

    return dataArray
}

// function TaskCounter() {
//     let count = 0;
//     todoList.forEach(obj => {
//         if (obj.isDone === true) {
//             count++
//         }
//     });

//     console.log(count);
//     // return count;
// }

// TaskCounter()
