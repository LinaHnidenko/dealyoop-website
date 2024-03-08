const Footer = () => {
  const footerLinks = [
    "Privacy Policy",
    "Contract-Offer",
    "FAQ",
    "Payments",
    "Help",
    "Feedback",
    "Safety rules",
  ];

  return (
    <footer>
      <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto md:p-6 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-6">
            <img src="/logo/logo.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
            <a href="mailto:support@Dealyoop.com">support@Dealyoop.com</a>
            <a href="tel:(425) 505-3804">(425) 505-3804</a>
          </div>
          <ul className="hidden md:flex justify-center items-center gap-2 text-sm">
            {footerLinks.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
