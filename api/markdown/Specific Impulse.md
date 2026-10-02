Specific impulse measures impulse delivered per unit of expelled propellant mass. Two conventions are in active use, so every value needs a unit and definition.

## Velocity and seconds conventions

ECSS defines instantaneous mass-specific impulse as

`Is = F / mdot`,

with unit `N s kg^-1`, dimensionally equal to `m s^-1`.[^3][^4] Under a consistent system boundary, this is the effective exhaust velocity `c`, which includes momentum and pressure thrust.

Rocket engineering commonly reports

`Isp = F / (mdot g0) = c / g0`,

in seconds.[^1] Here `g0 = 9.80665 m s^-2` is the conventional standard acceleration of free fall.[^4][^5] It converts between velocity and seconds forms. It is neither local gravity at the engine nor Newton's gravitational constant. A spacecraft does not acquire a different `Isp` merely because it operates near another planet.

For variable operation, average mass-specific impulse is

`Is,avg = integral F(t) dt / m_ejected`,

where the mass interval and impulse interval are identical.[^1][^3] Start-up, shutdown, pulse tails and throttling can make this differ from a steady-state rating.

## System boundary and reference condition

Any quoted denominator must say which expelled flows count. Main chamber propellant, turbopump drive gas, film coolant, igniter flow, pressurant and other vented material can cross different engine or vehicle boundaries. Core-nozzle `Isp`, engine-level effective `Isp` and propulsion-system delivered impulse can therefore differ without contradiction.[^3]

Ambient pressure also matters. For a rocket nozzle,

`F = mdot Ve + (pe - pa) Ae`,

so vacuum and sea-level `Isp` differ through the pressure term even at the same mass flow and nozzle-exit state.[^1][^2] Chamber pressure, mixture ratio, inlet temperature, area ratio, throttle state and losses further change performance. A usable figure states the reference condition, operating point and averaging method.

ECSS distinguishes theoretical from effective specific impulse. Its effective value includes the identified gains and losses and is verified with representative flight-condition testing.[^3] A theoretical equilibrium or nozzle calculation should not be labelled as delivered performance.

## What specific impulse does and does not measure

Higher `Isp` means more ideal impulse from each unit of expelled mass. In the ideal rocket equation, that reduces propellant mass needed for a specified delta-v. It does not by itself measure thrust, total impulse, energy-conversion efficiency, thrust-to-power ratio, lifetime or mission duration.

Electric propulsion makes the distinction clear. Electrical or magnetic fields can accelerate a small mass flow to high velocity, producing high `Isp` while electrical power limits thrust.[^6] Long operating time, solar-array and power-processing mass, duty cycle and trajectory can outweigh the engine-only propellant advantage. Chemical systems usually deliver much higher thrust with lower exhaust velocity.

Tank density, temperature control, feed hardware, residual propellant, toxicity and reliability sit outside `Isp`. Comparing technologies by seconds alone can therefore reverse a system-level decision. A defensible comparison states thrust, power, duty cycle, total impulse, propellant and tank properties, operating life, reference environment and uncertainty alongside specific impulse.

## Uncertainty and reporting

Thrust and flow measurements share calibration, timing and facility errors. Dividing two nominal values without propagating covariance can understate uncertainty. ECSS requires standard deviations for thrust and mass-flow histories and qualification across measurement, modelling, manufacturing, component and facility scatter.[^3] Report whether an `Isp` value is predicted, measured, corrected to vacuum, averaged over a pulse, or demonstrated under representative conditions.

## References

[^1]: NASA Glenn Research Center, [Specific Impulse](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/specific-impulse/).
[^2]: NASA Glenn Research Center, [Thrust Equation](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/thrust-force/).
[^3]: European Cooperation for Space Standardization, [ECSS-E-ST-35C Rev.1: Propulsion general requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35C_Rev.16March2009.pdf).
[^4]: European Cooperation for Space Standardization, [specific impulse, ISP](https://ecss.nl/item/?glossary_id=477).
[^5]: Joint Committee for Guides in Metrology, [conventional quantity value](https://jcgm.bipm.org/vim/en/2.12.html).
[^6]: ESA, [What is Electric Propulsion?](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/What_is_Electric_propulsion).

