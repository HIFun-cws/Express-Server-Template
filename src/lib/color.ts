const LUT = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37
}

export default function ANSIcolor(bg: string,bgHI:boolean,fg: string,fgHI:boolean): string {
  return `\x1b[${(bgHI?LUT[bg]+70:LUT[bg]+60)}m \x1b[${(fgHI?LUT[fg]+60:LUT[fg]+0)}m`
}

export const resetANSI:string = '\x1b[0m'
