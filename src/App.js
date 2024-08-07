import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { Instructor, InstructorCard } from "./pages/Instructor";
import InstructorProfileDetail from "./pages/InstructorProfileDetail";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Checkout from "./pages/Checkout";
import InstructorDetail from "./pages/InstructorDetail";

function App() {
    return ( <
        >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { <
            Layout >
            <
            Home / >
            <
            /Layout>
        }
        />{" "} <
        Route path = "/about"
        element = { <
            Layout >
            <
            About / >
            <
            /Layout>
        }
        />{" "} <
        Route path = "/courses"
        element = { <
            Layout >
            <
            Courses / >
            <
            /Layout>
        }
        />{" "} <
        Route path = "/instructor"
        element = { <
            Layout >
            <
            Instructor / >
            <
            /Layout>
        }
        />{" "} <
        Route path = "/blog"
        element = { <
            Layout >
            <
            Blog / >
            <
            /Layout>
        }
        />{" "} <
        Route path = "/single-blog"
        element = { <
            Layout >
            <
            BlogSinglePage / >
            <
            /Layout>
        }
        />{" "} <
        Route path = "/user/:id"
        element = { < InstructorProfileDetail / > }
        />{" "} <
        Route path = "calendar"
        element = { < Calendar / > }
        />{" "} <
        Route path = "chat"
        element = { < Chat / > }
        />{" "} <
        Route path = "checkout"
        element = { < Checkout / > }
        />{" "} <
        Route path = "detail"
        element = { < InstructorDetail / > }
        />{" "} <
        /Routes>{" "} <
        /BrowserRouter>{" "} <
        />
    );
}

export default App;