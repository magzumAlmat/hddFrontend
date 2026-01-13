import { Box, Typography, Container, Grid, IconButton, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import logo from "/public/image/IMG_3105.PNG";
import Link from "next/link";
import { Phone, Email, Instagram, Facebook, YouTube } from "@mui/icons-material";
import { brandColors, typography, borderRadius, transitions, spacing } from "@/theme/brandColors";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(180deg, ${brandColors.neutral.dark} 0%, ${brandColors.neutral.black} 100%)`,
  color: brandColors.neutral.white,
  padding: `${spacing['3xl']} 0 ${spacing.lg}`,
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: brandColors.primary.gradient,
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: spacing.xl,
  
  [theme.breakpoints.down('sm')]: {
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.bold,
  marginBottom: spacing.md,
  fontFamily: typography.fontFamily.primary,
  background: brandColors.primary.gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: brandColors.neutral.lightGray,
  textDecoration: 'none',
  display: 'block',
  marginBottom: spacing.sm,
  fontSize: typography.fontSize.sm,
  fontFamily: typography.fontFamily.primary,
  transition: transitions.normal,
  cursor: 'pointer',
  
  '&:hover': {
    color: brandColors.neutral.white,
    transform: 'translateX(4px)',
    textShadow: `0 0 10px ${brandColors.primary.light}`,
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: brandColors.neutral.white,
  margin: spacing.xs,
  transition: transitions.normal,
  
  '&:hover': {
    background: brandColors.primary.gradient,
    transform: 'translateY(-4px) scale(1.1)',
    boxShadow: brandColors.shadows.glow,
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.sm,
  marginBottom: spacing.md,
  color: brandColors.neutral.lightGray,
  fontSize: typography.fontSize.sm,
  fontFamily: typography.fontFamily.primary,
  
  '& svg': {
    color: brandColors.primary.light,
  },
  
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

const Copyright = styled(Box)(({ theme }) => ({
  borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
  paddingTop: spacing.lg,
  marginTop: spacing.xl,
  textAlign: 'center',
  color: brandColors.neutral.mediumGray,
  fontSize: typography.fontSize.sm,
  fontFamily: typography.fontFamily.primary,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  marginBottom: spacing.lg,
  filter: 'drop-shadow(0 0 15px rgba(232, 73, 29, 0.3))',
  
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <FooterSection>
              <LogoContainer>
                <Image
                  src={logo}
                  alt="HDCI Logo"
                  width={180}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </LogoContainer>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: brandColors.neutral.lightGray,
                  mb: spacing.md,
                  lineHeight: typography.lineHeight.relaxed,
                }}
              >
                Премиальные аксессуары для ваших устройств. Качество, стиль и инновации в каждом продукте.
              </Typography>
              
              {/* Social Media */}
              <Box>
                <SocialIconButton aria-label="Instagram">
                  <Instagram />
                </SocialIconButton>
                <SocialIconButton aria-label="Facebook">
                  <Facebook />
                </SocialIconButton>
                <SocialIconButton aria-label="YouTube">
                  <YouTube />
                </SocialIconButton>
              </Box>
            </FooterSection>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterSection>
              <FooterTitle>Навигация</FooterTitle>
              <Link href="/" passHref legacyBehavior>
                <FooterLink>Главная</FooterLink>
              </Link>
              <Link href="/katalog-tovarov" passHref legacyBehavior>
                <FooterLink>Каталог</FooterLink>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <FooterLink>О бренде</FooterLink>
              </Link>
              <Link href="/premium" passHref legacyBehavior>
                <FooterLink>Премиум</FooterLink>
              </Link>
            </FooterSection>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <FooterTitle>Категории</FooterTitle>
              <Link href="/promo" passHref legacyBehavior>
                <FooterLink>Хит продаж</FooterLink>
              </Link>
              <Link href="/tips" passHref legacyBehavior>
                <FooterLink>Скидки</FooterLink>
              </Link>
              <Link href="/cart" passHref legacyBehavior>
                <FooterLink>Корзина</FooterLink>
              </Link>
              <Link href="/contactpage" passHref legacyBehavior>
                <FooterLink>Контакты</FooterLink>
              </Link>
            </FooterSection>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <FooterSection>
              <FooterTitle>Контакты</FooterTitle>
              <ContactItem>
                <Phone fontSize="small" />
                <Typography variant="body2">
                  +7 (708) 088 01 88
                </Typography>
              </ContactItem>
              <ContactItem>
                <Email fontSize="small" />
                <Typography variant="body2">
                  shop_totu@mail.ru
                </Typography>
              </ContactItem>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: brandColors.neutral.lightGray,
                  mt: spacing.md,
                  lineHeight: typography.lineHeight.relaxed,
                }}
              >
                Работаем ежедневно<br />
                с 8:00 до 17:00
              </Typography>
            </FooterSection>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Copyright>
          <Typography variant="body2">
            © {currentYear} HDCI. Все права защищены.
          </Typography>
          <Typography variant="caption" sx={{ mt: spacing.xs, display: 'block' }}>
            Let the world see me
          </Typography>
        </Copyright>
      </Container>
    </FooterContainer>
  );
}