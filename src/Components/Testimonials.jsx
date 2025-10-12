import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "I had the pleasure of working with Ms. Tuba Jan on our website, and I satisfied with the results. She demonstrated exceptional skill, creativity, and professionalism throughout the entire process. ",
      name: "Sir Abdul Jabbar",
      designation: "General Secretary at ACSHR",
      src: "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760306051/avatar-_1_ctaseh.png",
    },
    {
      quote:
        "The website she developed is not only visually appealing but also highly functional and user-friendly. She paid attention to every detail, understood our requirements perfectly, and delivered beyond our expectations.",
      name: "Muhammad Ashraf Somroo",
      designation: "Chairman at ACSHR",
      src: "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760306051/avatar-_2_fwlc78.png",
    },
    {
      quote:
        "Ms. Tuba Jan's dedication and expertise truly made a difference. I highly recommend her to anyone looking for a top-notch web developer!",
      name: "Mrs Rukhsana Bloch",
      designation: "Admin Officer at ACSHR",
      src: "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760306051/avatar-_3_chyczv.png",
    },
    {
      quote:
        "She listened carefully to our specifications, ensured that every detail was in place, and delivered an end result that exceeded our expectations.  Her dedication and skill really set her apart.  ",
      name: "Maqbool Ahmed",
      designation: "Financial Officer at ACSHR",
      src: "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760306051/avatar-_4_dxbd3e.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
