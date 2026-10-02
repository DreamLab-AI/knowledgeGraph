Thrust is the force produced when a propulsion system ejects matter. Its SI unit is the newton, `N = kg m s^-2`. Thrust is a vector: magnitude, direction, line of action and time history all matter to a vehicle's translation and attitude.

## Momentum and pressure terms

For a steady, one-dimensional rocket control volume, the axial thrust is

`F = mdot Ve + (pe - pa) Ae`,

where `mdot` is expelled mass flow, `Ve` is exhaust velocity at the exit relative to the vehicle, `pe` is nozzle-exit static pressure, `pa` is ambient pressure and `Ae` is exit area.[^1][^2] The first term is momentum thrust. The second is pressure thrust. A more complete analysis accounts for non-uniform exit profiles, multiple streams, vector angle and unsteady behaviour.

Effective exhaust velocity combines both terms:

`c = F / mdot = Ve + (pe - pa) Ae / mdot`.[^1]

`c` is a performance-equivalent velocity. It need not equal a local gas-speed measurement at the nozzle plane, especially when pressure thrust, turbine exhaust, bleed flow or several exhaust streams are present.

## Reference conditions

Ambient pressure changes thrust even if chamber state and nozzle geometry remain fixed. At ideal vacuum reference, `pa = 0`, so an underexpanded nozzle can retain positive exit-pressure thrust. At sea level, atmospheric back-pressure reduces the pressure term. A thrust figure must therefore state sea-level, vacuum or test-chamber conditions; these values are not interchangeable.[^2]

Nozzle area ratio influences exit pressure and velocity. A nozzle designed for high-altitude operation can be overexpanded at sea level, with separation and side-load risks outside the simple equation. Inlet pressure, propellant temperature, chamber pressure, mixture ratio and throttle state also change mass flow and thrust.[^2][^4]

## Time dependence and impulse

Real thrust develops through ignition, start-up, steady operation, throttling, shutdown and tail-off. A solid motor's grain geometry changes burning area through the firing. Pulsed thrusters may spend much of a command in valve and transient behaviour. A quoted value should therefore say whether it is instantaneous, steady-state, average, minimum or maximum.

Total impulse is the time integral

`It = integral F(t) dt`,

with unit newton-second.[^1][^4] Multiplying nominal thrust by nominal burn time is valid only when that value represents the full history. Minimum impulse bit also depends on valve timing, ignition delay and tail-off, and is not obtained reliably from steady thrust alone.

## Vehicle performance and uncertainty

Vehicle acceleration follows `a = F/m` only after vector direction and external forces are handled. As propellant leaves, mass falls and the same thrust produces greater acceleration. Gravity, drag, steering and off-axis thrust change achieved motion. The ideal rocket equation treats some of these separately and cannot turn a static thrust number into a trajectory by itself.[^3]

High thrust and high specific impulse describe different properties. Electric thrusters can accelerate propellant to high effective exhaust velocity while producing low thrust because available electrical power limits mass flow and jet power.[^5] Low thrust applied for a long time can deliver large total impulse, although the finite arc, changing orbit, power and pointing constraints must be propagated.

ECSS requires thrust and mass-flow histories, justified standard deviations, effective-performance losses and qualification across the operating envelope. That envelope includes scatter from models, manufacture, component performance, measurements and differences between ground facilities and flight.[^4] Useful thrust evidence therefore states the article, operating point, ambient condition, averaging interval, calibration, correction and uncertainty.

The UK Space Agency's Westcott facility announcement records government backing for spacecraft propulsion testing with ESA, RAL Space and Nammo UK.[^6] This establishes national test capability and intended space-like conditions. It is not a performance result for an unnamed thruster.

## References

[^1]: NASA Glenn Research Center, [Specific Impulse](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/specific-impulse/).
[^2]: NASA Glenn Research Center, [Thrust Equation](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/thrust-force/).
[^3]: NASA Glenn Research Center, [Ideal Rocket Equation](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/ideal-rocket-equation/).
[^4]: European Cooperation for Space Standardization, [ECSS-E-ST-35C Rev.1: Propulsion general requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35C_Rev.16March2009.pdf).
[^5]: ESA, [What is Electric Propulsion?](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/What_is_Electric_propulsion).
[^6]: UK Space Agency, [New satellite propulsion test facility to propel UK into new space age](https://www.gov.uk/government/news/new-satellite-propulsion-test-facility-to-propel-uk-into-new-space-age).

