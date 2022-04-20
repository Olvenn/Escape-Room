import './not-found-page.css';
import Logo from '../common/logo/logo';
import { AppRoute } from '../../const';



function NotFoundPage(): JSX.Element {

  return (
    <div className="page">
      <main className="page__main">
        <section className="page__back">
          <div>
            <Logo />
          </div>
          <h1>404. Page not found</h1>
          <a className="form__submit button" href="/">Back to main page</a>
        </section>
      </main>
    </div>
  );
}
export default NotFoundPage;
