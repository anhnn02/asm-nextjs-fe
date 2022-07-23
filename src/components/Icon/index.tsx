const Icon = {
  BellOutline({ className, ...props }) {
    return <i {...props} className={`bi bi-bell ${className}`}></i>;
  },

  BellSlash({ className, ...props }) {
    return <i {...props} className={`bi bi-bell-slash-fill ${className}`}></i>;
  },

  PlusCircle({ className, ...props }) {
    return <i {...props} className={`bi bi-plus-circle ${className}`}></i>;
  },
  PlusRegular({ className, ...props }) {
    return <i {...props} className={`bi bi-plus ${className}`}></i>;
  },
  Dash({ className, ...props }) {
    return <i {...props} className={`bi bi-dash-lg ${className}`}></i>;
  },

  Tag({ className, ...props }) {
    return <i {...props} className={`bi bi-tag ${className}`}></i>;
  },

  Bookmark({ className, ...props }) {
    return <i {...props} className={`bi bi-bookmark-plus ${className}`}></i>;
  },

  House({ className, ...props }) {
    return <i {...props} className={`bi bi-house ${className}`}></i>;
  },

  Computer({ className, ...props }) {
    return (
      <i {...props} className={`bi bi-pc-display-horizontal ${className}`}></i>
    );
  },

  Email({ className, ...props }) {
    return <i {...props} className={`bi bi-envelope ${className}`}></i>;
  },

  Search({ className, ...props }) {
    return <i {...props} className={`bi bi-search ${className}`}></i>;
  },

  Window({ className, ...props }) {
    return <i {...props} className={`bi bi-window ${className}`}></i>;
  },

  CheckFill({ className, ...props }) {
    return (
      <i {...props} className={`bi bi-check-circle-fill ${className}`}></i>
    );
  },

  Check({ className, ...props }) {
    return <i {...props} className={`bi bi-check-circle ${className}`}></i>;
  },

  ThreeDot({ className, ...props }) {
    return (
      <i {...props} className={`bi bi-three-dots-vertical ${className}`}></i>
    );
  },

  Info({ className, ...props }) {
    return <i {...props} className={`bi bi-info-circle-fill ${className}`}></i>;
  },
  Emoji({ className, ...props }) {
    return <i {...props} className={`bi bi-emoji-smile ${className}`}></i>;
  },
  Link({ className, ...props }) {
    return <i {...props} className={`bi bi-link-45deg ${className}`}></i>;
  },
  Phone({ className, ...props }) {
    return <i {...props} className={`bi bi-telephone ${className}`}></i>;
  },
  Trash({ className, ...props }) {
    return <i {...props} className={`bi bi-trash3 ${className}`}></i>;
  },
  People({ className, ...props }) {
    return <i {...props} className={`bi bi-people ${className}`}></i>;
  },
  Pen({ className, ...props }) {
    return <i {...props} className={`bi bi-pencil-square ${className}`}></i>;
  },
  ArrowLeft({ className, ...props }) {
    return <i {...props} className={`bi bi-arrow-left-short ${className}`}></i>;
  },
  Save({ className, ...props }) {
    return (
      <i {...props} className={`bi bi-file-earmark-post-fill ${className}`}></i>
    );
  },
  Brush({ className, ...props }) {
    return <i {...props} className={`bi bi-brush ${className}`}></i>;
  },
  Smartphone({ className, ...props }) {
    return <i {...props} className={`bi bi-phone ${className}`}></i>;
  },
  Laptop({ className, ...props }) {
    return <i {...props} className={`bi bi-laptop ${className}`}></i>;
  },
  MoonStar({ className, ...props }) {
    return <i {...props} className={`bi bi-moon-stars ${className}`}></i>;
  },
  Github({ className, ...props }) {
    return <i {...props} className={`bi bi-github ${className}`}></i>;
  },
  Linkedin({ className, ...props }) {
    return <i {...props} className={`bi bi-linkedin ${className}`}></i>;
  },
  Figma({ className, ...props }) {
    return <i {...props} className={`fa-brands fa-figma ${className}`}></i>;
  },
  List({ className, ...props }) {
    return <i {...props} className={`bi-brands bi-list-task ${className}`}></i>;
  },
  ListReg({ className, ...props }) {
    return <i {...props} className={`bi-brands bi-list-task ${className}`}></i>;
  },
  Location({ className, ...props }) {
    return <i {...props} className={`bi-brands bi-geo-alt ${className}`}></i>;
  },
  Fb({ className, ...props }) {
    return <i {...props} className={`bi bi-facebook ${className}`}></i>;
  },
  Star({ className, ...props }) {
    return <i {...props} className={`bi bi-star-fill ${className}`}></i>;
  },
};

export default Icon;