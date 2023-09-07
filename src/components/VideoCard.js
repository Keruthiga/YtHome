import React from "react";
import "../App.css";
import img1 from "../assets/maxresdefault.jpg";
import { Link } from "react-router-dom";
import Filter from "./Filtered";

function VideoCard() {
  return (
    <div className="main">
      <Filter></Filter>
      <div className="video-container">
        {/* <!-- Video-1 --> */}

        <div className="video">
          <Link to="/video">
            <img className="thumbnail" src={img1} alt="" />
          </Link>
          <div className="content">
            <img
              className="thumbnail channel-icon"
              src="https://yt3.ggpht.com/ZXdU2_la3sKTncWwYaF-sU3jCDaFsIG_uQC6tOmhgqsFsUDLNlDytibY-4NSx0xOWWbp2HIV=s48-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="info">
              <h4 className="title_1">web design by reactjs for frontEnd</h4>
              <p className="channel-name">Akil</p>
              <p className="views">123K subscribers</p>
            </div>
          </div>
        </div>

        {/* <!-- Video-2 --> */}
        <a href="https://youtu.be/emNkJGwcusQ?si=NVzrJkmy2_DnjP4e">
          <div className="video">
            <img
              className="thumbnail "
              src="https://hackr.io/blog/python-vs-java/thumbnail/medium"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/FqiGBOsNpeWbNw20ULboW0jy88JdpqFO9a-YRJ0C2oc4lZ8uoHYJ38PWSkrjdC_zQgNW9pGU=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Python in 8 minutes (compared to Java)
                </h4>
                <p className="channel-name">NeetCode</p>
                <p className="views">531K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-3 --> */}
        <a href="https://youtu.be/CJrVX-ta4ss?si=tt11ePqPiDhLoT76">
          <div className="video">
            <img
              className="thumbnail"
              src="https://i.ytimg.com/vi/sx-1gYJyJmo/maxresdefault.jpg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.googleusercontent.com/NlOyQWcjSrIJPDwr8OW28IgNGho_s9rhsuhxcjfytMAqy2Fc9vJ7zNPBMWCy3ECkzvmjNV1kMA=s176-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  How to make Desktop Application Using Python and Html Css ||
                  python desktop application
                </h4>
                <p className="channel-name">CodeScripts</p>
                <p className="views">715 subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-4 --> */}
        <a href="https://youtu.be/4NOTxBkfBjo?si=2E3q5u2iRo8Z0UFG">
          <div className="video">
            <img
              className="thumbnail"
              src="https://i.ytimg.com/vi/rMCdddVUDX8/maxresdefault.jpg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Java vs Python Comparision | Which is Better For Future Java
                  or Python | Java & Python | Simplilearn
                </h4>
                <p className="channel-name">Simplilearn</p>
                <p className="views">3.27M subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-5 --> */}
        <a href="https://youtu.be/m67-bOpOoPU?si=d8Ot4D3EbMEHe07I">
          <div className="video">
            <img
              className="thumbnail"
              src="https://i.ytimg.com/vi/9Q3YqB0rHys/maxresdefault.jpg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/d8kYE1c2rp8m9AiF1-CpIWes0P_PSuRK8R2PjEdLWH9tcPMf07xOE84uSTxL4EbUVXwNhgnPfw=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Python Tutorial - Python Full Course for Beginners in Tamil
                </h4>
                <p className="channel-name">Error Makes Clever Academy</p>
                <p className="views">374K subscribers </p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-6 --> */}
        <a href="https://youtu.be/yRpLlJmRo2w?si=KwDOA071Jlg52DB1">
          <div className="video">
            <img
              className="thumbnail"
              src="https://i.pinimg.com/originals/bd/88/ed/bd88eda44a5be939a9c30b74a2a7a751.jpg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Introduction to Java Language | Lecture 1 | Complete Placement
                  Course
                </h4>
                <p className="channel-name">Apna College </p>
                <p className="views">4.21M subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-7 --> */}
        <a href="https://youtu.be/BgScmBg-bsk?si=0CQNETRrjTHfTuTl">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/OIP.-30615OIch3KZT-TjE88GwHaEK?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/_V4puAFTbWDOKAoUDhLbkYk4AupABvXsNVajUuo5zrIx-LEjaBkWsAPgif2KJaB7MmBIBcFRWw=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  How To Make THE BEST Thumbnails on YouTube (Photoshop)
                </h4>
                <p className="channel-name">finzar</p>
                <p className="views">303K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-8 --> */}
        <a href="https://youtu.be/GxwHXxumdQk?si=oJxoNlqgAlM9Gqo0">
          <div className="video">
            <img
              className="thumbnail"
              src="https://word-brokers.com/wp-content/uploads/2019/08/feature-image-768x600.png"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaQr9Zuyw8GcX6JvJPVN7jnYE-9Vn4IRZemaKZAAkA=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  The BEST Way to Build a Header! [HTML,CSS]
                </h4>
                <p className="channel-name">Marc Hinton</p>
                <p className="views">7.65K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-9 --> */}
        <a href="https://youtu.be/krfUjg0S2uI?si=UK7kOm6OmUKqxWpm">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/OIP.VXz8-uu7svTtBvYWF2vI4AHaD4?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Build a Simple Website with HTML, CSS, JavaScript – Course for
                  Beginners
                </h4>
                <p className="channel-name">freeCodeCamp.org </p>
                <p className="views">8.26M subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-10 --> */}
        <a href="https://youtu.be/Oes56FoYABc?si=gFvnELQGttunkU98">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/R.bc7a0289710df5f1393cdf78a2887539?rik=di3ZsoqRjogTeg&riu=http%3a%2f%2felearner.in%2fassets%2fimages%2flogo%2fhtml.jpg&ehk=znZGlErwfi9OXFMQDciRPALNR%2briisv0qz9Te0zihRc%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Learn Complete HTML Tutorial In Tamil | தமிழ்
                </h4>
                <p className="channel-name">Tutor Joe's Stanley</p>
                <p className="views">441K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-11 --> */}
        <a href="https://youtu.be/RIAlNPgSkG8?si=LeFMyXrrbjGFokU_">
          <div className="video">
            <img
              className="thumbnail"
              src="https://i.ytimg.com/vi/l65CSW8D1Pk/maxresdefault.jpg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaSVhMsmmtIJHWb94Lh0RPxQuDkuo9lsWWKNWOxXpg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  #1 - What is Bootstrap CSS? - (தமிழில்) (Tamil) | Bootstrap
                  Course
                </h4>
                <p className="channel-name">CyberDude Networks Pvt. Ltd.</p>
                <p className="views">61.3K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-12 --> */}
        <a href="https://youtu.be/4kFg2EqEIv8?si=HiibV39SUgipqEkY">
          <div className="video">
            <img
              className="thumbnail"
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115235028/original/0a89b92fa9efb18412f454db806e4a1081753f20/create-a-responsive-website-with-html-css.jpg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Web Development 101: How HTML, CSS, JavaScript & PHP Work
                  Together | PHP Tutorial #3
                </h4>
                <p className="channel-name">CodeWithHarry</p>
                <p className="views">4.41M subscribers </p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-13 --> */}
        <a href="https://youtu.be/G3e-cpL7ofc?si=f1ZoTOXOvTwt73Cz">
          <div className="video">
            <img
              className="thumbnail"
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/110072223/original/9b7695518867617d85407d34b1a0129e5632e148/design-html-css-java-script-bootstrap.jpg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaRu3zcJ4_fybe-8GJUmrGzc2S6xYsxw0HgMnfnI=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  HTML & CSS Full Course - Beginner to Pro
                </h4>
                <p className="channel-name">SuperSimpleDev</p>
                <p className="views">278K subscribers </p>
              </div>
            </div>
          </div>
        </a>
        {/* 
          <!-- Video-14 --> */}
        <a href="https://youtu.be/2OTq15A5s0Y?si=e1HWhLJ8ewmRT6fe">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/OIP.kXNc1BUd2mO2WuYkZRGwNQHaEK?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">7 better ways to create a React app</h4>
                <p className="channel-name">Fireship </p>
                <p className="views">2.39M subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-15 --> */}
        <a href="https://youtu.be/Vblvb_s12zM?si=QjfDs58hq7NteK4v">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/OIP.x8Fp9uOPgEaQdig7hV70qwHaGa?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/sm9KjocCAAXBPB5gyBMk24j6ZWk2t8nOw2ID_00u5fiS2qBH3MIiphaklt5wq91KeSCHwlCz=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Top 7 Tools For Web Development | Web Development Tools |
                  Intellipaat
                </h4>
                <p className="channel-name">Intellipaat</p>
                <p className="views">6.97M subscribers </p>
              </div>
            </div>
          </div>
        </a>
        {/* 
          <!-- Video-16 --> */}
        <a href="https://youtu.be/AKMUpyQSln4?si=rA7Zs9cZDcXW0Iyb">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/OIP.N5IxrF7hOvVZrO7_AI8IeAHaEG?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/s5Eex4ZIqBSe2y2k5aidi71WGkfEJORkY-Hn2QDVMJxnkpRB5FdlOiHC9V1yyLuxSaCv5JCVYmM=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  Getting CSS Styles with JavaScript - getComputedStyle()
                  function
                </h4>
                <p className="channel-name">dcode</p>
                <p className="views">121K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-17 --> */}
        <a href="https://youtu.be/HGTJBPNC-Gw?si=ZiwMgkH9kPbHpffy">
          <div className="video">
            <img
              className="thumbnail "
              src="https://th.bing.com/th/id/OIP.wr5x7VkvnQNHKLY1tm6vDAHaEK?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  HTML & CSS Full Course for free 🌎 (2023)
                </h4>
                <p className="channel-name">Bro Code</p>
                <p className="views">1.2M subscribers </p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-18 --> */}
        <a href="https://youtu.be/dBUBYz75gdk?si=P9ckUqrJFmKnHtuL">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/OIP.dDtlFuI4suV5bS_0kZc2pgHaEn?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  JavaScript Complete Tutorial in Tamil | Tutor Joes | Full
                  Stack Web Development
                </h4>
                <p className="channel-name">Tutor Joe's Stanley </p>
                <p className="views">441K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-19 --> */}
        <a href="https://youtu.be/cYga4JhX5yM?si=ti9x4Ft8_MDf2oUj">
          <div className="video">
            <img
              className="thumbnail"
              src="https://th.bing.com/th/id/OIP.W7njWRGFe9g7F05CdhUsmAHaEN?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/zSgb9auUHE_pgzi5Thya71hkDGx-F0F56SbpH3sW1IG899YDeva92ff0Is1oidgB3J1v4kgTTw=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">
                  01. HTML, CSS, JS to React - #01 Introduction and Setup
                </h4>
                <p className="channel-name"> Lifetechfacts</p>
                <p className="views">3.24K subscribers</p>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Video-20 --> */}
        <a href="https://youtu.be/lh3MGxP3Rl8?si=sZ-VcqxuGV0-hHO5">
          <div className="video">
            <img
              className="thumbnail"
              src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2021/12/02080547/Website-Navigation-Bar-Examples-to-Enhance-Your-Web-Design_FeaturedImage_Vertical-700x950.jpeg"
              alt=""
            />
            <div className="content">
              <img
                className="thumbnail channel-icon"
                src="https://yt3.ggpht.com/ytc/AOPolaReFpOoeq7FZ3A0u6MOKndgE57CV-5vpqGIlt4yBA=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="info">
                <h4 className="title_1">Building website with C++</h4>
                <p className="channel-name">Ishtiak Mokut</p>
                <p className="views">372 subscribers</p>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* <script src="https://apis.google.com/js/api.js"></script> */}
    </div>
  );
}

export default VideoCard;
