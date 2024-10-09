import "./index.css";
function BrokerRating() {
  return (
    <>
      <div className="manage-hosting-wrap">
        <div className="container-fluid container-lg">
          <div className="row manage-hosting-content">
            <div className="col-12">
              <h2 className="sect-heading">
                Introduction to Our{" "}
                <span className="highlighted">Broker Rating System</span>
              </h2>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="img/ComplianceandSecurity.jpg"
                loading="lazy"
                alt="24/7 Worry-Free Fully Managed Support"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">
                Regulatory Compliance and Security
              </div>
              <div className="box-description">
                Harness the power of the cloud VPS with our knowledgeable tech
                support via live chat (instant) or by ticket (15 min. response
                time). Our support covers everything server related from A to Z.
              </div>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="/img/account-types-and-costs.jpg"
                loading="lazy"
                alt="Free, Effortless &amp; Guaranteed Migration"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">Account Types and Costs</div>
              <div className="box-description">
                Our hosting experts will migrate all your websites to the new
                server on a date and time that suits you best and absolutely
                free of charge. There is no downtime during the migration.
              </div>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="img/customer-support-and-education.jpg"
                loading="lazy"
                alt="Best Value with Flexible Resources"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">Customer Support and Education</div>
              <div className="box-description">
                Save money by only paying for as much as you use. Scalable
                resources let you allocate as much CPU/RAM/storage as your
                project consumes and easily add more when the need arises.
              </div>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="img/conclusion-making-an-informed-choice.jpg"
                loading="lazy"
                alt="Easy Website Management"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">
                Conclusion: Making an Informed Choice
              </div>
              <div className="box-description">
                Manage your website hosting like a Pro with SPanel which is
                included with your managed VPS hosting service. cPanel is
                available as an additional option.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BrokerRating;
