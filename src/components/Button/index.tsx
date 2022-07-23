const Button = {
    Transparent({ className, content, ...props }) {
        return (
            <button {...props}
                className={`tw-normal-case tw-btn tw-bg-transparent tw-text-primary tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary
                ${className}`}>{content}</button>
        );
    },
    Fill({ className, content, ...props }) {
        return (
            <button {...props}
                className={`tw-normal-case tw-btn tw-bg-primary tw-text-white tw-border tw-border-primary tw-p-3 tw-px-4 
                hover:tw-bg-primary hover:tw-text-white hover:tw-border-primary ${className}`}>{content}</button>
        );
    },
}

export default Button;