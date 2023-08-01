import "./style.scss";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Slot777.com" />
        <img src="/images/more.svg" alt="" />
      </div>
      {/* Logo & User's coint */}
      <div className="header-info">
        <div className="header-info__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="121"
            height="25"
            viewBox="0 0 121 25"
            fill="none"
          >
            <path
              d="M54.3711 3.8877V24.0557H49.6564L38.8586 11.0827V24.0557H34.2031V3.8877H38.9165L49.7156 16.8462V3.8877H54.3711Z"
              fill="#00E50B"
            />
            <path
              d="M56.4111 3.8877H76.5817V24.0557H56.4111V3.8877ZM61.0666 19.4002H71.9236V8.54316H61.0666V19.4002Z"
              fill="#00E50B"
            />
            <path
              d="M98.7901 3.8877V8.54316H91.041V24.0557H86.3856V8.54316H78.6221V3.8877H98.7901Z"
              fill="#00E50B"
            />
            <path
              d="M121 3.8877V24.0557H116.345V16.2922H105.487V24.0557H100.832V3.8877H121ZM105.487 11.6367H116.345V8.54316H105.487V11.6367Z"
              fill="#00E50B"
            />
            <path
              d="M-0.000976562 19.8806V19.634C0.0507286 19.3786 0.0334936 19.0968 0.0593462 18.8414C0.0851988 18.6036 0.111051 18.3746 0.128286 18.1368C0.179992 17.6524 0.266167 17.168 0.36096 16.6924C0.688426 14.9662 1.1193 13.2929 1.84318 11.69C2.54981 10.1135 3.48051 8.65154 4.61802 7.3569L4.82484 7.12791L4.97996 6.96938L5.20401 6.75801C6.01406 6.04464 6.82411 5.41053 7.77204 4.90852C9.44384 4.019 11.3311 3.65791 13.2011 3.85167C15.0625 4.04542 16.7515 4.89091 18.251 5.9918C18.3888 6.10629 18.5267 6.22078 18.6646 6.34408C18.8714 6.52903 19.0696 6.72279 19.2764 6.90773L19.5781 7.21598C20.5174 8.24642 21.3188 9.39134 21.9737 10.6331C22.577 11.7781 23.0595 12.9758 23.4215 14.2176C23.7662 15.4594 23.9902 16.7277 24.1798 18.0047C24.3608 19.2377 24.447 20.5676 24.2143 21.8006C24.1109 22.3554 23.9213 22.9279 23.5335 23.3506C23.1457 23.7733 22.5683 23.9759 22.0254 24.0816H21.7841C21.6721 24.0111 21.4825 24.0199 21.3619 23.9847C21.2154 23.9407 21.0689 23.8878 20.9224 23.8174C20.638 23.6765 20.3623 23.5091 20.1037 23.3154C19.5264 22.9014 18.9662 22.4611 18.4233 21.9943L18.1045 21.6684C17.6563 21.1753 17.0876 20.7613 16.5447 20.3914C16.019 20.0215 15.4589 19.7045 14.8729 19.4402C13.8129 18.9735 12.6668 18.7885 11.5207 18.8942C10.3487 18.9999 9.21978 19.5019 8.22015 20.1096C7.72895 20.409 7.2636 20.7437 6.83273 21.1224C6.376 21.5099 5.98821 21.9679 5.52286 22.3466C4.62664 23.0864 3.67009 23.8614 2.51534 24.0904H2.27405C1.58465 23.9495 0.912482 23.6236 0.541928 22.9895C0.136904 22.3114 -0.000976562 21.413 -0.000976562 20.6292V19.9158C0.0162585 19.8982 0.00764097 19.8894 -0.000976562 19.8806ZM7.4101 13.0551L7.72033 13.3722C8.90955 14.4554 10.3832 14.8606 11.9429 14.975H12.5203C13.4079 14.887 14.2697 14.7461 15.0883 14.385C15.8553 14.0503 16.5878 13.5395 17.1048 12.8701C17.596 12.236 17.9149 11.4786 17.9063 10.6684C17.8976 10.2368 17.8115 9.80527 17.6391 9.40895C17.4668 8.99502 17.1996 8.66035 16.9239 8.30807L16.6653 8.04385C15.7519 7.24241 14.6919 6.76682 13.5199 6.52903C11.6499 6.15913 9.48693 6.56426 7.97886 7.77964C7.22052 8.39614 6.60005 9.27685 6.47079 10.2809C6.36738 11.3025 6.70346 12.3241 7.4101 13.0551Z"
              fill="#00E50B"
            />
            <path
              d="M16.7684 0.0107422C17.5922 0.0535022 18.2015 0.754766 18.2101 1.55865C18.2101 1.94349 18.0642 2.31978 17.8067 2.61055C17.5407 2.90987 17.206 3.03815 16.8113 3.11512H16.7512C16.7426 3.11512 16.7341 3.11512 16.7255 3.11512H7.68055C7.65481 3.11512 7.63764 3.12367 7.6119 3.13222C6.65077 3.06381 6.05006 2.21716 6.15304 1.29354C6.37616 0.583726 6.77949 0.139022 7.53467 0.0192942C10.6154 0.0192942 13.6962 0.0535022 16.7684 0.0107422Z"
              fill="#00E50B"
            />
            <path
              d="M15.6132 8.60204C16.0234 9.1671 16.1218 9.78597 16.2367 10.4766V10.943C16.1301 11.6964 16.007 12.4408 15.4655 12.988C14.9404 13.5261 14.2266 13.5171 13.7015 12.988C13.1764 12.4588 12.9631 11.6426 12.9467 10.8802C12.9302 10.0909 13.0615 9.30164 13.521 8.66483C13.7343 8.35091 14.0379 8.13565 14.3907 8.05493C14.7845 7.98317 15.1045 8.13565 15.4162 8.37781L15.6132 8.60204Z"
              fill="#00E50B"
            />
          </svg>
        </div>
        <div className="header-info__user">
          <div className="header-info__user-avatar">
            <img src="/images/avatar.png" alt="" />
          </div>
          <div className="header-info__user-coint">
            <h4>botusieudang</h4>
            <div className="user-icon">
              <div className="coint-icon">
                <img src="/images/xu.png" alt="" />
              </div>
              <div className="coint-value">1,255,452 NXu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
