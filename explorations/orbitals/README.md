---
title: orbitals
layout: default
parent: explorations
permalink: /explorations/orbitals/
---

# Orbitals

## What's the point?

Since it was clear that an atom has a substructure, different models of the atom evolved.
Any of these models entailed new forms of visualizations.
This is especially interesting since there are limited possibilities to measure the structure and find an illustration that is based on measurement.
What is easy to measure is the light emitted by atoms, or in general by matter.


<div class="image-container">
<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Emission_spectrum-H.svg/1280px-Emission_spectrum-H.svg.png" alt="The four visible hydrogen emission spectrum lines in the Balmer series. H-alpha is the red line at the right.">
    <figcaption>The four visible hydrogen emission spectrum lines in the Balmer series. H-alpha is the red line at the right. <a href="https://en.wikipedia.org/wiki/Hydrogen_spectral_series#/media/File:Emission_spectrum-H.svg">>source</a> </figcaption>
</figure>
</div>



## Orbits

Nagaoka Hantarō developed 1904 the first planet like model of the atom, the "saturnian theory". In this model, the atom is described as a positively charged ball (the nucleus) orbited by a shell of negatively charged electrons.

Ernest [Rutherford](https://en.wikipedia.org/wiki/Ernest_Rutherford) and Nils [Bohr](https://en.wikipedia.org/wiki/Niels_Bohr) developed the first successful model to explain the spectrum of the hydrogen atom by describing the structure of the electrons in the atom (1913). Here, electrons are small particles circling around the nucleus on orbits with fixed radii. These determine the energy level of the electron.

Actually, Bohr's model was already a "quantum" model. Since the energy levels in the atom are discrete, emission and absorption of photons is only possible if their energy matches a difference of two energy levels (corresponding to a certain color).
But this model is more heuristic and still implies inconsistencies and is now part of [Old Quantum Theory](https://en.wikipedia.org/wiki/Old_quantum_theory).

* Bohr's model of hydrogen on [Kahn Academy](https://www.khanacademy.org/science/physics/quantum-physics/atoms-and-electrons/a/bohrs-model-of-hydrogen)
* Bohr's Theory of the Hydrogen Atom on [Course Hero](https://www.coursehero.com/study-guides/physics/30-3-bohrs-theory-of-the-hydrogen-atom/)



<div class="image-container">
<figure>
    <img width="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bohr_atom_model.svg/1280px-Bohr_atom_model.svg.png" alt="Stylised atom with three Bohr model orbits and stylised nucleus">
    <figcaption>Stylized atom with three Bohr model orbits and stylized nucleus. <a href="https://en.wikipedia.org/wiki/Hydrogen_spectral_series#/media/File:Emission_spectrum-H.svg">>source</a> </figcaption>
</figure>
</div>



## Quanta

The light emitted by atoms was not the only experimental observation that triggered quantum mechanics.
The second was the [black-body radiation](https://en.wikipedia.org/wiki/Black-body_radiation).

<div class="image-container">
<figure>
    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Black_body.svg/1280px-Black_body.svg.png" alt="As the temperature of a black body decreases, its intensity also decreases and its peak moves to longer wavelengths. Shown for comparison is the classical Rayleigh–Jeans law and its ultraviolet catastrophe.">
    <figcaption>As the temperature of a black body decreases, its intensity also decreases and its peak moves to longer wavelengths. Shown for comparison is the classical Rayleigh–Jeans law and its ultraviolet catastrophe. <a href="https://en.wikipedia.org/wiki/Black-body_radiation#/media/File:Black_body.svg">>source</a> </figcaption>
</figure>
</div>

In 1900 Max [Planck](https://en.wikipedia.org/wiki/Max_Planck) solved the puzzle by introducing a constant: h.
The so-called Planck constant is essential for describing the relation between energy and frequency for electromagnetic waves (aka light).

$$E=h\nu$$

These quanta were later called *photons*. 
So the first quantum theory was assigning particle properties to waves!
Louis [de Broglie](https://de.wikipedia.org/wiki/Louis_de_Broglie) developed the concept of matter waves in his dissertation 1924.
The de Broglie equations relate the wavelength λ to the momentum p, and frequency f to the total energy E of a free particle:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

So electromagnetic waves have particle-like properties and electrons have wave-like properties.
Welcome to duality!


## Wave Functions and Orbitals



* Werner Heisenberg's [Matrix Mechanics](https://en.wikipedia.org/wiki/Matrix_mechanics)
* Erwin Schrödinger's [Equation](https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation)
* Paul Dirac's [Transformation Theory](https://en.wikipedia.org/wiki/Transformation_theory_(quantum_mechanics))


The fact, that electrons in the atom are standing waves is mostly ignored in the visualizations and when the wavefunction is displayed it is mainly a surface that contains a certain percentage of the electron. 

<a href="https://w7.pngwing.com/pngs/103/195/png-transparent-atomic-orbital-molecular-orbital-pi-bond-principal-quantum-number-orbital-hybridisation-others-angle-text-symmetry.png"><img width="512" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Atomic-orbital-clouds_spdf_m0.png" alt="Orbitals displayed with a hard surface and statistical distribution of electrons."></a>



## Probability Densities

I implemented the [wave functions](http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/hydwf.html) of the Hydrogen Atom in [Houdini](/doc/explorations/computer_graphics/#houdini).

Right now I am not sure if there is already a way to render them in the browser. For now I recorded some gifs to have something here.

The images are made with [this script](./houdini/22-05-29_orbitals.hipnc).

<div class="image-container">
<figure>
    <img  src="./houdini/1s.gif" alt="">
    <figcaption> The 1s orbital. </figcaption>
</figure>
</div>

<div class="image-container">
<figure>
    <img  src="./houdini/2s.gif" alt="">
    <figcaption> The 2s orbital. </figcaption>
</figure>
</div>

<div class="image-container">
<figure>
    <img  src="./houdini/2p1.gif" alt="">
    <figcaption> The 2p1 orbital. </figcaption>
</figure>
</div>

<div class="image-container">
<figure>
    <img  src="./houdini/2p2.gif" alt="">
    <figcaption> The 2p2 orbital. </figcaption>
</figure>
</div>

