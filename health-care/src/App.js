import { NavigationContainer } from '@react-navigation/native';

import './App.css';
import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { BookAppointment } from './components/BookAppointment/BookAppointment';
import { About } from './components/About/About';
import { Treatment } from './components/Treatment/Treatment';
import { Team } from './components/Team/Team';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
	return (
		<div>
			<NavigationContainer>
				<div className="hero_area">
					<Header />
					<Login />
					<Register />
					<Slider />
				</div>
				<BookAppointment />
				<Treatment />
				<Team />
				<Testimonial />
				<About />
				<Footer />
			</NavigationContainer>
		</div>
	)
}

export default App;
