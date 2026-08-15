"use client";
import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG)                                                */
/* ------------------------------------------------------------------ */

const IconStar: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l1.9 6.3L20 10l-6.1 1.7L12 18l-1.9-6.3L4 10l6.1-1.7L12 2z" />
  </svg>
);

const IconChevronLeft: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

const IconCheck: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconCheckCircle: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#EEF2FF" />
    <path
      d="M8 12.5l2.5 2.5L16 9.5"
      stroke="#6D5EF0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconClock: React.FC = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

const IconUsers: React.FC = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.8 20c.6-3.2 3-5 6.2-5s5.6 1.8 6.2 5" />
    <circle cx="17.2" cy="8.6" r="2.4" />
    <path d="M15.6 15.4c2.7.2 4.6 1.8 5.1 4.6" />
  </svg>
);

const IconShield: React.FC = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l7 3v6c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6l7-3z" />
    <path d="M9 12l2.2 2.2L15.5 10" />
  </svg>
);

const IconGrid: React.FC = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.4" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.4" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.4" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.4" />
  </svg>
);

const IconChat: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a7.5 7.5 0 01-11.4 6.4L4 20l1.6-4.6A7.5 7.5 0 1121 12z" />
    <path d="M9 11h6M9 14h4" />
  </svg>
);

const IconCap: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 8l10-4 10 4-10 4-10-4z" />
    <path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5" />
    <path d="M22 8v6" />
  </svg>
);

const IconPeople: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8.5" cy="8" r="3" />
    <circle cx="16" cy="8.8" r="2.4" />
    <path d="M2.5 19c.6-3.4 3-5.2 6-5.2s5.4 1.8 6 5.2" />
    <path d="M14.5 14.2c2.5.2 4.3 1.7 4.8 4.3" />
  </svg>
);

const IconBarChart: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 20V10M12 20V4M20 20v-7" />
  </svg>
);

const IconWallet: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2.5" y="6" width="19" height="13" rx="2.2" />
    <path d="M2.5 10h19" />
    <circle cx="17" cy="14" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const IconMobile: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
    <path d="M11 18h2" />
  </svg>
);

const IconRocket: React.FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2c3 1.5 5 5 5 9-1.5 1-3.5 2-5 2s-3.5-1-5-2c0-4 2-7.5 5-9z" />
    <path d="M9 13l-3 3 1 3 3-1M15 13l3 3-1 3-3-1" />
    <circle cx="12" cy="9" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

const IconCloud: React.FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.5 19a4.2 4.2 0 01-.5-8.3A5.5 5.5 0 0117 9.6 4 4 0 0117 19H6.5z" />
  </svg>
);

const IconHeadset: React.FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 13v-1a8 8 0 0116 0v1" />
    <rect x="3" y="13" width="4" height="6" rx="1.4" />
    <rect x="17" y="13" width="4" height="6" rx="1.4" />
    <path d="M19 19v1a3 3 0 01-3 3h-3" />
  </svg>
);

const IconPhone: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 4.5c1 0 2.5.3 3 1.2.5.9.7 2.3.3 3.1-.3.6-1 .9-1 1.5 0 1.8 3.1 4.9 4.9 4.9.6 0 .9-.7 1.5-1 .8-.4 2.2-.2 3.1.3.9.5 1.2 2 1.2 3 0 1.3-1.5 2.5-2.8 2.5C8.9 20 4 15.1 4 9.3 4 8 5.2 6.5 4.5 4.5z" />
  </svg>
);

const IconMail: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </svg>
);

const IconPin: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s7-6.6 7-11.6A7 7 0 105 9.4C5 14.4 12 21 12 21z" />
    <circle cx="12" cy="9.4" r="2.3" />
  </svg>
);

const IconSocial: React.FC<{ kind: "ig" | "tg" | "yt" | "tw" }> = ({
  kind,
}) => {
  const paths: Record<string, React.ReactNode> = {
    ig: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    tg: (
      <path d="M21 4L3 11.5l6 2M21 4l-3.5 16L9.5 13.5M21 4L9.5 13.5m0 0L9 19l2-4" />
    ),
    yt: (
      <>
        <rect x="2.5" y="6" width="19" height="12" rx="3" />
        <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
      </>
    ),
    tw: (
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.8-2.2 8 8 0 01-2.5 1 4 4 0 00-6.9 3.6A11.4 11.4 0 014 4.6a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8 8 0 012 17.9a11.3 11.3 0 006.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.4-1.3 2-2.1z" />
    ),
  };
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[kind]}
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  "خانه",
  "امکانات",
  "قیمت‌ گذاری",
  "منابع",
  "درباره",
  "تماس با ما",
];

