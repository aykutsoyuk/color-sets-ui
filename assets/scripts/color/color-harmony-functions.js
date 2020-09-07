const rnd = (min, max) => {
  return Math.floor((Math.random() * ((max - min) + 1)) + min)
}

function hslToHex(colorsHSL) {
  const colorSet = {
    color1: null,
    color2: null,
    color3: null,
    color4: null,
    color5: null
  }

  for (let i = 1; i < 6; i++) {
    const h = colorsHSL[`color${i}`].h
    const s = colorsHSL[`color${i}`].s / 100
    const l = colorsHSL[`color${i}`].l / 100

    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs((h / 60) % 2 - 1))
    const m = l - c / 2
    let r = 0
    let g = 0
    let b = 0

    if (h >= 0 && h < 60) {
      r = c
      g = x
      b = 0
    } else if (h >= 60 && h < 120) {
      r = x
      g = c
      b = 0
    } else if (h >= 120 && h < 180) {
      r = 0
      g = c
      b = x
    } else if (h >= 180 && h < 240) {
      r = 0
      g = x
      b = c
    } else if (h >= 240 && h < 300) {
      r = x
      g = 0
      b = c
    } else if (h >= 300 && h < 360) {
      r = c
      g = 0
      b = x
    }
    r = Math.round((r + m) * 255).toString(16)
    g = Math.round((g + m) * 255).toString(16)
    b = Math.round((b + m) * 255).toString(16)
    if (r.length === 1) {
      r = '0' + r
    }
    if (g.length === 1) {
      g = '0' + g
    }
    if (b.length === 1) {
      b = '0' + b
    }
    colorSet[`color${i}`] = ('#' + r + g + b).toUpperCase()
  }
  return colorSet
}

function colorHarmony() {
  const methods = [monochromatic, complementary, analagous, tetradic, triadic, splitComplementary]
  const i = $('#selectMethod option:selected').val()
  return methods[i]()
}

