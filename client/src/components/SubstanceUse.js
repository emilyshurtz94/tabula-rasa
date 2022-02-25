import React from "react";

function SubstanceUse() {
  return (
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
  );
}

export default SubstanceUse;
