// ============================================================
// ROBOPOPKI WEBSITE CONTENT — EASY TO UPDATE
// Simply edit the text below for each language.
// To add a new language, add a new key (e.g. "ja") and copy the structure.
// ============================================================

export type Lang = "en" | "ko";

export const content: Record<
  Lang,
  {
    nav: { robopopki: string; pricing: string; as: string; contact: string; testimonials: string };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      videoUrl: string;
    };
    about: {
      title: string;
      subtitle: string;
      features: { icon: string; title: string; description: string }[];
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: { type: "image" | "video"; src: string; caption: string }[];
    };
    pricing: {
      title: string;
      subtitle: string;
      plans: { name: string; price: string; period: string; features: string[]; highlighted?: boolean }[];
    };
    as: {
      title: string;
      subtitle: string;
      items: { title: string; description: string }[];
    };
    contact: {
      title: string;
      subtitle: string;
      email: string;
      phone: string;
      address: string;
      formName: string;
      formEmail: string;
      formMessage: string;
      formSubmit: string;
    };
    footer: { copyright: string };
  }
> = {
  // ==================== ENGLISH ====================
  en: {
    nav: {
      robopopki: "Robopopki",
      testimonials: "Testimonials",
      pricing: "Pricing",
      as: "After Service",
      contact: "Contact",
    },
    hero: {
      title: "The Future of Arcade Gaming",
      subtitle:
        "Experience the thrill of our AI-powered robotic claw machine — smarter, faster, and more fun than ever.",
      cta: "Learn More",
      // Replace with your actual video URL (YouTube embed, MP4, etc.)
      videoUrl:
        "https://www.youtube.com/embed/8GDxISN4y3g?autoplay=1&mute=1&loop=1&playlist=8GDxISN4y3g&controls=0&showinfo=0&rel=0&modestbranding=1",
    },
    about: {
      title: "What is Robopopki?",
      subtitle:
        "Robopopki (로보뽑기) is a next-generation robotic claw machine that combines cutting-edge AI with classic arcade fun.",
      features: [
        {
          icon: "🤖",
          title: "AI-Powered Precision",
          description: "Our robot uses advanced sensors and algorithms for an exciting, fair gameplay experience.",
        },
        {
          icon: "🎮",
          title: "Easy to Play",
          description: "Intuitive controls anyone can pick up — from kids to adults.",
        },
        {
          icon: "📱",
          title: "Smart Integration",
          description: "Monitor performance and manage your machines remotely via our companion app.",
        },
        {
          icon: "💰",
          title: "High Revenue",
          description: "Optimized to maximize engagement and revenue for operators.",
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "See what people are saying about Robopopki!",
      items: [
        { type: "image", src: "testimonial-1", caption: "\"So much fun! The robotic arm was surprisingly precise.\" — Alex K." },
        { type: "video", src: "https://www.youtube.com/embed/_C-ClW9-6rI", caption: "\"My kids couldn't stop playing — best arcade experience ever!\" — Sarah L." },
        { type: "image", src: "testimonial-2", caption: "\"The controls feel amazing, way better than a traditional claw machine.\" — Minjun P." },
        { type: "image", src: "testimonial-3", caption: "\"Incredible tech meets pure arcade joy. A must-have for any venue!\" — David C." },
      ],
    },
    pricing: {
      title: "Pricing",
      subtitle: "Flexible plans for every business size.",
      plans: [
        {
          name: "Starter",
          price: "TBA",
          period: "per unit",
          features: ["1 Robopopki unit", "Basic AI mode", "6-month warranty", "Remote monitoring"],
        },
        {
          name: "Business",
          price: "$TBA",
          period: "3-unit bundle",
          features: [
            "3 Robopopki units",
            "Advanced AI modes",
            "1-year warranty",
            "Priority support",
            "Analytics dashboard",
          ],
          highlighted: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "contact us",
          features: [
            "Unlimited units",
            "Custom branding",
            "Lifetime warranty",
            "Dedicated account manager",
            "On-site installation",
          ],
        },
      ],
    },
    as: {
      title: "After Service",
      subtitle: "We stand behind every Robopopki unit with world-class support.",
      items: [
        {
          title: "In-Person & Remote Support",
          description: "Our team provides both on-site and remote assistance to resolve issues quickly.",
        },
        {
          title: "On-Site Maintenance",
          description: "Scheduled maintenance visits to keep your units running at peak performance.",
        },
        { title: "Parts & Repairs", description: "Genuine replacement parts shipped within 48 hours worldwide." },
        { title: "Software Updates", description: "Free OTA firmware updates with new features and AI improvements." },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to bring Robopopki to your venue? Get in touch!",
      email: "info@robopopki.com",
      phone: "+82-010-8505-9134",
      address: "Seoul, South Korea",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formSubmit: "Send Message",
    },
    footer: { copyright: "© 2026 Robopopki. All rights reserved." },
  },

  // ==================== KOREAN ====================
  ko: {
    nav: {
      robopopki: "로보뽑기",
      testimonials: "후기",
      pricing: "가격",
      as: "A/S",
      contact: "문의",
    },
    hero: {
      title: "아케이드 게임의 미래",
      subtitle: "AI 기반 로봇 뽑기 기계의 스릴을 경험하세요 — 더 스마트하고, 더 빠르고, 더 재미있습니다.",
      cta: "자세히 보기",
      videoUrl:
        "https://www.youtube.com/embed/8GDxISN4y3g?autoplay=1&mute=1&loop=1&playlist=8GDxISN4y3g&controls=0&showinfo=0&rel=0&modestbranding=1",
    },
    about: {
      title: "로보뽑기란?",
      subtitle: "로보뽑기(Robopopki)는 최첨단 AI와 클래식 아케이드의 재미를 결합한 차세대 로봇 뽑기 기계입니다.",
      features: [
        {
          icon: "🤖",
          title: "AI 정밀 제어",
          description: "고급 센서와 알고리즘을 사용하여 흥미롭고 공정한 게임 경험을 제공합니다.",
        },
        {
          icon: "🎮",
          title: "쉬운 조작",
          description: "어린이부터 어른까지 누구나 쉽게 즐길 수 있는 직관적인 컨트롤.",
        },
        {
          icon: "📱",
          title: "스마트 통합",
          description: "전용 앱을 통해 원격으로 성능을 모니터링하고 기기를 관리하세요.",
        },
        {
          icon: "💰",
          title: "높은 수익성",
          description: "운영자를 위한 참여도와 수익 극대화에 최적화되었습니다.",
        },
      ],
    },
    testimonials: {
      title: "후기",
      subtitle: "로보뽑기에 대한 사용자 후기를 확인하세요!",
      items: [
        { type: "image", src: "testimonial-1", caption: "\"정말 재밌어요! 로봇 팔이 놀랍도록 정확해요.\" — Alex K." },
        { type: "video", src: "https://www.youtube.com/embed/_C-ClW9-6rI", caption: "\"아이들이 멈출 수가 없었어요 — 최고의 아케이드 경험!\" — Sarah L." },
        { type: "image", src: "testimonial-2", caption: "\"조작감이 놀라워요, 기존 뽑기보다 훨씬 좋아요.\" — 민준 P." },
        { type: "image", src: "testimonial-3", caption: "\"놀라운 기술과 순수한 아케이드의 즐거움. 필수 아이템!\" — David C." },
      ],
    },
    pricing: {
      title: "가격",
      subtitle: "모든 비즈니스 규모에 맞는 유연한 플랜.",
      plans: [
        {
          name: "스타터",
          price: "TBA",
          period: "대당",
          features: ["로보뽑기 1대", "기본 AI 모드", "6개월 보증", "원격 모니터링"],
        },
        {
          name: "비즈니스",
          price: "TBA",
          period: "3대 번들",
          features: ["로보뽑기 3대", "고급 AI 모드", "1년 보증", "우선 지원", "분석 대시보드"],
          highlighted: true,
        },
        {
          name: "엔터프라이즈",
          price: "TBA",
          period: "문의",
          features: ["무제한 대수", "맞춤 브랜딩", "평생 보증", "전담 매니저", "현장 설치"],
        },
      ],
    },
    as: {
      title: "A/S (애프터서비스)",
      subtitle: "모든 로보뽑기에 최고 수준의 지원을 제공합니다.",
      items: [
        {
          title: "현장 및 원격 지원",
          description: "현장 방문과 원격 지원을 통해 문제를 신속하게 해결합니다.",
        },
        { title: "현장 유지보수", description: "정기적인 유지보수 방문으로 최상의 성능을 유지합니다." },
        { title: "부품 및 수리", description: "48시간 이내 전 세계 순정 부품 배송." },
        { title: "소프트웨어 업데이트", description: "새로운 기능과 AI 개선 사항이 포함된 무료 OTA 펌웨어 업데이트." },
      ],
    },
    contact: {
      title: "문의하기",
      subtitle: "로보뽑기를 도입하고 싶으신가요? 연락주세요!",
      email: "info@robopopki.com",
      phone: "+82-010-8505-9134",
      address: "서울, 대한민국",
      formName: "이름",
      formEmail: "이메일",
      formMessage: "메시지",
      formSubmit: "보내기",
    },
    footer: { copyright: "© 2026 로보뽑기. All rights reserved." },
  },
};
