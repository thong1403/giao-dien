import "./css/Introdece.css";

function Introduce() {
  return (
    <div className="container-introduce">
      <h1>
        <b className="page-name">Products</b>{" "}
      </h1>
      <p className="introduce-title">
        We display products based on the latest products we have, if you want{" "}
        <br />
        to see our old products please enter the name of the item
      </p>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://s3-alpha-sig.figma.com/img/d721/1d4c/59a3541665aba6404a176b8b361a16fb?Expires=1677456000&Signature=D75MIp8FKwq9xrjz74KejbXtL0maAzKI5i4HOzA-MmpO6EmjNcUWEk5122KD6jSkVHZE4rFRgYphHL4GgrdfCh-0jtsSXSbTDnR9vRcjkJGDC3WJgPNTeGeav44yCK07pVGMTvSEOFE1CWO12vTBkvNPjueJcuPg84iTM5idlmwoHy2j1eoePpzm2z35gJWpl79Do~l0obLm9Ga3pGs3ZG4sx0wj8iqMIoVkp-UKbu-~IdM3EokJMFyMTRNLXKAZYzhk36KG23fcqw~ONtgTaJNiybLG9CfyQFyUgJkaKA~TYHChu8wfktU4XjQYDQM5KRuJfKjSJ81tGRzK8fBY0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="img-introduce"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.cenhomes.vn/2020/03/1585033152-can-ho-mau-eurowindow-river-park.jpg"
              alt=""
              className="img-introduce"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://gotrangtri.vn/wp-content/uploads/2021/04/thiet-ke-noi-that-chung-cu-bia.jpg"
              alt=""
              className="img-introduce"
            />
          </div>
          <div className="discount">
            <button id="btn">Discount</button>
            <h3>Ramadhan Sale Offer</h3>
            <p>
              Get 40% off for the first transaction <br />
              on Lalasia
            </p>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form class="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search property"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Find Now
            </button>
            <button className="btn-filter">
              <i class="fa-solid fa-filter"></i>
              Filter
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Introduce;
