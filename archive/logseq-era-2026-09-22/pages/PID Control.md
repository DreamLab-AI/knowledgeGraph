public:: true

# pid control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3570bfc45572465daa408567c8c0fc520264168d17918eadee9a3a9034604737",
  "@type": "Page",
  "vc:slug": "pid-control",
  "title": "pid control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pid-control",
  "@type": "Class",
  "label": "PID Control",
  "definition": "PID (Proportional–Integral–Derivative) control is a closed-loop feedback control algorithm that computes a corrective output by summing three terms derived from the error signal: a proportional term that scales the instantaneous error, an integral term that accumulates past error to eliminate steady-state offset, and a derivative term that reacts to the rate of change of error to anticipate and damp future deviations. The control law u(t) = Kp·e(t) + Ki·∫e(τ)dτ + Kd·(de/dt) is parameterised by three tunable gains and applies universally to any plant where a measurable output can be compared against a desired setpoint. Originating in the 1940s through work by Minorsky, Ziegler, and Nichols, PID remains the dominant feedback controller in industrial automation, robotics, aerospace, and embedded systems due to its conceptual simplicity, zero requirement for an explicit plant model, and extensive supporting theory for stability analysis and gain tuning.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:proportional-control",
        "label": "Proportional Control"
      },
      {
        "@id": "urn:ngm:class:derivative-control",
        "label": "Derivative Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      },
      {
        "@id": "urn:ngm:class:setpoint",
        "label": "Setpoint"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      },
      {
        "@id": "urn:ngm:class:motion-control",
        "label": "Motion Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:error-signal",
        "label": "Error Signal"
      },
      {
        "@id": "urn:ngm:class:gain-tuning",
        "label": "Gain Tuning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      },
      {
        "@id": "urn:ngm:class:stability-analysis",
        "label": "Stability Analysis"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:closed-loop-control",
        "label": "Closed-Loop Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:impedance-control",
        "label": "Impedance Control"
      },
      {
        "@id": "urn:ngm:class:model-predictive-control",
        "label": "Model Predictive Control"
      },
      {
        "@id": "urn:ngm:class:sliding-mode-control",
        "label": "Sliding Mode Control"
      },
      {
        "@id": "urn:ngm:class:open-loop-control",
        "label": "Open-Loop Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cascade-control",
        "label": "Cascade Control"
      },
      {
        "@id": "urn:ngm:class:adaptive-control",
        "label": "Adaptive Control"
      },
      {
        "@id": "urn:ngm:class:anti-windup",
        "label": "Anti-Windup"
      },
      {
        "@id": "urn:ngm:class:bode-plot",
        "label": "Bode Plot"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:proportional-integral-derivative-controller",
      "label": "Proportional-Integral-Derivative Controller"
    },
    {
      "@id": "urn:ngm:class:three-term-controller",
      "label": "Three-Term Controller"
    }
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - PID (Proportional–Integral–Derivative) control is a [[Closed-Loop Control]] feedback algorithm that computes a corrective output by summing three terms derived from the error between a desired [[Setpoint]] and a measured plant output. The proportional term responds to the current error magnitude, the integral term accumulates past error to eliminate steady-state offset, and the derivative term anticipates future error trends by reacting to the rate of change. Together, these three terms make PID a universal baseline controller applicable to any [[Feedback Loop]] where a measurable output can be compared against a reference, spanning domains from [[Robot Control]] to [[Temperature Regulation]] and [[Motion Control]].

- ### Overview
  - PID control was formally codified in the early 1940s through the work of Nicolas Minorsky (ship steering, 1922), and later Ziegler and Nichols (1942), who published the first systematic [[Gain Tuning]] rules based on step-response and relay-feedback experiments.
  - The algorithm requires no explicit plant model, making it applicable to systems whose dynamics are partially or wholly unknown — a key advantage over model-based controllers.
  - Its three parameters (Kp, Ki, Kd) have intuitive physical interpretations, enabling engineers to tune manually in the field, which contributed to widespread adoption across all engineering disciplines.
  - PID is classified as a **linear time-invariant (LTI)** controller when gains are fixed; nonlinear extensions (gain scheduling, adaptive gains) exist for plants with varying dynamics.
  - Despite the proliferation of [[Model Predictive Control]], [[Adaptive Control]], and learning-based controllers, industry surveys consistently report that over 90% of industrial control loops use PID or PI configurations.

- ### Control Law and Mathematics
  - **Continuous-time form**
    - u(t) = Kp · e(t) + Ki · ∫₀ᵗ e(τ) dτ + Kd · de(t)/dt
    - where e(t) = r(t) − y(t) is the error, r(t) is the [[Setpoint]], and y(t) is the measured output.
  - **Discrete-time form** (for digital implementation)
    - u[k] = Kp · e[k] + Ki · Ts · Σe[j] + Kd · (e[k] − e[k−1]) / Ts
    - where Ts is the sampling period. The derivative term is frequently replaced by a first-order low-pass filtered version to suppress amplification of measurement noise.
  - **Transfer function** (in Laplace domain)
    - C(s) = Kp + Ki/s + Kd·s, giving a zero-pole structure that can be analysed via [[Bode Plot]] and [[Stability Analysis]] methods (e.g., gain margin, phase margin).
  - **Ideal vs. series form**: some industrial implementations use the series (interacting) form where integral and derivative channels interact, altering effective gains — a source of confusion when migrating between platforms.

- ### Key Components
  - **Proportional Term (P)**
    - Produces output proportional to current error: u_P = Kp · e(t)
    - High Kp increases responsiveness but reduces stability margin, risking oscillation.
    - A proportional-only controller always retains a non-zero steady-state error (offset) for step disturbances.
    - Related concept: [[Proportional Control]]
  - **Integral Term (I)**
    - Accumulates error over time: u_I = Ki · ∫e(τ)dτ
    - Eliminates steady-state offset by integrating until error reaches zero.
    - Subject to **integral windup** when the [[Actuator]] saturates — the integral state grows unboundedly, causing large overshoot upon recovery. Mitigated by [[Anti-Windup]] strategies (clamping, back-calculation).
    - Related concept: [[Integral Control]]
  - **Derivative Term (D)**
    - Reacts to rate of change: u_D = Kd · de/dt
    - Acts as a predictive damper, reducing overshoot and settling time.
    - Highly sensitive to measurement noise; typically combined with a low-pass filter: Kd · s / (τ_f·s + 1).
    - Related concept: [[Derivative Control]]
  - **Error Signal**
    - The difference e(t) = r(t) − y(t) is the fundamental input to all three terms.
    - Sensor accuracy and noise characteristics directly affect PID performance.
    - Related concept: [[Error Signal]], [[Sensor]]

- ### Gain Tuning Methods
  - **Ziegler–Nichols Step Response Method**
    - Apply open-loop step input, measure response curve (S-curve), extract dead time L and time constant T, then compute Kp, Ti, Td via lookup table.
    - Related concept: [[Ziegler-Nichols Method]]
  - **Ziegler–Nichols Frequency Response (Ultimate Gain) Method**
    - Increase Kp until sustained oscillation; record ultimate gain Ku and period Pu; compute gains from empirical formulae.
  - **Cohen–Coon and IMC (Internal Model Control) methods**
    - Provide more systematic closed-loop performance targeting, popular in process industries.
  - **Auto-tuning and relay feedback**
    - Many industrial PLCs include built-in auto-tuners using relay oscillation to estimate Ku and Pu without manual step tests.
  - **Machine-learning-assisted tuning**
    - [[Reinforcement Learning]] and [[Neural Network]]-based approaches can optimise PID gains online by treating the tuning problem as a policy search, bridging classical control and data-driven methods.
  - **Gain scheduling**
    - Gains are pre-computed for different operating regimes and switched or interpolated based on a scheduling variable (e.g., robot arm configuration, flight envelope).

- ### Variants and Extensions
  - **PI Controller** — Derivative term omitted when measurement noise is high; sacrifices transient performance to avoid noise amplification.
  - **PD Controller** — Integral term omitted for fast systems where steady-state error is acceptable or compensated elsewhere.
  - **Cascade (Inner–Outer Loop) PID** — Outer loop regulates position; inner loop regulates velocity. Provides superior disturbance rejection for [[Robot Control]] joint axes.
    - Related concept: [[Cascade Control]]
  - **Fractional-order PID (PIλDμ)** — Extends integral and derivative orders to non-integer values, offering additional tuning freedom for fractional dynamics.
  - **Feedforward + PID** — Combines a model-based feedforward term with PID feedback to achieve near-perfect tracking without relying solely on error feedback.
  - **Adaptive PID** — Gains are adjusted online based on observed system behaviour, addressing slow-varying plant changes.
    - Related concept: [[Adaptive Control]]
  - **2-DOF PID** — Separate set-point and disturbance rejection weighting, improving transient response without compromising disturbance rejection.

- ### Applications and Use Cases
  - **Industrial Automation**
    - Process temperature, pressure, flow, and level control loops in chemical plants, refineries, and food processing — the domain where PID controllers number in the millions.
    - Related: [[Temperature Regulation]]
  - **Robotics**
    - Joint-level position and velocity control in serial manipulators (e.g., 6-DOF arms).
    - Mobile robot heading and velocity control.
    - Related: [[Robot Control]], [[Motion Control]], [[Force Control]]
  - **Aerospace**
    - Altitude hold, attitude stabilisation, and autopilot inner loops in fixed-wing aircraft and rotorcraft.
    - Quadrotor/multirotor [[Motion Control]]: separate PID loops for roll, pitch, yaw, and altitude.
  - **Motor Drives**
    - Speed and torque control in electric servo drives, stepper motor controllers, and BLDC motor [[Actuator]] controllers.
  - **Thermal Management**
    - CPU and GPU thermal throttling, laboratory furnace temperature control, HVAC systems.
    - Related: [[Temperature Regulation]]
  - **Power Electronics**
    - Voltage and current regulation in DC–DC converters, inverters, and battery management systems.
  - **Biomedical**
    - Infusion pump flow rate control, insulin delivery in closed-loop glucose management (artificial pancreas systems), ventilator pressure control.

- ### Practical Limitations
  - **Nonlinear plants**: PID is a linear controller; significant plant nonlinearities (dead zones, backlash, friction) degrade performance unless compensated externally.
  - **Time delays**: Large transport delays reduce achievable gain margins; Smith Predictor or [[Model Predictive Control]] architectures are preferred.
  - **Multi-input multi-output (MIMO) systems**: Coupled dynamics require either decoupling networks or inherently MIMO controllers. Independent PID loops may interact badly.
  - **Non-minimum-phase plants**: Plants with right-half-plane zeros (e.g., certain flexible structures) constrain achievable bandwidth for any feedback controller, including PID.
  - **Parameter drift**: Fixed gains degrade when plant parameters change significantly over time or operating condition; [[Adaptive Control]] addresses this.

- ### Relationships
  - implements:: [[Closed-Loop Control]]
  - hasPart:: [[Proportional Control]]
  - hasPart:: [[Integral Control]]
  - hasPart:: [[Derivative Control]]
  - requires:: [[Sensor]]
  - requires:: [[Feedback Loop]]
  - requires:: [[Setpoint]]
  - enables:: [[Force Control]]
  - enables:: [[Robot Control]]
  - enables:: [[Motion Control]]
  - enables:: [[Temperature Regulation]]
  - uses:: [[Actuator]]
  - uses:: [[Error Signal]]
  - uses:: [[Gain Tuning]]
  - dependsOn:: [[Control Theory]]
  - dependsOn:: [[Stability Analysis]]
  - relatedTo:: [[Cascade Control]]
  - relatedTo:: [[Adaptive Control]]
  - relatedTo:: [[Ziegler-Nichols Method]]
  - relatedTo:: [[Anti-Windup]]
  - relatedTo:: [[Bode Plot]]
  - contrastsWith:: [[Impedance Control]]
  - contrastsWith:: [[Model Predictive Control]]
  - contrastsWith:: [[Sliding Mode Control]]
  - contrastsWith:: [[Open-Loop Control]]
  - bridges-to:: [[Reinforcement Learning]]
  - bridges-to:: [[Neural Network]]

- ### Standards and Context
  - **IEC 61131-3**: Defines the PID function block standard used in Programmable Logic Controllers (PLCs), specifying the CONT_C (continuous controller) block with configurable gain, integral, derivative, and anti-windup parameters.
  - **ISA-5.1 / ISA-5.4**: Instrumentation standards governing process control loop documentation and commissioning, within which PID is the assumed controller topology.
  - **IEEE Control Systems Society**: Publishes ongoing research on PID theory, tuning, and applications in *IEEE Transactions on Control Systems Technology* and *IEEE Control Systems Magazine*.
  - **AUTOSAR Classic/Adaptive**: Embedded control software standard used in automotive ECUs; PID algorithms instantiated as software components with defined interfaces.
  - PID design and analysis relies on standard [[Control Theory]] tools: root locus, Nyquist criterion, and [[Bode Plot]] frequency-domain analysis.

- ### Provenance
  - sources:: Åström & Hägglund, "PID Controllers: Theory, Design, and Tuning" (2nd ed.); Ziegler & Nichols, "Optimum Settings for Automatic Controllers" (1942); IEC 61131-3 standard; IEEE Control Systems Society publications
  - updated:: 2026-06-13
