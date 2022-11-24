import './App.css';
import questions from './data/questions';

function App() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12 col-md-8 offset-md-2'>
					{
						questions.map((q, i) => {
							return (
								<div key={i}>
									<h3>{q.question}</h3>
									{
										q.answers.map((a, j) => {
											return (
												<p key={j}>
													<input type='radio' name={`answer-${i}`} /> {a.answer}
												</p>
											)
										})
									}
								</div>
							)
						})
					}
				</div>
			</div>
			<div className='row my-5'>
				<div className='col-12 col-md-8 offset-md-2'>
					<input type='button' value='Get My Result' className='btn btn-primary' />
				</div>
			</div>
		</div>
	);
}

export default App;
