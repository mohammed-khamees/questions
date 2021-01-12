//solution 1

//const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach((btn) => {
// 	btn.addEventListener('click', (e) => {
// 		const question = e.currentTarget.parentElement.parentElement.classList;
// 		question.toggle('show-text');
// 	});
// });

//solution 2
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	const btn = question.querySelector('.question-btn');
	btn.addEventListener('click', () => {
		questions.forEach((item) => {
			if (item !== question) item.classList.remove('show-text');
		});
		question.classList.toggle('show-text');
	});
});
