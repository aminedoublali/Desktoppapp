import React, { useEffect } from 'react';

function Fulljpyticker() {
  useEffect(() => {
    // TradingViewのウィジェットスクリプトを作成
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.text = JSON.stringify({
      "symbols": [
        {
            "description": "USD/JPY",
            "proName": "FX:USDJPY"
          },
          {
            "description": "GBP/JPY",
            "proName": "FX:GBPJPY"
          },
          {
            "description": "EUR/JPY",
            "proName": "FX:EURJPY"
          },
          {
            "description": "AUD/JPY",
            "proName": "FX:AUDJPY"
          },
          {
            "description": "NZD/JPY",
            "proName": "FX:NZDJPY"
          },
          {
            "description": "CAD/JPY",
            "proName": "FX:CADJPY"
          },
          {
            "description": "CHF/JPY",
            "proName": "FX:CHFJPY"
          },
          {
            "description": "TRY/JPY",
            "proName": "FX:TRYJPY"
          },
          {
            "description": "RUB/JPY",
            "proName": "FX_IDC:RUBJPY"
          },
          {
            "description": "KRW/JPY",
            "proName": "FX_IDC:KRWJPY"
          },
          {
            "description": "SGD/JPY",
            "proName": "OANDA:SGDJPY"
          },
          {
            "description": "ZAR/JPY",
            "proName": "OANDA:ZARJPY"
          },
          {
            "description": "MXN/JPY",
            "proName": "FX:MXNJPY"
          },
          {
            "description": "TWD/JPY",
            "proName": "FX_IDC:TWDJPY"
          },
          {
            "description": "CNH/JPY",
            "proName": "FOREXCOM:CNHJPY"
          },
          {
            "description": "VND/JPY",
            "proName": "FX_IDC:VNDJPY"
          }
      ],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "ja"
    });

    // ウィジェットコンテナ要素にスクリプトを追加
    document.getElementById('tradingview-widget-container').appendChild(script);
  }, []);  // 空の依存配列を指定して、このエフェクトを一度だけ実行する

  return (
    <div className="tradingview-widget-container" id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
}

export default Fulljpyticker;
