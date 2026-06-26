/* @ds-bundle: {"format":3,"namespace":"EINSSystemDesignSystem_7f67d2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"SpecRow","sourcePath":"components/core/SpecRow.jsx"},{"name":"StarRating","sourcePath":"components/core/StarRating.jsx"},{"name":"StatNumber","sourcePath":"components/core/StatNumber.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ComparisonTable","sourcePath":"components/product/ComparisonTable.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"RecommendationCard","sourcePath":"components/product/RecommendationCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"578ac9b3f196","components/core/Button.jsx":"4abd9b7c6539","components/core/Card.jsx":"387d344ac751","components/core/Eyebrow.jsx":"a8d101a9c82c","components/core/SectionHeader.jsx":"e6a73575f2c6","components/core/SpecRow.jsx":"3be75aebc53e","components/core/StarRating.jsx":"e24294fa750b","components/core/StatNumber.jsx":"5466fe619953","components/core/Tag.jsx":"24194dd8c82f","components/product/ComparisonTable.jsx":"d86ab787510c","components/product/ProductCard.jsx":"73ebcebe6b28","components/product/RecommendationCard.jsx":"78a58dd00bc4","ui_kits/website/BuildGuideSection.jsx":"596edc1a79e9","ui_kits/website/CatalogSection.jsx":"e1a40f80016d","ui_kits/website/CompareSection.jsx":"5a4e255ffa23","ui_kits/website/Header.jsx":"41d600d3e2bf","ui_kits/website/Hero.jsx":"bcafcf1629f9","ui_kits/website/PurchaseFooter.jsx":"f77c5f5cd8e2","ui_kits/website/data.js":"20b230ed5578"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EINSSystemDesignSystem_7f67d2 = window.EINSSystemDesignSystem_7f67d2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — the dark "tier" label that sits on product cards,
 * e.g. PERFORMANCE FLAGSHIP / VALUE PERFORMANCE. Uppercase, tracked.
 */
function Badge({
  children,
  tone = "flagship",
  style,
  ...rest
}) {
  const tones = {
    flagship: {
      background: "var(--navy-800)",
      color: "var(--text-accent)",
      borderColor: "rgba(0,229,255,0.45)"
    },
    value: {
      background: "var(--navy-700)",
      color: "var(--text-on-dark)",
      borderColor: "var(--navy-600)"
    },
    accent: {
      background: "var(--grad-accent)",
      color: "#04121f",
      borderColor: "transparent"
    },
    neutral: {
      background: "var(--gray-100)",
      color: "var(--gray-600)",
      borderColor: "var(--gray-200)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-xs)",
      border: "var(--bw-hair) solid",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EINS primary action button. Cyan-filled by default; outline & ghost
 * variants for secondary actions. Optional trailing arrow (→).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13
    },
    md: {
      padding: "12px 24px",
      fontSize: 15
    },
    lg: {
      padding: "16px 34px",
      fontSize: 17
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-bold)",
    lineHeight: 1,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "var(--bw-thick) solid transparent",
    transition: "background var(--dur-base) var(--ease-std), border-color var(--dur-base) var(--ease-std), color var(--dur-base) var(--ease-std), box-shadow var(--dur-base) var(--ease-std), transform var(--dur-fast) var(--ease-std)",
    textDecoration: "none",
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "#04121f",
      boxShadow: "var(--glow-accent-soft)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-accent)",
      borderColor: "var(--border-accent)"
    },
    ghost: {
      background: "rgba(255,255,255,0.06)",
      color: "var(--text-on-dark)"
    },
    solidLight: {
      background: "var(--white)",
      color: "var(--gray-900)"
    }
  };
  const styleObj = {
    ...base,
    ...variants[variant],
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(-1px)";
    if (variant === "primary") el.style.background = "var(--accent-soft)";
    if (variant === "secondary") {
      el.style.background = "rgba(0,229,255,0.08)";
    }
    if (variant === "ghost") el.style.background = "rgba(255,255,255,0.12)";
    if (variant === "solidLight") el.style.background = "var(--gray-100)";
  };
  const hoverOut = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.background = variants[variant].background;
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.1em",
      fontWeight: "var(--fw-regular)"
    }
  }, "\u2192"));
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href && !disabled ? href : undefined,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: styleObj,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. "light" = white rounded card with dark text;
 * "panel" = dark navy panel; "outline" = bordered transparent on dark.
 * Optional accent glow and hover lift.
 */
