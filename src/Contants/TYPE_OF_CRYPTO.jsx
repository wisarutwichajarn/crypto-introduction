import React, { useState } from 'react'
// useState: ใช้ในการเก็บสถานะ isReadMore เพื่อควบคุมว่าจะซ่อนหรือแสดงข้อความ


// const ReadMore =({text , maxLength}) => {
//   const [isReadMore , setIsReadMore] = useState(true);
//   // สถานะที่ใช้บ่งบอกว่าซ่อนหรือเเสดงข้อความ
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore)
//   }

//   return (
//     <div className="">
//       {isReadMore ? text.slice(0, maxLength) : text}
//       {text.length > maxLength && (
//         // สร้างแท็ก <span> สำหรับลิงก์ที่สามารถคลิกได้
//         // กำหนดฟังก์ชัน onClick เป็น toggleReadMore เพื่อเปลี่ยนสถานะเมื่อคลิก
//         // กำหนดสไตล์ CSS โดยตรงให้ข้อความมีสีฟ้า (color: 'blue') และเปลี่ยนเคอร์เซอร์เป็นแบบลิงก์ (cursor: 'pointer')

//         <span onClick={toggleReadMore} style={{color: 'blue',
//                                                padding: '2rem',
//                                                backgroundColor: 'blue',
//                                                cursor: 'pointer',
//                                                borderRadius: '0.5rem',
//                                                textDecoration: 'underline' // Added underline style
//                                                }}>
//               {/* ใช้ ternary operator อีกครั้งเพื่อเลือกข้อความที่จะแสดง
//               หาก isReadMore เป็น true จะแสดงข้อความ "...Read More"
//               หาก isReadMore เป็น false จะแสดงข้อความ " Show Less" */}
//             {isReadMore ? '...Read More' : ' Show Less'}
//         </span>
//       )}

//     </div>
//   )

// }





