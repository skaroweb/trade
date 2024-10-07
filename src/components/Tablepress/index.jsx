const Tablepress = () => {
  return (
    <div>
      <ol id="ratings_home">
        <li
          class="box mb d-flex flex-column flex-lg-row"
          data-tags="app,bizum,caballos,esports,fisicas,paypal,streaming"
          aria-expanded="true"
        >
          <span
            data-lnk="aHR0cHM6Ly93d3cuY2FzYXNkZWFwdWVzdGFzLmNvbS9jb2RlcmUv"
            class="bookmarker-image"
          >
            <span class="rank_count" id="first_count">
              1
            </span>
            <div class="bookie squared" data-bookie="codere">
              <img
                loading="lazy"
                draggable="false"
                width="96px"
                height="23px"
                alt="Codere"
                src="https://cdn.casasdeapuestas.com/bookmakers/codere.svg"
                onerror="this.src='https://www.casasdeapuestas.com/wp-content/uploads/thumbs_dir/codere-1tjw7s51icyc8wzpgee9r4gv8jqgw44bhmtd9rfrai4k.jpg';"
              />
            </div>
          </span>
          <div class="padding d-flex desc" style={{ flexBasis: "70%" }}>
            <div class="w-100">
              <ul class="broker__list">
                <li>
                  <strong> 0% commissions</strong>
                </li>
                <li> Real-time deposit by PayPal, credit card etc. m</li>
                <li> Min. deposit 100$</li>
                <li> For: Windows, Mac, Android and iOS</li>
              </ul>
              <div class="broker__support">
                <i class="fa fa-windows" aria-hidden="true"></i>
                <i class="fa fa-apple" aria-hidden="true"></i>
                <i class="fa fa-linux" aria-hidden="true"></i>
                <i class="fa fa-android" aria-hidden="true"></i>
                <i class="fa fa-chrome" aria-hidden="true"></i>
                <i class="fa fa-firefox" aria-hidden="true"></i>
              </div>
              <div class="broker-users">
                <i class="fa fa-users" aria-hidden="true"></i>

                <span>6844 visited this page today</span>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center grade rating-container">
            <div
              class="rating-info"
              style={{
                height: "50%",
                width: "100%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "grey",
                  fontWeight: 500,
                  marginBottom: "5px",
                }}
              >
                Valoración
              </span>
              <div>
                <span class="rating-text">9.6</span>/10
              </div>
              <div
                class="star-rating-container tts:left"
                aria-label="Calificación del editor"
              >
                <div
                  class="star-rating"
                  aria-label="La calificación del editor para Codere es de 4.8."
                >
                  <span style={{ width: "96%" }}></span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex align-items-center flex-column justify-content-center padding details"
            style={{
              flexGrow: 1,
              flexBasis: "30%",
              borderTopRightRadius: "var(--br)",
              borderBottomRightRadius: "var(--br)",
            }}
          >
            <span class="fw-bold text-center">¡Bono 200€!</span>
            <button
              role="button"
              onclick="openBookie({ bookie: 'codere', url: '/visitar/codere', location: 'Botón CTA Home' })"
            >
              Visitar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="lock"
                stroke="currentColor"
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 17 23"
              >
                <path
                  fillRule="evenodd"
                  d="M13.4333333,1.5 C15.8633862,1.5 17.8333333,3.4699471 17.8333333,5.9 L17.8333333,8.83333333 C19.4,8.83333333 20.5,9.32582011 20.5,9.93333333 L20.5,19.1 C20.5,21.5300529 18.5300529,23.5 16.1,23.5 L8.9,23.5 C6.4699471,23.5 4.5,21.5300529 4.5,19.1 L4.5,9.93333333 C4.5,9.32582011 4.99248678,8.83333333 5.6,8.83333333 L7.16666667,8.83333333 L7.16666667,5.9 C7.16666667,3.4699471 9.13661377,1.5 11.5666667,1.5 L13.4333333,1.5 Z M12.5288136,13.809437 C11.6149825,13.809437 11.1847548,14.6415245 11.1847548,15.1250244 C11.1847548,15.4473577 11.3432404,15.7896813 11.6602116,16.1519953 L11.0503539,18.4945536 L14.0072733,18.4945536 L13.3012434,16.2940019 C13.636962,15.9751573 13.8048214,15.5854982 13.8048214,15.1250244 C13.8048214,14.4343139 13.4426447,13.809437 12.5288136,13.809437 Z M13.4333333,2.16666667 L11.5666667,2.16666667 C9.5048036,2.16666667 7.83333333,3.83813693 7.83333333,5.9 L7.83333333,8.83333333 L17.1666667,8.83333333 L17.1666667,5.9 C17.1666667,3.83813693 15.4951964,2.16666667 13.4333333,2.16666667 Z"
                  transform="translate(-4 -1)"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      </ol>
    </div>
  );
};
export default Tablepress;
