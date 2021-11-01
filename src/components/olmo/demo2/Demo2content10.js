import { VideoImage } from "../../VideoContent";

const Demo2content10 = () => {
  return (
    <section
      id="content-10"
      className="content-10 pb-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              {/* Section ID */}
              <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                Sync Across Devices
              </span>
              {/* Title */}
              <h2 className="h2-xs">
                Discover powerful features to boost your productivity
              </h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="img-block text-center video-preview wow fadeInUp">
              <VideoImage />
            </div>
          </div>
        </div>
        {/* ADVANTAGES LIST */}
        <div className="row">
          <div className="col">
            <div className="content-10-btn">
              <ul className="advantages mt-25 clearfix">
                <li className="first-li">
                  <p>Free 30 days trial</p>
                </li>
                <li>
                  <p>Exclusive Support</p>
                </li>
                <li className="last-li">
                  <p>No Fees</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo2content10;
