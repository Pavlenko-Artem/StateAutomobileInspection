function serializeForm(formNode) {
	return new FormData(formNode);
}

function handleFormSubmit(event) {
	// Просим форму не отправлять данные самостоятельно
	event.preventDefault();
	serializeForm(applicantForm);
}

const applicantForm = document.getElementById('add-driver');
console.log(applicantForm);
applicantForm.addEventListener('submit', handleFormSubmit);
