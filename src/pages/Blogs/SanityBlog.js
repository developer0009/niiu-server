import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../../context_api";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import SEOSection from "../Home/SEOSection";
import SharePage from "./SharePage";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import client, { dataset, projectId } from "../../utils";
const SanityBlog = () => {
  const posts = useContext(BlogContext);

  // console.log(posts);
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log(slug);
  let slugTitle = slug.split("-").join(" ");

  slugTitle = slugTitle[0].toUpperCase() + slugTitle.substr(1);
  // getting the sanity data
  let data;

  posts.map((post = null, index) => {
    // console.log(post.slug.current === slug);
    if (post && post.slug.current === slug) {
      data = { ...post, index };
      return;
    } else if (post === null) {
      data = null;
    }
  });

  // console.log("am data", posts[data.index + 1]);
  // if (data == null) {
  //   navigate("/blogs");
  // }

  // console.log(data);

  if (data == null) {
    navigate("/blogs");
  }

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  const imageSerializer = ({ node }) => {
    if (!node.asset) return null;
    // width(600)
    console.log("alt tag", node.alt);
    return (
      <div style={{ width: "100%" }} className="d-flex justify-center">
        <img
          className="img-fluid my-4 "
          src={urlFor(node.asset).width(600).auto("format").url()}
          // style={{
          //   width: "250px",
          //   height: "250px",
          // }}
          style={{ objectFit: "cover", margin: "auto" }}
          alt={data && data.alttags}
        />
      </div>
    );
  };
  // const serializers = {
  //   types: {
  //     image: (props) => (
  //       <img
  //         src={urlFor(props.node.asset).width(320).height(240).fit("max").url()}
  //         alt={props.node.alt}
  //       />
  //     ),
  //   },
  // };
  console.log(slugTitle);
  return data ? (
    <>
      <Helmet>
        <title>{data.metatitle}</title>
        <meta name="description" content={data.metadescription} />

        <meta
          property="og:title"
          content=" How Can The SaaS Analytics Platform Helps In Marketing And Growth |
          NiiU Digital"
        />
        <meta property="og:description" content={data.metadescription} />

        <link rel="alternate" hreflang={data.hreflang} href={data.canonical} />
        <meta name="category" content={data.category} />

        <meta property="og:image" content={data.mainImage.asset.url} />
      </Helmet>
      <Header />
      <div className="container-fluid who-are-we-bg ">
        <div
          className="container who-are-we padding-y"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="row">
            <div className="col-lg-12 content">
              <h1>Our Latest Blogs</h1>
              <p className="subhead-p">
                Blogs {">"} Get Started With {data.title}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* individual-blog-section */}
        <div className="container  padding-y">
          <div className="row author-details ">
            <div
              className="col-lg-12 mb-3"
              style={{
                display: "flex",
              }}
            >
              <div
                className="name me-4"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p>
                  <i className="fas fa-user me-2"></i>
                  {data.author}
                </p>
              </div>

              <div
                className="date"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p>
                  <i className="fas fa-calendar me-2"></i>
                  {data.publishedAt}
                </p>
              </div>
            </div>
          </div>
          <div
            className="row blog-content"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            style={{ width: "100%" }}
          >
            <PortableText
              blocks={data.body}
              className="sanity-body"
              serializers={{ types: { image: imageSerializer } }}
            />
          </div>
          <div className="row prev-next-btn blog-content mt-6">
            <div
              className="col-lg-12"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="prev-btn"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {data.index >= 1 ? (
                  <Link to={`/blogs/${posts[data.index - 1].slug.current}/`}>
                    <button className="our-previous-button">
                      <span>Previous</span>
                    </button>
                  </Link>
                ) : (
                  <Link to="/blogs/how-can-the-saas-analytics-platform-helps-in-marketing-and-growth/">
                    <button className="our-previous-button">
                      <span>Previous</span>
                    </button>
                  </Link>
                )}
              </div>

              {data.index < posts.length - 1 && (
                <div
                  className="next-btn"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <Link to={`/blogs/${posts[data.index + 1].slug.current}/`}>
                    <button className="our-next-button">
                      <span>Next</span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>{" "}
          <SharePage link={`/blogs/${data.slug.current}/`} />
        </div>
      </div>

      <SEOSection></SEOSection>
      <Footer></Footer>
    </>
  ) : (
    <Helmet>
      {" "}
      <title>Digital Agency Singapore | Niiu Digital </title>
      <link rel="canonical" href="https://niiu.digital/" />
      <link rel="alternate" href="https://niiu.digital/" hreflang="en-SG" />
      <link rel="alternate" href="https://niiu.digital/" hreflang="x-default" />
      <meta
        name="description"
        content="We're one of the best digital marketing agency in singapore that provides digital services for solopreneurs,sme,and etc.Saving time while scaling your business!"
      />
      <meta
        name="keywords"
        content="digital agency singapore, digital agency best websites, best digital agency singapore, top marketing agencies singapore, best digital marketing agency singapore, best agency in singapore, best creative agency singapore"
      />
      <meta property="og:title" content={slugTitle} />
      <meta property="og:url" content="https://niiu.digital/" />
    </Helmet>
  );
};

export default SanityBlog;
