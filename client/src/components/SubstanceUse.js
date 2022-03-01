import React from "react";

function SubstanceUse() {
  return (
    <div className='container'>
      <div className="col s6 m6">
        <div className="card ">
          <div className="card-image">
            <img src="../images/substance.png" alt="substance-free-sign"></img>
            <span className="card-title"></span>
          </div>
          <div className="card-content">
            <p className="black-text">Staying substance free can help free the mind and body</p>
          </div>
          <div className="card-action">
            <div>
              <div
                className="gigacalculator"
                data-tool="/calculators/sobriety-calculator.php"
                data-width="450"
              >
                <div className="gigacalctitle"></div>
                <div className="gigacalcfooter">
                  <a href="https://www.gigacalculator.com/calculators/sobriety-calculator.php">
                    Sobriety Calculator
                  </a>{" "}
                  {/* by{" "}
                  <a className="gigacalclink" href="https://www.gigacalculator.com/">
                    GIGAcalculator.com */}
                  {/* </a> */}
                </div>
              </div>
              <script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SubstanceUse;
