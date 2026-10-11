Spectral filtering is the removal or retention of selected frequency components of a series or image, usually by transforming it into the frequency domain, reweighting the components and transforming back.[^1][^2]

SWEET places filter beneath spectral analysis but defines it by label only.[^3] A University of Washington course chapter describes the Fourier method as transforming the series, multiplying the coefficients by a suitable set of weights to remove or amplify chosen frequencies, and inverting the transform.[^1] Edinburgh's image processing notes say that attenuating high frequencies gives a smoother image in the spatial domain while attenuating low frequencies enhances the edges.[^2]

Edinburgh adds that a low-pass filter retains low frequencies unchanged and that all frequency filters can in theory be implemented as a spatial filter, though in practice the Fourier-domain function is only approximated by a spatial kernel.[^2] That marks the boundary with spatial filters such as the speckle filters, which the retained sources treat as spatial operations.

The University of Washington chapter warns that band-pass filters tend to make even noise look periodic, so the chosen range should be checked for physical meaning.[^1] The retained sources do not establish a processing level for spectral filtering or cover filtering by wavelength band.

[^1]: University of Washington Atmospheric Sciences, “Chapter 8, Filtering”. https://www.atmos.washington.edu/~dennis/Chapter_8_Filtering.pdf
[^2]: University of Edinburgh, “Image Processing Learning Resources, Digital Filters, Frequency Filters”. https://homepages.inf.ed.ac.uk/rbf/HIPR2/freqfilt.htm
[^3]: ESIP SWEET, “reprDataServiceAnalysis.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl

