import Slider from "react-slick";

const Demo20reviews4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="reviews-4" className="rel pt-100 reviews-section division">
      {/* SECTION TITLE */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-75">
              {/* Section ID */}
              <span className="section-id violet-red-color txt-upcase">
                Why People Use OLMO
              </span>
              {/* Title */}
              <h3 className="h3-xl">
                {`  Don't trust our words. See what our clients say about us`}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-4-holder">
        <div className="container">
          <div className="row">
            {/* TESTIMONIALS CAROUSEL */}
            <div className="col-md-12">
              <Slider
                {...settings}
                className="owl-carousel owl-theme reviews-4-wrapper slickmargin"
              >
                {/* TESTIMONIAL #1 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna undo tempus aliquet undo cursus
                      suscipit cubilia laoreet augue
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-1.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Scott Boxer</h6>
                        <p className="p-md">@scott_boxer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      At sagittis congue augue egestas magna ipsum vitae a purus
                      ipsum primis in cubilia laoreet augue egestas luctus and
                      donec ultrice ligula magna at suscipit lectus gestas augue
                      into cubilia
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-2.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Joel Peterson</h6>
                        <p className="p-md">Internet Surfer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Mauris donec magnis sapien sapien congue augue egestas et
                      ultrice vitae purus diam integer congue magna ligula undo
                      egestas magna suscipit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-3.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Marisol19</h6>
                        <p className="p-md">@marisol19</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Mauris donec a magnis sapien etiam sapien undo congue
                      augue pretium ligula lectus aenean ipsum magna undo mauris
                      lectus laoreet tempor
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-4.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Leslie D.</h6>
                        <p className="p-md">Web Developer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Laoreet magna a suscipit egestas lectus ultrice and purus
                      ipsum primis and augue ligula egestas lectus gestas undo
                      auctor tempus feugiat impedit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-5.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Jennifer Harper</h6>
                        <p className="p-md">App Developer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      An augue cubilia laoreet undo magna ipsum and semper
                      suscipit egestas magna ipsum ligula vitae purus and ipsum
                      primis cubilia magna suscipit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-6.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Jonathan Barnes</h6>
                        <p className="p-md">jQuery Programmer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #6 */}
                {/* TESTIMONIAL #7 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Blandit vitae augue egestas diam tempus volutpat egestas
                      augue in cubilia laoreet magna a suscipit luctus dolor and
                      purus diam tempus undo aliquet porta rutrum gestas ipsum
                      ligula a vitae purus
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-7.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Mike Harris</h6>
                        <p className="p-md">Graphic Designer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #7 */}
                {/* TESTIMONIAL #8 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Augue at vitae purus tempus egestas volutpat an augue undo
                      cubilia laoreet magna suscipit luctus dolor blandit at
                      purus tempus feugiat impedit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-8.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Evelyn Martinez</h6>
                        <p className="p-md">WordPress Consultant</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #8 */}
              </Slider>
            </div>{" "}
            {/* END TESTIMONIALS CAROUSEL */}
          </div>
        </div>{" "}
        {/* End container */}
      </div>
    </section>
  );
};

export default Demo20reviews4;
