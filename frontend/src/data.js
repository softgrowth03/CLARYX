export const materials = [
  { id:'cr39', name:'CR-39', index:'1.498', family:'Thermoset polymer', abbe:'≈ 58', density:'≈ 1.32 g/cm³', tag:'Everyday clarity', copy:'A familiar optical resin with good clarity and relatively low chromatic dispersion.' },
  { id:'trivex', name:'Trivex', index:'≈ 1.53', family:'Urethane-based thermoset', abbe:'≈ 43–45', density:'≈ 1.11 g/cm³', tag:'Lightweight resilience', copy:'A lightweight material with good impact performance and a higher Abbe value than polycarbonate.' },
  { id:'156', name:'Mid-index', index:'≈ 1.56', family:'Index category; chemistry varies', abbe:'Varies by formulation', density:'Varies by formulation', tag:'A balanced profile', copy:'An index category used for value-oriented options. Chemistry and performance vary by supplier.' },
  { id:'poly', name:'Polycarbonate', index:'1.586', family:'Thermoplastic polymer', abbe:'≈ 30–31', density:'≈ 1.20–1.22 g/cm³', tag:'Impact-ready design', copy:'A lightweight thermoplastic with high impact resistance and strong intrinsic UV absorption.' },
  { id:'mr8', name:'MR-8', index:'≈ 1.60', family:'Trade-grade resin', abbe:'≈ 41', density:'≈ 1.30 g/cm³', tag:'High-index polymer', copy:'A trade-grade high-index resin often chosen for a balance of thickness reduction and optical performance.' },
  { id:'167', name:'High-index', index:'≈ 1.67', family:'MR-7 / MR-10 grade varies', abbe:'≈ 30–32', density:'≈ 1.35–1.37 g/cm³', tag:'Thinner lens potential', copy:'A high-index category used to reduce lens thickness. Exact properties differ by grade.' },
  { id:'174', name:'Ultra-high-index', index:'≈ 1.74', family:'MR-174 trade grade', abbe:'≈ 32–33', density:'≈ 1.47 g/cm³', tag:'High prescription focus', copy:'An ultra-high-index resin for thinner profiles; its higher density means it is not automatically lighter.' },
  { id:'glass', name:'Mineral glass', index:'1.523', family:'Inorganic glass', abbe:'≈ 59', density:'≈ 2.54 g/cm³', tag:'Classic optics', copy:'An inorganic optical material with high surface hardness and optical quality, balanced against greater weight and brittleness.' },
  { id:'pmma', name:'PMMA / Acrylic', index:'≈ 1.49', family:'Thermoplastic polymer', abbe:'Varies', density:'≈ 1.18 g/cm³', tag:'Specialty applications', copy:'A transparent thermoplastic used in selected optical applications, not a universal substitute for ophthalmic lens materials.' }
];

export const designs = [
  ['01','Single vision','One corrective power across the lens, tailored for a specific viewing distance.','A focused solution for distance, near or intermediate vision.'],
  ['02','Bifocal','Two distinct optical zones separated by a visible segment boundary.','Clear distance and near zones in one lens.'],
  ['03','Progressive','A gradual power change from distance through an intermediate corridor to near.','Multifocal vision without a visible segment line.'],
  ['04','Aspheric','A surface profile that changes gradually to manage lens form and magnification.','Can support a flatter, more refined lens appearance.'],
  ['05','Atoric','A design that considers different surface geometry across meridians.','A more tailored approach for prescriptions with astigmatism.'],
  ['06','Occupational','A near and intermediate focused design for defined work distances.','Designed around desk, screen and task viewing needs.'],
  ['07','Digital freeform','Precision surfacing places a prescribed optical design onto a lens surface.','Enables design customisation; it describes surfacing, not a coating.']
];

export const coatings = [
  ['Hard coat','Adds a more abrasion-resistant surface layer to protect the lens in everyday use.','Scratch-resistant, never scratch-proof.'],
  ['Anti-reflective','A multilayer treatment reduces reflections from lens surfaces.','Performance depends on the coating stack and verification data.'],
  ['Hydrophobic','A top layer helps water bead and release from the surface.','Does not make a lens self-cleaning.'],
  ['Oleophobic','A surface treatment helps reduce adhesion of oils and fingerprints.','Cleaning is still required.'],
  ['Anti-static','A coating layer can help reduce static attraction of dust.','Availability varies by coating system.'],
  ['UV filtering','UV performance depends on the substrate and applied treatment.','Product-specific spectral verification is required.'],
  ['Blue filtering','A spectral treatment selectively attenuates portions of visible blue-violet light.','Claims require measured spectral transmission data.']
];

export const glossary = [
  ['Abbe number','A measure associated with how strongly a material disperses light.'],
  ['Birefringence','A difference in refractive behaviour by direction, which can affect perceived optical quality.'],
  ['Focimeter','An instrument used to measure the optical power of a lens.'],
  ['Freeform','A digitally controlled surfacing method for producing a customised lens surface.'],
  ['Refractive index','A measure of how light propagates through a material; higher index can enable thinner designs.'],
  ['Semi-finished blank','A lens blank with one optical surface prepared, intended for prescription surfacing.'],
  ['Transmission','The proportion of light passing through a lens across a wavelength range.']
];
