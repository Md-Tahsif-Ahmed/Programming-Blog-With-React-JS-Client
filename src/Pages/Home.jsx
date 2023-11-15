import Author from "./Homepage/Author/Author";
import Banner from "./Homepage/Banner";
import Blogs from "./Homepage/Blog/Blogs";
import Categories from "./Homepage/Category/Categories";
import NewsLatter from "./Homepage/NewsLatter";
import {Helmet} from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Programming Blog | Home</title>
            </Helmet>
             <Banner></Banner>
             <Blogs></Blogs>
             <Categories></Categories>
             <NewsLatter></NewsLatter>
             <Author></Author>
        </div>
    );
};

export default Home;
