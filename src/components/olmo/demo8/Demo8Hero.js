const Demo8Hero = () => {
  return (
    <section id="hero-8" className="bg-fixed hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO IMAGE */}
          <div className="col-lg-6 order-last order-lg-2">
            <div className="hero-8-img pc-20 text-center">
              <img
                className="img-fluid"
                src="/images/hero-8-img.png"
                alt="hero-image"
              />
            </div>
          </div>
          {/* HERO TEXT */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="hero-8-txt">
              {/* Title */}
              <h2 className="h2-md">
                Generating leads with social media marketing
              </h2>
              {/* Text */}
              <p className="p-lg">
                Feugiat primis ligula risus auctor egestas and augue viverra
                mauri tortor in iaculis magna feugiat mauris ipsum and placerat
                viverra tortor gravida purus
              </p>
              {/* HERO QUICK FORM */}
              <form
                name="quickform"
                className="quick-form shadow-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Form Inputs */}
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    placeholder="Your email address"
                    autoComplete="off"
                    required
                  />
                  <span className="input-group-btn form-btn">
                    <button
                      type="submit"
                      className="btn btn-md btn-skyblue black-hover submit"
                    >
                      Get Started
                    </button>
                  </span>
                </div>
                {/* Form Message */}
                <div className="quick-form-msg">
                  <span className="loading" />
                </div>
              </form>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,64L120,74.7C240,85,480,107,720,117.3C960,128,1200,128,1320,128L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo8Hero;
