
Ionospheric delay is the frequency-dependent propagation effect of the ionised upper atmosphere on a GNSS signal.

For the first-order term, the code group-delay range contribution is approximately I1 = 40.3 * STEC / f^2 metres, where STEC is slant total electron content in electrons per square metre and f is carrier frequency in hertz. Thus, for the same path, the first-order range term varies inversely with frequency squared. Code pseudorange is lengthened; the corresponding carrier-phase observation has an apparent advance, represented with the opposite sign under the usual GNSS observation convention.[^1]

STEC changes with location, time and ionospheric conditions. A vertical TEC map is a model product, not the exact slant electron content for a receiver at every epoch. Dual-frequency combinations can remove the dominant first-order term when the signal frequencies, observables and biases are handled correctly, but higher-order ionospheric terms, instrumental biases, multipath, noise and model residuals remain.[^1][^4]

Single-frequency broadcast corrections estimate rather than eliminate the delay. The current Galileo Open Service reference index lists both its reference single-frequency correction algorithm and a separately documented alternate NTCM-G algorithm. These documents specify receiver processing based on broadcast information; they do not show that every receiver implements either algorithm or that its correction is exact.[^2][^3]

The International GNSS Service also publishes combined global ionosphere products, including VTEC maps with final, rapid and predicted product classes. Such analysis products have their own latency and modelling limits and are distinct from broadcast algorithms and a receiver-specific slant-delay estimate.[^4]

[^1]: https://gssc.esa.int/navipedia/index.php/Ionospheric_Delay
[^2]: https://www.gsc-europa.eu/electronic-library/programme-reference-documents/galileo-in-force/open-service
[^3]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo_OS_SIS_ICD_in_force.pdf
[^4]: https://igs.org/wg/ionosphere/

