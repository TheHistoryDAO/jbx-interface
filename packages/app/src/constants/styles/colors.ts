import { CSSProperties } from 'react'

export type JuiceColor =
  | 'juiceOrange'
  | 'juiceLight'
  | 'cta'
  | 'ctaLight'
  | 'ctaHint'
  | 'background'
  | 'backgroundSecondary'
  | 'backgroundTertiary'
  | 'grape'
  | 'grapeHint'
  | 'dark'
  | 'bodyPrimary'
  | 'bodySecondary'

export const colors: Record<JuiceColor, CSSProperties['color']> = {
  background: '#131115',
  backgroundSecondary: '#241c2b',
  backgroundTertiary: '#392b46',
  grape: '#574c67',
  grapeHint: '#574c6748',
  dark: '#000',
  bodyPrimary: '#ffffffee',
  bodySecondary: '#a29fa7',
  juiceOrange: '#FFB32C',
  cta: '#32c8db',
  ctaLight: '#61edff',
  ctaHint: '#32c8db22',
  juiceLight: '#FFECBB',
}
