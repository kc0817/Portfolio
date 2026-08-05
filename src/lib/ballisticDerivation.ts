/**
 * The ballistic solver's derivation, transcribed from Kevin's handwritten notes
 * (`quartic TOF derivation`) into LaTeX.
 *
 * Three corrections were made against the notes, all in places where the notes'
 * own surrounding lines already imply the corrected form — they read as
 * transcription slips rather than as what the robot code does:
 *
 *   1. The final quartic's constant term is written `|d|` in the notes; collecting
 *      d_x² + d_y² + d_z² gives `|d|²`.
 *   2. That same line drops the `g·d_z` term from the t² coefficient. The
 *      expansion immediately above it carries `d_z·g·t²`, so the term exists and
 *      is only lost in the collect.
 *   3. Part 3's impact angle is written `atan(v_by / v_bx)`, which is the azimuth,
 *      not the impact angle. In part 3's own frame z is vertical (it is the
 *      component carrying gravity), and the notes' final hood angle uses
 *      `atan(s_z / √(s_x²+s_y²))` — so the impact angle is the same shape.
 *
 * Nothing else departs from the notes mathematically. The notation does, in one
 * place: the notes' `v_b`, `v_r` and `v` are spelled `\vec{v}_ball`,
 * `\vec{v}_robot` and `\vec{v}_adjusted` wherever they appear as whole vectors, and
 * each is declared before it is used. A one-letter subscript is fine in a notebook
 * where the writer holds the key in their head; on a page a reader arrives at cold,
 * `v_b` and `v_r` are two glyphs apart and name completely different things. The
 * component subscripts stay short — `v_rx`, `v_bz` — because they appear inside the
 * quartic and the S² expansion, where spelling them out would cost more legibility
 * than it buys.
 *
 * The intermediate algebra is kept in full, including steps a paper would compress,
 * because the grind is part of what the page is showing.
 */

/** A definition list — a symbol and what it stands for. */
export interface Defs {
  kind: 'defs';
  lead?: string;
  items: { tex: string; text: string }[];
}

/**
 * Running prose between steps. `$...$` spans are rendered as inline math, so a
 * sentence that names a variable sets it in the same math italic the equations
 * use rather than reaching for a Unicode subscript that no face draws well.
 */
export interface Prose {
  kind: 'prose';
  text: string;
}

/** A minor heading inside a numbered part. */
export interface Sub {
  kind: 'sub';
  text: string;
}

/**
 * A run of equations that are one continuous manipulation. Rendered with a
 * hairline down the left so a reader can see at a glance where one chain of
 * algebra ends and the next begins.
 */
export interface Chain {
  kind: 'chain';
  steps: string[];
}

/**
 * Two chains worked side by side — how the notes actually lay out part 1, where
 * the position equations and the velocity equations are developed in parallel
 * before being combined.
 */
export interface Columns {
  kind: 'columns';
  left: { head: string; steps: string[] };
  right: { head: string; steps: string[] };
}

/** A result worth stopping on: the thing the preceding chain was solving for. */
export interface Result {
  kind: 'result';
  label: string;
  tex: string;
}

export type Block = Defs | Prose | Sub | Chain | Columns | Result;

export interface Part {
  n: string;
  title: string;
  blocks: Block[];
}

/**
 * The three parts are the first three steps of the Overview's list, in that
 * order: solve the stationary shot for a launch vector, offset it by the robot's
 * own motion, then re-solve it for the exit speed the flywheel actually has.
 * That split is why part 1 stops at the ideal launch vector and the velocity
 * subtraction opens part 2 rather than closing part 1.
 */
