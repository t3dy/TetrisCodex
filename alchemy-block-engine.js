/* Shared alchemical block primitives for TetrisCodex modes.
   This file is intentionally dependency-free so any HTML prototype can include it. */
(function (root) {
  'use strict';

  const PRINCIPLES = {
    salt: {
      id: 'salt',
      name: 'Salt',
      quality: 'fixed',
      emoji: '🧂',
      massMul: 1.45,
      frictionMul: 1.55,
      volatilityMul: 0.35,
      tags: ['fixed', 'body', 'crystal'],
      responseTag: 'salt_selected'
    },
    sulphur: {
      id: 'sulphur',
      name: 'Sulphur',
      quality: 'oily',
      emoji: '🜍',
      massMul: 0.95,
      frictionMul: 0.78,
      volatilityMul: 1.18,
      tags: ['oily', 'combustible', 'soul'],
      responseTag: 'sulphur_selected'
    },
    mercury: {
      id: 'mercury',
      name: 'Mercury',
      quality: 'volatile',
      emoji: '☿',
      massMul: 0.72,
      frictionMul: 0.42,
      volatilityMul: 1.85,
      tags: ['volatile', 'slippery', 'spirit'],
      responseTag: 'mercury_selected'
    }
  };

  const PROCESSES = [
    ['aries', 'Aries', '♈', 'Calcination', 'Crucible', ['heat', 'ash', 'brittle']],
    ['taurus', 'Taurus', '♉', 'Congelation', 'Mold', ['fix', 'cool', 'solid']],
    ['gemini', 'Gemini', '♊', 'Fixation', 'Clamp', ['anchor', 'bind', 'body']],
    ['cancer', 'Cancer', '♋', 'Dissolution', 'Solvent Jar', ['wet', 'loosen', 'moat']],
    ['leo', 'Leo', '♌', 'Digestion', 'Athanor', ['slow_heat', 'ripen', 'timer']],
    ['virgo', 'Virgo', '♍', 'Distillation', 'Alembic', ['separate', 'vapor', 'purify']],
    ['libra', 'Libra', '♎', 'Sublimation', 'Sublimator', ['rise', 'lighten', 'air']],
    ['scorpio', 'Scorpio', '♏', 'Separation', 'Separator', ['divide', 'filter', 'choice']],
    ['sagittarius', 'Sagittarius', '♐', 'Ceration', 'Censer', ['soften', 'wax', 'oil']],
    ['capricorn', 'Capricorn', '♑', 'Fermentation', 'Fermenter', ['growth', 'rot', 'renew']],
    ['aquarius', 'Aquarius', '♒', 'Multiplication', 'Multiplier', ['copy', 'spread', 'increase']],
    ['pisces', 'Pisces', '♓', 'Projection', 'Projector', ['cast', 'transmute', 'score']]
  ].map(([id, sign, glyph, process, apparatus, tags]) => ({ id, sign, glyph, process, apparatus, tags }));

  const PLANETS = {
    sun: { id: 'sun', name: 'Sun', sign: '☉', exitSide: 1, mass: 1.05, tags: ['solar', 'gold', 'right'] },
    moon: { id: 'moon', name: 'Moon', sign: '☽', exitSide: -1, mass: 0.85, tags: ['lunar', 'silver', 'left'] },
    mercury: { id: 'mercury', name: 'Mercury', sign: '☿', exitSide: 0, mass: 0.75, tags: ['volatile', 'either'] },
    venus: { id: 'venus', name: 'Venus', sign: '♀', exitSide: -1, mass: 0.9, tags: ['copper', 'left'] },
    mars: { id: 'mars', name: 'Mars', sign: '♂', exitSide: 1, mass: 1.2, tags: ['iron', 'fire', 'right'] },
    jupiter: { id: 'jupiter', name: 'Jupiter', sign: '♃', exitSide: 1, mass: 1.1, tags: ['tin', 'right'] },
    saturn: { id: 'saturn', name: 'Saturn', sign: '♄', exitSide: -1, mass: 1.55, tags: ['lead', 'heavy', 'left'] }
  };

  const PROCESS_TO_PLANET = {
    aries: 'mars',
    taurus: 'venus',
    gemini: 'mercury',
    cancer: 'moon',
    leo: 'sun',
    virgo: 'mercury',
    libra: 'venus',
    scorpio: 'mars',
    sagittarius: 'jupiter',
    capricorn: 'saturn',
    aquarius: 'jupiter',
    pisces: 'moon'
  };

  const DEFAULT_PHYSICS = {
    mass: 1,
    friction: 1,
    volatility: 0.25,
    beamAffinity: 0,
    fixed: false,
    combustible: false,
    slippery: false,
    properExitSide: 0,
    exitMultiplier: 1,
    wrongExitPenalty: -1
  };

  function processById(id) {
    return PROCESSES.find(process => process.id === id) || null;
  }

  function principleById(id) {
    return PRINCIPLES[id] || null;
  }

  function planetForProcess(processId) {
    return PLANETS[PROCESS_TO_PLANET[processId]] || PLANETS.mercury;
  }

  function makeAlchemyBlock(options) {
    const process = processById(options.processId);
    const principle = principleById(options.principleId);
    const planet = options.planetId ? PLANETS[options.planetId] : (process ? planetForProcess(process.id) : PLANETS.mercury);
    const kind = principle ? 'substance' : 'apparatus';
    const base = {
      id: options.id || [process && process.id, principle && principle.id, kind].filter(Boolean).join('_'),
      schema: 'alchemy-block/v1',
      name: options.name || blockName(process, principle),
      emoji: options.emoji || blockEmoji(process, principle),
      kind,
      family: principle ? principle.id : 'apparatus',
      processId: process && process.id,
      processName: process && process.process,
      apparatus: process && process.apparatus,
      principleId: principle && principle.id,
      principleName: principle && principle.name,
      planetId: planet && planet.id,
      source: options.source || null,
      tags: mergeTags(process && process.tags, principle && principle.tags, planet && planet.tags, options.tags),
      physics: Object.assign({}, DEFAULT_PHYSICS),
      reactions: [],
      display: {
        color: options.color || colorForBlock(process, principle, planet),
        symbol: options.symbol || ((principle && principle.emoji) || (process && process.glyph) || (planet && planet.sign) || '?')
      }
    };

    if (planet) {
      base.physics.mass = planet.mass;
      base.physics.properExitSide = planet.exitSide;
    }
    if (principle) {
      base.physics.mass *= principle.massMul;
      base.physics.friction *= principle.frictionMul;
      base.physics.volatility *= principle.volatilityMul;
      base.physics.fixed = principle.id === 'salt';
      base.physics.combustible = principle.id === 'sulphur';
      base.physics.slippery = principle.id === 'mercury';
      base.responseTag = principle.responseTag;
    }

    return base;
  }

  function blockName(process, principle) {
    if (process && principle) return `${process.process} ${principle.name}`;
    if (process) return process.apparatus;
    if (principle) return `${principle.name} Substance`;
    return 'Unspecified Alchemical Block';
  }

  function blockEmoji(process, principle) {
    if (principle && process) return `${process.glyph}${principle.emoji}`;
    if (process) return process.glyph;
    if (principle) return principle.emoji;
    return '⚗️';
  }

  function colorForBlock(process, principle, planet) {
    if (principle && principle.id === 'salt') return '#d7e2de';
    if (principle && principle.id === 'sulphur') return '#e9b949';
    if (principle && principle.id === 'mercury') return '#9ad7e6';
    if (planet && planet.id === 'sun') return '#f4c430';
    if (planet && planet.id === 'saturn') return '#8d93a1';
    if (planet && planet.id === 'mars') return '#d35f4b';
    return '#9fd8b6';
  }

  function mergeTags() {
    const out = new Set();
    for (const list of arguments) {
      if (!list) continue;
      for (const tag of list) out.add(tag);
    }
    return Array.from(out);
  }

  function calculateMass(block) {
    return block && block.physics ? block.physics.mass : DEFAULT_PHYSICS.mass;
  }

  function calculateFriction(block, surface) {
    const surfaceMul = surface && surface.frictionMul !== undefined ? surface.frictionMul : 1;
    const value = block && block.physics ? block.physics.friction : DEFAULT_PHYSICS.friction;
    return Math.max(0.01, value * surfaceMul);
  }

  function calculateVolatility(block, environment) {
    const wind = environment && environment.wind ? Math.abs(environment.wind) * 0.1 : 0;
    const value = block && block.physics ? block.physics.volatility : DEFAULT_PHYSICS.volatility;
    return Math.max(0, value + wind);
  }

  function scoreExit(block, side, groupSize) {
    const physics = block && block.physics ? block.physics : DEFAULT_PHYSICS;
    const proper = physics.properExitSide === 0 || physics.properExitSide === side;
    if (proper) return { proper: true, delta: Math.max(1, groupSize || 1) * physics.exitMultiplier };
    return { proper: false, delta: physics.wrongExitPenalty * Math.max(1, groupSize || 1) };
  }

  function canSlide(block, surface, environment) {
    if (!block || !block.physics) return true;
    if (block.physics.fixed) return false;
    const friction = calculateFriction(block, surface);
    const volatility = calculateVolatility(block, environment);
    return volatility > friction * 0.45 || block.physics.slippery;
  }

  function toBalanceCell(block) {
    return {
      color: block.display.color,
      colorLight: block.display.color,
      colorDark: '#243035',
      symbol: block.display.symbol,
      trait: block.planetId,
      item: block.principleId,
      alchemyKind: block.kind,
      paletteName: block.name,
      paletteProcess: block.processName,
      palettePrima: block.principleId,
      apparatus: block.apparatus,
      weight: calculateMass(block),
      properExitSide: block.physics.properExitSide,
      source: block.source
    };
  }

  function toTaxiCargo(block) {
    return {
      id: block.id,
      name: block.name,
      emoji: block.emoji,
      mass: calculateMass(block),
      friction: block.physics.friction,
      volatility: block.physics.volatility,
      beamAffinity: block.physics.beamAffinity,
      tags: block.tags.slice(),
      source: block.source
    };
  }

  function toRuneTile(block) {
    return {
      id: block.id,
      kind: 'rune',
      element: block.principleId || block.processId || block.planetId,
      emoji: block.emoji,
      color: block.display.color,
      tags: block.tags.slice(),
      source: block.source
    };
  }

  root.AlchemyBlockEngine = {
    schema: 'alchemy-block-engine/v1',
    PRINCIPLES,
    PROCESSES,
    PLANETS,
    PROCESS_TO_PLANET,
    DEFAULT_PHYSICS,
    processById,
    principleById,
    planetForProcess,
    makeAlchemyBlock,
    calculateMass,
    calculateFriction,
    calculateVolatility,
    scoreExit,
    canSlide,
    adapters: {
      toBalanceCell,
      toTaxiCargo,
      toRuneTile
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);