const TYPE_OF_CRYPTO = () => {
  const [isVisible, setIsVisible] = useState(false);
  
      {/* CONTENT Exchange*/}
  const Exchange = (
                  <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-200 to-yellow-300 shadow-custom-right-bottom transition-all hover:-translate-y-2
                              hover:translate-x-2">
                    <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125 
                                  hover:text-yellow-800 active:scale-125 ">
                      Exchange Tokens
                    </div>
                    <div className=" items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                    active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700">
                     Exchange tokens are cryptocurrencies issued by crypto exchanges. To accelerate crypto adoption, exchanges emerged as a more direct gateway for trading cryptocurrencies. They are now the primary gateway into the crypto world, offering their own exchange tokens that may come with trading fee benefits like better APR, or better APY for users that stake their exchange tokens. 
                     Often, exchange tokens are issued to raise funds for business development. But not all exchanges have their native tokens – the decision to issue or not to issue is based on an exchange’s goals. The typical applications of exchange tokens include payment methods, governance, and boosting liquidity. Generally, these tokens play a utility role in their exchanges and offer holders member-based benefits (like trading bonuses). Binance’s native token (BNB) is one of the biggest exchange tokens by market cap. 
                    </div>
                    <div className="button relative text-lg flex ">
                      <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                              hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                              active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                              more info  
                      </a>
                    </div>
                  </div> 
  );
      {/* CONTENT DeFi*/}
  const DeFi = (
            <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-200  to-yellow-300 shadow-custom-right-bottom transition-all hover:-translate-y-2 hover:translate-x-2">
                                      
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125 
                              hover:text-yellow-800 active:scale-125">
                DeFi
                </div>
                <div className="items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700 ">
                      DeFi tokens are cryptocurrencies native to decentralized applications. They often play a specific role in DeFi apps, which technically makes them utility tokens. Developers issue DeFi tokens on the underlying blockchains of their applications. Most of these tokens follow the ERC-20 standard because most DeFi apps run on the Ethereum network.  
                      DeFi tokens often facilitate incentives to draw more users to their protocols. In particular, these tokens are offered as rewards for DeFi users who lock their assets in a protocol’s liquidity pool. Locking assets in a liquidity pool exposes you to smart contract risks and impermanent loss. As such, developers must incentivize the web3 community with token rewards to provide much-needed liquidity. 
                      Uniswap’s UNI is the governance token of the DEX, entitling its users to vote on proposals like usage of the treasury or future upgrades. These tokens may be airdropped to users, or users can earn them through liquidity mining.
                </div>
                <div className="button relative text-lg flex ">
                  <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                          hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                          active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                          more info  
                  </a>
                </div>
            </div>             
  );
      {/* CONTENT Meme Tokens*/}
  const Meme  =(
              <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-300  to-yellow-400 shadow-custom-right-bottom transition-all hover:-translate-y-2
                            hover:translate-x-2">
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125
                              hover:text-yellow-800 active:scale-125">
                  Meme
                </div>
                <div className="items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700 ">
                Cryptocurrency projects that derive their relevance from memes are popularly known as Meme tokens, and some of these have a market cap of over a billion dollars, like Dogecoin and Shiba Inu. These tokens thrive on hype, starting out as a fun token built around a popular meme like Doge, and picking up momentum as the community starts jumping onboard. For meme coins to sustain in the long run, their value needs to be more than just the meme culture.
                Some evolve into larger projects, like Shiba Inu's Shibarium and ShibaSwap, while others develop play-to-earn games and metaverses.
                </div>
                <div className="button relative text-lg flex ">
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                        hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
                </div>
            </div>
  );
      {/* CONTENT Governance*/}
  const NFTs =(
              <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-300  to-yellow-400 shadow-custom-right-bottom transition-all hover:-translate-y-2
                            hover:translate-x-2">
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125
                              hover:text-yellow-800 active:scale-125">
                  NFTs
                </div>
                <div className="items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700 ">
                    NFTs are not exactly cryptocurrencies, but they are unique tokens that allow holders to prove their ownership of real-world or digital items. They can represent anything – from digital files like music and videos to real estate and event tickets. Converting these items into tokens that live on the blockchain makes it easy to trade them and minimize counterfeits. Bored Ape Yacht Club (BAYC) is one of the most popular NFT collections. 
                    One unique feature of NFTs is even if you create 200 copies of a single item and issue the same number of NFTs to represent their ownership, every copy of the item will be exclusively identifiable from the rest because of the special characteristics (metadata) that each NFT token has. This implies that while 200 investors might be holding similarly looking items in their web3 wallets, they can each claim that their copy is unique.

                </div>
                <div className="button relative text-lg flex ">
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                        hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
                </div>
            </div>
  );
      {/* CONTENT GameFi*/}
  const GameFi =(
              <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-400  to-yellow-500 shadow-custom-right-bottom transition-all hover:-translate-y-2
                            hover:translate-x-2">
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125
                              hover:text-yellow-800 active:scale-125">
                  GameFi
                </div>
                <div className="items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700 ">
                  GameFi is one of the latest blockchain trends that combine DeFi and NFT concepts. Unlike traditional games, which are based on a “pay-to-win” mechanism and let participants buy upgrades to gain a more competitive edge over others, GameFi leverages a play-to-earn model. The model entails incentivizing players to participate and progress through activities. 
                  Some GameFi has gone beyond the basics to include DeFi aspects like staking, where participants deposit tokens to generate interest and other rewards, which they can use to buy more in-game items or unlock new potential. One of the top GameFi tokens in the crypto space is Axie Infinity’s AXS, which functions as a governance token, enabling token holders to shape and vote for the direction of the Axie Infinity game. 
                </div>
                <div className="button relative text-lg flex ">
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                        hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
                </div>
            </div>
  );
      {/* CONTENT Wrapped*/}
  const Wrapped =(
              <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-400  to-yellow-500 shadow-custom-right-bottom transition-all hover:-translate-y-2
                            hover:translate-x-2">
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125
                              hover:text-yellow-800 active:scale-125">
                  Wrapped
                </div>
                <div className="items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700 ">
                One way of understanding networks like Bitcoin and Ethereum is as different distributed ledgers. Since blockchains are siloed, they cannot communicate seamlessly with each other. Moreover, you cannot use native coins, like Bitcoin, on non-native chains such as Ethereum since only the Bitcoin blockchain “understands” the Bitcoin language.   
                Wrapped tokens are cryptocurrencies that allow you to port the value of a native asset to a non-native asset. One of the popular examples of wrapped tokens is Wrapped Bitcoin (WBTC). WBTC is tied on a 1:1 to the value of Bitcoin; therefore, 1 WBTC should always be equal to 1 BTC. In other words, WBTC tracks the value of BTC. Basically, wrapped tokens expand the utility of native coins on other chains. 
                For example, you can participate in various DeFi activities, like lending, staking, yield farming, and more, using WBTC on the Ethereum ecosystem.
                </div>
                <div className="button relative text-lg flex ">
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                        hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
                </div>
            </div>
  );
 

  
    return (
      <div className='bg-center bg-gradient-to-b from-yellow-300 to-yellow-500 p-4 pb-24 items-center flex flex-col w-full '>

        
          <div className=" flex gap-4 rounded-xl ">
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
              <div className="border-t-8 border-white p-5"></div>
          </div>
          

          <div className='text-black text-6xl flex justify-center items-center cursor-pointer mt-12 
                          transition-all hover:scale-105 active:scale-95 active:text-slate-500'>
                          
              Types of Cryptocurrencies
          </div>
          <div className=" max-w-7xl flex flex-col mt-16 w-full ">

            {/* CONTENT Coins*/}
            <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-white to-yellow-50 shadow-custom-right-bottom transition-all hover:-translate-y-2
                            hover:translate-x-2">
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125 
                              hover:text-yellow-800 active:scale-125 ">
                  Coins
                </div>
                <div className=" items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700">
                  Coins are cryptocurrencies that live on their own blockchains. Essentially, they act as the native currencies facilitating the tax and reward mechanisms on their chains. For instance, miners on the Bitcoin network earn BTC rewards, while Ethereum validators are rewarded in ETH. Likewise, for any transaction on the Ethereum network, a user has to pay a gas fee in Gwei, a denomination of ETH, Ethereum’s native coin.
                  Some coins, like Bitcoin, act as a store of value, providing alternatives to fiat money. The demonstrable scarcity of Bitcoin  there will only be a maximum of 21 million coins  makes it an alternative store of value to fiat money and inflation.
                  Other coins have exclusive chain-specific applications. For example, Ripple uses its native coin, XRP, to facilitate cross-border payments, where it serves as a bridge cryptocurrency and is needed to pay transaction fees. XRP is the leading exchange medium between banks, payment service providers, and crypto exchanges to facilitate near-instant settlements at cost-effective transaction costs.
                </div>
                <div className="button relative text-lg flex ">
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                        hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
                </div>
            </div>
              

            {/* CONTENT Tokens*/}
            <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-50  to-yellow-100 shadow-custom-right-bottom transition-all hover:-translate-y-2 hover:translate-x-2">
                            
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125 
                              hover:text-yellow-800 active:scale-125">
                Tokens
                </div>
                <div className="items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700 ">
                Tokens are cryptocurrencies that are built on blockchains  they are native to the blockchains they are built on. When creating a token, you follow a specified template - you dont have to code the token from scratch. This makes the process of creating tokens faster and easier than creating coins. 
                The cryptography element of blockchain facilitates the development of unique tokens that use the chains infrastructure to work, as exemplified in Ethereums ERC-20 token standard. Another identifying aspect of tokens is that the fees for their transactions are settled in the underlying blockchain’s native coin. Consider the Uniswap exchange, a decentralized exchange (DEX) built on the Ethereum blockchain. Despite having its own token, UNI, you need ETH to pay for gas fees when interacting with Uniswap.
                </div>
                <div className="button relative text-lg flex ">
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                        hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
                </div>
            </div>
            
            {/* CONTENT Stablecoins*/}
            <div className="m-12 p-12 rounded-3xl bg-gradient-to-b from-yellow-100  to-yellow-200 shadow-custom-right-bottom transition-all hover:-translate-y-2
                            hover:translate-x-2">
                <div className="inline-block text-2xl font-extrabold ml-4 mb-8 transition-all cursor-pointer hover:scale-125
                              hover:text-yellow-800 active:scale-125">
                  Stablecoins
                </div>
                <div className="items-center mb-12 hover:translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer 
                                active:-translate-x-0.5 active:translate-y-0.5 hover:text-yellow-700 ">
                A stablecoin is a cryptocurrency whose value is tied to a stable asset, like the U.S. dollar or gold, to stabilize its price. They are designed to provide all the benefits of cryptocurrency while mitigating the rampant volatility plaguing the crypto market. Essentially, volatility makes crypto unattractive for daily use and even as a store of value, as even bitcoin, the biggest crypto by market value, experiences significant price swings.
                </div>
                <div className="button relative text-lg flex ">
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                        hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
                </div>
            </div>

            {/* Invisivblefunction */}

             {isVisible && <div>{Exchange}
                                {DeFi}
                                {Meme}
                                {NFTs}
                                {GameFi}
                                {Wrapped}
            </div>}

                <div className="flex justify-center items-center h-40">
                  <button onClick={() => setIsVisible(!isVisible)}
                    className=" p-8 text-4xl font-extrabold bg-yellow-900 text-white
                    rounded-xl shadow-custom-right-bottom transition-all hover:scale-110" 
                  >
                    {isVisible ? 'Show Less' : 'Show More..'}
                  </button>
                </div>
             

              
           
            </div>
            
          </div>

    
  )
}

export default TYPE_OF_CRYPTO