export const DERIVATION: Part[] = [
  {
    n: '1',
    title: 'Computing desired 3D launch vector of ball',
    blocks: [
      {
        kind: 'defs',
        lead: 'Let',
        items: [
          { tex: 'v', text: 'desired exit speed of the artifact' },
          { tex: '\\theta', text: 'hood angle, measured from horizontal' },
          { tex: '\\phi', text: 'turret angle' },
          {
            tex: 'i',
            text: 'desired impact angle — the angle of the ball’s velocity when it reaches the goal',
          },
          { tex: 'h', text: 'goal height minus exit height' },
          { tex: 'd', text: 'horizontal distance from the exit position to the goal' },
        ],
      },
      { kind: 'prose', text: 'Projectile motion equations tell us that:' },
      {
        kind: 'columns',
        left: {
          head: 'Position',
          steps: [
            String.raw`\Delta x = v_0 t + \tfrac{1}{2} a t^2`,
            String.raw`h = v\sin\theta\, t - \tfrac{1}{2} g t^2
              \qquad d = v\cos\theta\, t`,
            String.raw`t = \frac{d}{v\cos\theta}`,
            String.raw`h = v\sin\theta\!\left(\frac{d}{v\cos\theta}\right)
              - \tfrac{1}{2} g\!\left(\frac{d}{v\cos\theta}\right)^{\!2}`,
            String.raw`h = d\tan\theta - \frac{g d^2}{2 v^2 \cos^2\theta}`,
            String.raw`\frac{g d^2}{2 v^2 \cos^2\theta} = d\tan\theta - h`,
          ],
        },
        right: {
          head: 'Velocity',
          steps: [
            String.raw`\Delta v = a t`,
            String.raw`v_x = v\cos\theta`,
            String.raw`v_y = v\sin\theta - g t`,
            String.raw`i = \tan^{-1}\!\left(\frac{v_y}{v_x}\right)`,
            String.raw`\tan i = \frac{v\sin\theta - g t}{v\cos\theta}`,
            String.raw`\tan i = \tan\theta - \frac{g t}{v\cos\theta}`,
          ],
        },
      },
      {
        kind: 'prose',
        text: 'Substituting the time of flight into the velocity relation, then folding in the position result:',
      },
      {
        kind: 'chain',
        steps: [
          String.raw`\tan i = \tan\theta - \frac{g}{v\cos\theta}\!\left(\frac{d}{v\cos\theta}\right)`,
          String.raw`\tan i = \tan\theta - \frac{g d}{v^2\cos^2\theta}`,
          String.raw`\tan i = \tan\theta - \frac{2\!\left(d\tan\theta - h\right)}{d}`,
          String.raw`\tan\theta = \tan i + \frac{2\!\left(d\tan\theta - h\right)}{d}`,
          String.raw`\tan\theta = \tan i + 2\tan\theta - \frac{2h}{d}`,
          String.raw`\tan\theta = \frac{2h}{d} - \tan i`,
        ],
      },
      {
        kind: 'result',
        label: 'Ideal hood angle',
        tex: String.raw`\theta = \tan^{-1}\!\left(\frac{2h}{d} - \tan i\right)`,
      },
      {
        kind: 'prose',
        text: 'With the hood angle known, the same position result gives the speed it has to be fired at:',
      },
      {
        kind: 'chain',
        steps: [
          String.raw`\frac{g d^2}{v^2\cos^2\theta} = 2\!\left(d\tan\theta - h\right)`,
          String.raw`\frac{g d^2}{\cos^2\theta}\!\left(\frac{1}{2\!\left(d\tan\theta - h\right)}\right) = v^2`,
          String.raw`v = \sqrt{\frac{g d^2}{2\cos^2\theta\left(d\tan\theta - h\right)}}`,
        ],
      },
      {
        kind: 'result',
        label: 'Ideal exit speed',
        tex: String.raw`v = \sqrt{\frac{g d^2}{2\cos^2\theta\left(d\tan\theta - h\right)}}`,
      },
      {
        kind: 'result',
        label: 'Ideal turret angle',
        tex: String.raw`\phi = \tan^{-1}\!\left(
          \frac{y_{\text{goal}} - y_{\text{robot}}}{x_{\text{goal}} - x_{\text{robot}}}
        \right)`,
      },
      { kind: 'sub', text: 'Constructing the 3D ball launch vector' },
      {
        kind: 'chain',
        steps: [
          String.raw`\vec{v}_{\text{ball}} = \begin{bmatrix}
            v\cos\theta\cos\phi \\[2pt]
            v\cos\theta\sin\phi \\[2pt]
            v\sin\theta
          \end{bmatrix}`,
        ],
      },
    ],
  },

  {
    n: '2',
    title: 'Accounting for robot velocity',
    blocks: [
      {
        kind: 'defs',
        lead: 'Assuming',
        items: [
          {
            tex: '\\vec{v}_{cm}',
            text: 'robot velocity at center of mass (assumed axis of rotation)',
          },
          { tex: '\\vec{\\omega}', text: 'robot angular velocity' },
          { tex: '\\vec{r}', text: 'ball exit position relative to robot position' },
          {
            tex: '\\vec{v}_{\\text{robot}}',
            text: 'robot velocity at exit position of ball',
          },
          {
            tex: '\\vec{v}_{\\text{ball}}',
            text: 'desired 3D launch vector of ball',
          },
          {
            tex: '\\vec{v}_{\\text{adjusted}}',
            text: 'the actual launch vector we want to aim at',
          },
        ],
      },
      {
        kind: 'chain',
        steps: [String.raw`\vec{v}_{\text{robot}} = \vec{v}_{cm} + \vec{\omega} \times \vec{r}`],
      },
      { kind: 'sub', text: 'Constructing the desired launch vector' },
      {
        kind: 'chain',
        steps: [
          String.raw`\vec{v}_{\text{adjusted}} + \vec{v}_{\text{robot}} = \vec{v}_{\text{ball}}`,
          String.raw`\vec{v}_{\text{adjusted}} = \vec{v}_{\text{ball}} - \vec{v}_{\text{robot}}`,
        ],
      },
      {
        kind: 'prose',
        text: 'Finally, your target launch speed equals the length of this launch vector.',
      },
      {
        kind: 'result',
        label: 'Target launch speed',
        tex: String.raw`\left|\vec{v}_{\text{adjusted}}\right| = \sqrt{
          v_{\text{adjusted},x}^{\,2}
          + v_{\text{adjusted},y}^{\,2}
          + v_{\text{adjusted},z}^{\,2}
        }`,
      },
    ],
  },

  {
    n: '3',
    title: 'Compensating for deviation in exit speed',
    blocks: [
      {
        kind: 'defs',
        lead: 'Assuming',
        items: [
          { tex: '\\vec{s}', text: 'possible launch vector' },
          { tex: 'S', text: 'current exit speed' },
        ],
      },
      { kind: 'prose', text: 'We already know that:' },
      {
        kind: 'chain',
        steps: [String.raw`\vec{s} + \vec{v}_{\text{robot}} = \vec{v}_{\text{ball}}`],
      },
      {
        kind: 'columns',
        left: {
          head: 'By component',
          steps: [
            String.raw`s_x + v_{rx} = v_{bx}`,
            String.raw`s_y + v_{ry} = v_{by}`,
            String.raw`s_z + v_{rz} = v_{bz}`,
          ],
        },
        right: {
          head: 'Displacement over the flight',
          steps: [
            String.raw`v_{bx}\,t = d_x`,
            String.raw`v_{by}\,t = d_y`,
            String.raw`v_{bz}\,t - \tfrac{1}{2} g t^2 = d_z`,
          ],
        },
      },
      {
        kind: 'chain',
        steps: [
          String.raw`\left(s_x + v_{rx}\right) t = d_x
            \quad\Longrightarrow\quad s_x = \frac{d_x}{t} - v_{rx}`,
          String.raw`\left(s_y + v_{ry}\right) t = d_y
            \quad\Longrightarrow\quad s_y = \frac{d_y}{t} - v_{ry}`,
          String.raw`\left(s_z + v_{rz}\right) t - \tfrac{1}{2} g t^2 = d_z
            \quad\Longrightarrow\quad s_z = \frac{d_z + \tfrac{1}{2} g t^2}{t} - v_{rz}`,
        ],
      },
      {
        kind: 'prose',
        text: 'And assuming that you cannot instantaneously change your shooter speed:',
      },
      {
        kind: 'chain',
        steps: [
          String.raw`S = \sqrt{s_x^{\,2} + s_y^{\,2} + s_z^{\,2}}`,
          String.raw`S = \sqrt{
            \left(\frac{d_x}{t} - v_{rx}\right)^{\!2}
            + \left(\frac{d_y}{t} - v_{ry}\right)^{\!2}
            + \left(\frac{d_z + \frac{1}{2} g t^2}{t} - v_{rz}\right)^{\!2}
          }`,
          String.raw`S^2 =
            \left(\frac{d_x^{\,2}}{t^2} - \frac{2 d_x v_{rx}}{t} + v_{rx}^{\,2}\right)
            + \left(\frac{d_y^{\,2}}{t^2} - \frac{2 d_y v_{ry}}{t} + v_{ry}^{\,2}\right)
            + \left(
              \frac{\left(d_z + \frac{1}{2} g t^2\right)^{\!2}}{t^2}
              - \frac{2\left(d_z + \frac{1}{2} g t^2\right) v_{rz}}{t}
              + v_{rz}^{\,2}
            \right)`,
        ],
      },
      { kind: 'prose', text: 'Clearing the denominator:' },
      {
        kind: 'chain',
        steps: [
          String.raw`\begin{aligned}
            S^2 t^2 ={}& d_x^{\,2} - 2 d_x v_{rx} t + v_{rx}^{\,2} t^2 \\[4pt]
            &+ d_y^{\,2} - 2 d_y v_{ry} t + v_{ry}^{\,2} t^2 \\[4pt]
            &+ \left(d_z + \tfrac{1}{2} g t^2\right)^{\!2}
              - 2\left(d_z + \tfrac{1}{2} g t^2\right) v_{rz} t
              + v_{rz}^{\,2} t^2
          \end{aligned}`,
          String.raw`\begin{aligned}
            S^2 t^2 ={}& d_x^{\,2} - 2 d_x v_{rx} t + v_{rx}^{\,2} t^2 \\[4pt]
            &+ d_y^{\,2} - 2 d_y v_{ry} t + v_{ry}^{\,2} t^2 \\[4pt]
            &+ d_z^{\,2} + d_z g t^2 + \tfrac{1}{4} g^2 t^4
              - 2 d_z v_{rz} t - g v_{rz} t^3 + v_{rz}^{\,2} t^2
          \end{aligned}`,
        ],
      },
      {
        kind: 'prose',
        text: 'Collecting by power of $t$ leaves a quartic whose unknown is no longer the exit speed, but the time of flight:',
      },
      {
        kind: 'result',
        label: 'Quartic in time of flight',
        tex: String.raw`0 = \left|\vec{d}\right|^2
          - 2\left(\vec{d} \cdot \vec{v}_{\text{robot}}\right) t
          + \left(\left|\vec{v}_{\text{robot}}\right|^2 - S^2 + g d_z\right) t^2
          - g v_{rz} t^3
          + \tfrac{1}{4} g^2 t^4`,
      },
      { kind: 'sub', text: 'Finding zeroes of time of flight polynomial' },
      {
        kind: 'prose',
        text:
          'We want to find this function’s zeroes, because they represent all of the ' +
          'possible trajectories that we could take to compensate for an inaccurate ' +
          'launch speed. So I approximated the zeros using a two-stage search. First, ' +
          'the flight-time domain is discretized into low-resolution intervals to ' +
          'identify regions where the function crossed zero. These intervals were then ' +
          'refined with bisection, which repeatedly halves the interval until the root ' +
          'estimate achieved a maximum error of $10^{-3}$ seconds. At a maximum, the ' +
          'code could return 2 flight times (a low arc & a high arc shot). Returning 1 ' +
          'time of flight means the high and low arc shot converged (this trajectory ' +
          'minimizes launch speed). Returning 0 flight times signifies that the launch ' +
          'speed just dropped too much and there are no valid trajectories.',
      },
      { kind: 'sub', text: 'Recalculating the new launch vector' },
      {
        kind: 'prose',
        text: 'Let $t_{\\text{all}}$ be a list containing all real zeroes of that polynomial. For each candidate time $t = t_a$:',
      },
      {
        kind: 'chain',
        steps: [
          String.raw`\vec{v}_{\text{ball}}(t_a) = \begin{bmatrix}
            \dfrac{d_x}{t_a} \\[8pt]
            \dfrac{d_y}{t_a} \\[8pt]
            \dfrac{d_z + \frac{1}{2} g t_a^{\,2}}{t_a}
          \end{bmatrix}`,
          String.raw`i(t_a) = \tan^{-1}\!\left(
            \frac{v_{bz}(t_a)}{\sqrt{v_{bx}(t_a)^2 + v_{by}(t_a)^2}}
          \right)`,
        ],
      },
      {
        kind: 'prose',
        text: 'Then pick the time of flight $t = t_f$ whose impact angle is closest to the desired impact angle.',
      },
      { kind: 'sub', text: 'Plugging the time of flight into the launch vector equations' },
      {
        kind: 'chain',
        steps: [
          String.raw`s_x = \frac{d_x}{t_f} - v_{rx}`,
          String.raw`s_y = \frac{d_y}{t_f} - v_{ry}`,
          String.raw`s_z = \frac{d_z + \frac{1}{2} g t_f^{\,2}}{t_f} - v_{rz}`,
        ],
      },
      {
        kind: 'result',
        label: 'Compensated hood angle',
        tex: String.raw`\theta = \tan^{-1}\!\left(
          \frac{s_z}{\sqrt{s_x^{\,2} + s_y^{\,2}}}
        \right)`,
      },
      {
        kind: 'result',
        label: 'Compensated turret angle',
        tex: String.raw`\phi = \tan^{-1}\!\left(\frac{s_y}{s_x}\right)`,
      },
    ],
  },
];
