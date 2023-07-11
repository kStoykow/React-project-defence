import './App.css';
import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { BookAppointment } from './components/BookAppointment/BookAppointment';
import { About } from './components/About/About';
import { Treatment } from './components/Treatment/Treatment';
import { Team } from './components/Team/Team';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<div>
			<div className="hero_area">
				<Header />
				<Slider />
			</div>
			<BookAppointment />
			<Treatment />
			<Team />
			<Testimonial />
			<About />
			<Footer />
		</div>
	)
}

export default App;
  