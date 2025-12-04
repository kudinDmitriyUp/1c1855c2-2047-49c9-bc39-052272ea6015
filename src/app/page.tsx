"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { TrendingUp, Leaf, Users, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraSmallSpacing"
      background="fluid"
      cardStyle="noise"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="outline"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886941971-hu1fob0y.jpg"
          logoAlt="Carson Loquaci Agriculture"
          brandName="Carson Farm"
          button={{
            text: "Contact Us",
            href: "#contact"
          }}
          className="border-b border-accent"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="CARSON FARM"
          description="Committed to sustainable agriculture and premium crop production for over 20 years"
          buttons={[
            {
              text: "Explore Products",
              href: "#products"
            },
            {
              text: "Learn More",
              href: "#about"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886942712-x9xzweq1.jpg",
              imageAlt: "Farmer harvesting crops"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886943481-pniok3t0.jpg",
              imageAlt: "Farm landscape at sunset"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886944301-2v8i0a4a.jpg",
              imageAlt: "Modern farming equipment"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          ariaLabel="Carson Farm hero section with carousel"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content: "Leading sustainable"
            },
            {
              type: "image",
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886945000-sybh4wv2.jpg",
              alt: "Carson Loquaci"
            },
            {
              type: "text",
              content: "agriculture since 2003"
            }
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "#about-full"
            }
          ]}
          useInvertedBackground="noInvert"
          ariaLabel="About Carson Farm section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          title="Why Choose Carson Farm"
          description="We combine traditional farming wisdom with modern agricultural technology to deliver premium crops sustainably"
          features={[
            {
              id: "sustainable",
              label: "Sustainable",
              title: "Environmentally Responsible Farming",
              items: [
                "Organic soil management",
                "Water conservation techniques",
                "Crop rotation practices",
                "Zero chemical runoff"
              ]
            },
            {
              id: "quality",
              label: "Quality",
              title: "Premium Grade Products",
              items: [
                "Hand-selected harvests",
                "Rigorous quality testing",
                "Fresh from farm delivery",
                "Certified excellence"
              ]
            },
            {
              id: "technology",
              label: "Technology",
              title: "Modern Agricultural Innovation",
              items: [
                "Precision farming systems",
                "Real-time crop monitoring",
                "Data-driven decisions",
                "Yield optimization"
              ]
            }
          ]}
          animationType="slide-up"
          variant="border"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Features section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Farm Performance"
          description="Our commitment to excellence reflected in numbers"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Years Operating",
              value: "20+"
            },
            {
              id: "2",
              icon: Leaf,
              title: "Acres Cultivated",
              value: "500+"
            },
            {
              id: "3",
              icon: Users,
              title: "Happy Clients",
              value: "2000+"
            },
            {
              id: "4",
              icon: Award,
              title: "Certifications",
              value: "15"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Metrics section"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Premium Crops"
          description="Handpicked agricultural products from our certified sustainable farm"
          products={[
            {
              id: "corn",
              name: "Organic Corn",
              price: "$4.50 / lb",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886947491-x75yaqf9.jpg",
              imageAlt: "Fresh organic corn"
            },
            {
              id: "wheat",
              name: "Heirloom Wheat",
              price: "$3.20 / lb",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886948210-1wr7dbax.jpg",
              imageAlt: "Golden heirloom wheat"
            },
            {
              id: "soybeans",
              name: "Non-GMO Soybeans",
              price: "$2.80 / lb",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886948874-n6qqg4nl.jpg",
              imageAlt: "Premium soybean crops"
            },
            {
              id: "vegetables",
              name: "Fresh Vegetables",
              price: "$5.00 / bundle",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886949959-lvaomw7y.jpg",
              imageAlt: "Fresh organic vegetables"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Products section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="Trusted by Agricultural Professionals"
          description="Hear from our satisfied clients and partners"
          testimonials={[
            {
              id: "1",
              quote: "Carson Farm provides the highest quality crops we have found. Their dedication to sustainable practices is unmatched in the industry.",
              name: "John Mitchell",
              role: "Farm Manager at Midwest Agricultural Co.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886952548-w2go47x3.jpg",
              imageAlt: "John Mitchell portrait"
            },
            {
              id: "2",
              quote: "Working with Carson has transformed our supply chain. Their reliability and product quality have made a real difference to our bottom line.",
              name: "Sarah Chen",
              role: "Operations Director at Fresh Produce Distribution",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886953364-ustvcnzj.jpg",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "3",
              quote: "The technology integration Carson uses shows they are serious about modern farming. Their yields speak for themselves.",
              name: "David Rodriguez",
              role: "Agricultural Consultant at Regional Farming Institute",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886954426-4rn5ip4s.jpg",
              imageAlt: "David Rodriguez portrait"
            },
            {
              id: "4",
              quote: "Carson's commitment to the land and their community sets them apart. You can taste the difference in their products.",
              name: "Emma Watson",
              role: "Culinary Director at Farm to Table Restaurant Group",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764886954916-owy76rz0.jpg",
              imageAlt: "Emma Watson portrait"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our farm and products"
          faqs={[
            {
              id: "1",
              title: "What makes Carson Farm different from other agricultural operations?",
              content: "We combine over 20 years of farming expertise with cutting-edge agricultural technology. Our commitment to sustainable practices, rigorous quality control, and customer satisfaction sets us apart. We maintain complete traceability on all our products and invest continuously in improving our farming methods."
            },
            {
              id: "2",
              title: "Are your crops certified organic?",
              content: "Yes, our crops are certified organic by recognized agricultural standards bodies. We do not use synthetic pesticides or fertilizers. Our soil management practices focus on long-term sustainability and natural nutrient cycling."
            },
            {
              id: "3",
              title: "How do I order products?",
              content: "You can reach out to us through our contact form or call our farm directly. We handle bulk orders for distributors and businesses, as well as smaller orders for individual customers. We offer flexible delivery options based on your location and needs."
            },
            {
              id: "4",
              title: "What is your delivery timeline?",
              content: "Standard delivery is 3-5 business days from order confirmation for local areas. For bulk orders, we coordinate custom delivery schedules to meet your specific requirements. All products are shipped fresh to ensure quality upon arrival."
            },
            {
              id: "5",
              title: "Do you offer seasonal products?",
              content: "Yes, we grow a variety of seasonal crops throughout the year. Our primary crops include corn, wheat, soybeans, and vegetables. We also collaborate with local suppliers to provide diverse options year-round. Check our product listing for current availability."
            },
            {
              id: "6",
              title: "Can I visit the farm?",
              content: "We welcome farm visits and educational tours. Please contact us in advance to schedule a visit. We offer insights into our farming practices, sustainable methods, and can discuss bulk order arrangements."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          ariaLabel="FAQ section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to partner with Carson Farm? Let's grow together."
          animationType="reveal-blur"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          useInvertedBackground="noInvert"
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="CARSON FARM"
          logoAlt="Carson Farm Agriculture"
          ariaLabel="Carson Farm footer"
        />
      </div>
    </ThemeProvider>
  );
}