const users = [
	{
		name: "Олег",
		email: "olegivanov@.gmail.com"
	},
	{
		name: "Таня",
		email: "taniavit@.gmail.com"
	},
	{
		name: "Тарас",
		email: "tarik95@.gmail.com"
	},
	{
		name: "Оксана",
		email: "oksana2002@.gmail.com"
	}
];

function showError(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-danger col-6">${text}</div>`
    setTimeout(function(){
        document.getElementById('message').innerHTML = ''
    },3000)
}
//showError('помилка')
function showSuccess(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-success col-6">${text}</div>`
    setTimeout(function(){
        document.getElementById('message').innerHTML = ''
    },3000)
}

//showSuccess('Успіх')