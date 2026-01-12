export default function Howitworks() {
  return (
    <section id="how-it-works" className="relative w-full flex flex-col items-center justify-center bg-black py-24 md:pt-50 px-6">
      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-18 text-center">
          <h2 className="text-5xl md:text-5xl md:font-bold font-black text-white mb-4">
            How Bianco Works
          </h2>
          <p className="text-xl md:text-xl text-[#888888] md:font-light font-semibold">
            Understanding privacy-first transactions.
          </p>
        </div>

        {/* Content Card */}
        <div className="w-full max-w-3xl bg-gradient-to-br from-[#1A1A1A] via-[#3A3A3A] to-[#1A1A1A] rounded-2xl p-5 py-8 md:p-10 shadow-2xl border border-[#888888]">
          {/* Card Header with Icon */}
          <div className="flex md:flex-row flex-col md:items-start items-center gap-4 mb-6">
            {/* Shield Icon with Checkmark */}
            <div className="shrink-0 mt-1">
              <div className="md:rounded-2xl rounded-4xl bg-gradient-to-br from-[#1A1A1A] via-[#3A3A3A] to-[#1A1A1A] md:p-4 p-12">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white md:w-[32px] md:h-[32px] w-20 h-20"
                >
                  {/* Shield shape */}
                  <path
                    d="M16 2L4 7V16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16V7L16 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Checkmark */}
                  <path
                    d="M11 16L14 19L21 12"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Header Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-2xl md:font-bold font-black text-white mb-2 text-center md:text-left">
                Privacy by Default
              </h3>
              <p className="text-base md:text-base text-white md:font-normal font-semibold text-center md:text-left">
                Every transaction is completely private and unlinkable.
              </p>
            </div>
          </div>

          {/* Body Text */}
          <div className="">
            <p className="text-white text-base md:text-base md:text-justify text-center leading-relaxed font-normal">
              Bianco uses zero-knowledge proofs to enable completely private transactions on public blockchains. Your transaction amounts, recipients, and transaction history are cryptographically hidden while still being verifiable on-chain. This means you get the security of a public blockchain with the privacy of cash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

