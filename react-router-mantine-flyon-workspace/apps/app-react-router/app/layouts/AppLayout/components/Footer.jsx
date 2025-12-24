const Footer = () => {
  return (
    <footer className="w-full px-6 py-3.5 bg-white border-t border-slate-200/50 shadow-md">
      <div className="flex items-center justify-between gap-3 text-sm max-lg:flex-col">
        <p className="text-base-content text-center">
          ©2025 All Rights Reserved by{' '}
          <a href="" className="text-primary">
            Slashnot
          </a>
          , Made With ❤️ for a better web.
        </p>
        <div className="justify-enter flex items-center gap-4 max-sm:flex-col">
          <a
            href="#"
            className="link link-primary link-animated font-normal"
            aria-label="License"
          >
            License
          </a>
          <a
            href="#"
            className="link link-primary link-animated font-normal"
            aria-label="More Themes"
          >
            More Themes
          </a>
          <a
            href="#"
            className="link link-primary link-animated font-normal"
            aria-label="Documentation"
          >
            Documentation
          </a>
          <a
            href="#"
            className="link link-primary link-animated font-normal"
            aria-label="Support"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
export default Footer;