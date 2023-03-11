import {Header, Footer} from '../components/index';

const NotFound = () => {
    return (
        <div class="container">
            <Header />
            <section className="content justify-center">
                <h1>404</h1>
                <h4>The page you are looking for does not exist.</h4>
            </section>
            <Footer />
        </div>
    );
};

export default NotFound;
