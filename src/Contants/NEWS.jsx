import React from 'react';

function NEWS() {
  return (
    <div className='mx-auto flex flex-col items-center bg-cen bg-gradient-to-b from-yellow-900 to-yellow-700'>
      
      <div className="w-full flex flex-wrap justify-between max-w-screen-xl mb-12 px-4">
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl mb-3 md:mb-0"></div>
        <div className="bg-white py-2 px-3 md:px-6 lg:px-12 rounded-2xl"></div>
      </div>

      <div className="w-full text-white mt-12 mb-12 text-3xl md:text-4xl lg:text-5xl flex justify-start max-w-screen-xl px-4">
        NEWS & ANALYSIS
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl mx-auto px-4">
        {[
          { href: "https://cryptonews.com/news/cboe-resubmits-application-for-bitcoin-etf-options-as-approval-looms.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/08/09075743/1723190262-1712394716-1712394706003_processed.jpg", alt: "CBOE Resubmits Application for Bitcoin ETF Options", title: "CBOE Resubmits Application for Bitcoin ETF Options as Approval Looms" },
          { href: "https://cryptonews.com/news/bitcoin-miner-bitfarms-reports-q2-earnings-stock-rises-20.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/06/28054817/1719553697-1719553664912_processed.jpg", alt: "Bitcoin Miner Bitfarms Reports Mixed Q2 Earnings, Stock Rises 20%", title: "Bitcoin Miner Bitfarms Reports Mixed Q2 Earnings, Stock Rises 20%" },
          { href: "https://cryptonews.com/news/rise-in-new-bitcoin-addresses-suggests-renewed-interest-from-retail.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/08/09065739/1723186659-1721288299-1721288168092_processed-1-1024x585.jpg", alt: "Rise in New Bitcoin Addresses Suggests Renewed Interest from Retail", title: "Rise in New Bitcoin Addresses Suggests Renewed Interest from Retail" },
          { href: "https://cryptonews.com/news/tether-to-onboard-200-senior-staff-by-mid-2025-to-focus-on-compliance.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/08/09050441/1723179880-1723174008454_processed-1024x585.jpg", alt: "Tether to Onboard 200 Senior Staff by Mid-2025 to Focus on Compliance", title: "Tether to Onboard 200 Senior Staff by Mid-2025 to Focus on Compliance" },
          { href: "https://cryptonews.com/news/uk-hmrc-crypto-tax-slackers-nudge-letters.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/08/09020535/1723169135-1723169030290_processed-1024x585.jpg", alt: "UK’s HMRC is Sending Out ‘Nudge Letters’ to Crypto Tax Slackers", title: "UK’s HMRC is Sending Out ‘Nudge Letters’ to Crypto Tax Slackers" },
          { href: "https://cryptonews.com/news/rise-in-new-bitcoin-addresses-suggests-renewed-interest-from-retail.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/08/09065739/1723186659-1721288299-1721288168092_processed-1-1024x585.jpg", alt: "Rise in New Bitcoin Addresses Suggests Renewed Interest from Retail", title: "Rise in New Bitcoin Addresses Suggests Renewed Interest from Retail" },
          { href: "https://cryptonews.com/news/kazakhstan-officials-say-theyve-blocked-illegal-crypto-transactions-worth-75-4-million.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/08/08090708/1723108028-1723102855309_processed-1024x585.jpg", alt: "Kazakhstan Officials Say They’ve Blocked Illegal Crypto Transactions Worth $75.4 Million", title: "Kazakhstan Officials Say They’ve Blocked Illegal Crypto Transactions Worth $75.4 Million" },
          { href: "https://cryptonews.com/news/vitalik-buterin-transfers-3000-eth-to-multi-sig-wallet.htm", imgSrc: "https://cimg.co/wp-content/uploads/2024/08/09084221/1723192941-1722836164169_processed.jpg", alt: "Vitalik Buterin Transfers 3,000 ETH to Multi-Sig Wallet, Speculated to be Possible Donation", title: "Vitalik Buterin Transfers 3,000 ETH to Multi-Sig Wallet, Speculated to be Possible Donation" }
        ].map(({ href, imgSrc, alt, title }, index) => (
          <a key={index} href={href} className="relative block hover:scale-105 transition-all hover:brightness-125">
            <img src={imgSrc} alt={alt} className="bg-white p-2 rounded-2xl w-full h-auto"/>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
              <h1 className="text-white text-sm md:text-lg lg:text-xl font-bold text-center p-4">{title}</h1>
            </div>
          </a>
        ))}

      </div>   

      <div className="w-full flex flex-wrap justify-center max-w-screen-xl mt-16 mb-6 gap-6 px-4">
        <div className="bg-white py-2 px-2 rounded-2xl mb-4 md:mb-0"></div>
        <div className="bg-white py-2 px-2 rounded-2xl mb-4 md:mb-0"></div>
        <div className="bg-white py-2 px-2 rounded-2xl"></div>
      </div>

    </div>
  );
}

export default NEWS;