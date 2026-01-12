export default function Process() {
  const steps = [
    {
      number: "1",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1E1E28"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#959595]"
        >
          <path
            d="M12 2L3 6V12C3 17.5228 7.47715 22 13 22C18.5228 22 23 17.5228 23 12V6L12 2Z"
            stroke="#959595"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="1E1E28"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="#959595"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Connect Your Wallet",
      description: "Connect your existing Ethereum wallet. Bianco is non-custodial, so you always maintain full control of your funds.",
    },
    {
      number: "2",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#959595]"
        >
          <rect
            x="4"
            y="8"
            width="16"
            height="12"
            rx="2"
            stroke="#959595"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M8 8V6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V8"
            stroke="#959595"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="14"
            r="1.5"
            fill="#959595"
          />
        </svg>
      ),
      title: "Create Private Transfer",
      description: "Enter the recipient address and amount. Bianco automatically generates a zero-knowledge proof that hides your transaction details.",
    },
    {
      number: "3",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#959595]"
        >
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="#959595"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
      title: "Proof Generation",
      description: "Your browser generates a cryptographic proof that proves you have the funds without revealing amounts or sender information.",
    },
    {
      number: "4",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#959595]"
        >
          {/* Top rectangle */}
          <rect
            x="3"
            y="4"
            width="18"
            height="8"
            rx="1"
            stroke="#959595"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#2a2a2a"
          />
          {/* Small rectangle inside top rectangle (left side) */}
          <rect
            x="5"
            y="6"
            width="5"
            height="4"
            rx="0.5"
            stroke="#959595"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#1a1a1a"
          />
          {/* Bottom rectangle */}
          <rect
            x="3"
            y="13"
            width="18"
            height="8"
            rx="1"
            stroke="#959595"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#2a2a2a"
          />
          {/* Small rectangle inside bottom rectangle (left side) */}
          <rect
            x="5"
            y="15"
            width="5"
            height="4"
            rx="0.5"
            stroke="#959595"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#1a1a1a"
          />
        </svg>
      ),
      title: "Relayer Execution",
      description: "A decentralized relayer network submits your transaction on your behalf, removing the link between you and the transaction.",
    },
    {
      number: "5",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#959595]"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#959595"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="#959595"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Private Completion",
      description: "The recipient receives funds with complete privacy. No one can see who sent it, how much was sent, or link it to other transactions.",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-black py-24 px-6">
      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-16 text-left w-full">
          <h2 className="text-3xl md:text-3xl md:font-bold font-black text-white mb-4">
            The Process
          </h2>
        </div>

        {/* Steps List */}
        <div className="w-full flex flex-col">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              {/* Left Column: Numbered Circle with Connector */}
              <div className="shrink-0 flex flex-col items-center mr-6">
                {/* Number Circle - transparent with thin light gray border */}
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-[#12121A] bg-[#1E1E28]">
                  <span className="text-[#959595] text-2xl font-bold">
                    {step.number}
                  </span>
                </div>
                {/* Vertical Connector Line - only show between steps */}
                {index < steps.length - 1 && (
                  <div className="w-px h-12 bg-[#12121A] mt-1"></div>
                )}
              </div>

              {/* Right Column: Icon, Title, and Description */}
              <div className="flex-1 pb-12">
                {/* Icon and Title together */}
                <div className="flex items-start gap-4 mb-3">
                  {/* Icon */}
                  <div className="shrink-0">
                    {step.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-xl md:text-xl font-bold text-[#959595]">
                    {step.title}
                  </h3>
                </div>
                {/* Description below */}
                <p className="text-base md:text-base text-[#888888] font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

