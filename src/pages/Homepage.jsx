import React, {useRef} from "react";
import "../css/Homepage.css";
import test from "../images/test1.png";
import image1 from "../images/homeCard1.jpeg";
import image2 from "../images/homeCard2.jpeg";
import image3 from "../images/homeCard3.jpeg";
import image4 from "../images/company1.png";
import image5 from "../images/company2.png";
import image6 from "../images/company3.png";
import image7 from "../images/company4.png";
import image8 from "../images/company5.png";
import image9 from "../images/company6.png";
import image10 from "../images/company7.png";

function Homepage() {
  const ref = useRef(null);

  const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="first-text-image">
      <div className="first-text">
        <img src={test} alt="" className="picture-home" />

        <p className="home-text">
          <span className="title-text">
            Enhance your skills to new heights.{" "}
            <p>Gain insights from leading educational institutions.</p>{" "}
          </span>
          <p>
            Through our platform, we provide mentorship programs tailored for
            beginners, guiding them through the intricacies of coding.
            Additionally, we extend internship opportunities to those who excel,
            allowing them to apply their skills in real-world settings.{" "}
          </p>
        </p>
        <button type="button" onClick={handleClick}  className="bn-article"> <h6 className="bn-article-sub">Click here to read articles</h6></button>
      </div>

      <div className="row card-container">
        <div className="col">
          <img src={image4} alt="" className="company-image1" />
        </div>
        <div className="col">
          <img src={image5} alt="" className="company-image2" />
        </div>
        <div className="col">
          <img src={image6} alt="" className="company-image3" />
        </div>
        <div className="col">
          <img src={image7} alt="" className="company-image4" />
        </div>
        <div className="col">
          <img src={image8} alt="" className="company-image5" />
        </div>
        <div className="col">
          <img src={image9} alt="" className="company-image6" />
        </div>
        <div className="col">
          <img src={image10} alt="" className="company-image7" />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col trans-test">
          <div className="card h-80">
            <img className="card-img-top smaller-image-home" src={image1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
                Update: An update language for time-varying JSON data
              </h5>
              <p className="card-text" ref={ref}>
                Time-varying JSON data are being used and exchanged in various
                today’s application frameworks like IoT platforms, Web services,
                cloud computing, online social networks, and mobile systems.
                However, in the state-of-the-art of JSON data management, there
                is neither a consensual nor a standard language for updating
                (i.e., inserting, modifying, and deleting) temporal JSON data,
                like the TSQL2 or SQL:2016 languages for temporal relational
                data. Moreover, existing JSON-based NoSQL DBMSs (e.g., MongoDB,
                Couchbase, CouchDB, OrientDB, and Riak) and both commercial
                relational DBMSs (e.g., IBM DB2 12, Oracle 19c, and MS SQL
                Server 2019) and open-source ones (e.g., PostgreSQL 15, and
                MySQL 8.0) supporting JSON documents do not provide any facility
                for maintaining temporal JSON data. For these reasons,
                we propose in this article a temporal update language, named
                JUpdate (Temporal JUpdate), for JSON data in the JSchema
                environment. We define it as a temporal extension of our
                previously introduced non-temporal .
              </p>
            </div>
          </div>
        </div>
        <div className="col trans-test">
          <div className="card h-80">
            <img className="card-img-top" src={image2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Improved software fault prediction</h5>
              <p className="card-text">
                Many code metrics exist for bug prediction. However, these
                metrics are based on the trivial count of code properties and
                are not sufficient. This research article proposes three new
                code metrics based on class complexity, coupling, and cohesion
                to fill the gap. The Promise repository metrics suite's
                complexity, coupling, and cohesion metrics are replaced by the
                proposed metrics, and a new metric suite is generated.
                Experiments show that the proposed metrics suite gives more than
                2 % improvement in AUC and precision and approximately 1.5 % in
                f1-score and recall with fewer code metrics than the existing
                metrics suite.
                Many code metrics exist for bug prediction. However, these
                metrics are based on the trivial count of code properties and
                are not sufficient. This research article proposes three new
                code metrics based on class complexity, coupling, and cohesion
                to fill the gap. The Promise repository metrics suite's
                complexity, coupling, and cohesion metrics are replaced by the
                proposed metrics, and a new metric suite is generated.
                Experiments show that the proposed metrics suite gives more than
                2 % improvement in AUC and precision and approximately 1.5 % in
                f1-score.
              </p>
            </div>
          </div>
        </div>
        <div className="col trans-test">
          <div className="card h-80">
            <img className="card-img-top" src={image3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
                Fuzzing-based grammar learning from a minimal set of seed inputs
              </h5>
              <p className="card-text">
                To be effective, a fuzzer needs to generate inputs that are well
                formed, so that they are not outright rejected by the Software
                Under Test (SUT) and can thus detect meaningful bugs. Grammar
                based fuzzers solve this problem, but they obviously require a
                grammar of the input language accepted by the SUT. Many times
                such grammar is unknown. Therefore, different black- and
                white-box algorithms have been proposed for learning them from
                SUTs. Black-box algorithms rely only on membership queries, but
                need access to carefully crafted well formed inputs in order to
                obtain good results. White-box algorithms require access to the
                source code and generally produce grammars with higher precision
                and recall, but at the expense of working only for specific
                programming languages and libraries. We propose a new algorithm
                and show through extensive experimentation that it can learn
                grammars from recursive descendent parsers with consistently
                high levels of both, recall and precision.
                We propose a new algorithm
                and show through extensive experimentation that it can learn
                grammars from recursive descendent parsers. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
