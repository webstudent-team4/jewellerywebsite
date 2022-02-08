import React, { useState } from "react";
import BestSellerPop from "./navbar-sub-components/BestSellerPop";
import CoinsPop from "./navbar-sub-components/CoinsPop";
import CollectionsPop from "./navbar-sub-components/CollectionsPop";
import EarringPop from "./navbar-sub-components/EarringPop";
import RingPop from "./navbar-sub-components/RingPop";

function Navbar() {
  const [ringOpen, setRingOpen] = useState(false);
  const [earringOpen, setEarringOpen] = useState(false);
  const [bestSellerOpen, setBestSellerOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [allJewelleryOpen, setAllJewelleryOpen] = useState(false);
  const [coinsOpen, setCoinsOpen] = useState(false);
  return (
    <div>
      <div className="topBar" style={{zIndex:'50'}}>
        <div className="firstNavComponent">
          <div className="phoneIconWrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="phoneIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1>1234-567-8910</h1>
          <div className="chatIconWrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chatIcon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            <h1>CHAT</h1>
          </div>
        </div>
        <div className="secondNavComponent">
          <div className="navChild1">
            <h1>Corporate Gifting</h1>
          </div>
          <div className="navChild2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="giftIcon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            <h1>Gift Cards</h1>
          </div>
          <div className="navChild3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="locateIcon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <h1>Store Locator</h1>
          </div>
          <div className="navChild4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="officeIcon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
            <h1>Corporate</h1>
          </div>
          <div className="navChild5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="peopleIcon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <h1>Investors</h1>
          </div>
        </div>
      </div>
      <div className="midBar">
        <div className="brandLogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="jewelleryIcon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <h1>WebJewllers</h1>
        </div>
        <div className="searchBar">
          <input type="search" placeholder="Search products" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="searchIcon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="cartComponent">
          <h1>Login</h1>
          <h1>Register</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="heartIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cartIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <div className="counter">0</div>
        </div>
      </div>
      <div className="bottomBar">
    
          <div
            className="NavPopParent"
            onMouseEnter={() => setRingOpen(true)}
            onMouseLeave={() => setRingOpen(false)}
          >
            <h1>RINGS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="NavPopChild">{ringOpen && <RingPop />}</div>
          </div>
          <div
            className="NavPopParent"
            onMouseEnter={() => setEarringOpen(true)}
            onMouseLeave={() => setEarringOpen(false)}
          >
            <h1>EARRINGS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="NavPopChild earWrap">{earringOpen && <EarringPop />}</div>
          </div>
          <div
            className="NavPopParent"
            onMouseEnter={() => setBestSellerOpen(true)}
            onMouseLeave={() => setBestSellerOpen(false)}
          >
            <h1>BEST SELLERS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="NavPopChild bestWrap">
              {bestSellerOpen && <BestSellerPop />}
            </div>
          </div>
          <div
            className="NavPopParent"
            onMouseEnter={() => setAllJewelleryOpen(true)}
            onMouseLeave={() => setAllJewelleryOpen(false)}
          >
            <h1>ALL JEWELLERY</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="NavPopChild allWrap">{allJewelleryOpen && <RingPop />}</div>
          </div>
          <div
            className="NavPopParent"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <h1>COLLECTIONS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="NavPopChild collWrap">
              {collectionsOpen && <CollectionsPop />}
            </div>
          </div>
          <div>
            <h1>READY TO SHIP</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div>
            <h1>GOLD CHAINS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div>
            <h1>SILVER</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className="NavPopParent"
            onMouseEnter={() => setCoinsOpen(true)}
            onMouseLeave={() => setCoinsOpen(false)}
          >
            <h1>COINS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="NavPopChild coinWrap">{coinsOpen && <CoinsPop />}</div>
          </div>
          <button className="navButton">
            DIGITAL GOLD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevronIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
      </div>
    </div>
  );
}

export default Navbar;
