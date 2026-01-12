export default function Security() {
  return (
    <section id="security" className="relative w-full flex flex-col items-center justify-center bg-black py-24 pt-50 px-6">
      {/* Main Container */}
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-5xl md:font-bold font-black text-white mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl md:text-xl text-[#888888] md:font-light font-semibold">
            Built on cryptographic foundations you can trust.
          </p>
        </div>

        {/* Security Features Section */}
        <div className="w-full mb-16">
          <h3 className="text-3xl md:text-2xl font-bold text-white mb-8">
            Security Features
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {/* Non-Custodial Design */}
            <div className="flex items-start gap-4 bg-[#0A0A0A] rounded-xl p-6 border border-[#000000]/20">
              <div className="shrink-0 mt-1">
                {/* Padlock Icon */}
                <img src="/images/padlock.svg" alt="padlock" width={38} height={38} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  Non-Custodial Design
                </h4>
                <p className="text-sm text-[#888888] font-normal leading-relaxed">
                  You always maintain full control of your funds. Bianco never has access to your private keys or assets. Your wallet, your keys, your crypto.
                </p>
              </div>
            </div>

            {/* Audited Smart Contracts */}
            <div className="flex items-start gap-4 bg-[#0A0A0A] rounded-xl p-6 border border-[#000000]/20">
              <div className="shrink-0 mt-1">
                {/* Shield Icon */}
                <img src="/images/shield.svg" alt="shield" width={38} height={38} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  Audited Smart Contracts
                </h4>
                <p className="text-sm text-[#888888] font-normal leading-relaxed">
                  All smart contracts are audited by leading security firms. Audit reports are publicly available and contracts are verified on-chain.
                </p>
              </div>
            </div>

            {/* Client-Side Proof Generation */}
            <div className="flex items-start gap-4 bg-[#0A0A0A] rounded-xl p-6 border border-[#000000]/20">
              <div className="shrink-0 mt-1">
                {/* Eye Icon */}
                <img src="/images/eye.svg" alt="eye" width={38} height={38} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  Client-Side Proof Generation
                </h4>
                <p className="text-sm text-[#888888] font-normal leading-relaxed">
                  All zero-knowledge proofs are generated in your browser. Your private data never leaves your device, ensuring complete privacy.
                </p>
              </div>
            </div>

            {/* Open Source */}
            <div className="flex items-start gap-4 bg-[#0A0A0A] rounded-xl p-6 border border-[#000000]/20">
              <div className="shrink-0 mt-1">
                {/* Globe with Network Icon */}
                <img src="/images/globe.svg" alt="globe" width={38} height={38} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  Open Source
                </h4>
                <p className="text-sm text-[#888888] font-normal leading-relaxed">
                  Core protocol and smart contracts are open source. Anyone can verify the code and contribute to making Bianco more secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Transparency Section */}
        <div className="w-full mb-16 bg-[#E8E8ED] p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            {/* Document Icon */}
            <img src="/images/document.svg" alt="document" width={48} height={48} />
            <h3 className="text-2xl md:text-2xl md:font-bold font-black text-black">
              Compliance & Transparency
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Selective Disclosure */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800/50">
              <h4 className="text-lg font-bold text-white mb-3">
                Selective Disclosure
              </h4>
              <p className="text-sm text-[#8A8A9E] font-normal leading-relaxed">
                View keys allow you to selectively disclose transaction history to auditors, tax authorities, or compliance officers without compromising overall privacy.
              </p>
            </div>

            {/* On-Chain Verification */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800/50">
              <h4 className="text-lg font-bold text-white mb-3">
                On-Chain Verification
              </h4>
              <p className="text-sm text-[#8A8A9E] font-normal leading-relaxed">
                All transactions are verifiable on-chain. Zero-knowledge proofs ensure validity without revealing details, maintaining both privacy and transparency.
              </p>
            </div>

            {/* Regulatory Considerations */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800/50">
              <h4 className="text-lg font-bold text-white mb-3">
                Regulatory Considerations
              </h4>
              <p className="text-sm text-[#8A8A9E] font-normal leading-relaxed">
                Bianco is designed for privacy, not evasion. Users are responsible for complying with their local tax and regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="w-full border border-[#ffffff]/20 rounded-2xl p-6 bg-[#0A0A0A]">
          <div className="flex items-center gap-3 mb-8">
            {/* Checkmark Icon */}
            <img src="/images/checkmark.svg" alt="checkmark" width={48} height={48} />
            <h3 className="text-3xl md:text-2xl font-bold text-white">
              Best Practices
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3 ">
            {/* Best Practice Items */}
            {[
              "Always verify recipient addresses before sending",
              "Keep your view key secure and private",
              "Use hardware wallets for large amounts",
              "Regularly backup your wallet seed phrase",
              "Never share your private keys with anyone",
              "Verify contract addresses on official channels"
            ].map((practice, index) => (
              <div key={index} className="flex items-start gap-3 bg-black rounded-2xl p-3 px-4  border border-[#ffffff]/20">
                {/* Checkmark Icon */}
                <div className="shrink-0 ">
                  <img src="/images/checkmark-small.svg" alt="checkmark" width={24} height={24} />
                </div>
                <p className="text-sm text-[#888888] font-normal leading-relaxed">
                  {practice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
