import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BooksPage from './BooksPage';
import BookFormContainer from './BookFormContainer';
import CategoriesPage from './CategoriesPage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/books/:bookId">
            <BookFormContainer />
          </Route>
          <Route exact path="/categories">
            <CategoriesPage />
          </Route>
          <Route path="/">
            <BooksPage />
          </Route>
          <Route exact path="/books">
            <BooksPage />
          </Route>
          {/* <Route path="/second">
            <SecondPage />
          </Route>
          <Route path="/">
            <FirstPage />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
