/**
 * Reusable Styled Components for HDCI Brand
 * Modern UI components with gradient effects and glassmorphism
 */

import { styled } from '@mui/material/styles';
import { Button, Box, Typography, Card } from '@mui/material';
import { brandColors, typography, borderRadius, transitions, spacing } from './brandColors';

// Gradient Button - Primary CTA
export const GradientButton = styled(Button)(({ theme, variant = 'primary' }) => ({
  background: brandColors.primary.gradient,
  color: brandColors.neutral.white,
  borderRadius: borderRadius.full,
  padding: `${spacing.md} ${spacing.xl}`,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.semibold,
  textTransform: 'none',
  border: 'none',
  boxShadow: brandColors.shadows.medium,
  transition: transitions.normal,
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: brandColors.primary.gradientHover,
    opacity: 0,
    transition: transitions.normal,
  },

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: brandColors.shadows.glow,
    '&::before': {
      opacity: 1,
    },
  },

  '&:active': {
    transform: 'translateY(0)',
  },

  '&:disabled': {
    background: brandColors.neutral.paleGray,
    color: brandColors.neutral.mediumGray,
    boxShadow: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    padding: `${spacing.sm} ${spacing.lg}`,
    fontSize: typography.fontSize.sm,
  },
}));

// Glass Card - Glassmorphism effect
export const GlassCard = styled(Card)(({ theme }) => ({
  background: brandColors.glass.white,
  backdropFilter: 'blur(10px)',
  borderRadius: borderRadius.xl,
  border: `1px solid ${brandColors.glass.whiteHover}`,
  boxShadow: brandColors.shadows.medium,
  transition: transitions.normal,
  overflow: 'hidden',

  '&:hover': {
    background: brandColors.glass.whiteHover,
    transform: 'translateY(-4px)',
    boxShadow: brandColors.shadows.large,
  },
}));

// Glow Text - Text with white glow effect (like logo)
export const GlowText = styled(Typography)(({ intensity = 'medium' }) => {
  const glowIntensity = {
    low: '0 0 10px rgba(255, 255, 255, 0.5)',
    medium: '0 0 20px rgba(255, 255, 255, 0.7)',
    high: '0 0 30px rgba(255, 255, 255, 0.9)',
  };

  return {
    color: brandColors.neutral.white,
    textShadow: glowIntensity[intensity],
    fontWeight: typography.fontWeight.bold,
  };
});

// Gradient Badge
export const GradientBadge = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  background: brandColors.primary.gradient,
  color: brandColors.neutral.white,
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: borderRadius.full,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.semibold,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  boxShadow: brandColors.shadows.small,
}));

// Animated Container - Smooth transitions
export const AnimatedContainer = styled(Box)(({ theme }) => ({
  transition: transitions.normal,
  
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

// Gradient Border Card
export const GradientBorderCard = styled(Card)(({ theme }) => ({
  background: brandColors.neutral.white,
  borderRadius: borderRadius.xl,
  padding: spacing.lg,
  position: 'relative',
  overflow: 'hidden',
  transition: transitions.normal,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: borderRadius.xl,
    padding: '2px',
    background: brandColors.primary.gradient,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: 0,
    transition: transitions.normal,
  },

  '&:hover::before': {
    opacity: 1,
  },

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: brandColors.shadows.large,
  },
}));

// Icon Button with Gradient
export const GradientIconButton = styled(Button)(({ theme }) => ({
  minWidth: '48px',
  width: '48px',
  height: '48px',
  borderRadius: borderRadius.full,
  background: brandColors.primary.gradient,
  color: brandColors.neutral.white,
  padding: 0,
  boxShadow: brandColors.shadows.small,
  transition: transitions.normal,

  '&:hover': {
    background: brandColors.primary.gradientHover,
    transform: 'scale(1.1)',
    boxShadow: brandColors.shadows.glow,
  },

  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
    minWidth: '40px',
  },
}));

// Gradient Text
export const GradientText = styled(Typography)(() => ({
  background: brandColors.primary.gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: typography.fontWeight.bold,
}));

// Dark Glass Card (for dark sections)
export const DarkGlassCard = styled(Card)(({ theme }) => ({
  background: brandColors.glass.dark,
  backdropFilter: 'blur(10px)',
  borderRadius: borderRadius.xl,
  border: `1px solid ${brandColors.glass.whiteHover}`,
  color: brandColors.neutral.white,
  boxShadow: brandColors.shadows.medium,
  transition: transitions.normal,

  '&:hover': {
    background: brandColors.glass.darkHover,
    transform: 'translateY(-4px)',
    boxShadow: brandColors.shadows.large,
  },
}));

export default {
  GradientButton,
  GlassCard,
  GlowText,
  GradientBadge,
  AnimatedContainer,
  GradientBorderCard,
  GradientIconButton,
  GradientText,
  DarkGlassCard,
};