function complementary() {
  const colorsHSL = {
    color1: {
      h: rnd(0, 360),
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color2: {
      h: null,
      s: null,
      l: rnd(0, 100)
    },
    color3: {},
    color4: {},
    color5: {}
  }
  colorsHSL.color2.h = Math.abs((colorsHSL.color1.h + 180) - 360)
  colorsHSL.color2.s = colorsHSL.color1.s
  // colorsHSL.color2.l = colorsHSL.color1.l
  for (let i = 3; i < 6; i++) {
    const j = Math.ceil((Math.random() * 2))
    let maxH = colorsHSL[`color${j}`].h + 2
    if (maxH > 360) {
      maxH = 360
    }
    let maxS = colorsHSL[`color${j}`].s + 30
    if (maxS > 100) {
      maxS = 100
    }
    let maxL = colorsHSL[`color${j}`].l + 50
    if (maxL > 100) {
      maxL = 100
    }
    let minH = colorsHSL[`color${j}`].h - 2
    if (minH < 0) {
      minH = 0
    }
    let minS = colorsHSL[`color${j}`].s - 30
    if (minS < 0) {
      minS = 0
    }
    let minL = colorsHSL[`color${j}`].l - 50
    if (minL < 0) {
      minL = 0
    }
    const H = rnd(minH, maxH)
    const S = rnd(minS, maxS)
    const L = rnd(minL, maxL)

    colorsHSL[`color${i}`].h = H
    colorsHSL[`color${i}`].s = S
    colorsHSL[`color${i}`].l = L
  }
  return hslToHex(colorsHSL)
}

function analagous() {
  const colorsHSL = {
    color1: {
      h: rnd(0, 360),
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color2: {
      h: null,
      s: null,
      l: null
    },
    color3: {
      h: null,
      s: null,
      l: null
    },
    color4: {
      h: null,
      s: null,
      l: null
    },
    color5: {}
  }

  for (let i = 2; i < 6; i++) {
    // const j = Math.ceil((Math.random() * 4))
    let maxH = colorsHSL.color1.h + 2
    if (maxH > 360) {
      maxH = 360
    }
    let maxS = colorsHSL.color1.s + 10
    if (maxS > 100) {
      maxS = 100
    }
    let maxL = colorsHSL.color1.l + 30
    if (maxL > 100) {
      maxL = 100
    }
    let minH = colorsHSL.color1.h - 2
    if (minH < 0) {
      minH = 0
    }
    let minS = colorsHSL.color1.s - 10
    if (minS < 0) {
      minS = 0
    }
    let minL = colorsHSL.color1.l - 30
    if (minL < 0) {
      minL = 0
    }
    const H = rnd(minH, maxH)
    const S = rnd(minS, maxS)
    const L = rnd(minL, maxL)
    colorsHSL[`color${i}`].h = H
    colorsHSL[`color${i}`].s = S
    colorsHSL[`color${i}`].l = L
  }
  colorsHSL.color2.h = Math.abs((colorsHSL.color1.h + 30) - 360)
  colorsHSL.color3.h = Math.abs((colorsHSL.color1.h + 60) - 360)
  colorsHSL.color4.h = Math.abs((colorsHSL.color1.h + 90) - 360)
  return hslToHex(colorsHSL)
}

function tetradic() {
  const colorsHSL = {
    color1: {
      h: rnd(0, 360),
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color2: {
      h: null,
      s: null,
      l: null
    },
    color3: {
      h: null,
      s: null,
      l: null
    },
    color4: {
      h: null,
      s: null,
      l: null
    },
    color5: {}
  }

  for (let i = 2; i < 6; i++) {
    // const j = Math.ceil((Math.random() * 4))
    let maxH = colorsHSL.color1.h + 2
    if (maxH > 360) {
      maxH = 360
    }
    let maxS = colorsHSL.color1.s + 10
    if (maxS > 100) {
      maxS = 100
    }
    let maxL = colorsHSL.color1.l + 40
    if (maxL > 100) {
      maxL = 100
    }
    let minH = colorsHSL.color1.h - 2
    if (minH < 0) {
      minH = 0
    }
    let minS = colorsHSL.color1.s - 10
    if (minS < 0) {
      minS = 0
    }
    let minL = colorsHSL.color1.l - 40
    if (minL < 0) {
      minL = 0
    }
    const H = rnd(minH, maxH)
    const S = rnd(minS, maxS)
    const L = rnd(minL, maxL)
    colorsHSL[`color${i}`].h = H
    colorsHSL[`color${i}`].s = S
    colorsHSL[`color${i}`].l = L
  }
  colorsHSL.color2.h = Math.abs((colorsHSL.color1.h + 90) - 360)
  colorsHSL.color3.h = Math.abs((colorsHSL.color1.h + 180) - 360)
  colorsHSL.color4.h = Math.abs((colorsHSL.color1.h + 270) - 360)
  return hslToHex(colorsHSL)
}

function triadic() {
  const colorsHSL = {
    color1: {
      h: rnd(0, 360),
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color2: {
      h: null,
      s: null,
      l: null
    },
    color3: {
      h: null,
      s: null,
      l: null
    },
    color4: {},
    color5: {}
  }

  for (let i = 2; i < 6; i++) {
    // const j = Math.ceil((Math.random() * 3))
    let maxH = colorsHSL.color1.h + 2
    if (maxH > 360) {
      maxH = 360
    }
    let maxS = colorsHSL.color1.s + 10
    if (maxS > 100) {
      maxS = 100
    }
    let maxL = colorsHSL.color1.l + 40
    if (maxL > 100) {
      maxL = 100
    }
    let minH = colorsHSL.color1.h - 2
    if (minH < 0) {
      minH = 0
    }
    let minS = colorsHSL.color1.s - 10
    if (minS < 0) {
      minS = 0
    }
    let minL = colorsHSL.color1.l - 40
    if (minL < 0) {
      minL = 0
    }
    const H = rnd(minH, maxH)
    const S = rnd(minS, maxS)
    const L = rnd(minL, maxL)
    colorsHSL[`color${i}`].h = H
    colorsHSL[`color${i}`].s = S
    colorsHSL[`color${i}`].l = L
  }
  colorsHSL.color2.h = Math.abs((colorsHSL.color1.h + 120) - 360)
  colorsHSL.color3.h = Math.abs((colorsHSL.color1.h + 240) - 360)
  return hslToHex(colorsHSL)
}

function splitComplementary() {
  const colorsHSL = {
    color1: {
      h: rnd(0, 360),
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color2: {
      h: null,
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color3: {
      h: null,
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color4: {},
    color5: {}
  }
  colorsHSL.color2.h = Math.abs((colorsHSL.color1.h + 150) - 360)
  colorsHSL.color3.h = Math.abs((colorsHSL.color1.h + 210) - 360)
  for (let i = 4; i < 6; i++) {
    const j = Math.ceil((Math.random() * 3))
    let maxH = colorsHSL[`color${j}`].h + 2
    if (maxH > 360) {
      maxH = 360
    }
    let maxS = colorsHSL[`color${j}`].s + 20
    if (maxS > 100) {
      maxS = 100
    }
    let maxL = colorsHSL[`color${j}`].l + 40
    if (maxL > 100) {
      maxL = 100
    }
    let minH = colorsHSL[`color${j}`].h - 2
    if (minH < 0) {
      minH = 0
    }
    let minS = colorsHSL[`color${j}`].s - 20
    if (minS < 0) {
      minS = 0
    }
    let minL = colorsHSL[`color${j}`].l - 40
    if (minL < 0) {
      minL = 0
    }
    const H = rnd(minH, maxH)
    const S = rnd(minS, maxS)
    const L = rnd(minL, maxL)
    colorsHSL[`color${i}`].h = H
    colorsHSL[`color${i}`].s = S
    colorsHSL[`color${i}`].l = L
  }
  return hslToHex(colorsHSL)
}

function monochromatic() {
  const colorsHSL = {
    color1: {
      h: rnd(0, 360),
      s: rnd(0, 100),
      l: rnd(0, 100)
    },
    color2: {},
    color3: {},
    color4: {},
    color5: {}
  }
  for (let i = 2; i < 6; i++) {
    let maxH = colorsHSL.color1.h + 2
    if (maxH > 360) {
      maxH = 360
    }
    let maxS = colorsHSL.color1.s + 40
    if (maxS > 100) {
      maxS = 100
    }
    let maxL = colorsHSL.color1.l + 90
    if (maxL > 100) {
      maxL = 100
    }
    let minH = colorsHSL.color1.h - 2
    if (minH < 0) {
      minH = 0
    }
    let minS = colorsHSL.color1.s - 40
    if (minS < 0) {
      minS = 0
    }
    let minL = colorsHSL.color1.l - 90
    if (minL < 0) {
      minL = 0
    }
    const H = rnd(minH, maxH)
    const S = rnd(minS, maxS)
    const L = rnd(minL, maxL)

    colorsHSL[`color${i}`].h = H
    colorsHSL[`color${i}`].s = S
    colorsHSL[`color${i}`].l = L
  }
  return hslToHex(colorsHSL)
}

module.exports = colorHarmony
