import React from "react";

function SubstanceUse() {
  return (
    <div class="col s6 m6">
    <div class="card ">
      <div class="card-image">
        <img src="./images/Substance Free.png"></img>
        <span class="card-title">Substance Free</span>
      </div>
      <div class="card-content">
        <p class="black-text">Staying substance free can help free the mind and body</p>
      </div>
      <div class="card-action">
        <div>
          <div
            class="gigacalculator"
            data-tool="/calculators/sobriety-calculator.php"
            data-width="450"
          >
            <div class="gigacalctitle">Sobriety Calculator</div>
            <div class="gigacalcfooter">
              <a href="https://www.gigacalculator.com/calculators/sobriety-calculator.php">
                Sobriety Calculator
              </a>{" "}
              by{" "}
              <a class="gigacalclink" href="https://www.gigacalculator.com/">
                GIGAcalculator.com
              </a>
            </div>
          </div>
          <script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default SubstanceUse;
