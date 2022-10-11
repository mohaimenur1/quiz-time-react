import React from "react";
import Ref from "./useref.jpg";
import Router from "./router.jpg";
import Context from "./context.jpg";

const Blog = () => {
  return (
    <div className="mt-5 container">
      <h1 className="mt-5 underline">Recent Blogs</h1>
      <div className="row d-flex justify-content-center g-3">
        <div className="col-lg-3">
          <div class="card h-100">
            <img src={Router} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-white fw-bold">
                What is the purpose of react router?
              </h5>
              <p className="card-text fw-bolder">
                eact Router enables "client side routing". In traditional
                websites, the browser requests a document from a web server,
                downloads and evaluates CSS and JavaScript assets, and renders
                the HTML sent from the server. When the user clicks a link, it
                starts the process all over again for a new page.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card h-100">
            <img src={Ref} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-white fw-bold">
                Describe about UseRef hooks?
              </h5>
              <p className="card-text fw-bolder">
                useRef returns a mutable ref object whose .current property is
                initialized to the passed argument (initialValue). The returned
                object will persist for the full lifetime of the component.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div class="card h-100">
            <img src={Context} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-white fw-bold">
                How does context API works?
              </h5>
              <p className="card-text fw-bolder">
                In a typical React application, data is passed top-down (parent
                to child) via props, but such usage can be cumbersome for
                certain types of props (e.g. locale preference, UI theme) that
                are required by many components within an application. Context
                provides a way to share values like these between components
                without having to explicitly pass a prop through every level of
                the tree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
