"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ShoppingCartOutlined, Menu as MenuIcon, Close } from "@mui/icons-material";
import {
  getAllProductsAction,
  setSelectedMainTypeReducer,
  setSelectedTypeReducer,
} from "@/store/slices/productSlice";
import { logoutAction } from "@/store/slices/authSlice";
import logo from "/public/image/IMG_3105.PNG";
import { brandColors, typography, borderRadius, transitions, spacing } from "@/theme/brandColors";

// === STYLED COMPONENTS ===
const StyledAppBar = styled(AppBar)(({ theme, $scrolled }) => ({
  background: $scrolled 
    ? 'rgba(232, 73, 29, 0.95)' 
    : brandColors.primary.gradient,
  backdropFilter: $scrolled ? 'blur(10px)' : 'none',
  boxShadow: $scrolled ? brandColors.shadows.large : brandColors.shadows.medium,
  transition: transitions.normal,
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  
  [theme.breakpoints.down("sm")]: {
    minHeight: '70px',
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '90px !important',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${spacing.sm} ${spacing.md}`,
  
  [theme.breakpoints.down("sm")]: {
    minHeight: '70px !important',
    padding: `${spacing.xs} ${spacing.sm}`,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: brandColors.neutral.white,
  textTransform: "none",
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.medium,
  padding: `${spacing.sm} ${spacing.md}`,
  borderRadius: borderRadius.lg,
  position: 'relative',
  transition: transitions.normal,
  
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '2px',
    background: brandColors.neutral.white,
    transition: transitions.normal,
  },

  "&:hover": {
    background: 'rgba(255, 255, 255, 0.1)',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
    
    '&::before': {
      width: '80%',
    },
  },

  [theme.breakpoints.down("md")]: {
    fontSize: typography.fontSize.sm,
    padding: `${spacing.xs} ${spacing.sm}`,
  },
}));

const CartButton = styled(Button)(({ theme }) => ({
  borderRadius: borderRadius.full,
  padding: `${spacing.sm} ${spacing.lg}`,
  textTransform: "none",
  background: brandColors.neutral.white,
  color: brandColors.primary.main,
  fontWeight: typography.fontWeight.semibold,
  boxShadow: brandColors.shadows.small,
  transition: transitions.normal,
  
  "&:hover": {
    background: brandColors.neutral.white,
    transform: 'translateY(-2px)',
    boxShadow: brandColors.shadows.glow,
  },

  [theme.breakpoints.down("sm")]: {
    padding: `${spacing.xs} ${spacing.md}`,
    minWidth: 'auto',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: brandColors.neutral.white,
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: borderRadius.md,
  padding: spacing.sm,
  
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    background: `linear-gradient(180deg, ${brandColors.primary.dark} 0%, ${brandColors.primary.main} 100%)`,
    color: brandColors.neutral.white,
    padding: spacing.lg,
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: spacing.lg,
  paddingBottom: spacing.md,
  borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
}));

const DrawerListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: borderRadius.md,
  marginBottom: spacing.xs,
  transition: transitions.normal,
  cursor: 'pointer',
  
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.15)',
    transform: 'translateX(8px)',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: transitions.normal,
  
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.usercart);
  const cartItemCount = userCart.length;
  const router = useRouter();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { allProducts } = useSelector((state) => state.usercart);

  useEffect(() => {
    dispatch(getAllProductsAction());
    
    // Scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => {
    dispatch(logoutAction());
    router.push("/login");
  };

  const navigationItems = [
    { label: "Каталог товаров", path: "/katalog-tovarov" },
    { label: "О бренде", path: "/about" },
    { label: "Хит продаж", path: "/promo" },
    // { label: "Скидки", path: "/tips" },
    // { label: "Премиум", path: "/premium" },
    { label: "Контакты", path: "/contactpage" },
  ];

  // Mobile menu
  const drawer = (
    <Box>
      <DrawerHeader>
        <Typography variant="h6" fontWeight={typography.fontWeight.bold}>
          Меню
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: brandColors.neutral.white }}>
          <Close />
        </IconButton>
      </DrawerHeader>
      
      <List>
        <DrawerListItem onClick={() => { router.push("/"); setMobileOpen(false); }}>
          <ListItemText 
            primary="Главная" 
            primaryTypographyProps={{ fontWeight: typography.fontWeight.medium }}
          />
        </DrawerListItem>
        
        {navigationItems.map((item) => (
          <DrawerListItem 
            key={item.path}
            onClick={() => { router.push(item.path); setMobileOpen(false); }}
          >
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{ fontWeight: typography.fontWeight.medium }}
            />
          </DrawerListItem>
        ))}
        
        <DrawerListItem onClick={() => { handleLogout(); setMobileOpen(false); }}>
          <ListItemText 
            primary="Вход"
            primaryTypographyProps={{ fontWeight: typography.fontWeight.medium }}
          />
        </DrawerListItem>
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky" $scrolled={scrolled}>
        <Container maxWidth="lg">
          <StyledToolbar>
            {/* Logo */}
            <LogoContainer onClick={() => router.push("/")}>
              <Image
                src={logo}
                alt="HDCI Logo"
                width={160}
                height={80}
                style={{ 
                  objectFit: "contain",
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
                }}
                priority
              />
            </LogoContainer>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
              {navigationItems.map((item) => (
                <NavButton key={item.path} onClick={() => router.push(item.path)}>
                  {item.label}
                </NavButton>
              ))}
            </Box>

            {/* Cart & Mobile Menu */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CartButton
                variant="contained"
                startIcon={<ShoppingCartOutlined />}
                onClick={() => router.push("/cart")}
              >
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  Корзина
                </Box>
                {cartItemCount > 0 && (
                  <Box
                    sx={{
                      ml: 1.5,
                      bgcolor: 'error.main',
                      color: 'white',
                      borderRadius: '50%',
                      width: 22,
                      height: 22,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      lineHeight: 1,
                    }}
                  >
                    {cartItemCount}
                  </Box>
                )}
              </CartButton>

              <MobileMenuButton
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </MobileMenuButton>
            </Box>
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <StyledDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
}