const STATS = [
  { icon: <IconClock />, value: "۲۴/۷", label: "پشتیبانی" },
  { icon: <IconUsers />, value: "+۵۰٬۰۰۰", label: "کاربران" },
  { icon: <IconShield />, value: "۹۶٪", label: "رضایت کاربران" },
  { icon: <IconGrid />, value: "+۱۸۰", label: "مدارس فعال" },
];

const FEATURES = [
  {
    icon: <IconChat />,
    title: "ارتباطات هوشمند",
    desc: "ارتباط موثر بین مدیران، معلمان، والدین و دانش‌آموزان",
  },
  {
    icon: <IconCap />,
    title: "مدیریت آموزشی",
    desc: "برنامه‌ریزی درسی، حبانه کلاسی و ارزشیابی آنلاین",
  },
  {
    icon: <IconPeople />,
    title: "مدیریت دانش‌آموزان",
    desc: "اطلاعات کامل، سوابق تحصیلی، حضور و غیاب و گزارش‌های پیشرفت",
  },
  {
    icon: <IconBarChart />,
    title: "گزارش‌ها و تحلیل‌ها",
    desc: "داشبوردهای تحلیلی و گزارش‌های دقیق برای تصمیم‌گیری بهتر",
  },
  {
    icon: <IconWallet />,
    title: "مالی و حسابداری",
    desc: "مدیریت شهریه، فاکتورها و گزارش‌های مالی",
  },
  {
    icon: <IconMobile />,
    title: "اپلیکیشن موبایل",
    desc: "دسترسی آسان برای والدین، معلمان و دانش‌آموزان در هر زمان و مکان",
  },
];

const INSIGHT_ITEMS = [
  "نمودارهای تعاملی و قابل شخصی‌سازی",
  "گزارش‌های لحظه‌ای و دقیق",
  "تحلیل عملکرد دانش‌آموزان و معلمان",
  "قابلیت خروجی‌گیری در فرمت‌های مختلف",
];

const ROLES = [
  {
    name: "دانش‌آموز",
    desc: "دسترسی به تکالیف، نمرات، برنامه کلاسی و منابع آموزشی",
    badge: <IconCap />,
    badgeColor: "#F5A623",
  },
  {
    name: "والدین",
    desc: "پیگیری پیشرفت تحصیلی فرزند، اطلاعیه‌ها و ارتباط با مدرسه",
    badge: <IconPeople />,
    badgeColor: "#4AA3E0",
  },
  {
    name: "معلمان",
    desc: "مدیریت کلاس، ثبت نمرات، تکالیف و گزارش‌های آموزشی",
    badge: <IconGrid />,
    badgeColor: "#6D5EF0",
  },
  {
    name: "مدیران",
    desc: "مدیریت همه جانبه مدرسه، گزارش‌ها و تصمیم‌گیری استراتژیک",
    badge: <IconShield />,
    badgeColor: "#3FBF8F",
  },
];

const WHY_US = [
  {
    icon: <IconRocket />,
    title: "نصب و راه‌اندازی سریع",
    desc: "راه‌اندازی آسان و بدون پیچیدگی",
  },
  {
    icon: <IconCloud />,
    title: "آینده‌نگر و به‌روز",
    desc: "همیشه همراه با جدیدترین فناوری‌ها",
  },
  {
    icon: <IconShield />,
    title: "امن و مطمئن",
    desc: "حفاظت از داده‌ها با بالاترین استانداردها",
  },
  {
    icon: <IconHeadset />,
    title: "پشتیبانی حرفه‌ای",
    desc: "همراه شما در تمام مراحل",
  },
];

