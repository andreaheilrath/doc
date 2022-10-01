---
title: reconstruction
layout: default
has_children: true
permalink: /reconstruction/
---

# Reconstruction

Some objects or structures cannot be captured in a direct way.
In these cases, one has to use techniques to reconstruct the relevant structure from other data.


## Tomography

The whole idea behind tomography is to record the "shadows" of an object from different angles and then reconstruct the shape of the object by synthetization of the different perspectives.

The algorithms that are used for reconstruction belong to the class of [inverse problems](https://en.wikipedia.org/wiki/Inverse_problem). 
One of the most common algorithms for tomographic reconstruction is the inverse [Radon transform](https://en.wikipedia.org/wiki/Radon_transform), in particular the *Filtered Back-projection*.
Iterative Reconstruction and Fan-Beam Reconstruction for example are also used.
Another hot topic is reconstruction with machine learning models.

[TomoPy](https://tomopy.readthedocs.io/) is a python library for tomographic reconstruction.

A standard sample for the reconstructions is the Shepp-Logan phantom, which exists in 2D and 3D.


<div class="image-container">
<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/SheppLogan_Phantom.svg" alt="The Shepp-Logan Phantom">
    <figcaption>The Shepp-Logan phantom image. Simple standard test image created by Larry Shepp and Benjamin F. Logan for their 1974 paper "The Fourier Reconstruction of a Head Section." </figcaption>
</figure>
</div>

## Reconstruction and X-Rays

Tomography can be used in combination with X-Rays, like e.g. at BESSY II [X-Tomography](https://www.helmholtz-berlin.de/forschung/oe/ce/materialforschung/methoden/x-tomo/).

Another interesting field is coherent diffraction imaging (CDI), a lens-less imaging technique based on reconstruction.

There are open databases for CDI, the [CXIDB](https://www.cxidb.org/), and for X-ray tomograms by the [Finnish Inverse Problems Society](https://www.fips.fi/dataset.php).


## NeRFs

Neural Radiance Fields are interesting.

Here's a paper from B. Mildenhall et al. [NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis](https://dl.acm.org/doi/10.1145/3503250)