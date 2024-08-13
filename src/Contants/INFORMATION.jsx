import React from 'react'

function INFORMATION(){
  return (
    <div className=' bg-center flex flex-col items-center  w-full 
                     bg-gradient-to-b from-yellow-100  to-yellow-200 
                     '>
      <div className="text-6xl text-black flex justify-center items-center cursor-pointer mt-12 transition-all hover:scale-105
                              active:scale-95 active:text-slate-500 ">
        INFORMATION
        
      </div>
      
    

      {/* INOFRMATION */}
      <div className="INOFRMATION mt-16 max-w-6xl">
         {/* BITCOIN */}
         <div className="BTC flex">
            <div className="BTC-Info mr-12 transition-all hover:scale-105 cursor-pointer hover:text-yellow-500">
            Bitcoin is the world's first cryptocurrency, 
            created by an individual or group using the pseudonym 
            "Satoshi Nakamoto" in 2009. It utilizes blockchain 
            technology to enable secure and transparent transactions 
            without the control of governments or central financial institutions.
            </div>
            <div className="BTC-Img w-92 h-32 ">
             <img src="/src/photo/bitcoin.jpg" alt="Bitcoin" className="w-full h-full object-cover transition-all 
                                                                        cursor-pointer hover:rounded-xl hover:scale-125
                                                                        filter hover:brightness-125
                                                                        active:scale-110 active:rounded-2xl
                                                                        shadow-custom-right-bottom" />
            </div>
          </div><br /><br />
        {/* ETH */}
          <div className="ETH flex">
            <div className="ETH-Img w-92 h-32">
                <img src="/src/photo/ETH-4.jpg" alt="ETH" className="w-full h-full object-cover transition-all 
                                                                      cursor-pointer hover:rounded-xl hover:scale-125
                                                                      filter hover:brightness-125
                                                                      active:scale-110 active:rounded-2xl
                                                                      shadow-custom-right-bottom"/>
            </div>
            <div className="ETH-Info ml-12 transition-all hover:scale-105 cursor-pointer hover:text-yellow-600">
            ETH (Ether) is the native cryptocurrency of the Ethereum blockchain, 
            which was created by Vitalik Buterin and launched in 2015. It is used to 
            pay for transactions and computational services on the Ethereum network, 
            which supports smart contracts and decentralized applications (dApps).
            </div>
          </div><br /><br />
        {/* Tether */}
          <div className="Tether flex">
            <div className="Tether-Info mr-12 transition-all hover:scale-105 cursor-pointer hover:text-yellow-700">
            Tether (USDT) is a stablecoin, a type of cryptocurrency that is pegged 
            to a fiat currency, such as the US dollar, to maintain a stable value. 
            It is used to facilitate trading, transfer funds, and provide stability 
            in the volatile cryptocurrency market.
            </div>
            <div className="Tether-Img w-92 h-32">
              <img src="/src/photo/th.jpg" alt="Tether" className="w-full h-full object-cover transition-all 
                                                                   cursor-pointer hover:rounded-xl hover:scale-125
                                                                   filter hover:brightness-125
                                                                   active:scale-110 active:rounded-2xl
                                                                   shadow-custom-right-bottom"/>
            </div>
          </div>
      </div>
       
      
    </div>
  )
};

export default INFORMATION