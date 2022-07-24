const Button = {
  Transparent({ className, content, ...props }) {
    return (
      <button
        {...props}
        className={`tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary
                ${className}`}
      >
        {content}
      </button>
    );
  },
  Fill({ className, content, ...props }) {
    return (
      <button
        {...props}
        className={`tw-normal-case tw-btn tw-bg-primary tw-text-white tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary ${className}`}
      >
        {content}
      </button>
    );
  },
  Fill1({ className, content, ...props }) {
    return (
      <button
        {...props}
        className={`tw-normal-case tw-btn tw-bg-[#3B5998] tw-text-white tw-border tw-border-[#3B5998] tw-p-3 tw-px-4 
                hover:tw-bg-[#3B5998] hover:tw-text-white hover:tw-border-[#3B5998] ${className}`}
      >
        {content}
      </button>
    );
  },
  Fill2({ className, content, ...props }) {
    return (
      <button
        {...props}
        className={`tw-normal-case tw-btn tw-bg-[#4582F4] tw-text-white tw-border tw-border-[#4582F4] tw-p-3 tw-px-4 
                hover:tw-bg-[#4582F4] hover:tw-text-white hover:tw-border-[#4582F4] ${className}`}
      >
        {content}
      </button>
    );
  },
};

export default Button;