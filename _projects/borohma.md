---
layout: page
title: Borohma
description:  An L-borneol-based minicell insect-repellent fragrance.
img: assets/img/borohma.jpg # Update with your actual image filename
importance: 2
---

**International Genetically Engineered Machine (iGEM) Competition**

*Dry Lab Sub-Team Lead (March – October 2024)*


[**🔗 View Project Wiki**](https://2024.igem.wiki/formosa/index){:target="_blank" rel="noopener noreferrer"}


As part of the dry lab sub-team, my objective was to validate the viability of Borohma: an innovative, borneol-based repellent-fragrance housed in engineered minicells. Borohma was designed to replace traditional, potentially harmful chemical compounds. My specific contributions were focused on the core mathematical modeling.

I architected and developed two distinct quantitative models critical to the project’s success: a **Transmembrane Diffusion Model** to characterize the release of the active ingredient, and a **Bass Diffusion Model** to forecast the market adoption of the final consumer product.

## 1. The Transmembrane Diffusion Model

> **The Challenge:** A primary constraint in developing a comfortable and effective repellent is controlling the release rate of the active compound. If the borneol releases too quickly, the product is overwhelming and short-lived; if it releases too slowly, it fails to repel insects effectively. I needed to mathematically model the transport of borneol across the minicell membrane to optimize our production-release metrics.

### The Mathematical Approach
To quantify the release kinetics, I developed a model grounded in Fick's Laws of Diffusion, specifically adapted for transport across a biological membrane. To calculate the rate of change of the borneol concentration over time, I utilized the following differential equation:

$$\frac{dC_{in}}{dt} = \frac{P \cdot A}{V} \left( C_{out} - C_{in} \right)$$

**Where:**
* $C_{in}$ represents the concentration of borneol inside the minicell.
* $C_{out}$ represents the concentration in the external environment.
* $P$ represents the permeability coefficient of the minicell membrane.
* $A$ is the total surface area of the membrane.
* $V$ is the internal volume of the minicell.
* $t$ is time.

To accurately map the spatial concentration gradient across the membrane barrier itself, the flux was calculated using strictly defined derivatives:

$$J = -D \frac{dC}{dx}$$

*(Where $J$ is the diffusion flux, $D$ is the diffusion coefficient, and $\frac{dC}{dx}$ is the concentration gradient along axis $x$.)*

### Results & Application
The resulting data visualized a sustained, zero-order release profile over a designated 8-hour period, verifying that Borohma could provide long-lasting, comfortable protection without leaving a sticky, heavy residue on the skin.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/borohma_graph_1.jpg" title="Transmembrane Release Profile" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Release profile of Borohma over a short period.
</div>

---

## 2. The Bass Diffusion Model: Market-Adoption Forecasting

> **The Challenge:** Proving the biological function of the minicells was only half the equation; a successful project must also demonstrate real-world impact. I was tasked with modeling the commercial lifecycle and consumer adoption of Borohma, predicting how a novel, synthetic biology-driven personal care product would penetrate a market dominated by traditional chemical repellents.

### The Mathematical Approach
To quantitatively represent market adoption, I implemented the Bass Diffusion Model. This differential equation is standard in product forecasting, splitting the consumer base into "innovators" (those who adopt the product independently) and "imitators" (those influenced by the existing user base).

The rate of change of the adopting population was calculated as follows:

$$\frac{dN(t)}{dt} = \left( p + q \frac{N(t)}{M} \right) \left( M - N(t) \right)$$

**Where:**
* $N(t)$ represents the cumulative number of adopters at time $t$.
* $M$ represents the total potential market size.
* $p$ is the coefficient of innovation (external influence/advertising).
* $q$ is the coefficient of imitation (internal influence/word-of-mouth).

By integrating this equation, we generated a predictive timeline for peak sales and market saturation. I calibrated the parameters $p$ and $q$ using historical market data from both the eco-friendly cosmetic industry and the premium insect repellent sector.

### Results & Application
The Bass model provided a concrete timeline for Borohma’s market trajectory. The simulation indicated a steady adoption curve. This quantitative forecasting was vital for the project's human practices and commercialization strategies, proving to judges and stakeholders that Borohma was an economically sound venture.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/borohma_graph_2.jpg" title="Bass Diffusion Adoption Curve" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Market adoption forecasting utilizing historical cosmetic data.
</div>

---

## Conclusion

Through rigorous mathematical modeling, I bridged the gap between theoretical synthetic biology and practical application. The Transmembrane Diffusion Model ensured the physical product met our strict metrics for user comfort and repellent efficacy, while the Bass Diffusion Model validated the project's market potential. Together, these frameworks formed the quantitative backbone of the project.