const FOOTER_COLS: { title: string; links: string[] }[] = [
  { title: "شرکت", links: ["درباره ما", "وبلاگ", "فرصت‌های شغلی"] },
  { title: "منابع", links: ["راهنمای استفاده", "سوالات متداول"] },
  {
    title: "محصول",
    links: ["امکانات", "قیمت‌گذاری", "اپلیکیشن موبایل", "تجدیدات"],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const LandingPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pl-root" dir="rtl">
      <style>{`
        :root {
          --navy-950: #0c0e26;
          --navy-900: #12143a;
          --navy-800: #1a1d4d;
          --purple-500: #7c5cf0;
          --purple-600: #6d4ce0;
          --purple-gradient: linear-gradient(135deg, #8b6df2 0%, #6d4ce0 100%);
          --blue-accent: #4aa3e0;
          --bg-light: #f6f7fb;
          --card-bg: #ffffff;
          --text-dark: #1c1e35;
          --text-muted: #6b7086;
          --border-light: #e7e8f2;
          --radius-lg: 20px;
          --radius-md: 14px;
          --radius-sm: 10px;
          --max-width: 1180px;
        }

        .pl-root {
          color: var(--text-dark);
          background: var(--bg-light);
          overflow-x: hidden;
          line-height: 1.7;
        }

        .pl-root * { box-sizing: border-box; }

        .pl-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 24px;
        }

        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; cursor: pointer; }
        ul { list-style: none; margin: 0; padding: 0; }

        /* ---------------- Header ---------------- */
        .pl-header {
          position: relative;
          z-index: 20;
          padding: 22px 0 0;
        }
        .pl-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .pl-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }
        .pl-logo .star { color: var(--purple-500); }
        .pl-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .pl-nav a {
          font-size: 14.5px;
          color: #d6d7ea;
          transition: color .2s;
        }
        .pl-nav a:hover { color: #fff; }
        .pl-nav a.active { color: #fff; font-weight: 600; }
        .pl-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pl-btn {
          border: none;
          border-radius: 10px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 600;
          transition: transform .15s, opacity .15s, background .2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }
        .pl-btn:hover { transform: translateY(-1px); }
        .pl-btn-primary {
          background: var(--purple-gradient);
          color: #fff;
          box-shadow: 0 8px 20px -6px rgba(124,92,240,.6);
        }
        .pl-btn-ghost-dark {
          background: rgba(255,255,255,.08);
          color: #fff;
          border: 1px solid rgba(255,255,255,.14);
        }
        .pl-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          padding: 6px;
        }

        /* ---------------- Hero ---------------- */
        .pl-hero {
          position: relative;
          background: radial-gradient(120% 100% at 75% 0%, #1c2058 0%, var(--navy-900) 45%, var(--navy-950) 100%);
          padding-bottom: 70px;
          overflow: hidden;
        }
        .pl-hero-stars {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(1.5px 1.5px at 20% 20%, rgba(255,255,255,.5) 50%, transparent 100%),
            radial-gradient(1.5px 1.5px at 70% 15%, rgba(255,255,255,.4) 50%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 35%, rgba(255,255,255,.5) 50%, transparent 100%),
            radial-gradient(1.5px 1.5px at 45% 10%, rgba(255,255,255,.4) 50%, transparent 100%),
            radial-gradient(1.5px 1.5px at 60% 30%, rgba(255,255,255,.3) 50%, transparent 100%),
            radial-gradient(1.5px 1.5px at 30% 40%, rgba(255,255,255,.3) 50%, transparent 100%);
          pointer-events: none;
        }
        .pl-hero-mountain {
          position: absolute;
          left: 50%;
          top: 40px;
          transform: translateX(-50%);
          width: 260px;
          height: 200px;
          opacity: .85;
          pointer-events: none;
        }
        .pl-hero-inner {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          padding-top: 56px;
        }
        .pl-hero-visual {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 320px;
        }
        .pl-hero-copy { text-align: right; }
        .pl-eyebrow-star {
          color: #fff;
          margin-bottom: 14px;
        }
        .pl-hero-title {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          color: #fff;
          line-height: 1.35;
          margin: 0 0 20px;
        }
        .pl-hero-title .accent {
          background: linear-gradient(90deg, #a78bfa, #6d9df2);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .pl-hero-desc {
          font-size: 15.5px;
          color: #b7b9d6;
          max-width: 480px;
          margin: 0 0 30px;
        }
        .pl-hero-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
        }
        .pl-btn-lg { padding: 13px 26px; font-size: 15px; border-radius: 11px; }
        .pl-hero-checks {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
        }
        .pl-hero-check {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: #c7c9e6;
        }
        .pl-hero-check svg { color: #7ee0a8; flex-shrink: 0; }

        /* laptop mockup */
        .pl-mock {
          position: relative;
          width: 100%;
          max-width: 420px;
        }
        .pl-mock-plant {
          position: absolute;
          left: -8px;
          bottom: 6px;
          width: 70px;
          height: 90px;
        }
        .pl-mock-books {
          position: absolute;
          right: 10px;
          bottom: 0;
          width: 90px;
        }
        .pl-mock-laptop {
          position: relative;
          background: #e9eaf2;
          border-radius: 14px 14px 4px 4px;
          padding: 10px;
          box-shadow: 0 40px 70px -20px rgba(0,0,0,.55);
        }
        .pl-mock-screen {
          background: #fff;
          border-radius: 8px;
          padding: 14px;
          min-height: 210px;
        }
        .pl-mock-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .pl-mock-title { font-size: 10px; font-weight: 700; color: #333; }
        .pl-mock-avatar { width: 16px; height: 16px; border-radius: 50%; background: var(--purple-500); }
        .pl-mock-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 8px;
        }
        .pl-mock-card {
          background: #f4f5fb;
          border-radius: 6px;
          padding: 6px 8px;
        }
        .pl-mock-card b { display: block; font-size: 11px; }
        .pl-mock-card span { font-size: 8px; color: #8a8da8; }
        .pl-mock-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 46px;
          background: #f4f5fb;
          border-radius: 6px;
          padding: 6px;
        }
        .pl-mock-chart i {
          flex: 1;
          background: linear-gradient(180deg, #8b6df2, #6d4ce0);
          border-radius: 2px;
          display: block;
        }
        .pl-mock-stand {
          height: 10px;
          background: #d7d9e6;
          border-radius: 0 0 8px 8px;
          margin: 0 -2px;
        }
        .pl-mock-base {
          height: 8px;
          background: #c3c5d8;
          border-radius: 3px;
          width: 108%;
          margin-right: -4%;
        }
        .pl-mock-tablet {
          position: absolute;
          left: -30px;
          top: 30px;
          width: 100px;
          background: #1d1f38;
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 25px 45px -15px rgba(0,0,0,.6);
        }
        .pl-mock-tablet-screen {
          background: #fff;
          border-radius: 6px;
          padding: 8px 6px;
          height: 130px;
        }
        .pl-mock-donut {
          width: 40px;
          height: 40px;
          margin: 6px auto;
          border-radius: 50%;
          background: conic-gradient(#7c5cf0 0 40%, #4aa3e0 40% 65%, #f5c453 65% 85%, #e6e8f4 85% 100%);
        }

        /* ---------------- Stats bar ---------------- */
        .pl-stats-wrap { margin-top: -46px; position: relative; z-index: 10; }
        .pl-stats {
          background: #fff;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 45px -20px rgba(20,20,60,.18);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 26px 10px;
        }
        .pl-stat {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-align: right;
          border-left: 1px solid var(--border-light);
          padding: 0 12px;
        }
        .pl-stat:last-child { border-left: none; }
        .pl-stat-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #f1eefe;
          color: var(--purple-500);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pl-stat-value { font-size: 19px; font-weight: 800; }
        .pl-stat-label { font-size: 12.5px; color: var(--text-muted); }

        /* ---------------- Section shared ---------------- */
        .pl-section { padding: 90px 0; }
        .pl-section-head { text-align: center; max-width: 620px; margin: 0 auto 48px; }
        .pl-section-title { font-size: clamp(22px, 3vw, 30px); font-weight: 800; margin: 0 0 12px; }
        .pl-section-sub { color: var(--text-muted); font-size: 14.5px; margin: 0; }
        .pl-eyebrow {
          color: var(--purple-500);
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 10px;
        }

        /* ---------------- Features grid ---------------- */
        .pl-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .pl-feature-card {
          background: var(--card-bg);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 28px 24px;
          text-align: right;
          transition: transform .2s, box-shadow .2s;
        }
        .pl-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -22px rgba(20,20,60,.25);
        }
        .pl-feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f1eefe;
          color: var(--purple-500);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .pl-feature-card h3 { font-size: 16.5px; font-weight: 700; margin: 0 0 8px; }
        .pl-feature-card p { font-size: 13.5px; color: var(--text-muted); margin: 0; }

        /* ---------------- Insight / dashboard split ---------------- */
        .pl-insight {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }
        .pl-insight-panel {
          background: #fff;
          border-radius: var(--radius-lg);
          box-shadow: 0 30px 60px -30px rgba(20,20,60,.25);
          padding: 18px;
          border: 1px solid var(--border-light);
        }
        .pl-insight-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .pl-insight-title { font-size: 12px; font-weight: 700; color: #444; }
        .pl-insight-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 10px;
        }
        .pl-insight-card {
          background: #f7f7fc;
          border-radius: 8px;
          padding: 8px;
        }
        .pl-insight-card b { display: block; font-size: 13px; }
        .pl-insight-card span { font-size: 9px; color: #9294ac; }
        .pl-insight-bottom {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 8px;
        }
        .pl-insight-chart, .pl-insight-donut-box {
          background: #f7f7fc;
          border-radius: 8px;
          padding: 10px;
          min-height: 110px;
        }
        .pl-insight-chart-label, .pl-insight-donut-label { font-size: 9px; color: #9294ac; margin-bottom: 6px; }
        .pl-insight-copy { text-align: right; }
        .pl-insight-copy h3 { font-size: 26px; font-weight: 800; margin: 0 0 16px; }
        .pl-insight-copy > p { color: var(--text-muted); font-size: 14.5px; margin: 0 0 22px; }
        .pl-insight-list { display: flex; flex-direction: column; gap: 14px; }
        .pl-insight-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
        }

        /* ---------------- Roles ---------------- */
        .pl-roles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .pl-role-card {
          background: #fff;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-light);
          text-align: center;
        }
        .pl-role-photo {
          position: relative;
          height: 180px;
          background-size: cover;
          background-position: center;
        }
        .pl-role-badge {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          border: 3px solid #fff;
        }
        .pl-role-body { padding: 30px 16px 22px; }
        .pl-role-body h4 { font-size: 15.5px; font-weight: 700; margin: 0 0 8px; }
        .pl-role-body p { font-size: 12.5px; color: var(--text-muted); margin: 0; }

        /* ---------------- Why us ---------------- */
        .pl-whyus {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
        }
        .pl-whyus-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .pl-whyus-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: #fff;
          border: 1px solid var(--border-light);
          color: var(--purple-500);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pl-whyus-item h4 { font-size: 14px; font-weight: 700; margin: 0; }
        .pl-whyus-item p { font-size: 12px; color: var(--text-muted); margin: 0; }

        /* ---------------- CTA ---------------- */
        .pl-cta {
          position: relative;
          background: linear-gradient(180deg, #14173d, #090a1e);
          border-radius: var(--radius-lg);
          overflow: hidden;
          padding: 64px 40px;
          text-align: center;
          margin: 0 24px;
        }
        .pl-cta-inner { max-width: 640px; margin: 0 auto; position: relative; z-index: 2; }
        .pl-cta h2 { color: #fff; font-size: clamp(22px, 3vw, 28px); font-weight: 800; margin: 0 0 14px; }
        .pl-cta p { color: #b7b9d6; font-size: 14.5px; margin: 0 0 26px; }
        .pl-cta-dome {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background:
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(240,150,80,.18), transparent 70%),
            radial-gradient(circle at 50% 30%, rgba(120,100,240,.18), transparent 60%);
          pointer-events: none;
        }

        /* ---------------- Footer ---------------- */
        .pl-footer { background: var(--navy-950); color: #b7b9d6; padding: 64px 0 24px; margin-top: 60px; }
        .pl-footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr 1.2fr;
          gap: 24px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .pl-footer-col h5 { color: #fff; font-size: 14.5px; font-weight: 700; margin: 0 0 18px; }
        .pl-footer-col ul { display: flex; flex-direction: column; gap: 12px; }
        .pl-footer-col a { font-size: 13.5px; color: #9fa1c2; transition: color .2s; }
        .pl-footer-col a:hover { color: #fff; }
        .pl-footer-contact li { display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: #9fa1c2; margin-bottom: 12px; }
        .pl-footer-logo { display: flex; align-items: center; gap: 8px; color: #fff; font-weight: 700; font-size: 18px; margin-bottom: 10px; }
        .pl-footer-logo .star { color: var(--purple-500); }
        .pl-footer-tag { font-size: 13px; color: #9fa1c2; margin-bottom: 18px; }
        .pl-footer-social { display: flex; gap: 10px; }
        .pl-footer-social a {
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(255,255,255,.06);
          display: flex; align-items: center; justify-content: center;
        }
        .pl-footer-bottom { text-align: center; font-size: 12.5px; color: #7b7ea0; padding-top: 22px; }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 980px) {
          .pl-nav { display: none; }
          .pl-menu-toggle { display: inline-flex; }
          .pl-hero-inner { grid-template-columns: 1fr; }
          .pl-hero-copy { text-align: center; order: 1; }
          .pl-hero-visual { order: 2; }
          .pl-hero-desc { margin-left: auto; margin-right: auto; }
          .pl-hero-actions, .pl-hero-checks { justify-content: center; }
          .pl-stats { grid-template-columns: repeat(2, 1fr); row-gap: 20px; }
          .pl-stat:nth-child(2n) { border-left: none; }
          .pl-features-grid { grid-template-columns: repeat(2, 1fr); }
          .pl-insight { grid-template-columns: 1fr; }
          .pl-insight-copy { text-align: center; }
          .pl-insight-list li { justify-content: center; }
          .pl-roles-grid { grid-template-columns: repeat(2, 1fr); }
          .pl-whyus { grid-template-columns: repeat(2, 1fr); }
          .pl-footer-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 620px) {
          .pl-header-actions .pl-btn span.full { display: none; }
          .pl-stats { grid-template-columns: 1fr 1fr; }
          .pl-features-grid { grid-template-columns: 1fr; }
          .pl-roles-grid { grid-template-columns: 1fr; }
          .pl-whyus { grid-template-columns: 1fr; }
          .pl-footer-grid { grid-template-columns: 1fr; }
          .pl-cta { padding: 44px 20px; margin: 0 12px; }
          .pl-section { padding: 60px 0; }
        }
      `}</style>

      {/* ===================== HERO + HEADER ===================== */}
      <div className="pl-hero">
        <div className="pl-hero-stars" />
        <svg className="pl-hero-mountain" viewBox="0 0 260 200" fill="none">
          <path d="M0 200L90 40l30 40 20-22 120 142H0z" fill="#171a44" />
          <path d="M90 40l30 40 14-15 8 9-52 68-30-40z" fill="#20244f" />
          <circle cx="130" cy="18" r="2.2" fill="#fff" />
        </svg>

        <header className="pl-header">
          <div className="pl-container pl-header-inner">
            <button
              className="pl-menu-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="باز کردن منو"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <nav className="pl-nav" aria-label="ناوبری اصلی">
              {NAV_LINKS.map((link, i) => (
                <a key={link} href="#" className={i === 0 ? "active" : ""}>
                  {link}
                </a>
              ))}
            </nav>

            <div className="pl-logo">
              <span className="star">
                <IconStar size={20} />
              </span>
              Polaris
            </div>
          </div>

          {menuOpen && (
            <div className="pl-container" style={{ marginTop: 14 }}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  background: "rgba(255,255,255,.06)",
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ color: "#fff", fontSize: 14 }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        <div className="pl-container pl-hero-inner">
          <div className="pl-hero-copy">
            <div className="pl-eyebrow-star">
              <IconStar size={22} />
            </div>
            <h1 className="pl-hero-title">
              مدرسه شما،
              <br />
              <span className="accent">هوشمندتر</span> از همیشه
            </h1>
            <p className="pl-hero-desc">
              پلتفرم جامع مدیریت مدرسه برای مدیران، معلمان، دانش‌آموزان و
              والدین. همه چیز در یک سیستم یکپارچه و هوشمند.
            </p>
            <div className="pl-hero-actions">
              <button className="pl-btn pl-btn-primary pl-btn-lg">
                درخواست دموی رایگان
              </button>
              <button className="pl-btn pl-btn-ghost-dark pl-btn-lg">
                مشاهده امکانات
              </button>
            </div>
            <div className="pl-hero-checks">
              <span className="pl-hero-check">
                <IconCheck /> راه‌اندازی سریع
              </span>
              <span className="pl-hero-check">
                <IconCheck /> بدون نیاز به کارت اعتباری
              </span>
              <span className="pl-hero-check">
                <IconCheck /> پشتیبانی اختصاصی
              </span>
            </div>
          </div>

          <div className="pl-hero-visual">
            <div className="pl-mock">
              <div className="pl-mock-tablet">
                <div className="pl-mock-tablet-screen">
                  <div
                    style={{ fontSize: 8, fontWeight: 700, marginBottom: 6 }}
                  >
                    داشبورد
                  </div>
                  <div className="pl-mock-donut" />
                  <div
                    style={{
                      fontSize: 7,
                      color: "#9294ac",
                      textAlign: "center",
                    }}
                  >
                    نمای کلی عملکرد
                  </div>
                </div>
              </div>

              <svg
                viewBox="0 0 24 24"
                width="60"
                height="70"
                style={{
                  position: "absolute",
                  left: -50,
                  bottom: -6,
                  color: "#3f6b4a",
                }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path
                  d="M12 22V10M12 10c-3 0-5-2-5-5 3 0 5 2 5 5zM12 10c3 0 5-2 5-5-3 0-5 2-5 5z"
                  fill="#3f6b4a"
                  stroke="none"
                />
                <rect
                  x="6"
                  y="20"
                  width="12"
                  height="4"
                  rx="1"
                  fill="#e9eaf2"
                  stroke="none"
                />
              </svg>

              <div className="pl-mock-laptop">
                <div className="pl-mock-screen">
                  <div className="pl-mock-topbar">
                    <span className="pl-mock-title">داشبورد مدیریت</span>
                    <span className="pl-mock-avatar" />
                  </div>
                  <div className="pl-mock-grid">
                    <div className="pl-mock-card">
                      <b>۱٬۹۸۶</b>
                      <span>دانش‌آموز</span>
                    </div>
                    <div className="pl-mock-card">
                      <b>۹۶٪</b>
                      <span>حضور</span>
                    </div>
                    <div className="pl-mock-card">
                      <b>۱۴</b>
                      <span>کلاس</span>
                    </div>
                  </div>
                  <div className="pl-mock-chart">
                    <i style={{ height: "40%" }} />
                    <i style={{ height: "70%" }} />
                    <i style={{ height: "55%" }} />
                    <i style={{ height: "90%" }} />
                    <i style={{ height: "60%" }} />
                    <i style={{ height: "75%" }} />
                  </div>
                </div>
                <div className="pl-mock-stand" />
              </div>
              <div className="pl-mock-base" />
              <div className="pl-mock-books" />
            </div>
          </div>
        </div>
      </div>

      {/* ===================== STATS ===================== */}
      <div className="pl-container pl-stats-wrap">
        <div className="pl-stats">
          {STATS.map((s) => (
            <div className="pl-stat" key={s.label}>
              <span className="pl-stat-icon">{s.icon}</span>
              <span>
                <span className="pl-stat-value" style={{ display: "block" }}>
                  {s.value}
                </span>
                <span className="pl-stat-label">{s.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== FEATURES ===================== */}
      <section className="pl-section">
        <div className="pl-container">
          <div className="pl-section-head">
            <h2 className="pl-section-title">
              هر آنچه برای مدیریت مدرسه هوشمند نیاز دارید
            </h2>
            <p className="pl-section-sub">
              همه ابزارهای مورد نیاز مدرسه در یک پلتفرم قدرتمند و ساده
            </p>
          </div>
          <div className="pl-features-grid">
            {FEATURES.map((f) => (
              <div className="pl-feature-card" key={f.title}>
                <div className="pl-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INSIGHT / DASHBOARD ===================== */}
      <section className="pl-section" style={{ paddingTop: 0 }}>
        <div className="pl-container pl-insight">
          <div className="pl-insight-panel">
            <div className="pl-insight-topbar">
              <span className="pl-insight-title">داشبورد</span>
              <span
                className="pl-mock-avatar"
                style={{ background: "#1c1e35" }}
              />
            </div>
            <div className="pl-insight-grid">
              <div className="pl-insight-card">
                <b>۱٬۹۸۶</b>
                <span>دانش‌آموزان</span>
              </div>
              <div className="pl-insight-card">
                <b style={{ color: "#3fbf8f" }}>۹۶٪</b>
                <span>حضور</span>
              </div>
              <div className="pl-insight-card">
                <b style={{ color: "#4aa3e0" }}>۳۴</b>
                <span>معلمان</span>
              </div>
              <div className="pl-insight-card">
                <b style={{ color: "#f0a63f" }}>۳۴</b>
                <span>کلاس‌ها</span>
              </div>
            </div>
            <div className="pl-insight-bottom">
              <div className="pl-insight-chart">
                <div className="pl-insight-chart-label">
                  نمودار حضور و غیاب ماهانه
                </div>
                <svg viewBox="0 0 200 60" width="100%" height="70">
                  <polyline
                    points="0,45 30,30 60,38 90,20 120,28 150,10 180,18"
                    fill="none"
                    stroke="#7c5cf0"
                    strokeWidth="2.5"
                  />
                  <polyline
                    points="0,50 30,48 60,42 90,44 120,36 150,38 180,30"
                    fill="none"
                    stroke="#f0a63f"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className="pl-insight-donut-box">
                <div className="pl-insight-donut-label">ترکیب کلاس‌ها</div>
                <div className="pl-mock-donut" style={{ margin: "8px auto" }} />
              </div>
            </div>
          </div>

          <div className="pl-insight-copy">
            <div className="pl-eyebrow">تصمیم‌گیری بر پایه داده</div>
            <h3>دید کامل، کنترل هوشمند</h3>
            <p>
              با داشبوردهای تحلیلی پیشرفته، وضعیت مدرسه را در یک نگاه مشاهده
              کنید و در تصمیمات دقیق‌تری بگیرید
            </p>
            <ul className="pl-insight-list">
              {INSIGHT_ITEMS.map((item) => (
                <li key={item}>
                  <IconCheckCircle />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== ROLES ===================== */}
      <section className="pl-section" style={{ paddingTop: 0 }}>
        <div className="pl-container">
          <div className="pl-section-head">
            <h2 className="pl-section-title">برای همه، با تجربه‌ای متفاوت</h2>
            <p className="pl-section-sub">
              هر کاربر، تجربه‌ای متناسب با نقش خود
            </p>
          </div>
          <div className="pl-roles-grid">
            {ROLES.map((r, i) => (
              <div className="pl-role-card" key={r.name}>
                <div
                  className="pl-role-photo"
                  style={{
                    background: `linear-gradient(160deg, ${r.badgeColor}33, #1c1e3522)`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: r.badgeColor,
                      opacity: 0.35,
                    }}
                  >
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c1-4.5 4-7 8-7s7 2.5 8 7" />
                    </svg>
                  </div>
                  <span
                    className="pl-role-badge"
                    style={{ background: r.badgeColor }}
                  >
                    {r.badge}
                  </span>
                </div>
                <div className="pl-role-body">
                  <h4>{r.name}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY US ===================== */}
      <section className="pl-section" style={{ paddingTop: 0 }}>
        <div className="pl-container">
          <div className="pl-section-head" style={{ marginBottom: 40 }}>
            <h2 className="pl-section-title">
              چرا مدرسه‌ها پولاریس را انتخاب می‌کنند؟
            </h2>
          </div>
          <div className="pl-whyus">
            {WHY_US.map((w) => (
              <div className="pl-whyus-item" key={w.title}>
                <span className="pl-whyus-icon">{w.icon}</span>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <div className="pl-cta">
        <div className="pl-cta-dome" />
        <div className="pl-cta-inner">
          <h2>آماده‌اید مدرسه خود را هوشمندتر مدیریت کنید؟</h2>
          <p>
            همین حالا درخواست دموی رایگان ثبت کنید و با امکانات پولاریس بیشتر
            آشنا شوید.
          </p>
          <button className="pl-btn pl-btn-primary pl-btn-lg">
            <IconChevronLeft /> درخواست دموی رایگان
          </button>
        </div>
      </div>

      {/* ===================== FOOTER ===================== */}
      <footer className="pl-footer">
        <div className="pl-container">
          <div className="pl-footer-grid">
            <div className="pl-footer-col">
              <h5>تماس با ما</h5>
              <ul className="pl-footer-contact">
                <li>
                  <IconPhone /> ۰۹۱۲-۸۹۱۹۹۵۷
                </li>
                <li>
                  <IconMail /> info@mypolaris.ir
                </li>
                <li>
                  <IconPin /> تهران، خیابان ولیعصر
                </li>
              </ul>
            </div>
            {FOOTER_COLS.map((col) => (
              <div className="pl-footer-col" key={col.title}>
                <h5>{col.title}</h5>
                <ul>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pl-footer-col">
              <div className="pl-footer-logo">
                <span className="star">
                  <IconStar size={18} />
                </span>
                Polaris
              </div>
              <p className="pl-footer-tag">پلتفرم جامع مدیریت مدرسه هوشمند</p>
              <div className="pl-footer-social">
                <a href="#" aria-label="اینستاگرام">
                  <IconSocial kind="ig" />
                </a>
                <a href="#" aria-label="تلگرام">
                  <IconSocial kind="tg" />
                </a>
                <a href="#" aria-label="یوتیوب">
                  <IconSocial kind="yt" />
                </a>
                <a href="#" aria-label="توییتر">
                  <IconSocial kind="tw" />
                </a>
              </div>
            </div>
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=774188&Code=X2Ejidbp9FkscH43g5MBFSpJ7ZaeBNAQ"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=774188&Code=X2Ejidbp9FkscH43g5MBFSpJ7ZaeBNAQ"
                alt=""
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
          <div className="pl-footer-bottom">
            © ۱۴۰۵ Polaris. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