function Card({
  children,
  variant = "light",
  hover = false,
  glow = false,
  padding = 24,
  style,
  ...rest
}) {
  const variants = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-on-light)",
      border: "var(--bw-hair) solid var(--border-on-light)",
      boxShadow: "var(--shadow-card)"
    },
    panel: {
      background: "var(--grad-panel)",
      color: "var(--text-on-dark)",
      border: "var(--bw-hair) solid var(--border-on-dark)",
      boxShadow: "none"
    },
    outline: {
      background: "rgba(255,255,255,0.02)",
      color: "var(--text-on-dark)",
      border: "var(--bw-hair) solid var(--border-on-dark)",
      boxShadow: "none"
    }
  };
  const base = {
    borderRadius: "var(--radius-md)",
    padding,
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
    ...variants[variant],
    ...(glow ? {
      boxShadow: "var(--glow-accent)",
      borderColor: "transparent"
    } : null),
    ...style
  };
  const onEnter = e => {
    if (!hover) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(-4px)";
    el.style.boxShadow = variant === "light" ? "var(--shadow-card-hover)" : "var(--glow-accent-soft)";
    if (variant !== "light") el.style.borderColor = "var(--border-accent)";
  };
  const onLeave = e => {
    if (!hover) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.boxShadow = base.boxShadow;
    el.style.borderColor = variants[variant].border.split("solid ")[1];
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — uppercase, wide-tracked English label above headings.
 * e.g. "PERFORMANCE REDEFINED", "DESKTOP PROCESSOR CATALOG".
 */
function Eyebrow({
  children,
  color = "accent",
  style,
  ...rest
}) {
  const colors = {
    accent: "var(--text-accent)",
    light: "var(--text-on-dark-muted)",
    dark: "var(--text-on-light-muted)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: colors[color],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — the dark blue-grey bar with a white Korean title on
 * the left and an English/sub label on the right. Brand's section divider.
 */
function SectionHeader({
  title,
  subtitle,
  eyebrow,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "18px 28px",
      background: "var(--bg-bar)",
      borderLeft: "var(--bw-accent) solid var(--accent)",
      borderRadius: "var(--radius-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-extrabold)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-on-dark)"
    }
  }, title)), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-on-dark-muted)",
      textAlign: "right",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpecRow — one label/value line in a spec list. Mono value, optional
 * highlight (cyan) for the standout figure and a leading icon/dot.
 */
