import Author from "./Homepage/Author/Author";
import Banner from "./Homepage/Banner";
import Categories from "./Homepage/Category/Categories";
import NewsLatter from "./Homepage/NewsLatter";

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Categories></Categories>
             <NewsLatter></NewsLatter>
             <Author></Author>
        </div>
    );
};

export default Home;