function SpecRow({
  label,
  value,
  unit,
  highlight = false,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 16,
      padding: "10px 0",
      borderBottom: `var(--bw-hair) solid ${onDark ? "var(--border-on-dark)" : "var(--border-on-light)"}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-on-light-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body)",
      fontWeight: highlight ? "var(--fw-bold)" : "var(--fw-medium)",
      color: highlight ? "var(--text-accent)" : onDark ? "var(--text-on-dark)" : "var(--gray-900)",
      fontVariantNumeric: "tabular-nums",
      textAlign: "right"
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8em",
      opacity: 0.7,
      marginLeft: 3
    }
  }, unit)));
}
Object.assign(__ds_scope, { SpecRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecRow.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StarRating — ★★★★☆ rating, optional numeric value & count.
 */
function StarRating({
  value = 0,
  max = 5,
  showValue = false,
  count,
  size = 16,
  style,
  ...rest
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];
  for (let i = 0; i < max; i++) {
    let char = "☆";
    if (i < full) char = "★";else if (i === full && half) char = "⯪"; // half (fallback to ★ if unsupported)
    stars.push(char);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size,
      letterSpacing: "1px",
      color: "var(--star)",
      fontFamily: "var(--font-sans)",
      lineHeight: 1
    },
    "aria-label": `${value} / ${max}`
  }, stars.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: c === "☆" ? "rgba(255,194,75,0.3)" : "var(--star)"
    }
  }, c === "⯪" ? "★" : c))), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: size * 0.85,
      fontWeight: "var(--fw-medium)",
      color: "var(--text-on-dark-muted)"
    }
  }, value.toFixed(1), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-on-dark-faint)"
    }
  }, " (", count, ")")));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/core/StatNumber.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatNumber — the giant numeric callout (900MHz, +4, 15%↑).
 * Value is huge & bold; unit and delta are smaller siblings.
 */
function StatNumber({
  value,
  unit,
  delta,
  label,
  size = "lg",
  color = "accent",
  style,
  ...rest
}) {
  const sizes = {
    sm: 40,
    md: 60,
    lg: 88
  };
  const colors = {
    accent: "var(--text-accent)",
    white: "var(--text-on-dark)",
    dark: "var(--gray-900)"
  };
  const deltaColor = typeof delta === "string" && delta.trim().startsWith("-") ? "var(--danger)" : "var(--success)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: sizes[size],
      fontWeight: "var(--fw-black)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-stat)",
      color: colors[color],
      fontVariantNumeric: "tabular-nums"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: sizes[size] * 0.34,
      fontWeight: "var(--fw-bold)",
      color: color === "dark" ? "var(--gray-600)" : "var(--text-on-dark-muted)"
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: sizes[size] * 0.26,
      fontWeight: "var(--fw-bold)",
      color: deltaColor
    }
  }, delta)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: color === "dark" ? "var(--gray-600)" : "var(--text-on-dark-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatNumber.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small cyan accent label, e.g. "추천 PC #1", "NEW".
 * Higher-energy than Badge; used for callouts & recommendations.
 */
function Tag({
  children,
  variant = "solid",
  style,
  ...rest
}) {
  const variants = {
    solid: {
      background: "var(--accent-bright)",
      color: "#04121f"
    },
    soft: {
      background: "rgba(0,229,255,0.14)",
      color: "var(--text-accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-accent)",
      boxShadow: "inset 0 0 0 1px var(--border-accent)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/product/ComparisonTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ComparisonTable — spec comparison grid across processors. First column
 * is the spec label; each product is a column. Best value per row can be
 * cyan-highlighted via the `best` index on a row.
 */
function ComparisonTable({
  products = [],
  rows = [],
  style,
  ...rest
}) {
  const colW = `minmax(0, 1fr)`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "var(--bw-hair) solid var(--border-on-light)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `200px repeat(${products.length}, ${colW})`,
      background: "var(--bg-bar)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-on-dark-faint)"
    }
  }, "SPEC"), products.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "16px 18px",
      borderLeft: "var(--bw-hair) solid var(--border-on-dark)"
    }
  }, p.recommended && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: "var(--fw-bold)",
      color: "var(--text-accent)",
      marginBottom: 4
    }
  }, "\u2605 \uCD94\uCC9C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-on-dark)",
      lineHeight: 1.2
    }
  }, p.name), p.model && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-on-dark-faint)",
      marginTop: 2
    }
  }, p.model)))), rows.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: "grid",
      gridTemplateColumns: `200px repeat(${products.length}, ${colW})`,
      background: ri % 2 ? "var(--surface-card-muted)" : "var(--surface-card)",
      borderTop: "var(--bw-hair) solid var(--border-on-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 22px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-on-light-muted)",
      alignSelf: "center"
    }
  }, row.label), row.values.map((v, ci) => {
    const isBest = row.best === ci;
    return /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        padding: "14px 18px",
        borderLeft: "var(--bw-hair) solid var(--border-on-light)",
        fontFamily: row.rating ? "var(--font-sans)" : "var(--font-mono)",
        fontSize: "var(--fs-body)",
        fontWeight: isBest ? "var(--fw-bold)" : "var(--fw-medium)",
        color: isBest ? "var(--accent-press)" : "var(--gray-900)",
        fontVariantNumeric: "tabular-nums",
        alignSelf: "center",
        background: isBest ? "rgba(0,188,212,0.07)" : "transparent"
      }
    }, row.rating ? /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
      value: Number(v),
      showValue: true,
      size: 14
    }) : v);
  }))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductCard — white processor card. Badge tier, model name + code,
 * key specs, rating, price, and a CTA. Optional "featured" cyan glow.
 */
function ProductCard({
  badge,
  badgeTone = "flagship",
  name,
  model,
  series,
  specs = [],
  rating,
  ratingCount,
  price,
  priceNote,
  cta = "제품 상세",
  featured = false,
  rank,
  onAction,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      color: "var(--text-on-light)",
      border: featured ? "var(--bw-thick) solid var(--accent)" : "var(--bw-hair) solid var(--border-on-light)",
      borderRadius: "var(--radius-md)",
      boxShadow: featured ? "var(--glow-accent)" : "var(--shadow-card)",
      overflow: "hidden",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = featured ? "var(--glow-accent)" : "var(--shadow-card-hover)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = featured ? "var(--glow-accent)" : "var(--shadow-card)";
    }
  }, rest), rank != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "\uCD94\uCC9C PC #", rank)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 0"
    }
  }, badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge), series && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.08em",
      color: "var(--gray-400)",
      textTransform: "uppercase"
    }
  }, series), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "6px 0 2px",
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-extrabold)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-display)",
      color: "var(--gray-900)"
    }
  }, name), model && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-sm)",
      color: "var(--gray-600)"
    }
  }, model)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px 0"
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.SpecRow, {
    key: i,
    label: s.label,
    value: s.value,
    unit: s.unit,
    highlight: s.highlight
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px 24px"
    }
  }, rating != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      filter: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    value: rating,
    count: ratingCount,
    showValue: true,
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, priceNote && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gray-400)",
      marginBottom: 2
    }
  }, priceNote), price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--gray-900)"
    }
  }, price)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "primary" : "solidLight",
    size: "sm",
    arrow: true,
    onClick: onAction,
    style: featured ? null : {
      border: "var(--bw-thick) solid var(--gray-200)"
    }
  }, cta))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/product/RecommendationCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RecommendationCard — dark navy build-guide card for the "추천 PC 빌드"
 * section. Rank tag, build name, use-case, component list, total price, CTA.
 */
function RecommendationCard({
  rank,
  title,
  useCase,
  parts = [],
  total,
  cta = "견적 보기",
  featured = false,
  onAction,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--grad-panel)",
      border: featured ? "var(--bw-thick) solid var(--accent)" : "var(--bw-hair) solid var(--border-on-dark)",
      borderRadius: "var(--radius-md)",
      padding: 28,
      boxShadow: featured ? "var(--glow-accent-soft)" : "none",
      transition: "transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.borderColor = "var(--accent)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      if (!featured) e.currentTarget.style.borderColor = "var(--border-on-dark)";
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, rank != null && /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "\uCD94\uCC9C PC #", rank), useCase && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-on-dark-faint)"
    }
  }, useCase)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-on-dark)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0,
      marginBottom: 22
    }
  }, parts.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12,
      padding: "9px 0",
      borderBottom: "var(--bw-hair) solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-on-dark-faint)",
      flexShrink: 0,
      width: 52
    }
  }, p.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: p.highlight ? "var(--text-accent)" : "var(--text-on-dark)",
      textAlign: "right",
      flex: 1
    }
  }, p.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-on-dark-faint)",
      marginBottom: 2
    }
  }, "\uC608\uC0C1 \uACAC\uC801"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-black)",
      letterSpacing: "var(--ls-stat)",
      color: "var(--text-accent)"
    }
  }, total)), /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-accent)",
      padding: "8px 0"
    }
  }, cta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-regular)"
    }
  }, "\u2192"))));
}
Object.assign(__ds_scope, { RecommendationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/RecommendationCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BuildGuideSection.jsx
try { (() => {
// EINS recommended-PC build guide — 3-column RecommendationCard grid
const {
  SectionHeader: ESH_b,
  RecommendationCard: ERC
} = window.EINSSystemDesignSystem_7f67d2;
function BuildGuideSection() {
  const builds = window.EINS_DATA.builds;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "88px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(ESH_b, {
    eyebrow: "RECOMMENDED PC BUILDS",
    title: "\uCD94\uCC9C PC \uBE4C\uB4DC \uAC00\uC774\uB4DC",
    subtitle: "\uC6A9\uB3C4\uBCC4 \uCD94\uCC9C \uACAC\uC801"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 28
    }
  }, builds.map(b => /*#__PURE__*/React.createElement(ERC, {
    key: b.rank,
    rank: b.rank,
    useCase: b.useCase,
    title: b.title,
    parts: b.parts,
    total: b.total,
    featured: b.featured
  }))));
}
window.BuildGuideSection = BuildGuideSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BuildGuideSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogSection.jsx
try { (() => {
// EINS catalog grid — filter tabs + 3-column ProductCard grid
const {
  SectionHeader: ESH_c,
  ProductCard: EPC,
  Button: EBtn_c
} = window.EINSSystemDesignSystem_7f67d2;
function CatalogSection({
  onCompareToggle,
  compareIds
}) {
  const [filter, setFilter] = React.useState("all");
  const tabs = [{
    id: "all",
    label: "전체"
  }, {
    id: "flagship",
    label: "플래그십"
  }, {
    id: "value",
    label: "가성비"
  }];
  const products = window.EINS_DATA.products.filter(p => filter === "all" || p.tier === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "88px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(ESH_c, {
    eyebrow: "DESKTOP PROCESSOR CATALOG",
    title: "\uB370\uC2A4\uD06C\uD0D1 \uD504\uB85C\uC138\uC11C \uCE74\uD0C8\uB85C\uADF8",
    subtitle: "\uC804 \uC81C\uD488 \xB7 14\uC138\uB300 \uAE30\uC900"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      margin: "28px 0 24px"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setFilter(t.id),
    style: {
      padding: "9px 18px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 700,
      border: "1px solid " + (filter === t.id ? "transparent" : "var(--border-on-dark)"),
      background: filter === t.id ? "var(--accent)" : "transparent",
      color: filter === t.id ? "#04121f" : "var(--text-on-dark-muted)",
      transition: "all .15s"
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(EPC, {
    badge: p.badge,
    badgeTone: p.badgeTone,
    series: p.series,
    name: p.name,
    model: p.model,
    specs: p.specs,
    rating: p.rating,
    ratingCount: p.ratingCount,
    price: p.price,
    featured: p.tier === "flagship"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onCompareToggle(p.id),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "10px",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      border: "1px solid " + (compareIds.includes(p.id) ? "var(--border-accent)" : "var(--border-on-dark)"),
      background: compareIds.includes(p.id) ? "rgba(0,229,255,0.08)" : "transparent",
      color: compareIds.includes(p.id) ? "var(--text-accent)" : "var(--text-on-dark-muted)",
      transition: "all .15s"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": compareIds.includes(p.id) ? "check" : "git-compare",
    style: {
      width: 15,
      height: 15
    }
  }), compareIds.includes(p.id) ? "비교 목록에 추가됨" : "비교에 추가")))));
}
window.CatalogSection = CatalogSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CompareSection.jsx
try { (() => {
// EINS comparison section — ComparisonTable across the lineup
const {
  SectionHeader: ESH_cmp,
  ComparisonTable: ECT
} = window.EINSSystemDesignSystem_7f67d2;
function CompareSection() {
  const ps = window.EINS_DATA.products;
  const products = ps.map((p, i) => ({
    name: p.name,
    model: p.model.slice(-4),
    recommended: i === 0
  }));
  const valOf = (p, label) => {
    const s = p.specs.find(x => x.label === label);
    return s ? s.value + (s.unit ? " " + s.unit : "") : "—";
  };
  const rows = [{
    label: "코어 / 스레드",
    values: ps.map(p => valOf(p, "코어 / 스레드")),
    best: 0
  }, {
    label: "최대 클럭",
    values: ps.map(p => valOf(p, "최대 클럭")),
    best: 0
  }, {
    label: "L3 캐시",
    values: ps.map(p => valOf(p, "L3 캐시")),
    best: 0
  }, {
    label: "TDP",
    values: ps.map(p => valOf(p, "TDP"))
  }, {
    label: "가격",
    values: ps.map(p => p.price),
    best: 2
  }, {
    label: "사용자 평점",
    values: ps.map(p => p.rating),
    rating: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "88px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(ESH_cmp, {
    eyebrow: "SPEC COMPARISON",
    title: "\uC81C\uD488 \uC0AC\uC591 \uBE44\uAD50",
    subtitle: "\uD575\uC2EC \uC2A4\uD399 \uD55C\uB208\uC5D0 \u2192"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(ECT, {
    products: products,
    rows: rows
  })));
}
window.CompareSection = CompareSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CompareSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// EINS site header — wordmark + nav + actions
const {
  Button: EBtn_h
} = window.EINSSystemDesignSystem_7f67d2;
function Header({
  active,
  onNav
}) {
  const items = window.EINS_DATA.nav;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 40px",
      background: "rgba(10,22,40,0.82)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(items[0]);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "var(--grad-accent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#04121f",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 19,
      boxShadow: "var(--glow-accent-soft)"
    }
  }, "1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22,
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, "EINS", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "."))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(it);
    },
    style: {
      padding: "8px 14px",
      borderRadius: 6,
      textDecoration: "none",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: active === it ? "var(--text-accent)" : "var(--text-on-dark-muted)",
      background: active === it ? "rgba(0,229,255,0.08)" : "transparent",
      transition: "color .15s, background .15s"
    },
    onMouseEnter: e => {
      if (active !== it) e.currentTarget.style.color = "#fff";
    },
    onMouseLeave: e => {
      if (active !== it) e.currentTarget.style.color = "var(--text-on-dark-muted)";
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 20,
      height: 20,
      color: "var(--text-on-dark-muted)",
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement(EBtn_h, {
    variant: "secondary",
    size: "sm"
  }, "\uACAC\uC801 \uBB38\uC758")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// EINS hero — eyebrow, big Korean headline, lead, stat strip, CTAs
const {
  Button: EBtn_hero,
  Eyebrow: EEyebrow,
  StatNumber: EStat
} = window.EINSSystemDesignSystem_7f67d2;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--grad-hero)",
      padding: "96px 40px 80px",
      borderBottom: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-10%",
      top: "-30%",
      width: 620,
      height: 620,
      background: "radial-gradient(circle, rgba(0,188,212,0.18) 0%, transparent 65%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(EEyebrow, null, "PERFORMANCE REDEFINED"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "18px 0 0",
      maxWidth: 760,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display)",
      fontWeight: "var(--fw-black)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-display)",
      color: "#fff"
    }
  }, "\uB370\uC2A4\uD06C\uD0D1 \uD504\uB85C\uC138\uC11C,", /*#__PURE__*/React.createElement("br", null), "\uC131\uB2A5\uC73C\uB85C \uC99D\uBA85\uD569\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      maxWidth: 560,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-lead)",
      fontWeight: "var(--fw-light)",
      lineHeight: "var(--lh-normal)",
      color: "var(--text-on-dark-muted)"
    }
  }, "\uCD5C\uC2E0 \uACF5\uC815\uACFC \uD558\uC774\uBE0C\uB9AC\uB4DC \uC544\uD0A4\uD14D\uCC98\uB85C \uAC8C\uC774\uBC0D\uBD80\uD130 \uCF58\uD150\uCE20 \uC81C\uC791\uAE4C\uC9C0, \uBAA8\uB4E0 \uC791\uC5C5\uC5D0\uC11C \uD55C \uB2E8\uACC4 \uB192\uC740 \uC131\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(EBtn_hero, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: () => onNav("프로세서")
  }, "\uC81C\uD488 \uCE74\uD0C8\uB85C\uADF8"), /*#__PURE__*/React.createElement(EBtn_hero, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("비교하기")
  }, "\uC0AC\uC591 \uBE44\uAD50\uD558\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      marginTop: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(EStat, {
    value: "900",
    unit: "MHz",
    label: "\uC138\uB300\uAC04 \uD074\uB7ED \uD5A5\uC0C1\uD3ED",
    size: "md"
  }), /*#__PURE__*/React.createElement(EStat, {
    value: "+4",
    delta: "15%\u2191",
    label: "\uCD94\uAC00 P-\uCF54\uC5B4",
    color: "white",
    size: "md"
  }), /*#__PURE__*/React.createElement(EStat, {
    value: "24",
    unit: "\uCF54\uC5B4",
    label: "\uD50C\uB798\uADF8\uC2ED \uCD5C\uB300 \uCF54\uC5B4",
    color: "white",
    size: "md"
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PurchaseFooter.jsx
try { (() => {
// EINS purchase-guide band + footer
const {
  Button: EBtn_f,
  Card: ECard_f
} = window.EINSSystemDesignSystem_7f67d2;
function PurchaseFooter() {
  const steps = [{
    icon: "search",
    t: "제품 선택",
    d: "용도와 예산에 맞는 프로세서를 카탈로그에서 선택"
  }, {
    icon: "git-compare",
    t: "사양 비교",
    d: "코어·클럭·캐시까지 핵심 스펙을 나란히 비교"
  }, {
    icon: "file-text",
    t: "견적 문의",
    d: "추천 빌드 기반으로 정식 견적 요청"
  }, {
    icon: "shield-check",
    t: "정품 구매",
    d: "정품 유통 보증과 함께 안전하게 구매"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "88px 40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grad-hero)",
      border: "1px solid var(--border-on-dark)",
      borderRadius: "var(--radius-lg)",
      padding: "44px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, "PURCHASE GUIDE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-extrabold)",
      color: "#fff"
    }
  }, "\uAD6C\uB9E4\uB294 \uC774\uB807\uAC8C \uC9C4\uD589\uB429\uB2C8\uB2E4")), /*#__PURE__*/React.createElement(EBtn_f, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "\uACAC\uC801 \uBB38\uC758\uD558\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18,
      marginTop: 36
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: "rgba(0,229,255,0.1)",
      border: "1px solid rgba(0,229,255,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 19,
      height: 19,
      color: "var(--text-accent)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-on-dark-faint)"
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 700,
      color: "#fff"
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      lineHeight: 1.55,
      color: "var(--text-on-dark-muted)"
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 96,
      borderTop: "1px solid var(--border-on-dark)",
      background: "var(--bg-page-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "48px 40px",
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: "var(--grad-accent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#04121f",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 16
    }
  }, "1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 19,
      color: "#fff"
    }
  }, "EINS", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "."))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      maxWidth: 320,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--text-on-dark-faint)"
    }
  }, "\uB370\uC2A4\uD06C\uD0D1 \uD504\uB85C\uC138\uC11C \uC815\uD488 \uC720\uD1B5 \xB7 \uCD94\uCC9C PC \uBE4C\uB4DC \uAC00\uC774\uB4DC. \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uD30C\uD2B8\uB108.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56
    }
  }, [{
    h: "제품",
    l: ["프로세서", "추천 PC", "사양 비교"]
  }, {
    h: "지원",
    l: ["구매 안내", "정품 보증", "고객지원"]
  }, {
    h: "회사",
    l: ["회사 소개", "제휴 문의", "채용"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-on-dark)",
      marginBottom: 14
    }
  }, col.h), col.l.map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "block",
      padding: "5px 0",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-on-dark-faint)",
      textDecoration: "none"
    }
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-on-dark)",
      padding: "18px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-on-dark-faint)"
    }
  }, "\xA9 2026 EINS SYSTEM \xB7 \u203B \uAC00\uACA9 \uBC0F \uC0AC\uC591\uC740 \uACF5\uAE09\uC0AC \uC0AC\uC815\uC5D0 \uB530\uB77C \uBCC0\uB3D9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))));
}
window.PurchaseFooter = PurchaseFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PurchaseFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// EINS catalog site — shared mock data
window.EINS_DATA = {
  nav: ["프로세서", "추천 PC", "비교하기", "구매 안내", "고객지원"],
  products: [{
    id: "285k",
    badge: "PERFORMANCE FLAGSHIP",
    badgeTone: "flagship",
    series: "CORE ULTRA 9",
    name: "울트라 9 285K",
    model: "BX80684I9285K",
    tier: "flagship",
    specs: [{
      label: "코어 / 스레드",
      value: "24 / 32",
      highlight: true
    }, {
      label: "최대 클럭",
      value: "5.7",
      unit: "GHz"
    }, {
      label: "L3 캐시",
      value: "36",
      unit: "MB"
    }, {
      label: "TDP",
      value: "125",
      unit: "W"
    }],
    rating: 4.5,
    ratingCount: 128,
    price: "₩689,000"
  }, {
    id: "265k",
    badge: "VALUE PERFORMANCE",
    badgeTone: "value",
    series: "CORE ULTRA 7",
    name: "울트라 7 265K",
    model: "BX80684I7265K",
    tier: "value",
    specs: [{
      label: "코어 / 스레드",
      value: "20 / 20",
      highlight: true
    }, {
      label: "최대 클럭",
      value: "5.5",
      unit: "GHz"
    }, {
      label: "L3 캐시",
      value: "30",
      unit: "MB"
    }, {
      label: "TDP",
      value: "125",
      unit: "W"
    }],
    rating: 4.0,
    ratingCount: 86,
    price: "₩479,000"
  }, {
    id: "245k",
    badge: "MAINSTREAM",
    badgeTone: "neutral",
    series: "CORE ULTRA 5",
    name: "울트라 5 245K",
    model: "BX80684I5245K",
    tier: "value",
    specs: [{
      label: "코어 / 스레드",
      value: "14 / 14",
      highlight: true
    }, {
      label: "최대 클럭",
      value: "5.2",
      unit: "GHz"
    }, {
      label: "L3 캐시",
      value: "24",
      unit: "MB"
    }, {
      label: "TDP",
      value: "125",
      unit: "W"
    }],
    rating: 4.5,
    ratingCount: 54,
    price: "₩329,000"
  }],
  builds: [{
    rank: 1,
    useCase: "GAMING",
    title: "게이밍 하이엔드",
    featured: true,
    parts: [{
      kind: "CPU",
      name: "울트라 9 285K",
      highlight: true
    }, {
      kind: "GPU",
      name: "RTX 5070 Ti"
    }, {
      kind: "RAM",
      name: "DDR5 32GB (16×2)"
    }, {
      kind: "SSD",
      name: "1TB NVMe Gen4"
    }],
    total: "₩2,490,000"
  }, {
    rank: 2,
    useCase: "CREATOR",
    title: "콘텐츠 제작용",
    parts: [{
      kind: "CPU",
      name: "울트라 7 265K",
      highlight: true
    }, {
      kind: "GPU",
      name: "RTX 5060 Ti"
    }, {
      kind: "RAM",
      name: "DDR5 64GB (32×2)"
    }, {
      kind: "SSD",
      name: "2TB NVMe Gen4"
    }],
    total: "₩2,180,000"
  }, {
    rank: 3,
    useCase: "OFFICE",
    title: "사무 · 일반용",
    parts: [{
      kind: "CPU",
      name: "울트라 5 245K",
      highlight: true
    }, {
      kind: "GPU",
      name: "내장 그래픽"
    }, {
      kind: "RAM",
      name: "DDR5 16GB"
    }, {
      kind: "SSD",
      name: "512GB NVMe"
    }],
    total: "₩980,000"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SpecRow = __ds_scope.SpecRow;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.StatNumber = __ds_scope.StatNumber;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.RecommendationCard = __ds_scope.RecommendationCard;

})();
